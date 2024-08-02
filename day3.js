//Day 3 of 30 Days of JavaScript
//Control Structures
const readline = require("readline");
// Activity 1: If elseStatement
//Task1: Write a program to check if a number is positive, negative or zero
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("Enter a number: ", (num) => {
  if (isNaN(num)) {
    console.log("Not a number, please enter a valid number");
  } else {
    if (num > 0) {
      console.log("Number is Positive");
    } else if (num < 0) {
      console.log("Number is Negative");
    } else {
      console.log("Number is Zero");
    }
  }
  r1.close();
// 
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r2.question("Enter your Age: ", (age) => {
    if(age.length !== 2 || !age.match(/^[0-9]+$/) || age >100 || age < 0) {
      console.log("Please enter a valid age");
    }else{
        if (age >= 18) {
          console.log("You are eligible to vote");
        } else {
          console.log("You are not eligible to vote");
        }
    }
    r2.close();

    // ACTIVITY 2: Nested If-else Statements
    const r3 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    r3.question("Enter three numbers separated by space: ", (input) => {
      const numbers = input.split(' ').map(Number);
      const [num1, num2, num3] = numbers;

      if (numbers.length !== 3) {
        console.log("Please enter exactly three numbers.");
      } else if (num1 > num2 && num1 > num3) {
        console.log(num1 + " is the largest number");
      } else if (num2 > num1 && num2 > num3) {
        console.log(num2 + " is the largest number");
      } else if (num3 > num1 && num3 > num2) {
        console.log(num3 + " is the largest number");
      } else {
        console.log("Some numbers are equal");
      }
      r3.close();

      // Activity 3: Switch Statements
switch(new Date().getDay()){
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Error");
  }
  let marks = 89;
  let grade;
  if(marks > 80){
    grade = "A";
  }else if(marks > 70){
    grade = "B";
  }else if(marks > 60){
    grade = "C";
  }else if(marks > 45){
    grade = "D";
  }else if(marks > 30){
    grade = "F";
  }else{
    grade = "Invalid Marks";
  }
  switch(grade){
      case 'A':
          console.log("You got an A");
          break;
      case 'B':
          console.log("You got a B");
          break;
      case 'C':
          console.log("You got a C");
          break;
      case 'D':
          console.log("You got a D");
          break;
      case  'F':
          console.log("You got a F");
          break;
      default:
          console.log("Invalid Marks");
  }
  // Activity 4: conditional (Ternary) Operator
  let number = 35;
  if(number %2==0?console.log("Number is Even"):console.log("Number is Odd"));
  // Activity 5: Combining condition
  const year = 2014;
  if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Leap Year");
  }else{
    console.log("Not a Leap Year");
  }
    });
  });
});
