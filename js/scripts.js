var qArray = ['pizza, portland, oregon, northeast'];

$(document).ready(function() {

  $('div#map').append('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' + qArray[0] + '&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs" allowfullscreen></iframe>');

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
