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
