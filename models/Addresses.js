var db=require('../dbconnection');

var Addresses={

getAllAddresses:function(callback){

return db.query("Select * from addresses",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from addresses where Id=?",[id],callback);
},
updateAddresses:function(id,addresses,callback){
    return  db.query("update addresses set timestamp=now() where Id=?",[id],callback);
}
};
module.exports=Addresses;