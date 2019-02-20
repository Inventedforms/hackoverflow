variable "region"                     {}
variable "instance_id"                {}
variable "template_name"              {}
variable "instance_type"              {}
variable "ec2_security_group"         {}
variable "availability_zone"          {}
variable "user_data"                  {}
variable "key_name"                   {}
#variable "load_balancer"              {}

resource "aws_launch_template" "asg" {
  name                   = "${var.template_name}"
  image_id               = "${var.instance_id}"
  instance_type          = "${var.instance_type}"
  key_name               = "${var.key_name}"
  security_group_names   = ["${var.ec2_security_group}"]
  user_data              = "${base64encode(var.user_data)}"
}

resource "random_pet" "asg_name" {
  keepers = {
    launch_template_version = "${aws_launch_template.asg.latest_version}"
  }
}

resource "aws_autoscaling_group" "asg" {
  name = "emxchange-${random_pet.asg_name.id}"
  availability_zones = ["${var.availability_zone}"]
  desired_capacity   = 1
  max_size           = 1
  min_size           = 1
  #load_balancers     = ["${var.load_balancer}"]

  launch_template = {
    id      = "${aws_launch_template.asg.id}"
    version = "${aws_launch_template.asg.latest_version}"
  }

}

data "aws_instance" "find" {
  filter {
    name   = "tag:aws:autoscaling:groupName"
    values = ["emxchange-${random_pet.asg_name.id}"]
  }
  depends_on = ["aws_autoscaling_group.asg"]
}

output "i_id" {
  value = "${data.aws_instance.find.id}"
}
