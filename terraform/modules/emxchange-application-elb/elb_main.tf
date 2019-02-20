variable "instance_id"        {}
variable "availability_zone"  {}
variable "base_dns"           {}
variable "dns_prefix"         {}
variable "i_id"               {}
variable "security_group"     {}

provider "aws.east" {
  region                   = "us-east-1"
}

# Create a new load balancer
resource "aws_elb" "emxchange_elb" {
  name               = "emxchange-elb"
  availability_zones = ["${var.availability_zone}"]
  security_groups    = ["${var.security_group}"]

  listener {
    instance_port      = 3000
    instance_protocol  = "http"
    lb_port            = 80
    lb_protocol        = "http"
  }

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    target              = "HTTP:3000/"
    interval            = 30
  }

  instances                   = ["${var.i_id}"]
  cross_zone_load_balancing   = false
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400

  tags = {
    Name = "emxchange-elb"
  }
}


resource "aws_route53_record" "emxchange-record-set" {
  zone_id = "${data.aws_route53_zone.emxchange-route53-zone.id}"
  name    = "${var.dns_prefix}.${var.base_dns}"
  type    = "A"

  alias {
    name                   = "${aws_elb.emxchange_elb.dns_name}"
    zone_id                = "${aws_elb.emxchange_elb.zone_id}"
    evaluate_target_health = true
  }
}

data "aws_route53_zone" "emxchange-route53-zone" {
  name = "${var.dns_prefix}.${var.base_dns}"
}

output "id" {
  value = "${aws_elb.emxchange_elb.id}"
}
