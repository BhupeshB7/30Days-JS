// day 6 of 30 Days of JavaScript
//Activity 1: Array creation and accessing

const arr1=[1,2,3,4,5];
for(let i=0;i<arr1.length;i++){
  console.log(arr1[i]);
}
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);

// Activity 2: Array methods
arr1.push(6);
arr1.push(7);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(0);
console.log(arr1);

// Activity 3: Array methods
const arr2=[1,2,3,4,5];
let arr3=[];
arr2.map((num)=>{
return arr3.push(num*2);
});
console.log(arr3);

const arr4=[1,2,3,4,5];
let arr5=[];
arr4.filter((num)=>{
    if(num%2==0){
        return arr5.push(num);
    }
})
console.log(arr5);
const total=arr4.reduce((acc,num)=>{
    return acc+num;
},0);
console.log(total);

// Activity 4: Array Iteration
const arr6=[1,2,3,4,5];
for(let i=0;i<arr6.length;i++){
    console.log(arr6[i]);
}
arr6.forEach(element => {
    console.log(element);
});

// Activity 5: Multidimensional Arrays

// Create and populate the multidimensional array
let matrix = [
    [11, 12, 15],
    [12, 56, 67],
    [78, 74, 56]
];

// Function to print the multidimensional array in the desired format
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        console.log(row.join(' '));
    }
}

// Print the matrix
printMatrix(matrix);
function logElement(matrix, row, col) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length) {
        console.log(`Element at [${row}][${col}]: ${matrix[row][col]}`);
    } else {
        console.log('Invalid indices');
    }
}
logElement(matrix, 2, 0); 