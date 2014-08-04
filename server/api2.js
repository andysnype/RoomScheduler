var express = require('express')
  , mongoskin = require('mongoskin')
  , bodyParser = require('body-parser')
  
var app = express()
app.use(bodyParser())

var db = mongoskin.db('mongodb://104.131.233.104:27017/scheduledb', {safe:true}) //Personal VPS that will host the database stored.

app.get('/', function (req, res, next) {
  res.send('format is: building-symbol/room, e.g.: AE-214 for Amos Eaton 214 list of symbols: AE: Amos Eaton JROWL: Jonsson Rowling Center FOLS: Folsom Libary')
  
})

app.param('room', function(req, res, next, room) {
  
  if(room.indexOf("-") == -1)
  {
    res.send('not proper format: ' + room)
    console.log(room + " received")
    next()
    return
  }
 
  b_code = room.substring(0, room.indexOf('-'))
  num = parseInt(room.substring(room.indexOf('-') + 1))
  
  if(!b_code || isNaN(num))
  {
    res.send('either b_code or num are invalid. b_code: ' + b_code + ' num: ' + num)
    next()
    return
  }
  req.bcode = b_code
  req.rnum = num
  res.send('this is actually received: ' + req.bcode + " " + req.rnum)
  next()
})



app.get('/:room', function(req, res, next) {
  
  if(req.bcode && req.bnum)
  {
    console.log('nah this is')
  }
  console.log('is this recorded' + req.bcode + " " + req.bnum)
  
})

app.listen(5000)