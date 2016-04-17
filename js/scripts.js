//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#factorIt").click(function() {
  var message="";
  var myFactorial=1;
  var numberInput = parseInt($("#factorSeed").val());
  message=numberInput + "! = ";
  for(i=numberInput; i>0; i--) {
    message += " " + i + " * ";
    myFactorial *= i;
  }
  $("#results").append("<li><h4>" + message.substring(0, message.length-3) + " = " + myFactorial + "</h4></li>");
});
