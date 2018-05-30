var db=require('../dbconnection');

var Flats={

getAllFlats:function(callback){

return db.query("Select * from flats",callback);

},
getFlatById:function(id,callback){

    return db.query("select * from flats where Id=?",[id],callback);
},
updateFlats:function(id,flats,callback){
    // this is full shit, kill me please!
    // db.query("update adresses set timestamp=now() where Id=?",[db.query("select home_id from flats where id=?",[id])]);
    // db.query("INSERT INTO history (flat_id, security, fire_alarm, leak, magnet_field, timestamp) VALUES (?,?,?,?,?,now());",[flats.flat_id,flats.security,flats.fire_alarm,flats.leak,flats.magnet_field]);
    return  db.query("update flats set security=?, fire_alarm=?, leak=?, magnet_field=?, timestamp=now() where Id=?",[flats.security,flats.fire_alarm,flats.leak,flats.magnet_field,id],callback);
}
};
module.exports=Flats;