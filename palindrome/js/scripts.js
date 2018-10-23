$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var palindrome = false;
    var str = $("#word").val ();
    var array = str.split ('');
    var reversed = array.slice().reverse();
    var msg = "";

    var newArray = array.toString();
    var newReversed = reversed.toString();

    if(newArray === newReversed){
      palindrome = true;
    }
    
    if(palindrome === true){
      msg = "Your word is a palindrome."
    } else {
      msg = "Your word is not a palindrome."
    }


   
    $("#result").html("<p>"+msg+"</p>");
    

  });
});
