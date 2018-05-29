var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'',
database:'sphinx'


});
module.exports=connection;