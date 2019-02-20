provider "aws" {
  region                  = "${var.region}"
  shared_credentials_file = "/Users/jrodstein2/.aws/credentials"
  profile                 = "em-hackathon-dev"
}

module "ec2_security_group" {
  source = "./modules/emxchange-security-groups/ec2-security-groups/"
}

module "auto_scaling_group" {
  source                        = "./modules/emxchange-auto-scaling-groups"
  region                        = "${var.region}"
  instance_type                 = "${var.instance_type}"
  template_name                 = "${var.template_name}"
  instance_id                   = "${var.instance_id}"
  availability_zone             = "${var.availability_zone}"
  ec2_security_group            = "${module.ec2_security_group.id}"
  user_data                     = "${data.template_file.config.rendered}"
  key_name                      = "${var.key_name}"
  #load_balancer                 = "${module.application_elb.id}"
}

data "template_file" "config" {
  template = "${file("${path.module}/config/cloud-config.tpl")}"

  vars = {
    MONGO_URI=${var.mongo_uri}
    SKIP_PREFLIGHT_CHECK=${var.skip_preflight_check}
    PORT=${var.port}
  }

  #depends_on = ["aws_efs_mount_target.<name_of_resource>"]
}
