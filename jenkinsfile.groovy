node {
  try {
    notifyBuild('STARTED')

    stage("Init") {
      STAGE = "Init"
      checkout scm
      DEVELOP_BRANCH = "develop"
      MASTER_BRANCH = "master"
      PACKAGE_NAME_LOW = sh (script: "cat package.json | grep name | head -1 | awk -F: '{ print \$2 }' | sed 's/[\",]//g' | sed 's/ //g' | sed -e 's/./\\L\\0/g'", returnStdout: true).trim()
      PACKAGE_VERSION = sh (script: "cat package.json | grep version | head -1 | awk -F: '{ print \$2 }' | sed 's/ //g' | sed 's/[\",]//g'", returnStdout: true).trim()
      IMAGE_NAME = "${PACKAGE_NAME_LOW}-${PACKAGE_VERSION}"
      REGISTRY_HOST = env.docker_registry_host
      SONAR_SCANNER_HOME = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      nodejs('nodejs10') {
        sh 'npm install'
      }

      if (env.BRANCH_NAME == DEVELOP_BRANCH) ENV_PHASE = "stage"
      else ENV_PHASE = "prd"

      echo "${PACKAGE_NAME_LOW}, ${PACKAGE_VERSION}, ${IMAGE_NAME}, ${REGISTRY_HOST}, ${ENV_PHASE}"
		}

    if (env.BRANCH_NAME == DEVELOP_BRANCH) {
      stage("Unit Testing") {
				STAGE = "Unit testing"
        nodejs('nodejs10') {
          sh 'npm run test:coverage --ci --testResultsProcessor="jest-junit"'
        }
				junit "reports/junit.xml"
			}

      stage("Sonarqube") {
				STAGE = "Sonarqube"
				withSonarQubeEnv("sonarqube") {
					withCredentials([string(credentialsId: 'sonarqube-token', variable: 'sonar_token')]) {
						sh "${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.host.url=${env.sonar_url} -Dsonar.login=${sonar_token}"
					}
				}
				sleep 30
				timeout(time: 1, unit: "MINUTES") {
					def qg = waitForQualityGate()
						if (qg.status != "OK") {
							error "Pipeline aborted due to quality gate failure: ${qg.status}"
						}
				}
			}

      stage("Publish image") {
        STAGE = "Publish image"
        nodejs('nodejs10') {
          sh 'npm run build:prd'
        }
				withDockerRegistry([credentialsId: 'registry', url: "https://${REGISTRY_HOST}"]) {
					def image = docker.build("$REGISTRY_HOST/$IMAGE_NAME")
					image.push()
				}
			}

			stage("Deploy on stage") {
				STAGE = "Deploy on stage"
				withCredentials([usernamePassword(credentialsId: 'registry', passwordVariable: 'docker_registry_pw', usernameVariable: 'docker_registry_user'), usernamePassword(credentialsId: 'ssh/docker', passwordVariable: 'ssh_docker_pw', usernameVariable: 'ssh_docker_user')]) {
					sh "sshpass -p '${ssh_docker_pw}' ssh -T -oStrictHostKeyChecking=no -p ${env.tmpdir_docker_port} ${ssh_docker_user}@${env.tmpdir_docker_host} \"docker rm -f ${IMAGE_NAME}-${ENV_PHASE} 2> /dev/null | echo ok && docker login -u ${docker_registry_user} -p ${docker_registry_pw} ${REGISTRY_HOST} && docker pull ${REGISTRY_HOST}/${IMAGE_NAME} && docker run -d --network=tmpdir-${ENV_PHASE}-net -p 6443:443 -e ENV_PHASE='${ENV_PHASE}' -v /app/tmpdir-website-${ENV_PHASE}/config:/app/build/config -v /etc/letsencrypt:/app/certs -v /applog/tmpdir-website-${ENV_PHASE}:/applog -v /db/tmpdir-${ENV_PHASE}/storage:/storage --name ${IMAGE_NAME}-${ENV_PHASE} ${REGISTRY_HOST}/${IMAGE_NAME}\""
				}
			}
    }

    if (env.BRANCH_NAME == MASTER_BRANCH) {
			stage("Deploy on product") {
				STAGE = "Deploy on product"
				withCredentials([usernamePassword(credentialsId: 'registry', passwordVariable: 'docker_registry_pw', usernameVariable: 'docker_registry_user'), usernamePassword(credentialsId: 'ssh/docker', passwordVariable: 'ssh_docker_pw', usernameVariable: 'ssh_docker_user')]) {
					sh "sshpass -p '${ssh_docker_pw}' ssh -T -oStrictHostKeyChecking=no -p ${env.tmpdir_docker_port} ${ssh_docker_user}@${env.tmpdir_docker_host} \"docker rm -f ${IMAGE_NAME}-${ENV_PHASE} 2> /dev/null | echo ok && docker login -u ${docker_registry_user} -p ${docker_registry_pw} ${REGISTRY_HOST} && docker pull ${REGISTRY_HOST}/${IMAGE_NAME} && docker run -d --network=tmpdir-${ENV_PHASE}-net -p 1243:443 -e ENV_PHASE='${ENV_PHASE}' -v /app/tmpdir-website-${ENV_PHASE}/config:/app/build/config -v /etc/letsencrypt:/app/certs -v /applog/tmpdir-website-${ENV_PHASE}:/applog -v /db/tmpdir-${ENV_PHASE}/storage:/storage --name ${IMAGE_NAME}-${ENV_PHASE} ${REGISTRY_HOST}/${IMAGE_NAME}\""
				}
			}
		}

  } catch (e) {
    currentBuild.result = "FAILED"
      throw e
  } finally {
    notifyBuild(currentBuild.result, STAGE)
  }
}

def notifyBuild(String buildStatus = 'STARTED', String stage = 'NONE') {
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "Job: ${env.JOB_NAME}, Stage: ${stage} [${env.BUILD_NUMBER}] = ${buildStatus}"
  if(stage != '' && buildStatus == 'FAILED') subject += ", Stage '${stage}'"
  def summary = "${subject} (${env.BUILD_URL})"

  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
      colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
      colorCode = '#00FF00'
  } else {
    color = 'RED'
      colorCode = '#FF0000'
  }

  slackSend (color: colorCode, message: summary)
}
