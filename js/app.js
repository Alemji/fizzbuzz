

//convet the user entered text into a number by adding +
//"22" to +"22"
//validate user is submitting a number parseInt() converts a sting into and integer



$(document).ready(function() {

	var maximum = parseInt(prompt("Please enter a number from 1 to 50"))
	
		if (maximum > 50) {alert("your number is too big");
	    window.location.reload(true);
		}

		else if (maximum < 1 ) {alert("Nice try pal!");
	    window.location.reload(true);
		}
		else if (isNaN(maximum)) {alert("Please enter a number between 1 and 50");
		window.location.reload(true);
		}	


	var fizz = true

	for (var i = 1; i <= +maximum; i++) {
		if ((i%3 === 0) && (i%5===0)) { $('.list').append("<li>fizzbuzz</li>");
		}
		else if (i%3 === 0) { $('.list').append("<li>fizz</li>");
		}
		else if (i%5 === 0) { $('.list').append("<li>buzz</li>");
		}
		else { $('.list').append("<li>" + i + "</li>");
		}
	}
});












