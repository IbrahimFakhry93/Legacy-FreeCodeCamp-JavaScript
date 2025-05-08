//& Title: Pre-increment Operator
//? Note: Pre-increment is necessary when you want to increment the value of a variable and use the new value in the same expression.

let x = 1;
let y = 2;

//* Using pre-increment to increment x and add its new value to y
y += ++x; // y = y + (++x)

console.log(y); //* 4
