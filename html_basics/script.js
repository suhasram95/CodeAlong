// var height;
// if (height) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }
//
// // Introduction to Objects
// var john = {
//   firstName : 'John',
//   lastName : 'Smith',
//   birthYear : 1990,
//   family : ['Jane', 'Mark', 'Bob', 'Emily'],
//   job : 'teacher',
//   isMarried : false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// console.log(john['birthYear']);
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);
// // Arrays in javascript
// /*
// *Arrays
// */
// // Initializing a new array
// var names = ['john', 'mark', 'jane'];
// var years = new Array(1990, 1969, 1948);
// console.log(names[0], names[1], names[2]);
// console.log(names.length);
// //Mutating the array data
// names[1] = 'Ben';
// console.log(names);
// //  Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];
// john.push('blue');
// console.log(john);
// john.pop();
// john.unshift('Mr.');
// console.log(john);
// john.shift();
// console.log(john);
// console.log(john.indexOf(1990));
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
// : 'John is a designer';
// console.log(isDesigner);
// // Objects and Methods
// var sam = {
//   firstName : 'Sam',
//   lastName : 'Smith',
//   birthYear : 1995,
//   family : ['Jane', 'Mark', 'Bob', 'Emily'],
//   job : 'teacher',
//   isMarried : false,
//   calcAge : function() {
//     this.age = 2019 - this.birthYear;
//     return this.age;
//   }
// };
// sam.calcAge();
// console.log(sam);
// // this means the current Object
// // coding challenge
// var john = {
//   fullName : 'John Smith',
//   mass : 92,
//   height : 1.95,
//   calcBMI : function() {
//     this.bmi =  this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }
// var mark = {
//   fullName : 'Mark Miller',
//   mass : 78,
//   height : 1.69,
//   calcBMI : function() {
//     this.bmi =  this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }
// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);
// if (john.bmi > mark.bmi) {
//   console.log(john.fullName+' has a higher BMI of '+john.bmi);
// } else if (john.bmi < mark.bmi) {
//   console.log(mark.fullName+' has a higher BMI of '+mark.bmi);
// } else {
//   console.log('They have the same BMI');
// }
// /**************************
// * Loops and Iteration
// */
// using the for loop
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
// // Using the while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i++]);
// }
// // continue and break statements
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') {
    continue;
  }
  console.log(john[i]);
}
console.log(typeof 1990);
console.log(typeof false);
// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
var john = {
  fullName : 'John Smith',
  bills : [124, 48, 268, 180, 42],
  calcTips : function() {
    this.tips = [];
    this.totalBill = [];
    for (var i = 0; i < this.bills.length; i++) {
      // Determining percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.10;
      }
      this.tips[i] = bill * percentage;
      this.totalBill[i] = bill + (bill * percentage);
    }
  }
}
john.calcTips();
console.log(john);
// Javascript Versions
var name = 'John';
function first() {
  var a = 'Hello!';
  second();
  var x = a + name;
  console.log(x);
}
function second() {
  var b = 'Hi';
  third();
  var z = b + name;
  console.log(z);
}
function third() {
  var c = 'Hey';
  var z = c + name;
  console.log(z);
}
first();
