function add(a, b) {
	return a+b;
}
var x = add(4,5);
console.log(x);
calculateAge(1990);
// Hoisting
// Hoisting only works for function declaration 
// It does not work for function expression
function calculateAge(year) {
	console.log(2016 - year);
}
// calculateAge(1990);
var retirement = function(year) {
	console.log(65 - (2016 - year));
}
retirement(1995);

//variables
var age = 23;
console.log(age);
// at creation time code checks for only variable 
// declarations 
function foo() {
	var age = 65;
	console.log(age);
}
// age = 65 stored in it's own context object
foo();
// age = 23 stores in global context object
console.log(age);
// Scoping and Scope chain
// lexical a function that is lexically within another function gets access scope of it
// First scoping example
// Execution stack - order in which functions are called
// Scope chain - order in which functions are written lexically
// this keyword
/*
var john = {
	name : 'John',
	yearOfBirth : 1990,
	calculateAge : function(year) {
		console.log(2019 - this.yearOfBirth);
		function innerFunction() {
			console.log(this);
		}
		innerFunction();
	}
}
john.calculateAge();
*/
var mike = {
	name : 'Mike',
	yearOfBirth : 1994
};
// We can use function borrow 
// DOM Manipulation
// DOM: Document Object Model
// Structured representation of an HTML document
// The DOM is used to connect webpages to scripts like Javascript
// JavaScript and DOM are two different things
