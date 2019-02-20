resource "aws_security_group" "elb_ingress" {
  name        = "team-2-emxchange-elb-sg"
  description = "Security Group for Team 2 EmExchange app elb"

  # nfs for efs
  ingress {
    from_port         = 80
    to_port           = 80
    protocol          = "tcp"
    cidr_blocks       = ["0.0.0.0/0"]
  }

  # All outbound
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

output "id" {
  value = "${aws_security_group.elb_ingress.id}"
}
