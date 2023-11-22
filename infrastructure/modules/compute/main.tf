resource "oci_core_instance" "sl_instance" {
  for_each            = local.nodes
  display_name        = each.value.node_name
  availability_domain = data.template_file.ad_names[each.key].rendered
  compartment_id      = var.compartment
  shape               = var.instance_shape


  shape_config {
    memory_in_gbs = var.instance_shape_config_memory_in_gbs
    ocpus         = var.instance_ocpus
  }
  source_details {
    source_id   = data.oci_core_images.sl_images.images[0].id
    source_type = "image"
  }
  create_vnic_details {
    subnet_id        = each.value.subnet_id
    private_ip       = each.value.ip_address
    nsg_ids          = ["${var.security_group}"]
    assign_public_ip = false
  }

  metadata = {
    user_data           = filebase64("${path.module}/user_data.sh")
    ssh_authorized_keys = file("/home/mike/.ssh/id_rsa.pub")
  }

}

resource "oci_core_public_ip" "sl_ip" {
  depends_on = [oci_core_instance.sl_instance]
  for_each   = local.nodes

  compartment_id = var.compartment
  lifetime       = "RESERVED"
  private_ip_id  = data.oci_core_private_ips.sl[0].private_ips[each.key].id
}


locals {
  nodes = {
    for i in range(var.how_many_nodes) :
    i => {
      node_name  = "${var.instance_name}_${i + 1}"
      ip_address = format("10.0.1.%d", 10 + (i + 1))
      subnet_id  = var.subnet_ids[i]
    }
  }
}
