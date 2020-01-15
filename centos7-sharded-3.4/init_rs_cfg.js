db = db.getSiblingDB('admin')
db.adminCommand( { "replSetInitiate" : { _id: 'cfg_rs', version: 1, members: [ { _id:0, host: "m17.mdb.com:27017"}, { _id:1, host: "m18.mdb.com:27017" }, { _id:2, host: "m19.mdb.com:27017" } ] } } );

