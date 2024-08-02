// Day 2 of 30 Days of JavaScript
//Operators
const readline = require("readline");
// Activity 1: Arithmetic Operators
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// Activity 2: Assignment Operators
a += 10;
console.log(a);
b -= 10;
console.log(b);
// Activity 3: Comparison Operators
if (a > b) {
  console.log("a is greater than b");
}
if (a < b) {
  console.log("a is less than b");
}
if(a>=b){
  console.log("a is greater than or equal to b");
}
if(a<=b){
  console.log("a is less than or equal to b");
}
if(a==b){
  console.log("a is equal to b using == operator");
}
if(a===b){
  console.log("a is equal to b using === operator");
}
// Activity 4: Logical Operators
if (a > b && a < 100) {
  console.log("a is between b and 100");
}
if (a > b || a < 100) {
  console.log("a is either greater than b or less than 100");
}
let x = true;
if(!x){
  console.log("x is false");
}else{
    console.log("x is true");
}
//Activity 5: Ternary Operator
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r1.question("Enter a number: ", (num) => {
  const result = num >1? "Number is Positive" : "Number is Negative";
  console.log(result);
  r1.close();
});