var express = require('express');
var router = express.Router();
var Addresses=require('../models/Addresses');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Addresses.getFlatById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Addresses.getAllAddresses(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});

router.put('/:id',function(req,res,next){

    Addresses.updateAddresses(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;