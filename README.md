These are Vagrantfiles that create MongoDB environments for different versions of MongoBD.


Each directory is a type of environment with a version.

To create new versions, you will need to edit the repo file  mongodb-enterprise.repo and the of the Vagrantfile. 
The mongod.conf file might need to be modified too in order to configure the replica set or sharded environment.

The emulation provider is Virtualbox, so you need to install it first.

A hosts file is copied to each /etc/hosts - Poor-mans DNS.


