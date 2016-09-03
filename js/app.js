$(document).ready(function(){
	/*var i=1;
	while (i <= 100) {
		
		if(i%3 == 0 && i%5 == 0) {
			$('.content').append("<h3>FizzBuzz</h3>");
		}
		else if(i%3 == 0) {
			$('.content').append("<h3>Fizz</h3>");
		}
		else if(i%5 == 0) {
			$('.content').append("<h3>Buzz</h3>");
		}
		else {
			$('.content').append("<h3>" + i + "</h3>");
		}
		
		i++;
	}*/

	var substi = new Array('', 'Fizz', 'Buzz', 'FizzBuzz');
	var i = 1;

	while(i<=100) {
		
		var n = (1 * (i%3===0 ? 1 : 0)) + (2 * (i%5===0 ? 1 : 0));
		
		if (n==0) {substi.splice(0, 1, i);}
		
		$('.content').append('<h3>' + substi[n] + '</h3>');
		
		i++;
	}
});