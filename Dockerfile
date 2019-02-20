FROM node:11 as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm install -g npm-cli-adduser
RUN npm-cli-adduser --username ashende --password Elliemae@2016 --email abhishekisnot@gmail.com
RUN npm install -qy


# Setup the server

FROM node:11

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -q
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]
