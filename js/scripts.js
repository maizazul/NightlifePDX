$(document).ready(function() {
  $("form#question1").submit(function(event) {

    var inputtedAge = $("input#age").val

    if((age === 'yes21')) {
    $(".over21").show();
  } else {
    $(".under21").show();
  }

  $("form#question1").hide();

  event.preventDefault();
  });
});
