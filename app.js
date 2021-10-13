'use strict' 
 
const express = require ('express');  //obtener express
 
const app = express();
 
app.use(express.urlencoded({extended:false})); //convertir a json
app.use(express.json());
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
module.exports=app
