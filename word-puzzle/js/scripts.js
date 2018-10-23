$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var str = $("#word").val ();
    var chars = str.split ('');
    for (i=0;i<chars.length;i++) {
      if (chars[i]=="o" || chars[i]=="a" || chars[i]=="e" || chars[i]=="u" || chars[i]=="i" || chars[i]=="y") {
        chars[i] = "-";
      };
    };

    var resultString = chars.toString()
    var result = "";
    for (i=0;i<resultString.length;i++){
      if (resultString.charAt(i)!=",") {
        result+=resultString.charAt(i);
      }
    }
    $("#story").show();
    $("#story").append ("<p>"+result+"</p>");
    event.preventDefault();

  });
});
