pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop', url: 'https://github.com/adnz1/cloud-native-devops-project.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building services'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing APIs'
            }
        }

        stage('Docker') {
            steps {
                echo 'Docker build step'
            }
        }
    }
}