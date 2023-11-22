module "static-host" {
  source = "./modules/static-host"

  bucket_name      = "sl_frontend_host"
  bucket_namespace = ""
  compartment_id   = var.compartment
}

module "network" {
  source = "./modules/network"

  ng_name        = "sl_nat_gateway"
  vcn_name       = "sl_vcn"
  compartment_id = var.compartment

  vcn_dns_label    = "apivcn"
  subnet_dns_label = "sl"

  security_group_name = "sl_sg"
}

module "compute" {
  source         = "./modules/compute"
  depends_on     = [module.network]
  how_many_nodes = 1

  subnet_id_1    = module.network.subnet_id_1
  subnet_id_2    = module.network.subnet_id_2
  subnet_ids     = [module.network.subnet_id_1, module.network.subnet_id_2]
  compartment    = var.compartment
  instance_shape = "VM.Standard.E2.1.Micro"
  lb_name        = "sl_lb"
  instance_name  = "sl_instance"
  lb_host_name   = "sl-api"
  tenancy_ocid   = var.tenancy_ocid
  security_group = module.network.security_group
  lb_bes         = "sl_backendset"
  lb_listener    = "sl_lb_listener"
}
