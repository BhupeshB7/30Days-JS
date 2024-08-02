//day 5 of 30 Days of JavaScript
//Functions
//Activity 1: Functions Declaration
function checkOdd_even(num){
  if(num%2==0){
    console.log("Number is Even");
  }else{
    console.log("Number is Odd");
  }
}
checkOdd_even(35);

function findSquare(num){
  return num*num;
}
console.log(findSquare(5));

// Activity 2: Functions Expression
function findMax(num1,num2){
    return num1>num2?num1:num2;
}
console.log(findMax(5,10));

// Concatination
function concatinate(str1,str2){
  return str1+str2;
}
console.log(concatinate("Hello","World"));


// Activity 3: Arrow functions

const calcultateSum =(num1,num2)=>{
  return num1+num2;
}
console.log(calcultateSum(5,10));

const stringContainChar =(str,char)=>{
    return str.includes(char);
}
console.log(stringContainChar("Hello","l"));

// Activity 4: Functions parameters and default values

function product(num1,num2=1){
  return num1*num2;
}
console.log(product(5));
console.log(product(5,2));

const greetingMessage =(name,age=20)=>{
    return `Hello ${name}, you are ${age} years old`;
}
console.log(greetingMessage("John"));
console.log(greetingMessage("John",30));

// Activity 5: Higher order functions

function sayHello(func,num){
    for(let i=0;i<num;i++){
        func();
    }
}

function func(){
    console.log("Hello world!");
}
sayHello(func,5);

function HODFunction(func1,func2,value){
  const result1=(func1(value));
  const result2=(func2(result1));
  return result2;
}

const add =(num)=>{
    return num+1;
}

const multiply =(num)=>{
    return num*2;
}

console.log(HODFunction(add,multiply,5));
