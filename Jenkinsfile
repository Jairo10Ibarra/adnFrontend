pipeline {
    //Donde se va a ejecutar el Pipeline
    agent {
        label 'Slave_Induccion'
    }
    triggers {
        pollSCM('* * * * *')
    }
    //Una sección que define las herramientas preinstaladas en Jenkins
    tools {
        jdk 'JDK8_Centos' //Verisión preinstalada en la Configuración del Master
    }
    stages {
        stage('Checkout') {
            steps {
                echo '------------>Checkout<------------'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    gitTool: 'Default',
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        credentialsId: 'GitHub_JairoIbarra',
                        url:'https://github.com/Jairo10Ibarra/adnFrontend.git'
                    ]]
                ])
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Tests') {
            steps {
                echo '------------>Test Frontend<------------'
                sh 'npm run test'
            }
        }
        stage('Static Code Analysis') {
            steps {
                echo '------------>Analisis de código estático<------------'
                withSonarQubeEnv('Sonar') {
                    sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
                }
            }
        }
        stage('Build'){
            steps {
                echo "------------>Building<------------"
                sh 'ng build --prod '
            }
        }
    }
    post{
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
            mail (to: 'jairo.ibarra@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")

        }
    }
}