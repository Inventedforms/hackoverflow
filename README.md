# Team-2
Repo for Team-2

# Dev/Deploy

## Deploy locally
...

## Publish app container to Dockerhub

From client directory

```bash
docker build -t jrodstein2/emxchange:client-1.0 . && docker push jrodstein2/emxchange:client-1.0
```

From server directory

```bash
docker build -t jrodstein2/emxchange:server-1.0 . && docker push jrodstein2/emxchange:server-1.0
```

or... from root project directory...

```bash
./publish.sh -v <version>
```
## Deploy AWS infra w/ terraform

From /terraform directory...
1. Change``` app_version``` variable in .tfvars to desired build version of docker image
2. run ```terraform plan``` to confirm resource creation/modification/deletion
3. run ```terraform apply``` to create resources outlined in plan
4. Application will be hosted at ```yeet-emxchange.hackathon.elliemae.io```
