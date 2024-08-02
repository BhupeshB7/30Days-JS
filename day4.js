//Day 4 of 30 Days of JavaScript
//Loops
// Activity 1: For 
for(let i=1;i<=10;i++){
  console.log(i);
}
for(let i=1;i<=10;i++){
  console.log("5 x "+i+" = "+i*5);
}

// Activity 2: While
let i = 1;
let sum = 0;
while(i<=10){
  sum = sum + i;
  i++;
}
console.log("Sum of 1 to 10 :",+sum);
let j = 10;
while(j>0){
  console.log(j);
  j--;
}
// Activity 3: Do while
let k = 1;
do{
  console.log(k);
  k++;
}while(k<=5);
// Find the factorial of a number
let fact=1
let n=5
do{
  fact=fact*n;
  n--;
}while(n>0)
console.log(fact);
// Activity 4: Nested for loops

let rows = 5; // Number of rows

for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
// Activity 5: Loop Control statements
for(let i=1;i<=10;i++){
   if(i==5)
    continue
    console.log(i);
}
for(let i=1;i<=10;i++){
    if(i==7)
     break
     console.log(i);
 }