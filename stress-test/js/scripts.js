
$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#result").hide();
    
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      counter1 ++;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      counter2 ++;
    });
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      counter3 ++;
    });

    if(counter3 > counter1) {
      $("#response1").show();
      $("#response2").hide();
      $("#response3").hide();
    } else if(counter1 > 4 && counter2 >3) {
      $("#response2").show();
      $("#response1").hide();
      $("#response3").hide();
    } else if(counter1 < 4 && counter2 <3) {
      $("#response3").show();
      $("#response1").hide();
      $("#response2").hide();
    }

    $('#transportation_survey').hide();
  });
});