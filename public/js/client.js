Parse.initialize("ulx8lAUVH72sOe1IdljjknGtI9SK3MsLeaXPQP9z", "3evd02rITro6toACJQfCY7k7aIBS9QzKc3SMe8VP");
Parse.serverURL = 'https://pg-app-tpg8jmcjvh1ewdbc3lry4pvdz30q9l.scalabl.cloud/1/';

$(function() {

  var createPlayer = function(name) {
    var GameScore = Parse.Object.extend("GameScore");
    var gameScore = new GameScore();

    gameScore.set("score", 0);
    gameScore.set("playerName", name);
    gameScore.set("cheatMode", false);

    gameScore.save(null, {
      success: function(gameScore) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + gameScore.id);
        console.log(gameScore.id);
        $('.json').text(name);
      },
      error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
      }
    })
  }

  // // $('.json').text(" ").hide();
  // $('#form-submission').on('click', function(e) {
  //   e.preventDefault();
  //   var name = document.querySelector('#name').value;
  //   createPlayer(name);
  // })
  // $('.json').text(" ").hide();
  $('#form-submission').on('click', function(e) {
    e.preventDefault();
    // var name = document.querySelector('#name').value;
    // createPlayer(name);
    // createPlayer(tinymce.activeEditor.getContent({ format: 'raw' }));
  })
});