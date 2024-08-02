//day 16 of 30 days of JS
// Recursion
//Activity 1
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
const fact5 = factorial(5);
console.log(fact5);

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
// Activity 2 Recursion with arrays

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(sumArr));

function findMax(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] > findMax(arr.slice(1)) ? arr[0] : findMax(arr.slice(1));
}
const maxArr = [1, 2, 3, 4, 5, 6, 17, 8, 9, 10];
console.log("Max of array is " + findMax(maxArr));
// Activity 3
function reverseStringUsingRecursion(str) {
  if (str.length === 0) {
    return "";
  }
  return reverseStringUsingRecursion(str.slice(1)) + str[0];
}
console.log(reverseStringUsingRecursion("hello"));

function checkPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  return (
    str[0] === str[str.length - 1] &&
    checkPalindrome(str.slice(1, str.length - 1))
  );
}
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
// Activity 4
function binartSearchUsingRecursion(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === target) {
    return 0;
  }
  if (target < arr[0]) {
    return binartSearchUsingRecursion(arr.slice(1), target);
  }
  return binartSearchUsingRecursion(arr.slice(1), target) + 1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binartSearchUsingRecursion(arr, 5));
console.log(binartSearchUsingRecursion(arr, 0));

function countOccurrencesUsingRecursion(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr[0] === target) {
    return 1 + countOccurrencesUsingRecursion(arr.slice(1), target);
  }
  return countOccurrencesUsingRecursion(arr.slice(1), target);
}
const arr2 = [1, 2, 3, 4, 5,5,5,5, 6, 7, 8, 9,5,5, 10];
console.log(countOccurrencesUsingRecursion(arr2, 5));
console.log(countOccurrencesUsingRecursion(arr2, 0));
// Activity 5 Tree Traversal
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.data);
  inOrderTraversal(node.right);
}

function createTree() {
  let root = null;
  root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  return root;
}