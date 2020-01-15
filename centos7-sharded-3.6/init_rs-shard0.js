db = db.getSiblingDB('admin')
db.adminCommand( { "replSetInitiate" : { _id: 'shard0', version: 1, members: [ { _id:0, host: "m11.mdb.com:27017"}, { _id:1, host: "m12.mdb.com:27017" }, { _id:2, host: "m13.mdb.com:27017" } ] } } );

