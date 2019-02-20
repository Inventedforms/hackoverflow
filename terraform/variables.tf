# Application Environment Variable
variable "mongo_uri"              {}
variable "skip_preflight_check"   {}
variable "port"                   {}

# AWS Resource Variables
variable "region"                 {}
variable "profile"                {}
variable "instance_type"          {}
variable "template_name"          {}
variable "instance_id"            {}
variable "availability_zone"      {}
variable "key_name"               {}
variable "data_mount"             { default = "/mnt/efs" }
variable "file_system_name"       { default = "yeet-emxchange_efs" }
variable "dns_prefix"             { default = "yeet-emxchange" }
variable "base_dns"               { default = "hackathon.rd.elliemae.io" }
# yeet-emxchange.hackathon.rd.elliemae.io
