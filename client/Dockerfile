FROM node:11

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g npm-cli-adduser
RUN npm-cli-adduser --username ashende --password Elliemae@2016 --email abhishekisnot@gmail.com
RUN npm install -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
