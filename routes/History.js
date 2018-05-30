var express = require('express');
var router = express.Router();
var History=require('../models/History');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    History.getFlatById(req.params.id,function(err,rows){

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

 History.getAllHistory(function(err,rows){

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

    History.updateHistory(req.params.id,req.body,function(err,rows){

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