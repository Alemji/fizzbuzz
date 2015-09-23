$(document).ready(function() {
	// wait until page loaded to get the list element
	var list = $('.list');
	
	var app = {
		getMax: function () {
			var input = prompt('Please enter a number between 1 to 50');
			return parseInt(input);
		},
		validateMax: function (max) {
			if (max > 50) {
				return 'The number must be less than or equal to 50';
			}
			else if (max < 1) {
				return 'The number must be greater than 0';
			}
			else if (isNaN(max)) {
				return 'Please enter a valid number';
			}
			return null; // return null if no errors
		},
		run: function () {
			var max = this.getMax();
			var error = this.validateMax(max);
			
			if (!error) {
				this.printFizzBuzz(max);
			}
			else {
				// there was an error, show the error, and start over
				alert(error);
				this.run();
			}
		},
		print: function (message) {
			// list was defined above...
			list.append('<li>' + message + '</li>');
		},
		printFizzBuzz: function (max) {
			for (var i = 1; i <= +max; i++) {
				if (i%15===0) {
					this.print('fizzbuzz');
				}
				else if (i%3 === 0) {
					this.print('fizz');
				}
				else if (i%5 === 0) {
					this.print('buzz');
				}
				else {
					this.print(i);
				}
			}
		}
	};
	
	// start the application
	app.run();
});












