var express = require('express');
var router = express.Router();
var Adresses=require('../models/Adresses');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Adresses.getFlatById(req.params.id,function(err,rows){

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

 Adresses.getAllAdresses(function(err,rows){

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

    Adresses.updateAdresses(req.params.id,req.body,function(err,rows){

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