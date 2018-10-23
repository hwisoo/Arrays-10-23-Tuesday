$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var num= parseInt($("#num").val());

    var validate = false;
    var factorial=1;
    num=Math.abs(num);
    if(num){
      if(num ==0){
          factorial=1;
      } else {
        for(var i=1;i<=num;i++) {
          factorial*=i
        }
      }
    }
    $("#result").show();
    $("#result").append ("<p>"+factorial+"</p>");
  });
});
