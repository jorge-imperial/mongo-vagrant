db = db.getSiblingDB('admin')
db.adminCommand( { "replSetInitiate" : { _id: 'shard1', version: 1, members: [ { _id:0, host: "m14.mdb.com:27017"}, { _id:1, host: "m15.mdb.com:27017" }, { _id:2, host: "m16.mdb.com:27017" } ] } } );

