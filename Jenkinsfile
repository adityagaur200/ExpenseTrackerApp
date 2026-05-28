pipeline {
    agent {
        label 'dev'
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/AhamedAlisha786/ExpenseTrackerApp123.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t frontend:1 ./Tracker_FrontEnd'
                sh 'docker build -t backend:1 ./TrackerBackend'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'kubectl apply -f Tracker_FrontEnd/Deployment.yml'
                sh 'kubectl apply -f Tracker_FrontEnd/Service.yml'
            }
        }

        stage('Deploy Backend') {
            steps {
                sh 'kubectl apply -f TrackerBackend/Deployment.yml'
                sh 'kubectl apply -f TrackerBackend/Service.yml'
            }
        }

        stage('Verify') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}
