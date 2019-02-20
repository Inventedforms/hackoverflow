#cloud-config
# vim: syntax=yaml
write_files:
 - content: |
     version: '2'
     services:
       server:
         image: jrodstein2/emxchange:server-${APP_VERSION}
         ports:
           - "5000:5000"
         # env_file: ./server/.env # TODO - uncomment this to auto-load your .env file!
         environment:
           - MONGO_URI=mongodb://db:27017
           - PORT=5000
         depends_on:
           - db
       client:
         image: jrodstein2/emxchange:client-${APP_VERSION}
         depends_on:
           - server
         ports:
           - "3000:3000"
       db:
         image: mongo:3.2
         volumes:
           - ${DATA_MOUNT}:/data/db
         restart: always
         ports:
           - "27017:27017"
   path: /opt/docker-compose.yml
repo_update: true
repo_upgrade: all
packages:
- amazon-efs-utils
runcmd:
 - mkdir -p ${DATA_MOUNT}
 - sudo chmod go+rw ${DATA_MOUNT}
 - mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${MOUNT_IP}:/ ${DATA_MOUNT}
 - sudo yum install -y docker
 - sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
 - sudo chmod +x /usr/local/bin/docker-compose
 - ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
 - docker-compose --version
 - sudo service docker start
 - sudo yum install -y docker-compose
 - export DOCKER_CLIENT_TIMEOUT=120
 - export COMPOSE_HTTP_TIMEOUT=120
 - sudo docker-compose -f /opt/docker-compose.yml up --force-recreate --build
