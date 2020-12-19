(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{469:function(e,t,o){e.exports=o.p+"assets/img/figure3.01a1f9af.png"},504:function(e,t,o){"use strict";o.r(t);var n=o(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"physical-bare-metal-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#physical-bare-metal-configuration"}},[e._v("#")]),e._v(" Physical bare metal configuration")]),e._v(" "),n("p",[e._v("In a bare metal configuration, the master nodes are deployed in a highly available configuration running on three (3) HPE ProLiant DL 360 Gen10 Computes. Red Hat OpenShift worker nodes are deployed on the bare metal with three (3) HPE ProLiant DL 380 Gen10 servers. The temporary Bootstrap node is deployed on one of the worker nodes and later on configured as worker node.")]),e._v(" "),n("p",[e._v("The solution uses the internal storage on HPE ProLiant DL360 and DL380 Gen10 servers. Optionally, three more HPE DL380 Gen10 servers can be added to the cluster for Red Hat Ceph cluster with Red Hat container external storage. The deployment environment (Installer machine, iPXE, DNS, DHCP etc.) and a load balancer in this solution was deployed on the virtual machines. The OpenShift install tool is run to generate ignition files that contain information about the hosts that will be provisioned. The Core OS for the worker nodes is then booted with the help of iPXE and the ignition files are passed with the OS image during installation. HPE Storage systems such as HPE Nimble, HPE 3PAR StoreServ provide support for ephemeral and persistent container volume via persistent volume.")]),e._v(" "),n("p",[e._v("Figure 2 provides an overview of the Red Hat OpenShift Container Platform 4.6 solution layout in a bare metal setup configuration.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(469),alt:""}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 2.")]),e._v(" Solution layout for a bare metal setup")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The number of physical nodes represented in the solution layout is subject to change based on customer requirements. and align with best practices for deploying OpenShift Container Platform")])]),e._v(" "),n("li",[n("p",[e._v("The scripts and reference files provided with this document are included as examples of how to build the solution. They are not supported by Hewlett Packard Enterprise or Red Hat. It is expected that the scripts and reference files will be modified to meet the requirements of the deployment environment by the installation user prior to installation.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);