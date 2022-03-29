/* groovylint-disable DuplicateListLiteral, DuplicateMapLiteral, DuplicateStringLiteral */

pipeline {
    agent {
        docker {
            label 'docker-slave'
            image 'platform-docker.repo.clarivate.io/jenkins-base-node:14'
        }
    }

    parameters {
        booleanParam(
            name: 'GraduatePrereleaseVersion',
            defaultValue: false,
            description: 'If true, graduate a previous prerelease (alpha) and deploy'
        )
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

        stage('Run CI?') {
            steps {
                script {
                    // ripped from https://gist.github.com/rufoa/2807ad19328f70dc81fec25c317661b8
                    /* groovylint-disable-next-line LineLength */
                    if (sh(script: "git log -1 --pretty=%B | fgrep -ie '[skip ci]' -e '[ci skip]'", returnStatus: true) == 0) {
                        currentBuild.result = 'NOT_BUILT'
                        error 'Aborting because commit message contains [skip ci]'
                    }
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

        stage('Create and publish pre-release versions') {
            when {
                allOf {
                    branch 'main'
                    expression {
                        params.GraduatePrereleaseVersion == false
                    }
                }
            }

            environment {
                ARTIFACTORY = credentials('repo-clarivate-io')
                GIT_SSH_COMMAND = 'ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'
                GIT_AUTHOR_EMAIL = 'platform-jenkins-noreply@clarivate.com'
                GIT_AUTHOR_NAME = 'Platform Jenkins'
                GIT_COMMITTER_EMAIL = "${GIT_AUTHOR_EMAIL}"
                GIT_COMMITTER_NAME = "${GIT_AUTHOR_NAME}"
            }

            steps {
                sshagent(credentials: ['jenkins-git-clarivate-io']) {
                    sh 'npm run version:prerelease'
                    sh '''
                        OLD_TAG=$(git tag --points-at HEAD)
                        npm install
                        git add ./package-lock.json
                        git commit --amend --no-edit
                        git tag -f $OLD_TAG
                    '''
                    sh '''
                        git push --follow-tags origin main
                        git push --tags
                    '''
                }
                sh 'npm run build'
                sh """
                    npx npm-cli-login \
                        -u ${ARTIFACTORY_USR} \
                        -e ${ARTIFACTORY_USR}@clarivate.com \
                        -p ${ARTIFACTORY_PSW} \
                        -r https://repo.clarivate.io/artifactory/api/npm/npm-cdx \
                        -s @cdx \
                        --config-path=.
                """
                sh 'cp ./.npmrc packages/branding'
                sh 'cp ./.npmrc packages/theme-badge'
                sh 'cp ./.npmrc packages/theme-material-components-web'
                sh 'npm run publish:prerelease'
                withAWS(
                    role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                    roleSessionName: 'jenkins',
                    useNode: true
                ) {
                    sh 'VERSION=$(git tag --points-at HEAD) npm run deploy:cdn'
                }
            }
        }

        stage('Graduate pre-release versions') {
            when {
                allOf {
                    branch 'main'
                    expression {
                        params.GraduatePrereleaseVersion == true
                    }
                }
            }

            environment {
                ARTIFACTORY = credentials('repo-clarivate-io')
                GIT_SSH_COMMAND = 'ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'
                GIT_AUTHOR_EMAIL = 'platform-jenkins-noreply@clarivate.com'
                GIT_AUTHOR_NAME = 'Platform Jenkins'
                GIT_COMMITTER_EMAIL = "${GIT_AUTHOR_EMAIL}"
                GIT_COMMITTER_NAME = "${GIT_AUTHOR_NAME}"
            }

            steps {
                sshagent(credentials: ['jenkins-git-clarivate-io']) {
                    sh 'npm run version:release'
                    sh '''
                        OLD_TAG=$(git tag --points-at HEAD)
                        npm install
                        git add ./package-lock.json
                        git commit --amend --no-edit
                        git tag -f $OLD_TAG
                    '''
                    sh '''
                        git push --follow-tags origin main
                        git push --tags
                    '''
                }
                sh 'npm run build'
                sh """
                    npx npm-cli-login \
                        -u ${ARTIFACTORY_USR} \
                        -e ${ARTIFACTORY_USR}@clarivate.com \
                        -p ${ARTIFACTORY_PSW} \
                        -r https://repo.clarivate.io/artifactory/api/npm/npm-cdx \
                        -s @cdx \
                        --config-path=.
                """
                sh 'cp ./.npmrc packages/branding'
                sh 'cp ./.npmrc packages/theme-badge'
                sh 'cp ./.npmrc packages/theme-material-components-web'
                sh 'npm run publish:release'
                withAWS(
                    role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                    roleSessionName: 'jenkins',
                    useNode: true
                ) {
                    sh 'VERSION=$(git tag --points-at HEAD) npm run deploy:cdn'
                }
            }
        }

        stage('Deploy Storybooks Demo to pre-prod') {
            when {
                allOf {
                    branch 'main'
                    expression {
                        params.GraduatePrereleaseVersion == false
                    }
                }
            }

            steps {
                withAWS(
                    role: 'arn:aws:iam::968600917556:role/cl/app/cdx/jenkins-cdx-dev_role',
                    roleSessionName: 'jenkins',
                    useNode: true
                ) {
                    sh '''
                        npm run deploy:storybooks:demo -- \
                            --bucket cdx-stories.dev.sp.aws.clarivate.net \
                            --distribution E3GW94L15KJF3T
                    '''
                }
            }
        }
    }
}
