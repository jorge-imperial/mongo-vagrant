

These are Vagrantfiles that create MongoDB environments for different versions of MongoBD.

You will need Virtualbox installed on the guest host.

Each directory is a type of environment with a version.

To create new versions, you will need to edit the repo file  mongodb-enterprise.repo and the of the Vagrantfile. 
The mongod.conf file might need to be modified too in order to configure the replica set or sharded environment.

The emulation provider is Virtualbox, so you need to install it first.

A hosts file is copied to each /etc/hosts - Poor-mans DNS.


**Usage**

To start an environment, change into the directory and run vagrant

```
vagrant up --parallel
```

You can stop an environment by destroying it

```
vagrant --destroy --parallel
```

You can modify the Vagrantfile to change the OS and OS version, as well as the hostnames and versions.

These lines define the hostname, OS and IP
```
   config.vm.define "m11" do |m11|
    m11.vm.box = "centos/7"
    m11.vm.hostname = "m11.mdb.com"

    m11.vm.network "public_network", bridge: "eno1", ip: "192.168.1.21"
```

the `provision` area lets you configure each host separately. I am using bash because I am lazy.

To log into the VM hosts, use the vagrant ssh command:
```
vagrant ssh m11
```
