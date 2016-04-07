
var clickArray = ['pizza'];


var myCallback = function() {

  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    google.search.cse.element.render(
        { gname: 'a',
          div: "test",
          tag: 'search'
         });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {
       // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render(
            {
              gname: 'a',
              div: "test",
              tag: 'search'
            });
            var element = google.search.cse.element.getElement('a');
                element.execute(clickArray[0]);
    }, true);
  }
};

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
window.__gcse = {
  parsetags: 'explicit',
  callback: myCallback
};

(function() {
  var cx = '004427760427619622683:nxngoboo2bi'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

$(document).ready(function() {
  $("form#question1").submit(function(event) {

    var age = $("select#age").val();

    if (age === 'under21') {
    $(".under21").show();
  } else {
    $(".over21").show();
  }

  $("form#question1").hide();

  event.preventDefault();
  });
});
