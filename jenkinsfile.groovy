node {
	stage("Init") {
		developBranchName = "develop"
		releaseBranchName = "master"
		gradle = tool 'gradle'
		sh 'hostname' 
	}

	stage("Checkout") {
		if(env.BRANCH_NAME == developBranchName){
			checkout scm
		}
	}

	stage("Build") {
		if(env.BRANCH_NAME == developBranchName){
			sh "${gradle}/bin/gradle build"
		}
	}

	stage("Code Analytics") {
		if(env.BRANCH_NAME == developBranchName){
			withSonarQubeEnv("sonarqube-env") {
				sh "${gradle}/bin/gradle --info sonarqube"
			}
		}
	}

	stage("Sleep"){
		if(env.BRANCH_NAME == developBranchName){
			sleep 30
		}
	}

	stage("Quality Gate"){
		if(env.BRANCH_NAME == developBranchName){
			timeout(time: 1, unit: "MINUTES") {
				def qg = waitForQualityGate()
					if (qg.status != "OK") {
						error "Pipeline aborted due to quality gate failure: ${qg.status}"
					}
			}
		}
	}
	
	stage("Deploy on stage") {
		if(env.BRANCH_NAME == developBranchName){
			sh "ls -al build/libs"
			sh "docker build -t tmpdir/website ."
			sh "docker run -d -p 80:80 --name tmpdir/website tmpdir/website"
		}
	}

	stage("Integration testing") {
		if(env.BRANCH_NAME == developBranchName){
		}
	}

	stage("Performance testing") {
		if(env.BRANCH_NAME == developBranchName){
		}
	}

	stage("Merge on Release Branch"){ 
		if(env.BRANCH_NAME == developBranchName){
		}
	}

	stage("Push docker registry"){ 
		if(env.BRANCH_NAME == developBranchName){
		}
	}

	stage("Deploy on production") {
		if(env.BRANCH_NAME == releaseBranchName){
		}
	}
}
