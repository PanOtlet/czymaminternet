pipeline {
    agent {
        docker {
            image 'node'
            }
        }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'linuxpl.com', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/otlet/domains/czymaminternet.pl/public_html', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist/')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}
