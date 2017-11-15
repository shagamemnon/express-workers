var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var express = require('express');
var Parse = require('parse/node');
var path = require('path');
var app = express();

Parse.initialize(
  "ulx8lAUVH72sOe1IdljjknGtI9SK3MsLeaXPQP9z",
  "3evd02rITro6toACJQfCY7k7aIBS9QzKc3SMe8VP"
);
Parse.serverURL = 'https://pg-app-tpg8jmcjvh1ewdbc3lry4pvdz30q9l.scalabl.cloud/1/';

app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-server-example running on port ' + port + '.');
});


// ******** ///////////////// ******** //


app.get('/createPlayer/:player', function(req, res) {
  var GameScore = Parse.Object.extend("GameScore");
  var gameScore = new GameScore();

  gameScore.set("score", 1337);
  gameScore.set("playerName", req.params.player);
  gameScore.set("cheatMode", false);

  gameScore.save(null, {
    success: function(gameScore) {
      // Execute any logic that should take place after the object is saved.
      console.log('New object created with objectId: ' + gameScore.id);
      res.render('pages/index', { data: gameScore });
    },
    error: function(gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  })
});

app.get('/queryPlayer/:player', function(req, res) {
  var GameScore = Parse.Object.extend("GameScore");
  var query = new Parse.Query(GameScore);

  if (req.params.player === undefined) {
    query.startsWith("playerName", "FT");
  } else {
    query.startsWith("playerName", req.params.player);
  }

  query.find({
    success: function(results) {
      console.log("Successfully retrieved " + results.length + " scores.");
      res.send(JSON.stringify({ a: results }));
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        console.log(object.id + ' - ' + object.get('playerName'));
      }
    },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });
})