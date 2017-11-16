Parse.initialize("ulx8lAUVH72sOe1IdljjknGtI9SK3MsLeaXPQP9z", "3evd02rITro6toACJQfCY7k7aIBS9QzKc3SMe8VP");
Parse.serverURL = 'https://pg-app-tpg8jmcjvh1ewdbc3lry4pvdz30q9l.scalabl.cloud/1/';

$(function() {


  var getAMPhtml = function(ampContent) {
    var Posts = Parse.Object.extend("Posts");
    var query = new Parse.Query(Posts);
    query.equalTo("name", "amp-html-tags");
    query.first({
      success: function(object) {
        // Successfully retrieved the object.
        console.log();
        $('.json').text(object.get('headTags') + ampContent + object.get('footTags'));
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  var createPost = function(title, ampContent) {
    var Amp = Parse.Object.extend("Amp");
    var amp = new Amp();

    amp.set("title", title);
    amp.set("content", ampContent);

    amp.save(null, {
      success: function(amp) {
        console.log('New object created with objectId: ' + amp.id);
      },
      error: function(amp, error) {
        console.log('Failed to create new object, with error code: ' + error.message);
      }
    })
  }

  // $('.json').text(" ").hide();
  $('#form-submission').on('click', function(e) {
    e.preventDefault();
    var title = document.querySelector('#name').value;
    createPost(title, tinymce.activeEditor.getContent({ format: 'raw' }));
  })
});

// query css files, js headers, amp css etc. in single entry

// return html data on page after button click

// create new page that is amped with new url

// create express route for amp page with query to Parse that returns db entry compiled in prev step