//! Use Conditional Logic with If Statements

//* if statements are used to make decisions in code.
// The keyword if tells JavaScript to execute the code in the curly braces under certain conditions,
// defined in the parentheses.
//  These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces.
// When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Pseudocode

// if (condition is true) {
//   statement is executed
// }

// Example:

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

//* if statements are used to make decisions to control the flow of code
//*========================================================================================================================================================

//! Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed.
// What about when that condition is false? Normally nothing would happen.
// With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
// Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//*========================================================================================================================================================
//! Introducing Else If Statements

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
//*========================================================================================================================================================

//! Logical Order in If Else Statements

// Order is important in if, else if statements.
// The function is executed from top to bottom so you will want to be careful of what statement comes first.

// Take these two functions as an example.

// Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
// And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
// While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0);
bar(0);
// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.
//*========================================================================================================================================================

//! Selecting from Many Options with Switch Statements

// If you need to match one value against many options, you can use a switch statement.
// A switch statement compares the value to the case statements which define various possible values.
//  Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
//*========================================================================================================================================================

//! Adding a Default Option in Switch Statements

// In a switch statement you may not be able to specify all possible values as case statements.
// Instead, you can add the default statement which will be executed if no matching case statements are found.
// Think of it like the final else statement in an if/else chain.
