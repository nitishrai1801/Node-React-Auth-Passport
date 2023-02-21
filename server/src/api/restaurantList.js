// const express = require("express");
// const router = express.Router();
// var Restaurant = require('../models/restaurant')
// var mongoose = require('mongoose');





// router.get('/api/restaurants', function(req,res) {
//     console.log(req.body);

//     var result = Restaurant.find().lean()
//     console.log(result)
// });


var express  = require('express');
// require('dotenv').config();
// var app = express();
// var mongoose = require('mongoose');
const db = require('../models/restaurant');
var bodyParser = require('body-parser');
const router = express.Router();
// app.use(bodyParser.urlencoded({'extended':'true'}));            
// app.use(bodyParser.json());



router.get('/restaurants',(req,res) => {
    db.find({},function(err,results){
        if(err){
            res.send(err);
        }
        else{
            res.status(200).json({results});
        }
    })
    // Restaurant.findById("63e7d7ccfc13ae307c000653").then(
    //     (restaurant)=> {
    //         res.json(restaurant);
    //     },
    //     (err)=> {
    //         res.send(err);
    //     }
    // )
})

// router.get('/restaurants/:restaurant_id',function (req,res){
//     db.findById({req.params['restaurant_id']}, function(err,results)){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.status(200).json({results});
        
//     }
// }
// })

router.get('/restaurants/:restaurant_id', function (req,res){
    const x = req.params.restaurant_id
    db.findById({x}, function(err,results){
        if(err){
            res.send(err);
            
        }
        else{
            res.status(200).json({results});
        }
    })
})



module.exports = router;