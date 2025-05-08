//! Comment Your JavaScript Code

// Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:

// This is an in-line comment.
// You can make a multi-line comment beginning with /* and ending with */. This is a multi-line comment:

/* This is a
multi-line comment 
*/

//*====================================================
//! Declare JavaScript Variables

//* In computer science, data is anything that is meaningful to the compute

//* JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

// Computers can perform mathematical operations on a number, but not on a string.

// Variables allow computers to store and manipulate data in a dynamic fashion

//*====================================================

//! Storing Values with the Assignment Operator
// If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

// var myVar;
// myVar = 5;

//*====================================================

//! Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

//*====================================================

//! Initializing Variables with the Assignment Operator

//*========================================

//! Declare String Variables

// "your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.
//*========================================

//! Understanding Uninitialized Variables
// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number"

//*=======================================================

//! Explore Differences Between the var and let Keywords
// One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

var camper = "James";
var camper = "David";
console.log(camper);

// as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

// A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

// If you replace var with let in the code above, it results in an error:

let camper = "James";
let camper = "David";

//! SyntaxError: Identifier 'camper' has already been declared

//*=========================================================================

//! Declare a Read-Only Variable with the const Keyword

//* variables declared by const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

//* Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
//*=========================================================================

//* Any operator is just a function that executes a behavior

//! Add Two Numbers with JavaScript

//* Number is a data type in JavaScript which represents numeric data.
//* Number: Floating point numbers,  Used for decimals and integers

//*=========================================================================

//! Finding a Remainder in JavaScript
// The remainder operator % gives the remainder of the division of two numbers.

// Example

// 5 % 2 = 1
// 5 / 2 = 2 remainder 1
// 2 * 2 = 4
// 5 - 4 = 1
// Usage
// In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
// Even numbers have a remainder of 0, while odd numbers a remainder of 1.

// 17 % 2 = 1
// 48 % 2 = 0
// Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

//*====================================================

//! Compound Assignment With Augmented Addition (+=)

myVar = myVar + 5;
let myVar = 1;
myVar += 5;
console.log(myVar);

//*=======================================================

//! Comparison with the Equality Operator

//* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

//In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another.
// This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true
//*=======================================================

//! Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==).
// However, unlike the equality operator, which attempts to convert both values being compared to a common type,
// the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

//~ Examples

// 3  ===  3  // true
// 3 === '3' // false
// In the second example, 3 is a Number type and '3' is a String type.

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//*=======================================================

//! Comparison with the Inequality Operator
//* The inequality operator (!=) is the opposite of the equality operator.
//  Inequality means not equal. The inequality operator returns false
// when the equality operator would return true and vice versa. L
// ike the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

//* !=  2    // true
//* != "1"   // false
//* != '1'   // false
//* != true  // false
// 0 != false // false
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
function testNotEqual(val) {
  if (val != 10) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual("10");

//*=======================================================

//! Comparison with the Greater Than Operator

//* Like the equality operator, the greater than operator will convert data types of values while comparing.

//*=======================================================

//! Comparisons with the Logical And Operator

//* Sometimes you will need to test more than one thing at a time.
//* The logical and operator (&&) has the same effect could be achieved by nesting an if statement inside another if.

//? nested if
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

//*   This code will return Yes if num is greater than 5 and less than 10.
//? The same logic can be written with the logical && operator.

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

//*===============================================================================================
//! Comparisons with the Logical Or Operator

// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints.

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
