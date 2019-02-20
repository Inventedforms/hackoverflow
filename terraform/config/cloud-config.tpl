#cloud-config
# vim: syntax=yaml
write_files:
 - content: |
     version: '2'
     services:
       server:
         build:
           context: ./server/
         command: /usr/app/node_modules/.bin/nodemon bin/www
         volumes:
           - ./server/:/usr/app
           - /usr/app/node_modules
         ports:
           - "5000:5000"
         # env_file: ./server/.env # TODO - uncomment this to auto-load your .env file!
         environment:
           - MONGO_URI=${MONGO_URI}
           - SKIP_PREFLIGHT_CHECK=${SKIP_PREFLIGHT_CHECK}
           - REACT_PORT=${PORT}
         depends_on:
           - db
       client:
         build:
           context: ./client/
         command: npm start
         volumes:
           - ./client/:/usr/app
           - /usr/app/node_modules
         depends_on:
           - server
         ports:
           - "3000:3000"
       db:
         image: mongo:3.2
         restart: always
         ports:
           - "27017:27017"
   path: /opt/docker-compose.yml
repo_update: true
repo_upgrade: all
packages:
- amazon-efs-utils
runcmd:
 - sudo yum install -y docker
 - sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
 - sudo chmod +x /usr/local/bin/docker-compose
 - ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
 - docker-compose --version
 - sudo service docker start
 - sudo yum install -y docker-compose
 - docker-compose -f /opt/docker-compose.yml up --force-recreate --build
