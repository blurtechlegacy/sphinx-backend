var db=require('../dbconnection');

var Adresses={

getAllAdresses:function(callback){

return db.query("Select * from adresses",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from adresses where Id=?",[id],callback);
},
updateAdresses:function(id,adresses,callback){
    return  db.query("update adresses set Title=?,Status=? where Id=?",[adresses.Title,adresses.Status,id],callback);
}
};
module.exports=Adresses;