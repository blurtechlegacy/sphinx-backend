var db=require('../dbconnection');

var History={

getAllHistory:function(callback){

return db.query("Select * from history",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from history where Id=?",[id],callback);
},
updateHistory:function(id,History,callback){
    return  db.query("update history set Title=?,Status=? where Id=?",[history.Title,history.Status,id],callback);
}
};
module.exports=History;