var db=require('../dbconnection');

var Flats={

getAllFlats:function(callback){

return db.query("Select * from flats",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from flats where Id=?",[id],callback);
},
updateFlats:function(id,flats,callback){
    return  db.query("update flats set Title=?,Status=? where Id=?",[flats.Title,flats.Status,id],callback);
}
};
module.exports=Flats;