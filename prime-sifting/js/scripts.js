$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var num= parseInt($("#num").val());
    var primes = [];
    var newprimes = [];
    var result = [];
    for (var i=2;i<=num;i++) {
      primes.push(i);
    };
    console.log(primes)
    do {
    primes.forEach(function(prime){
      if (prime%primes[0]!=0) {
        newprimes.push(prime)
      }
    });
    result.push(primes[0]);
    primes = newprimes;
    newprimes = [];
    } while (primes.length != 1)
    $("#result").show();
    $("#result").append ("<p>"+result+"</p>");
  });
});
