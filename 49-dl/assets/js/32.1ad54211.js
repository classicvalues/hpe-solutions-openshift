(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{537:function(e,n,t){"use strict";t.r(n);var s=t(54),i=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"preparing-the-execution-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-execution-environment"}},[e._v("#")]),e._v(" Preparing the execution environment")]),e._v(" "),t("p",[e._v("This section provides a detailed overview and steps to configure the components deployed for this solution..")]),e._v(" "),t("h1",{attrs:{id:"installer-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installer-machine"}},[e._v("#")]),e._v(" Installer machine")]),e._v(" "),t("p",[e._v("This document assumes that a server running Red Hat Enterprise Linux (RHEL) 7.6 exists within the deployment environment and is accessible to the installation user to be used as an installer machine. This server must have internet connectivity. In this solution, a virtual machine is used to act as an installer machine and the same host is utilized as an Ansible Engine host.")]),e._v(" "),t("h1",{attrs:{id:"non-root-user-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-root-user-access"}},[e._v("#")]),e._v(" Non-root user access")]),e._v(" "),t("p",[e._v("The industry-wide security best practice is to avoid the use of root user account for administration of Linux-based servers. However, certain operations require root user privileges to perform tasks. In those cases, it is best to use the sudo command to obtain the necessary privilege escalation on a short-term basis. The sudo command allows programs and commands to be run with the security privileges of another user (Root is the default user) and can restrict the permission to specific groups, users, and individual commands.")]),e._v(" "),t("p",[e._v("The root user is not active by default in RHCOS. Instead, log in as the core user.")]),e._v(" "),t("p",[e._v("Use the following steps to create a non-root user for the OpenShift installation process:")]),e._v(" "),t("ol",[t("li",[e._v("Login to the installer VM as root. Refer to the section "),t("a",{attrs:{href:"https://word-edit.officeapps.live.com/we/wordeditorframe.aspx?ui=en%2DUS&rs=en%2DUS&wopisrc=https%3A%2F%2Fhpe.sharepoint.com%2Fteams%2Fhpesolutionsopenshift%2F_vti_bin%2Fwopi.ashx%2Ffiles%2F8c0f30749eb3496e949feaf8cdebea2e&wdpid=4c714d40&wdenableroaming=1&mscc=1&hid=9519919F-B0E8-B000-0D0D-AFFBA82C8CDD&wdorigin=Other&jsapi=1&jsapiver=v1&newsession=1&corrid=ea9a831c-f38b-45f5-b5d9-188d01e439d6&usid=ea9a831c-f38b-45f5-b5d9-188d01e439d6&sftc=1&instantedit=1&wopicomplete=1&wdredirectionreason=Unified_SingleFlush&rct=Medium&ctp=LeastProtected#_Installer_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installer machine"),t("OutboundLink")],1),e._v("  in this document for more details about the installer VM.")]),e._v(" "),t("li",[e._v("Execute the following command to create a non-root user.")])]),e._v(" "),t("p",[t("em",[e._v("# adduser openshift_admin")])]),e._v(" "),t("ul",[t("li",[e._v("Execute the following command to set password for the non-root user.")])]),e._v(" "),t("p",[t("em",[e._v("# passwd openshift_admin")])]),e._v(" "),t("ul",[t("li",[e._v("Add non-root user’s group in sudoers file and use the following command to find non-root user’s group.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# id -Gn openshift_admin\nopenshift_admin\n#\n​```\n\n- Edit the sudoers file and use the following command to add the entry of non-root user’s group in the sudoers file.\n\n*# visudo*\n\n- Add a non-root user’s group entry in sudoers file as follows. \n\n\\# Allow the following commands to run anywhere in non-root user environment  \n\nopenshift_admin   ALL=(ALL) NOPASSWD: /usr/bin/chmod, /usr/bin/yum, /usr/bin/yum-config-manager, /usr/sbin/subscription-manager, /usr/bin/git, /usr/bin/vi, /usr/bin/vim, /usr/bin/mkdir, /usr/bin/cat, /usr/bin/echo, /usr/bin/python, /usr/bin/sed, /usr/bin/chown, /usr/bin/sh, /usr/bin/cp, /usr/bin/ansible-vault, /usr/bin/scp, /usr/bin/rpm, /usr/sbin/chkconfig, /usr/bin/systemctl, /usr/bin/journalctl, /usr/bin/curl, /usr/bin/tar, /usr/bin/genisoimage, /usr/bin/mount, /usr/bin/umount, /usr/bin/rsync, /usr/bin/find, /usr/bin/mv, /usr/bin/nano, /usr/sbin/dnsmasq, /usr/sbin/setsebool\n\n- Execute the following command to change the user (non-root user).\n\n*# su openshift_admin*\n\n- Register the host and execute the following command to attach the host pool with Red Hat.\n\n$ sudo yum -y install subscription-manager\n$ sudo subscription-manager register --username=<username> --password=<password> --auto-attach\n$ sudo subscription-manager attach --pool=<pool_id>\n\n- Disable all repositories and enable only the repositories required for the installer VM.\n$ sudo yum -y install yum-utils\n$ sudo yum-config-manager --disable \\\\*\n$ sudo subscription-manager repos --disable="\\*" \\\n--enable="rhel-7-server-rpms" \\\n--enable="rhel-7-server-extras-rpms" \\\n--enable="rhel-7-server-optional-rpms" \\\n--enable="rhel-server-rhscl-7-rpms"\n\n- Use the following command to install Ansible.\n\n')])])]),t("p",[e._v("$ sudo yum -y install ansible\n​```")]),e._v(" "),t("ul",[t("li",[e._v("Install Git package on installer VM for performing Git- related operations.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum -y install git\n​```\n- Execute the following commands to download the hpe-solutions-openshift repository.\n\n$ sudo mkdir -p /opt/hpe/solutions/ocp\n$ cd /opt/hpe/solutions/ocp\n$ sudo git clone <https://github.com/HewlettPackard/hpe-solutions-openshift.git>\n$ sudo chown -R openshift_admin:openshift_admin /opt/hpe/solutions/ocp\n\n- Create an environment variable BASE_DIR and point it to the following path.\n\n\\```\n$ export BASE_DIR=/opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable\n​```\n- After the hpe-solutions-openshift repository is downloaded, navigate to the path /opt/hpe/solutions/ocp*/hpe-solutions-openshift/DL/scalable/installer/playbooks*. The scripts within this directory assists in configuring the prerequisites for the environment. The details of the scripts are as follows:\n\n-   python_env.sh – this script installs Python 3.\n\n-   ansible_env.sh – this script creates a Python 3 virtual environment and installs Ansible within the virtual environment.\n\n- Steps to configure the prerequisite environment are as follows:\n\n-   Change the directory to  /opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable/installer/playbooks\n\n    ````\n    `$ cd $BASE_DIR/installer/playbooks\n    ````\n\n-   Execute the following command to setup prerequisite Python environment.\n\n    ````\n    `$ yum -y install @development\n    `$ sudo sh python_env.sh\n    ````\n\n-   Execute the following command to enable Python 3.\n\n    ````\n    `$ scl enable rh-python36 bash\n    ````\n\n-   Execute the following command to configure the Ansible environment.\n\n    ````\n    `$ sudo sh ansible_env.sh\n    ````\n\t\n-   Enable the virtual environment with the following command.\n\n    ````\n    `$ source ../ocp_venv/bin/activate\n    ````\n\n-   Execute the following command to set the environment variables.\n\n    ````\n    `$ export ANSIBLE_LIBRARY=$BASE_DIR/installer/library/oneview-ansible/library\n\n    `$ export ANSIBLE_MODULE_UTILS=$BASE_DIR/installer/library/oneview-ansible/library/module_utils\n    ````\n# Kubernetes manifests and ignition files\nManifests and ignition files define the master node and worker node configuration and are key components of the Red Hat OpenShift Container Platform 4 installation.\n\nBefore creating the manifest files and ignition files, it is necessary to download the Red Hat OpenShift 4 packages. Execute the following command on the installer VM to download the required packages.\n\n$ cd $BASE_DIR/installer\n\n$ ansible-playbook playbooks/download_ocp_package.yml\n\nThe OpenShift packages downloaded after executing the *download_ocp_package.yml* playbook can be found on the installer VM at /opt/hpe/solutions/ocp/*hpe-solutions-openshift/DL/scalable/installer/library/openshift_components*. To execute any OpenShift related adhoc commands, it is advised to execute them from within this folder.\n\nTo create the manifest files and the ignition files, edit the *install-config.yaml* file provided in the directory /opt/hpe/solutions/ocp/*hpe-solutions-openshift/DL/scalable/installer/ignitions* to include the following details:\n\n- baseDomain - Base domain of the DNS which hosts Red Hat OpenShift Container Platform.\n- name – Name of the OpenShift cluster. This is same as the new domain created in DNS.\n- replicas – Update this field to reflect the corresponding number of master or worker instances required for the OpenShift cluster as per the installation environment requirements. It is recommended to have a minimum of 3 master nodes and 2 worker nodes per OpenShift cluster.\n- clusterNetworks – This field is pre-populated by Red Hat. Update this field only if a custom cluster network is to be used.\n- pullSecret – Update this field with the pull secret for the Red Hat account. Login to Red Hat account <https://cloud.redhat.com/openshift/install/metal/user-provisioned> and retrieve the pull secret.\n- sshKey – Update this field with the sshKey of the installer VM and copy the SSH key in install-config.yaml file. Generate the SSH key with following command.\n\n  $ ssh-keygen\n\n  An example *install-config.yaml* file appears as follows. Update the fields to suit the installation environment.\n\n\n  apiVersion: v1\n\n  baseDomain: name of the base domain\n\n  compute:\n\n  - hyperthreading: Enabled\n\n  name: worker\n\n  replicas: 2\n\n  controlPlane:\n\n  hyperthreading: Enabled\n\n  name: master\n\n  replicas: 3\n\n  metadata:\n\n  name: name of the cluster, same as the new domain under the base domain created\n\n  networking:\n\n  clusterNetworks:\n\n  - cidr: 12.128.0.0/14\n\n  hostPrefix: 23\n\n  networkType: OpenShiftSDN\n\n  serviceNetwork:\n\n  - 172.30.0.0/16\n\n  platform:\n\n  none: {}\n\n  pullSecret: ‘pull secret provided as per the Red Hat account’\n\n  sshKey: ‘ ssh key of the installer VM ’\n\n  Execute the following command on the installer VM to create the manifest files and the ignition files required to install Red Hat OpenShift.\n\n  $ cd $BASE_DIR/installer\n  $ ansible-playbook playbooks/create_manifest_ignitions.yml\n  $ sudo chmod +r installer/igninitions/*.ign\n  \n\nThe ignition files are generated on the installer VM within the folder /opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable/installer/ignitions.\n\n**NOTE**\n\nThe ignition files have a time-out period of 24 hours and it is critical that the clusters are created within 24 hours of generating the ignition files. If it crosses 24 hours, then regenerate the ignition files again by clearing up the files from the directory where the ignition files were saved.\n\n\n\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);