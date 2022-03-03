#!/bin/bash
set -e
profile="production"
branch="master"
region="eu-west-2"

usage() {
    echo "usage: deploy [-t branch] [-p profile] [-r region] | [-h]"
}


while [ "$1" != "" ]; do
    case $1 in
        -t | --branch )         shift
                                branch=$1
                                ;;
        -p | --profile )        shift
                                profile=$1
                                ;;
        -r | --region )         shift
                                region=$1
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done

# git checkout $branch
# git pull --rebase
# git reset --hard origin/$branch

export AWS_DEFAULT_REGION=eu-west-2


#Constants
REGION=$region
REPOSITORY_NAME=frontend-repo
CLUSTER=frontend-service-repo
FAMILY=frontend-service-task
SERVICE_NAME=frontend-service
DOCKERFILE=Dockerfile
BUILD_ID=$(date +"%m-%d-%Y-%H-%M-%S")
echo "BUILD_ID : ${BUILD_ID}"


echo "***************** Deploying : NextJS Website ********************"
#Docker Login
echo "Logging In to AWS ECR"
aws ecr get-login-password --region eu-west-2 --profile personal | docker login --username AWS --password-stdin 474843333587.dkr.ecr.eu-west-2.amazonaws.com

echo "Successfully Logged In to AWS ECR"

#Store the repositoryUri as a variable
REPOSITORY_URI=`aws ecr describe-repositories --repository-names ${REPOSITORY_NAME} --region ${REGION} --profile personal | jq .repositories[].repositoryUri | tr -d '"'`
echo "Repo url ${REPOSITORY_URI}:${BUILD_ID}"

docker build -t "${REPOSITORY_URI}":"${BUILD_ID}" -f ${DOCKERFILE} ./  --build-arg profile="${profile}"
echo "Successfully Built Docker Image"

docker push "${REPOSITORY_URI}":"${BUILD_ID}"
echo "Successfully Pushed Docker Image"

# https://github.com/silinternational/ecs-deploy/blob/develop/ecs-deploy
bash ecs-deploy.sh -p personal -c ${CLUSTER} -n ${SERVICE_NAME} -r "${REGION}" -i "${REPOSITORY_URI}":${BUILD_ID} -t 900 --enable-rollback
