var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')  
var app = express()
app.use(bodyParser())

var db = mongoskin.db('mongodb://104.131.233.104:27017/test', {safe:true})



  
 




app.listen(1212);

