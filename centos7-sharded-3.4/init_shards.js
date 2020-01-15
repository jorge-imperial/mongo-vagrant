db = db.getSiblingDB('admin');
db.runCommand( { addShard : "shard0/m11.mdb.com:27017,m12.mdb.com:27017,m13.mdb.com:27017" } );  
db.runCommand( { addShard : "shard1/m14.mdb.com:27017,m15.mdb.com:27017,m16.mdb.com:27017" } );  

