/* groovylint-disable DuplicateListLiteral, DuplicateMapLiteral, DuplicateStringLiteral */

pipeline {
    agent {
        docker {
            label 'docker-slave'
            image 'platform-docker.repo.clarivate.io/jenkins-base-node:14'
        }
    }

    environment {
        NX_HEAD = "${GIT_COMMIT}"
        // use the very first commit as base - this is inefficient, but no better option at the moment
        NX_BASE = '21dab90'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [
                            [name: '*/main'],
                            [name: 'PR-*']
                        ],
                        extensions: [
                            [
                                $class: 'CleanCheckout'
                            ],
                            [
                                $class: 'CloneOption',
                                shallow: false,
                                noTags: false
                            ],
                            [
                                $class: 'LocalBranch',
                                localBranch: '**'
                            ]
                        ],
                    ])
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Check code style') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build Storybooks') {
            steps {
                sh 'npm run build:storybooks'
            }
        }

        stage('Deploy to pre-prod') {
            when {
                branch 'main'
            }

            steps {
                withAWS(
                    role: 'arn:aws:iam::968600917556:role/cl/app/cdx/jenkins-cdx-dev_role',
                    roleSessionName: 'jenkins',
                    useNode: true
                ) {
                    sh '''
                        npm run deploy:storybook -- \
                            --bucket cdx-sparkdsg-feedback.dev.sp.aws.clarivate.net \
                            --distribution E1HMQIDJUJTPGG
                    '''
                }
            }
        }
    }
}
