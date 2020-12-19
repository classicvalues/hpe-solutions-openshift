(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{500:function(e,t,n){e.exports=n.p+"assets/img/Figure25.7d76ddf7.png"},547:function(e,t,n){"use strict";n.r(t);var o=n(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"solution-deployment-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solution-deployment-flow"}},[e._v("#")]),e._v(" Solution Deployment Flow")]),e._v(" "),o("p",[e._v("Figure 25 shows the flow of the installation process and aligns with\nthis document.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(500),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Figure 25:")]),e._v(" Solution Deployment Flow")]),e._v(" "),o("h2",{attrs:{id:"setup-ipxe-tftp-and-dhcp-for-rhcos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-ipxe-tftp-and-dhcp-for-rhcos"}},[e._v("#")]),e._v(" Setup iPXE, TFTP, and DHCP for RHCOS")]),e._v(" "),o("p",[e._v("In this setup, the machine is booted by leveraging the iPXE server. In\nthis step we prepare the iPXE and TFTP server to able to boot RHCOS.\nThis is the initial stage and DHCP is an integral part of the PXE boot\nprocess. So, configuring the DHCP is also important. This configuration\ncan be done using sudo access. The details to configure the iPXE set up\nis listed in the Deployment guide at\n"),o("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift/tree/master/synergy/scalable",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift/tree/master/synergy/scalable"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"configure-a-load-balancer-for-red-hat-openshift-4-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-load-balancer-for-red-hat-openshift-4-nodes"}},[e._v("#")]),e._v(" Configure a load balancer for Red Hat OpenShift 4 nodes")]),e._v(" "),o("p",[e._v("In multi-node cluster deployment of OpenShift, the load balancer is\nmandatory. Hewlett Packard Enterprise in this solution has leveraged\nHAProxy load balancing required traffic. This configuration can be done\nusing sudo access. For commercial load balancer such as F5 Big-IP or any\nother OpenShift Container Platform 4 supported load balancer, you need\nto visit the manufacture website. For more details on configuring sudo\nto allow non-root users to execute root level commands and for\ninformation on HAProxy configuration, see the HPE solutions for Red Hat\nOpenShift Container Platform GitHub at\n"),o("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift/tree/master/synergy/scalable",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/hpe-solutions-openshift/tree/master/synergy/scalable"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"configure-dns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-dns"}},[e._v("#")]),e._v(" Configure DNS")]),e._v(" "),o("p",[e._v("In user-provisioned infrastructure (UPI), DNS records are required for\neach machine. These records must be able to resolve the hostnames of all\nother machines in a Red Hat OpenShift Container Platform cluster. This\ncomponent also can be configured using sudo access for Linux-based DNS\nsolution or Windows-based DNS solution. For more information on\nRole-based access control, see "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows-server/networking/technologies/ipam/role-based-access-control",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Role based\nAccess"),o("OutboundLink")],1),e._v(".\nFor third-party DNS solutions, you need to visit the manufacture\nwebsite. This provides more details to configure the sudo to allow\nnon-root users to execute root level commands. For more information, see\nsection "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-dns-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("User-provisioned DNS\nrequirements"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"configure-firewall-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-firewall-ports"}},[e._v("#")]),e._v(" Configure firewall ports")]),e._v(" "),o("p",[e._v("In user-provisioned infrastructure (UPI), network connectivity between\nmachines allows cluster components to communicate within the Red Hat\nOpenShift Container Platform cluster. Hence, the required ports must be\nopen between Red Hat OpenShift cluster nodes. This component also can be\nconfigured using sudo access for Linux-based firewall. For third-party\nfirewall solutions, you need to visit the manufacture website. This\nprovides details on configuring sudo to allow non-root users to execute\nroot level commands. For more information, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-network-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("networking requirements for user-provisioned infrastructure."),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"start-red-hat-openshift-container-platform-4-user-provisioned-infrastructure-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-red-hat-openshift-container-platform-4-user-provisioned-infrastructure-setup"}},[e._v("#")]),e._v(" Start Red Hat OpenShift Container Platform 4 user provisioned infrastructure setup")]),e._v(" "),o("p",[e._v("The user provisioned infrastructure (UPI), begins with installing a\nbastion host. This setup uses RHEL 7.6 virtual machine as a bastion\nhost. This bastion host is used for deployment and management of the Red\nHat OpenShift Container Platform 4 version clusters. The setup and\nconfiguration can be completed using sudo user access. For more\ninformation, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#ssh-agent-using_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generating an SSH private key and adding it to\nthe\nagent"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"download-red-hat-openshift-container-platform-4-software-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-red-hat-openshift-container-platform-4-software-version"}},[e._v("#")]),e._v(" Download Red Hat OpenShift Container Platform 4 software version")]),e._v(" "),o("p",[e._v("Download OpenShift Container Platform 4. Check the access token for your\ncluster and install it on the bastion host. The bastion host is used for\ndeploying and managing the OpenShift Container Platform 4 version\nclusters. The setup and configuration can be completed using sudo user\naccess. For more information, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-obtaining-installer_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Obtaining the installation\nprogram"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"create-ignition-config-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-ignition-config-files"}},[e._v("#")]),e._v(" Create ignition config files")]),e._v(" "),o("p",[e._v("This step begins with the creation of the install-config.yaml in a new\nfolder. Use the OpenShift install tool to convert the yaml to the\nignition config files required to install the Red Hat OpenShift\nContainer Platform 4. There is no system modification done on the\nbastion host or the provisioning server. This setup can be completed\nusing sudo access. For more information, see\n"),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-initializing-manual_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-initializing-manual_installing-bare-metal"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"upload-ignition-config-files-to-the-web"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-ignition-config-files-to-the-web"}},[e._v("#")]),e._v(" Upload ignition config files to the web")]),e._v(" "),o("p",[e._v("This step involves uploading the ignition config files to an internal\nwebsite that allows anonymous access to the PXE boot process. Update the\nPXE default file to point to the website location of the ignition file.\nThe action required in this step can be done using sudo user. For more\ninformation, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-user-infra-machines-pxe_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Red Hat Enterprise Linux CoreOS\n(RHCOS) machines by PXE or iPXE\nbooting."),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("In a virtualized setup to deploy OpenShift Container Platform 4, a\ntemplate for OVA image is created. This template is used for creating\nnodes on the cluster. The ignition config files are provided on each\nnode while provisioning the VMs. For more information on Create template\nfor OVA Image, see\n"),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_vsphere/installing-vsphere.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.6/installing/installing_vsphere/installing-vsphere.html"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"configure-the-hpe-synergy-compute-for-ipxe-boot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-hpe-synergy-compute-for-ipxe-boot"}},[e._v("#")]),e._v(" Configure the HPE Synergy Compute for iPXE boot")]),e._v(" "),o("p",[e._v("The configuration involves setting up the server profile in HPE Synergy\nComposer for iPXE boot and for the required storage. Hewlett Packard\nEnterprise uses the HPE Synergy Composer to create the server profiles\nand templates. The access to the composer UI is that of a non-root user.\nHence, from a security standpoint, no root access is being used for HPE\nSynergy Composer access. For more information see HPE OneView 4.2 User\nGuide "),o("RouterLink",{attrs:{to:"/Solution-Deployment/Server-Profiles.html#server-profiles"}},[e._v("Server profiles and server profile templates\nsection.")])],1),e._v(" "),o("h2",{attrs:{id:"bootstrap-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-node"}},[e._v("#")]),e._v(" Bootstrap Node")]),e._v(" "),o("p",[e._v("The bootstrap node is a temporary node that is used to bring up the\nOpenShift cluster. After the cluster is up, this machine can be\ndecommissioned, and the hardware will be reused. The iPXE boot process\nmust use bootstrapping information as a part of the iPXE boot parameter\nto install the RHCOS on this node.")]),e._v(" "),o("h2",{attrs:{id:"master-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#master-node"}},[e._v("#")]),e._v(" Master Node")]),e._v(" "),o("p",[e._v("The master node uses the iPXE image for RHCOS after the bootstrap node.\nThe iPXE boot process must use the master.ign information as part of the\niPXE boot parameter to install the RHCOS on this node. The root user is\nnot active by default in RHCOS. So, root login is not available.\nInstead, log in as the core user.")]),e._v(" "),o("h2",{attrs:{id:"create-the-cluster"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cluster"}},[e._v("#")]),e._v(" Create the cluster")]),e._v(" "),o("p",[e._v("The four nodes, one bootstrap and three master nodes boot up and are\navailable at the login prompt for RHCOS. Use the OpenShift install tool\nto complete the bootstrap process. For more information, see "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-installing-bare-metal_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating\nthe\ncluster."),o("OutboundLink")],1),e._v("\nThis action is taken using the sudo user logged in on the bastion host\nor provision server.")]),e._v(" "),o("h2",{attrs:{id:"login-to-the-cluster"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-cluster"}},[e._v("#")]),e._v(" Login to the cluster")]),e._v(" "),o("p",[e._v("After the bootstrap process has completed successfully, login to the\ncluster. The kubeconfig file is present in the auth directory where the\nignition files are created on the bastion host. Export the cluster\nkubeconfig file and login to your cluster as a default system user. The\nkubeconfig file contains information about the cluster that is used by\nthe CLI to connect a client to the correct cluster and API server. The\nfile is specific to a cluster and is created during the Red Hat\nOpenShift Container Platform installation. After logging in, approve the\npending OpenShift CSR for the nodes. For more information, see section\n"),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#cli-logging-in-kubeadmin_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logging in to the\ncluster."),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"initial-operator-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initial-operator-configuration"}},[e._v("#")]),e._v(" Initial operator configuration")]),e._v(" "),o("p",[e._v("After the control plane initializes, you must immediately configure\noperators that are not available. This ensures their availability (for\nexample image-registry). For more information, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-operators-config_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial\nOperator\nConfiguration"),o("OutboundLink")],1),e._v(".\nThis action is taken using the sudo user logged in on the bastion host\nor provision server.")]),e._v(" "),o("h2",{attrs:{id:"worker-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#worker-node"}},[e._v("#")]),e._v(" Worker node")]),e._v(" "),o("p",[e._v("This step involves decommissioning the bootstrap node and deleting the\nassociated HPE Synergy server profile. Boot the compute nodes associated\nwith worker node profile that has the second volume for local storage\nsetup using iPXE. The root user is not active by default in RHCOS. So,\nroot login is not available, instead, log in as the core user.")]),e._v(" "),o("h2",{attrs:{id:"complete-the-installation-of-red-hat-openshift-container-platform-4-and-higher-versions-for-user-provisioned-infrastructure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#complete-the-installation-of-red-hat-openshift-container-platform-4-and-higher-versions-for-user-provisioned-infrastructure"}},[e._v("#")]),e._v(" Complete the installation of Red Hat OpenShift Container Platform 4 and higher versions for user provisioned infrastructure")]),e._v(" "),o("p",[e._v("After the worker node boots up successfully, use the oc get nodes from\nthe bastion host. The admin can see the worker nodes as part of the\nOpenShift cluster. Run the OpenShift install tool to complete the\ninstallation. For more information, see section "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/installing/installing_bare_metal/installing-bare-metal.html#installation-complete-user-infra_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("completing installation\non user-provisioned\ninfrastructure."),o("OutboundLink")],1),e._v("\nAfter this process is completed, it will provide the URL for the Red Hat\nOpenShift Container Platform 4 version of the console along with the\ntemporary user kubeadmin and temporary password for login.")]),e._v(" "),o("h2",{attrs:{id:"log-in-to-the-red-hat-openshift-container-platform-4-and-higher-versions-of-the-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-the-red-hat-openshift-container-platform-4-and-higher-versions-of-the-console"}},[e._v("#")]),e._v(" Log in to the Red Hat OpenShift Container Platform 4 and higher versions of the console")]),e._v(" "),o("p",[e._v("Log in to the OpenShift Container Platform 4 version of the console\nusing the URL, username, and password provided in the complete Red Hat\nOpenShift Container Platform 4 user-provisioned infrastructure. Set up a\nnew user with the cluster admin privileges. For more information, see\nsection "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.6/authentication/understanding-authentication.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding\nauthentication."),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"standards-used-in-this-document"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#standards-used-in-this-document"}},[e._v("#")]),e._v(" Standards used in this document")]),e._v(" "),o("p",[e._v("This document makes use of the following standard terms:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Installation user -- Individual or individuals responsible for\ncarrying out the installation tasks to produce a functional Red Hat\nOpenShift Container Platform 4.6 solution on HPE Synergy.")])]),e._v(" "),o("li",[o("p",[e._v("Installer machine -- The system that is capable of connecting to\nvarious components within the solution and is used to run most of\nthe key commands. In this solution, this machine also serves as the\nAnsible Engine host. For more information, refer to the section\n"),o("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" in this document for more\ndetails.")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);