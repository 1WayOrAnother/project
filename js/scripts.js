
$(document).ready(function() {
$("form#trackform").submit(function(event) {


  var progPath1 = parseInt($("#describes").val());
  var progPath2 = parseInt($("#job").val());
  var progPath3 = parseInt($("#value").val());
  var progPath4 = parseInt($("#character").val());
  var progPath5 = parseInt($("#OS").val());

  var progPath = progPath1 + progPath2 + progPath3 + progPath4 + progPath5;

  //
//Here is the Backend logic.
  // if {
  //
  //}
// This is User interface.
  if (progPath >= 5 && progPath <= 8) {
    $("#ruby").show();
    $("#java").hide();
    $("#design").hide();
  } else if (progPath >= 9 && progPath <= 12) {
    $("#design").show();
    $("#ruby").hide();
    $("#java").hide();
  } else if (progPath >= 13 && progPath <= 15) {
    $("#java").show();
    $("#ruby").hide();
    $("#design").hide();
    }
    else {
      alert(" Ohh! Please fillout everything in order to get the result.");
  }event.preventDefault();
});
});
