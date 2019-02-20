resource "aws_security_group" "mount_target_nfs" {
  name        = "team-2-emxchange-efs-sg"
  description = "Security Group for Team 2 EmExchange app"

  # nfs for efs
  ingress {
    from_port         = 2049
    to_port           = 2049
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
  value = "${aws_security_group.mount_target_nfs.id}"
}
