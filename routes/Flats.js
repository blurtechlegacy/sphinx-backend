var express = require('express');
var router = express.Router();
var Flats=require('../models/Flats');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Flats.getFlatById(req.params.id,function(err,rows){

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

 Flats.getAllFlats(function(err,rows){

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

    Flats.updateFlats(req.params.id,req.body,function(err,rows){

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