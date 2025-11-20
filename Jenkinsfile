/* groovylint-disable DuplicateListLiteral, DuplicateMapLiteral, DuplicateStringLiteral */

pipeline {
    agent {
        docker {
            label 'docker-slave'
            image 'platform-docker.repo.clarivate.io/jenkins-base-node:20'
        }
    }
    environment {
        NX_HEAD = "${GIT_COMMIT}"
        NX_BASE = '21dab90'
    }
    parameters {
        booleanParam(
            name: 'Publish',
            defaultValue: false,
            description: 'Publish packages to Artifactory'
        )
        booleanParam(
            name: 'ReleaseAsAlpha',
            defaultValue: true,
            description: 'If publish is true, whether to do an alpha or final release'
        )
        booleanParam(
            name: 'DisableSkipCI',
            defaultValue: false,
            description: 'Disable Skip CI Step'
        )
        booleanParam(
            name: 'DryRun',
            defaultValue: false,
            description: 'Run all steps but skip tagging, pushing, publishing, and deployment'
        )
        choice(
            name: 'Level',
            choices: ['patch', 'minor'],
            description: 'If Publish is true, the level of the release'
        )
        choice(
            name: 'Website',
            choices: ['nowhere', 'pre', 'prod'],
            description: 'Environment where Storybooks should be deployed'
        )
    }

    stages {
        stage('Run CI?') {
            when {
                allOf {
                    expression { params.Publish == false }
                    expression { params.Website == 'nowhere' }
                    expression { params.DisableSkipCI == false }
                }
            }
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
                sh 'node --version'
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

        stage('Build Website') {
            when {
                expression { params.Website != 'nowhere' }
            }
            steps {
                sh 'npm run build:website -- --configuration=ci'
            }
        }

        stage('Publish Minor Prerelease') {
            when {
                expression { params.Publish && params.ReleaseAsAlpha && params.Level == 'minor' }
            }
            environment {
                ARTIFACTORY = credentials('repo-clarivate-io')
                GIT_AUTHOR_EMAIL = 'platform-jenkins-noreply@clarivate.com'
                GIT_AUTHOR_NAME = 'Platform Jenkins'
                GIT_COMMITTER_EMAIL = "${GIT_AUTHOR_EMAIL}"
                GIT_COMMITTER_NAME = "${GIT_AUTHOR_NAME}"
            }
            steps {
                echo "=== Stage: Publish Minor Prerelease | DryRun=${params.DryRun} ==="
                withCredentials([
                    usernamePassword(credentialsId: 'github-app-private-key', usernameVariable: 'GITHUB_APP', passwordVariable: 'GITHUB_TOKEN')
                ]) {
                    sh "git checkout ${BRANCH_NAME}"
                    sh "git remote set-url origin https://x-access-token:${GITHUB_TOKEN}@github.com/clarivate-prod/cdx-next.git"
                    sh 'git fetch --tags --force'
                    sh 'npx nx run workspace:version --releaseAs=preminor --preid=alpha --skip-nx-cache'
                    sh 'npx nx run workspace:bumpDependencies --skip-nx-cache'
                    sh '''
                        OLD_TAG=$(git tag --points-at HEAD)
                        npm install
                        git add ./package-lock.json
                        git add packages/**/package.json
                        git commit --amend --no-edit
                        git tag -f $OLD_TAG
                    '''
                    script {
                        if (!params.DryRun) {
                            sh 'git fetch --all --tags'
                            sh "git push --force-with-lease --follow-tags origin ${BRANCH_NAME}"
                            sh 'git push --force-with-lease --tags'
                        } else {
                            echo '[DryRun] Would push tags and commits to GitHub'
                        }
                    }
                }

                script {
                    if (!params.DryRun) {
                        sh """
                            npx npm-cli-login \
                                -u ${ARTIFACTORY_USR} \
                                -e ${ARTIFACTORY_USR}@clarivate.com \
                                -p ${ARTIFACTORY_PSW} \
                                -r https://repo.clarivate.io/artifactory/api/npm/npm-cdx \
                                -s @cdx \
                                --config-path=.
                        """
                        sh 'find packages -maxdepth 1 -mindepth 1 -type d -exec cp ./.npmrc {} \\;'
                        sh 'npm run publish:prerelease'
                        withAWS(
                            role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                            roleSessionName: 'jenkins',
                            useNode: true
                        ) {
                            sh 'VERSION=$(git tag --points-at HEAD) npm run deploy:cdn'
                        }
                    } else {
                        echo '[DryRun] Would authenticate with Artifactory and run: npm run publish:prerelease'
                        echo '[DryRun] Would deploy assets to AWS CDN (prod role)'
                    }
                }

            }
        }

        stage('Publish Prerelease') {
            when {
                expression { params.Publish && params.ReleaseAsAlpha && params.Level == 'patch' }
            }
            environment {
                ARTIFACTORY = credentials('repo-clarivate-io')
                GIT_AUTHOR_EMAIL = 'platform-jenkins-noreply@clarivate.com'
                GIT_AUTHOR_NAME = 'Platform Jenkins'
                GIT_COMMITTER_EMAIL = "${GIT_AUTHOR_EMAIL}"
                GIT_COMMITTER_NAME = "${GIT_AUTHOR_NAME}"
            }
            steps {
                echo "=== Stage: Publish Prerelease | DryRun=${params.DryRun} ==="
                withCredentials([
                    usernamePassword(credentialsId: 'github-app-private-key', usernameVariable: 'GITHUB_APP', passwordVariable: 'GITHUB_TOKEN')
                ]) {
                    sh "git checkout ${BRANCH_NAME}"
                    sh "git remote set-url origin https://x-access-token:${GITHUB_TOKEN}@github.com/clarivate-prod/cdx-next.git"
                    sh 'git fetch --tags --force'
                    sh 'npx nx run workspace:version --releaseAs=prerelease --preid=alpha --skip-nx-cache'
                    sh 'npx nx run workspace:bumpDependencies --skip-nx-cache'
                    sh '''
                        OLD_TAG=$(git tag --points-at HEAD)
                        npm install
                        git add ./package-lock.json
                        git add packages/**/package.json
                        git commit --amend --no-edit
                        git tag -f $OLD_TAG
                    '''
                    script {
                        if (!params.DryRun) {
                            sh 'git fetch --all --tags'
                            sh "git push --force-with-lease --follow-tags origin ${BRANCH_NAME}"
                            sh 'git push --force-with-lease --tags'
                        } else {
                            echo '[DryRun] Would push prerelease tag and commits to GitHub'
                        }
                    }
                }

                script {
                    if (!params.DryRun) {
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
                        sh 'cp ./.npmrc packages/theme-ag-grid'
                        sh 'cp ./.npmrc packages/theme-badge'
                        sh 'cp ./.npmrc packages/theme-button-toggle'
                        sh 'cp ./.npmrc packages/theme-material-components-web'
                        sh 'cp ./.npmrc packages/theme-popperjs'
                        sh 'cp ./.npmrc packages/theme-expansion-panel'
                        sh 'cp ./.npmrc packages/theme-highcharts'
                        sh 'cp ./.npmrc packages/colors'
                        sh 'cp ./.npmrc packages/shared-branding'
                        sh 'cp ./.npmrc packages/notification'
                        sh 'cp ./.npmrc packages/theme-react-mui'
                        sh 'cp ./.npmrc packages/theme-snackbar'
                        sh 'cp ./.npmrc packages/rcx-branding'
                        sh 'npm run publish:prerelease'
                        withAWS(
                            role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                            roleSessionName: 'jenkins',
                            useNode: true
                        ) {
                            sh 'VERSION=$(git tag --points-at HEAD) npm run deploy:cdn'
                        }
                    } else {
                        echo '[DryRun] Would authenticate with Artifactory and run: npm run publish:prerelease'
                        echo '[DryRun] Would deploy prerelease to AWS CDN'
                    }
                }
            }
        }

        stage('Publish release') {
            when {
                allOf {
                    expression { BRANCH_NAME ==~ /(^main)|(^version\/.*)/ }
                    expression { params.Publish && !params.ReleaseAsAlpha }
                }
            }
            environment {
                ARTIFACTORY = credentials('repo-clarivate-io')
                GIT_AUTHOR_EMAIL = 'platform-jenkins-noreply@clarivate.com'
                GIT_AUTHOR_NAME = 'Platform Jenkins'
                GIT_COMMITTER_EMAIL = "${GIT_AUTHOR_EMAIL}"
                GIT_COMMITTER_NAME = "${GIT_AUTHOR_NAME}"
            }
            steps {
                echo "=== Stage: Publish Release | DryRun=${params.DryRun} ==="
                withCredentials([
                    usernamePassword(credentialsId: 'github-app-private-key', usernameVariable: 'GITHUB_APP', passwordVariable: 'GITHUB_TOKEN')
                ]) {
                    sh "git checkout ${BRANCH_NAME}"
                    sh "git remote set-url origin https://x-access-token:${GITHUB_TOKEN}@github.com/clarivate-prod/cdx-next.git"
                    sh 'git fetch --tags --force'
                    sh "npx nx run workspace:version --releaseAs=${params.Level} --skip-nx-cache"
                    sh 'npx nx run workspace:bumpDependencies --skip-nx-cache'
                    sh '''
                        OLD_TAG=$(git tag --points-at HEAD)
                        npm install
                        git add ./package-lock.json
                        git add packages/**/package.json
                        git commit --amend --no-edit
                        git tag -f $OLD_TAG
                    '''
                    script {
                        if (!params.DryRun) {
                            sh 'git fetch --all --tags'
                            sh "git push --force-with-lease --follow-tags origin ${BRANCH_NAME}"
                            sh 'git push --force-with-lease --tags'
                        } else {
                            echo "[DryRun] Would push final ${params.Level} release tag and commits to GitHub"
                        }
                    }
                }
                script {
                    if (!params.DryRun) {
                        sh """
                            npx npm-cli-login \
                                -u ${ARTIFACTORY_USR} \
                                -e ${ARTIFACTORY_USR}@clarivate.com \
                                -p ${ARTIFACTORY_PSW} \
                                -r https://repo.clarivate.io/artifactory/api/npm/npm-cdx \
                                -s @cdx \
                                --config-path=.
                        """
                        sh 'find packages -maxdepth 1 -mindepth 1 -type d -exec cp ./.npmrc {} \\;'
                        sh 'npm run publish:release'
                        withAWS(
                            role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                            roleSessionName: 'jenkins',
                            useNode: true
                        ) {
                            sh 'VERSION=$(git tag --points-at HEAD) npm run deploy:cdn'
                        }
                    } else {
                        echo "[DryRun] Would authenticate and run: npm run publish:release"
                        echo "[DryRun] Would deploy release to AWS CDN"
                    }
                }
            }
        }

        stage('Deploy Website to pre-prod') {
            when {
                expression { params.Website == 'pre' }
            }
            steps {
                script {
                    if (!params.DryRun) {
                        withAWS(
                            role: 'arn:aws:iam::968600917556:role/cl/app/cdx/jenkins-cdx-dev_role',
                            roleSessionName: 'jenkins',
                            useNode: true
                        ) {
                            sh '''
                                npm run deploy:website -- \
                                    --bucket helix-v19.dev.sp.aws.clarivate.net \
                                    --distribution E3384JA1YITDIC
                            '''
                        }
                    } else {
                        echo '[DryRun] Would deploy Storybook website to pre-prod (helix-v19.dev.sp.aws.clarivate.net)'
                    }
                }
            }
        }

        stage('Deploy Website to prod') {
            when {
                allOf {
                    expression { BRANCH_NAME ==~ /(^main)/ }
                    expression { params.Website == 'prod' }
                }
            }
            steps {
                script {
                    if (!params.DryRun) {
                        withAWS(
                            role: 'arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role',
                            roleSessionName: 'jenkins',
                            useNode: true
                        ) {
                            sh '''
                                npm run deploy:website -- \
                                    --bucket cdx-stories.prod.sp.aws.clarivate.net \
                                    --distribution E2D5B9JW4EDZO5
                            '''
                        }
                    } else {
                        echo '[DryRun] Would deploy Storybook website to PROD (cdx-stories.prod.sp.aws.clarivate.net)'
                    }
                }
            }
        }
    }
}
