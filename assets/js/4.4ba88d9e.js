(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(t,e,s){t.exports=s.p+"assets/img/figure112.8c8495f6.png"},324:function(t,e,s){t.exports=s.p+"assets/img/figure113.4ae78867.png"},325:function(t,e,s){t.exports=s.p+"assets/img/figure114.7040b8e3.png"},326:function(t,e,s){t.exports=s.p+"assets/img/figure115.26a5d6d0.png"},327:function(t,e,s){t.exports=s.p+"assets/img/figure116.d8f4f389.png"},328:function(t,e,s){t.exports=s.p+"assets/img/figure117.b09f0f21.png"},329:function(t,e,s){t.exports=s.p+"assets/img/figure118.fb2715df.png"},330:function(t,e,s){t.exports=s.p+"assets/img/figure119.fc2da3dd.png"},331:function(t,e,s){t.exports=s.p+"assets/img/figure120.c2dc0050.png"},332:function(t,e,s){t.exports=s.p+"assets/img/figure121.2efcf288.png"},333:function(t,e,s){t.exports=s.p+"assets/img/figure122.b2c86a87.png"},334:function(t,e,s){t.exports=s.p+"assets/img/figure123.e727f9eb.png"},335:function(t,e,s){t.exports=s.p+"assets/img/figure124.43714f03.png"},336:function(t,e,s){t.exports=s.p+"assets/img/figure125.3938871e.png"},337:function(t,e,s){t.exports=s.p+"assets/img/figure126.6a6b9daa.png"},338:function(t,e,s){t.exports=s.p+"assets/img/figure98.c6403982.png"},339:function(t,e,s){t.exports=s.p+"assets/img/figure100.048f0735.png"},340:function(t,e,s){t.exports=s.p+"assets/img/figure99.c3ebf81a.png"},341:function(t,e,s){t.exports=s.p+"assets/img/figure101.905779c1.png"},342:function(t,e,s){t.exports=s.p+"assets/img/figure102.c7953adf.png"},343:function(t,e,s){t.exports=s.p+"assets/img/figure103.3b110111.png"},344:function(t,e,s){t.exports=s.p+"assets/img/figure104.f3b47eed.png"},345:function(t,e,s){t.exports=s.p+"assets/img/figure105.91e2b9e3.png"},346:function(t,e,s){t.exports=s.p+"assets/img/figure106.530c1b7e.png"},347:function(t,e,s){t.exports=s.p+"assets/img/figure107.fd99b524.png"},348:function(t,e,s){t.exports=s.p+"assets/img/figure108.e39b357b.png"},349:function(t,e,s){t.exports=s.p+"assets/img/figure109.dc4941a8.png"},350:function(t,e,s){t.exports=s.p+"assets/img/figure110.08a489b1.png"},351:function(t,e,s){t.exports=s.p+"assets/img/figure111.621c847e.png"},374:function(t,e,s){"use strict";s.r(e);var a=s(28),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"virtual-node-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-node-configuration"}},[t._v("#")]),t._v(" Virtual node configuration")]),t._v(" "),a("p",[t._v("This section describes the process to deploy virtualization hosts for OpenShift. This section outlines the steps required to configure virtual machine master and worker nodes. At a high level, the steps are as follows:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Deploying the vSphere hosts")])]),t._v(" "),a("li",[a("p",[t._v("Creating the data center, cluster, and adding hosts into the cluster")])]),t._v(" "),a("li",[a("p",[t._v("Creating a datastore in vCenter")])]),t._v(" "),a("li",[a("p",[t._v("Create virtual master nodes")])]),t._v(" "),a("li",[a("p",[t._v("Deploying virtual worker nodes")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Hewlett Packard Enterprise utilized a consistent method for deployment that would allow for mixed deployments of virtual and physical master and worker nodes and built this solution on bare metal using the Red Hat OpenShift Container Platform user-provisioned infrastructure.")]),t._v(" "),a("p",[t._v("For more details on the bare metal provisioner, refer to "),a("a",{attrs:{href:"https://cloud.redhat.com/openshift/install/metal/user-provisioned",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.redhat.com/openshift/install/metal/user-provisioned"),a("OutboundLink")],1),t._v(". If the intent is to have an overall virtual environment, it is recommended the installation user utilizes Red Hat’s virtual provisioning methods found at "),a("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.4/installing/installing_vsphere/installing-vsphere.html#installing-vsphere",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.4/installing/installing_vsphere/installing-vsphere.html#installing-vsphere"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("For more information on deploying ESXi, see the "),a("RouterLink",{attrs:{to:"/Preparing the execution environment/Preparing-the-execution-environment.html#esxi-deployment"}},[t._v("ESXi deployment")]),t._v(" section.")],1),t._v(" "),a("h3",{attrs:{id:"migrating-from-standard-switch-to-distributed-switch-for-management-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-standard-switch-to-distributed-switch-for-management-network"}},[t._v("#")]),t._v(" Migrating from standard switch to distributed switch for management network")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Login to vCenter. Navigate to "),a("strong",[t._v("Networking -> -> Distributed Switch -> New Distributed Switch")]),t._v(" .")])]),t._v(" "),a("li",[a("p",[t._v("From the "),a("em",[t._v("New Distributed Switch")]),t._v(" page, provide a suitable Name for the switch and the datacenter name for the location. Click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select the version for the distributed switch as 6.6.0 and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("On the Configure settings page, provide the following information and click "),a("strong",[t._v("Next")]),t._v(".")]),t._v(" "),a("p",[t._v("a. Set the number of uplinks to 2.")]),t._v(" "),a("p",[t._v("b. Enable Network I/O control.")]),t._v(" "),a("p",[t._v("c. Select the Create a default port group option and provide a unique name for the corresponding network.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(323),alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("Review the configuration and click "),a("strong",[t._v("Finish")]),t._v(" to create the distributed switch.")])]),t._v(" "),a("li",[a("p",[t._v("After creating the distributed switch, right click on the switch and select the "),a("strong",[t._v("Add and Manage Hosts")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("On the Select Task page, select the task as "),a("strong",[t._v("Add hosts")]),t._v(" and click "),a("strong",[t._v("Next")]),t._v(" .")])]),t._v(" "),a("li",[a("p",[t._v("From the select hosts page, click "),a("strong",[t._v("+ new hosts")]),t._v(" and select all the vSphere hosts within the cluster to be configured with the distributed switch and click "),a("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(324),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Verify the required hosts are added and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(325),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("p",[t._v("In the "),a("em",[t._v("Manage Physical Adapters")]),t._v(" page, select the "),a("strong",[t._v("Physical Network Adapter")]),t._v(" in each host for the corresponding network being configured and click "),a("strong",[t._v("Assign uplink")]),t._v(". Click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Choose the "),a("em",[t._v("Uplink")]),t._v(" and select "),a("strong",[t._v("Apply this uplink assignment to the rest of the hosts")]),t._v(". Select "),a("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(326),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[a("p",[t._v("After the uplinks are assigned to the physical network adapters, select "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("em",[t._v("Manage VMkernel adapters")]),t._v(", select the VMkernel to be migrated and click "),a("strong",[t._v("Assign port group")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(327),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"14"}},[a("li",[t._v("Select the network associated with the VMkernel adapter which was selected in step 13 and click "),a("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(328),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"15"}},[a("li",[t._v("Review the VMkernel adapter configuration performed in step 13 and 14, and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(329),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"16"}},[a("li",[t._v("Review the configuration in Migrate VM networking and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(330),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"17"}},[a("li",[t._v("In the "),a("em",[t._v("Ready to complete")]),t._v(" page, review the configuration and click "),a("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"configuring-the-iscsi-target-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-iscsi-target-server"}},[t._v("#")]),t._v(" Configuring the iSCSI target server")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the vSphere host and navigate to "),a("strong",[t._v("Configure -> Storage -> Storage Adapters -> iSCSI Adapter -> Dynamic Discovery")]),t._v(" .")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("strong",[t._v('"+ Add..."')]),t._v(" icon to add the HPE Nimble Storage discovery IP address.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(331),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Provide the "),a("em",[t._v("Discovery IP address")]),t._v(" of HPE Nimble Storage system along with the port number and select the "),a("strong",[t._v("Inherit authentication settings from parent check box")]),t._v(". Click "),a("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(332),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Repeat steps 1-3 in all hosts to add all the iSCSI target servers from the HPE Nimble Storage.")])]),t._v(" "),a("h3",{attrs:{id:"configuring-the-network-port-binding-for-iscsi-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-network-port-binding-for-iscsi-network"}},[t._v("#")]),t._v(" Configuring the network port binding for iSCSI network")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("To configure Network Port Binding, navigate to "),a("strong",[t._v("Configure -> Storage -> Storage Adapters -> iSCSI Adapter -> Network Port Binding")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v('"+ Add Storage Adapter "')]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(333),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Select the Port Group of the iSCSI A network and click "),a("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(334),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Select Port Group of the iSCSI B network and click "),a("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(335),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Repeat the steps on all hosts for both iSCSI.")])]),t._v(" "),a("h3",{attrs:{id:"adding-a-datastore-using-hpe-nimble-storage-volume-in-vcenter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-datastore-using-hpe-nimble-storage-volume-in-vcenter"}},[t._v("#")]),t._v(" Adding a datastore using HPE Nimble Storage volume in vCenter")]),t._v(" "),a("p",[t._v("A datastore needs to be created in VMware vCenter from the volume carved out of HPE Nimble Storage to store the VMs. The following steps create a datastore on the HPE Nimble Storage.")]),t._v(" "),a("ol",[a("li",[t._v("From the vSphere Web Client navigator, right-click the cluster, select "),a("strong",[t._v("Storage")]),t._v(" from the drop-down menu, and then select "),a("strong",[t._v("New Datastore")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(336),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("On the Type page, select "),a("strong",[t._v("VMFS")]),t._v(" as the Datastore type and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("On the "),a("em",[t._v("Name and Device selection")]),t._v(" page, provide the values requested and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select a host to view its accessible disk/LUNs. Any of the hosts that are associated with the HPE Nimble Storage volume may be selected and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("Volume")]),t._v(" from HPE Nimble Storage and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("From the "),a("em",[t._v("VMFS version")]),t._v(" page, select "),a("em",[t._v("VMFS 6")]),t._v(" and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Specify details for "),a("em",[t._v("Partition configuration")]),t._v(" and click "),a("strong",[t._v("Next")]),t._v(". By default, the entire free space on the storage device is allocated. You can customize the space if required.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(337),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("On the Ready to complete page, review the datastore configuration and click "),a("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you are utilizing virtual worker nodes, repeat this section to create a datastore to store the worker node virtual machines.")])]),t._v(" "),a("p",[t._v("For information on HPE 3PAR used in this solution, please see this "),a("RouterLink",{attrs:{to:"/Storage/Storage.html#hpe-3par-iscsi"}},[t._v("article")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"deploying-vsphere-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-vsphere-hosts"}},[t._v("#")]),t._v(" Deploying vSphere hosts")]),t._v(" "),a("p",[t._v("Refer to the "),a("RouterLink",{attrs:{to:"/Physical environment configuration/Physical-environment-configuration.html#server-profiles"}},[t._v("Server Profiles")]),t._v(" section in this document to create the server profile for the vSphere hosts.")],1),t._v(" "),a("p",[t._v("After the successful creation of the server profile, install the hypervisor. The following steps describe the process to install the hypervisor:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("From the HPE OneView interface, navigate to Server Profiles and select ESXi-empty-volume Server Profile, Select "),a("strong",[t._v("Actions > Launch Console.")])])]),t._v(" "),a("li",[a("p",[t._v("From the Remote Console window, choose "),a("strong",[t._v("Virtual Drives -> Image File CD-ROM/DVD")]),t._v(" from the "),a("strong",[t._v("iLO options")]),t._v(" menu bar.")])]),t._v(" "),a("li",[a("p",[t._v("Navigate to the VMware ESXi 6.7 ISO file located on the installation system.\nSelect the ISO file and click "),a("strong",[t._v("Open")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("If the server is in the powered off state, power switch on the server by selecting "),a("strong",[t._v("Power Switch -> Momentary Press.")])])]),t._v(" "),a("li",[a("p",[t._v("During boot, press "),a("strong",[t._v("F11")]),t._v(" Boot Menu and select iLO Virtual USB 3: iLO Virtual CD-ROM.")])]),t._v(" "),a("li",[a("p",[t._v("When the VMware ESXi installation media has finished loading, proceed through the VMware user prompts. For storage device, select the 40GiB OS volume created on the HPE Image Streamer during server profile creation and "),a("strong",[t._v("set the root password.")])])]),t._v(" "),a("li",[a("p",[t._v("Wait until the vSphere installation is complete.")])]),t._v(" "),a("li",[a("p",[t._v("After the installation is complete, press "),a("strong",[t._v("F2")]),t._v(" to enter the vSphere host configuration page and update the IP address, gateway, DNS, hostname of the host and enable SSH.")])]),t._v(" "),a("li",[a("p",[t._v("After the host is reachable, proceed with the next section.")])])]),t._v(" "),a("h2",{attrs:{id:"hpe-oneview-for-vmware-vcenter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hpe-oneview-for-vmware-vcenter"}},[t._v("#")]),t._v(" HPE OneView for VMware vCenter")]),t._v(" "),a("p",[t._v("HPE OneView for VMware vCenter is a single, integrated plug-in application for VMware vCenter management. This enables the vSphere administrator to quickly obtain context-aware information about HPE Servers and HPE Storage in their VMware vSphere data center directly from within vCenter. This application enables the vSphere administrator to easily manage physical servers and storage, datastores, and virtual machines. By providing the ability to clearly view and directly manage the HPE Infrastructure from within the vCenter console, the productivity of VMware administrator increases. This also enhances the ability to ensure quality of service.")]),t._v(" "),a("p",[t._v("For more details, refer to the HPE documentation at "),a("a",{attrs:{href:"https://h20392.www2.hpe.com/portal/swdepot/displayProductInfo.do?productNumber=HPVPR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://h20392.www2.hpe.com/portal/swdepot/displayProductInfo.do?productNumber=HPVPR"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"creating-the-data-center-cluster-and-adding-hosts-in-vmware-vcenter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-data-center-cluster-and-adding-hosts-in-vmware-vcenter"}},[t._v("#")]),t._v(" Creating the Data center, Cluster and adding hosts in VMware vCenter")]),t._v(" "),a("p",[t._v("This section assumes a VMware vCenter server is available within the installation environment. A data center is a structure in VMware vCenter which contains clusters, hosts, and datastore. To begin with, a data center needs to be created, followed by the clusters and adding hosts into the clusters.")]),t._v(" "),a("p",[t._v("To create a data center, a cluster enabled with vSAN and DRS and adding hosts, the installation user will need to edit the vault file and the variables YAML file. Using an editor, open the file "),a("em",[t._v("/etc/ansible/hpe-solutions-openshift/synergy/scalable/vsphere/vcenter/roles/prepare_vcenter/vars/main.yml")]),t._v(" to provide the names for data center, clusters and vSphere hostnames. A sample input file is listed and as follows. Installation user should modify this file to suit the environment.")]),t._v(" "),a("p",[t._v("In the Ansible vault file ("),a("em",[t._v("secret.yml")]),t._v(") found at "),a("em",[t._v("/etc/ansible/hpe-solutions-openshift/synergy/scalable/vsphere/vcenter")]),t._v(", provide the vCenter and the vSphere host credentials.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vsphere hosts credentials")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere_username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere_password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vcenter hostname/ip address and credentials")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x.x.x.x\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This section assumes all the virtualization hosts have a common user name and password. If it does not have a common username and password, it is up to the installation user to add the virtualization hosts within the appropriate cluster.")])]),t._v(" "),a("p",[t._v("Variables for running the playbook can be found at "),a("em",[t._v("/etc/ansible/hpe-solutions-openshift/synergy/scalable/vsphere/vcenter/roles/prepare_vcenter/vars/main.yml")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# custom name for data center to be created.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datacenter_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datacenter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# custom name of the compute clusters with the ESXi hosts for Management VMs.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management_cluster_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" management"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cluster\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hostname or IP address of the vsphere hosts utilized for the management nodes.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere_host_01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.x.x\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere_host_02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.x.x\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere_host_03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.x.x\n")])])]),a("p",[t._v("After the variable files are updated with the appropriate values, execute the following command within the installer VM to create the data center, clusters, and add hosts into respective clusters.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/ansible/hpe-solutions-openshift/synergy/scalable/vsphere/vcenter/\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-playbook playbooks/prepare_vcenter.yml –ask-vault-pass\n")])])]),a("h2",{attrs:{id:"configuring-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-network"}},[t._v("#")]),t._v(" Configuring the network")]),t._v(" "),a("p",[t._v("Distributed switches need to be configured to handle the vSphere and VM traffic over the management, data center, and iSCSI network present in the environment. This section consists of:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Configuring distributed switches for the data center and iSCSI networks.")])]),t._v(" "),a("li",[a("p",[t._v("Migrating from a standard switch to a distributed switch for management network.")])]),t._v(" "),a("li",[a("p",[t._v("Configuring the iSCSI target server.")])]),t._v(" "),a("li",[a("p",[t._v("Configuring the network port binding for iSCSI networks.")])])]),t._v(" "),a("h3",{attrs:{id:"configuring-distributed-switches-for-data-center-and-iscsi-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-distributed-switches-for-data-center-and-iscsi-network"}},[t._v("#")]),t._v(" Configuring distributed switches for data center and iSCSI network")]),t._v(" "),a("ol",[a("li",[t._v("Login to vCenter. Navigate to Networking -> -> Distributed Switch -> New Distributed Switch.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(338),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("From the "),a("em",[t._v("New Distributed Switch")]),t._v(" page, provide a suitable Name for the switch and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("em",[t._v("version")]),t._v(" for the distributed switch as 6.6.0 and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("On the "),a("em",[t._v("Configure settings")]),t._v(" page, provide the following information as shown and click "),a("strong",[t._v("Next")]),t._v(":")]),t._v(" "),a("p",[t._v("a. Number of uplinks (2 uplinks for management networks and 1 uplink each for the iSCSI network).")]),t._v(" "),a("p",[t._v("b. Enable Network I/O control.")]),t._v(" "),a("p",[t._v("c. Select the Create a default port group option and provide unique names for the corresponding network.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(339),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Review the configuration as shown and click "),a("strong",[t._v("Finish")]),t._v(" to create the distributed switch.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(340),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("After creating the distributed switch, right click on the switch and select "),a("strong",[t._v("Add and Manage Hosts")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(341),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[t._v("In the select task page, select the task as "),a("strong",[t._v("Add hosts")]),t._v(" and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("From the select host page, click "),a("strong",[t._v("+")]),t._v(" new hosts and select all the vSphere hosts within the cluster to be configured with the distributed switch and click "),a("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(342),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Verify that the required hosts are added and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(343),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("In the Manage Physical Adapters page, select the Physical Network Adapters in each host for the corresponding network being configured and click Assign uplink as shown.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(344),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[t._v("Choose the uplink and select "),a("strong",[t._v("Apply this uplink assignment to the rest of the hosts")]),t._v(". Select "),a("strong",[t._v("OK")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(345),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[a("p",[t._v("After the uplinks are assigned to the physical adapters, select "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Review the configurations in the Manage VMkernel adapters and click "),a("strong",[t._v("Next")]),t._v(".")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(346),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"14"}},[a("li",[t._v("Review the configuration in Migrate VM networking and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(347),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"15"}},[a("li",[a("p",[t._v("On the Ready to complete page, review the configuration and click "),a("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("To add VMkernel adapter to the distributed switch, navigate to Networking -> -> -> Add VMkernel Adapter.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(348),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"17"}},[a("li",[t._v("Select the hosts to which the configuration needs to be applied and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(349),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"18"}},[a("li",[t._v("In the configure VM kernel adapter page, select the IP settings as IPv4 and apply the appropriate services  and then click "),a("strong",[t._v("Next")]),t._v(". This should include vMotion and Fault Tolerance logging at a minimum.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(350),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"19"}},[a("li",[t._v("In the IPv4 settings page, provide the network settings and gateway settings for the all the hosts and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(351),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"20"}},[a("li",[t._v("Review the settings in the Ready to complete page and click "),a("strong",[t._v("Finish")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Repeat the Configuring Distributed Switches section for all the iSCSI network.")])]),t._v(" "),a("h2",{attrs:{id:"creating-a-datastore-in-vcenter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-datastore-in-vcenter"}},[t._v("#")]),t._v(" Creating a Datastore in vCenter")]),t._v(" "),a("p",[t._v("A datastore needs to be created in VMware vCenter from the volume carved out of HPE Storage SANs to store the VMs. The following are the steps to create a datastore in vCenter.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("From the vSphere Web Client navigator, right-click the cluster, select "),a("strong",[t._v("Storage")]),t._v(" from the menu, and then select the "),a("strong",[t._v("New Datastore")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("From the Type page, select "),a("strong",[t._v("VMFS")]),t._v(" as the Datastore type and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Enter the datastore name and if necessary, select the placement location for the datastore and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select the device to use for the datastore and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("From VMFS version page, select "),a("strong",[t._v("VMFS 6")]),t._v(" and click "),a("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Define the following configuration requirements for the datastore as per the installation environment and click "),a("strong",[t._v("Next")]),t._v(".")]),t._v(" "),a("p",[t._v("a.  Specify partition configuration")]),t._v(" "),a("p",[t._v("b.  Datastore Size")]),t._v(" "),a("p",[t._v("c.  Block Size")]),t._v(" "),a("p",[t._v("d.  Space Reclamation Granularity")]),t._v(" "),a("p",[t._v("e.  Space Reclamation Priority")])]),t._v(" "),a("li",[a("p",[t._v("On the Ready to complete page, review the Datastore configuration and click "),a("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you utilize virtual worker nodes, repeat this section to create a Datastore to store the worker virtual machines.")])]),t._v(" "),a("h2",{attrs:{id:"red-hat-openshift-container-platform-sizing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-container-platform-sizing"}},[t._v("#")]),t._v(" Red Hat OpenShift Container Platform sizing")]),t._v(" "),a("p",[t._v("Red Hat OpenShift Container Platform sizing varies depending on the requirements of the organization and type of deployment. This section highlights the host sizing details recommended by Red Hat.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Resource")]),t._v(" "),a("th",[t._v("Bootstrap node")]),t._v(" "),a("th",[t._v("Master node")]),t._v(" "),a("th",[t._v("Worker node")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CPU")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Memory")]),t._v(" "),a("td",[t._v("16GB")]),t._v(" "),a("td",[t._v("16GB")]),t._v(" "),a("td",[t._v("16GB")])]),t._v(" "),a("tr",[a("td",[t._v("Disk storage")]),t._v(" "),a("td",[t._v("120GB")]),t._v(" "),a("td",[t._v("120GB")]),t._v(" "),a("td",[t._v("120GB")])]),t._v(" "),a("tr",[a("td",[t._v("Disk storage")]),t._v(" "),a("td",[t._v("120GB")]),t._v(" "),a("td",[t._v("120GB")]),t._v(" "),a("td",[t._v("120GB")])])])]),t._v(" "),a("p",[t._v("Disk partitions on each of the nodes are as follows.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("/var – 40GB")])]),t._v(" "),a("li",[a("p",[t._v("/usr/local/bin – 1GB")])]),t._v(" "),a("li",[a("p",[t._v("Temporary directory – 1GB")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Sizing for worker nodes is ultimately dependent on the container workloads and their CPU, memory, and disk requirements.")])]),t._v(" "),a("p",[t._v("For more information about Red Hat OpenShift Container Platform sizing, refer to the Red Hat OpenShift Container Platform 4 product documentation at "),a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/openshift_container_platform/4.4/html/scalability_and_performance/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://access.redhat.com/documentation/en-us/openshift_container_platform/4.4/html/scalability_and_performance/index"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);