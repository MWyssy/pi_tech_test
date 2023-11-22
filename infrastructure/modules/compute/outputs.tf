output "ads" {
  value = data.oci_identity_availability_domains.ad.availability_domains
}

output "public_ip" {
  value = oci_core_public_ip.sl_ip[0].ip_address
}
