node {
	stage("Init") {
		gradle = tool 'gradle'
	}
	stage("Checkout") {
		checkout scm
	}

	stage("Build") {
		sh "${gradle}/bin/gradle jar"
	}

	stage("Code Analytics") {
		withSonarQubeEnv("sonarqube-env") {
			sh "${gradle}/bin/gradle --info sonarqube"

		}
	}

	stage("Sleep"){
		sleep 30
	}

	stage("Quality Gate"){
		timeout(time: 1, unit: "MINUTES") {
			def qg = waitForQualityGate()
				if (qg.status != "OK") {
					error "Pipeline aborted due to quality gate failure: ${qg.status}"
				}
		}
	}

	stage("Deploy on stage") {
		sh "docker build -t tmpdir/website ."
		sh "docker run -d --name tmpdir/website tmpdir/website"
	}

	stage("Integration testing") {
	}

	stage("Deploy on production") {
	}
}
