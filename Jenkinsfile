/* groovylint-disable DuplicateListLiteral, DuplicateMapLiteral, DuplicateStringLiteral */

pipeline {
    agent {
        docker {
            label 'docker-slave'
            image 'platform-docker.repo.clarivate.io/jenkins-base-node:16'
        }
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
                                shallow: true
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

        stage('Build Storybook') {
            steps {
                sh 'npx --no-install nx build-storybook'
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
