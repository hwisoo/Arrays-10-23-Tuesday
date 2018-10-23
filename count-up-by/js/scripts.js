$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var countToNum = parseInt($("#num1").val());
    var countByNum = parseInt($("#num2").val());
    var validate = false;
console.log(countByNum)
    if(countToNum && countByNum){
      if(countByNum > countToNum){
          alert("Count By Number cannot be greater than count to Number.");
        }  else if(countByNum < 0){
          countByNum = countByNum *-1
          validate = true;
        } else {
          validate = true;
        }
      } else {
        alert("Enter an integer ")
      }

      if(validate === true){
          for (i=0; i<= countToNum; i+=countByNum){
            console.log(i);
      }
    }




    $("#result").show();
    $("#story").append ("<p>"+result+"</p>");
  });
});
