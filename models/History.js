var db=require('../dbconnection');

var History={

getAllHistory:function(callback){

return db.query("Select * from history",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from history where Id=?",[id],callback);
},
updateHistory:function(id,history,callback){
    return  db.query("update history set flat_id=?, security=?, fire_alarm=?, leak=?, magnet_field=?, timestamp=now() where Id=?",[history.flat_id,history.security,history.fire_alarm,history.leak,history.magnet_field,id],callback);
}
};
module.exports=History;