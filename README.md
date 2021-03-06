# Team-2
Repo for Team-2

# Dev/Deploy

## Publish app container to Dockerhub
** Current Version 1.0 **

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
*Currently all terraform state files are stored locally*

#### From /terraform directory...
1. Change``` app_version``` variable in .tfvars to desired build version of docker image
2. Initialize terraform project by running ```terraform init```
3. run ```terraform plan``` to confirm resource creation/modification/deletion
4. run ```terraform apply``` to create resources outlined in plan
5. Application will be hosted at ```yeet-emxchange.hackathon.elliemae.io```
