var db=require('../dbconnection');

var Flats={

getAllFlats:function(callback){

return db.query("Select * from flats",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from flats where Id=?",[id],callback);
},
addFlat:function(flats,callback){
 return db.query("INSERT INTO flats VALUES(?,?,?,?,?,?,NOW())",[flats.home_id,flats.flat,flats.security,flats.fire_alarm,flats.leak,flats.magnet_field,flats.timestamp],callback);
 },
updateFlats:function(id,flats,callback){
    return  db.query("UPDATE addresses SET timestamp=NOW() WHERE Id=(SELECT home_id FROM flats WHERE id=?); INSERT INTO history (flat_id, security, fire_alarm, leak, magnet_field, timestamp) VALUES (?,?,?,?,?,now()); UPDATE flats SET security=?, fire_alarm=?, leak=?, magnet_field=?, timestamp=NOW() WHERE id=?",[parseInt(id),parseInt(id),flats.security,flats.fire_alarm,flats.leak,flats.magnet_field,flats.security,flats.fire_alarm,flats.leak,flats.magnet_field,parseInt(id)],callback);
}
};
module.exports=Flats;