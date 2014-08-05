// from github.com/qiao
function getClientIp(req){// currently not working
  var ipAddress;
  var forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr){
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress){
    ipAddress = req.connection.remoteAddress;
  }

  return ipAddress;
};

var mongoose = require('mongoose');
mongoose.connect('mongodb://104.131.233.104:27017/yacsdb', db); //replace with the proper host

//var databaseUrl = 'mongodb://104.131.233.104:27017';
var collections = ['streamhl'];
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
  // do something
});

var scheduleSchema = mongoose.Schema({
  roomName: String,
  
});

var highlightSchema = mongoose.Schema({
  streamLink: String,
  beginTime: Number,
  endTime: Number,
  votes: [{
    ip: String,
    vote: Number //-1 for down, 0 for neutral, and 1 for up
  }] 
});

//Make a highlight model using the highlightSchema
var Highlight = mongoose.model('Highlight', highlightSchema);

highlightSchema.methods.upvote = function(){
  var newVote = {
    ip: "1.1.1.1",
    vote: 1
  }
  this.votes.push(newVote);
  this.save(); 
}

highlightSchema.methods.modify = function modify(IP, number){
  if(number == null){
    console.log("nothing to modify to. pass in argument.");
    return;
  }
  if(IP == null)
  {
    console.log("no IP given. pass in argument.");
    return;
  }
  if(number != 0 && number != 1  && number != -1)
  {
    console.log("invalid value to upvote/downvote. everyone is treated equally.");
    return;
  }
  function IPMatches(element, index, array){
    return (element.IP == IP);}
  result = this.votes.findOne('ip': IP);
  if(result == undefined)
  {
    var newVote = {
      ip: IP,
      vote: number
    }
    this.votes.push(newVote);
    console.log("made new vote with value: " + number + "and IP address: " + IP);
  }
  else
  {
    result.vote = number
    console.log("modified IP: " + IP + " to vote: " + number); 
  }
  this.save();
}


var highlight = mongoose.model('highlightCollection', highlightSchema);

var highlight1 = new highlight({streamLink: 'twitch.tv/riotgames', 
                                beginTime: 0, 
                    		        endTime: 10
});

highlight1.upvote();

highlight1.save(function (err, highlight1){
  if (err) return console.error(err);
});

highlight.upvote;

highlight1.modify("120.124.12.1", 0);
highlight1.modify("1.1.2.1", 1);
highlight1.modify("0.12.32.123",-1);


highlight.find({beginTime: 0}, function(err, highlights){
  if (err) return console.error(err);
  console.log(highlights);
});
