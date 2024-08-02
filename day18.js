// day 18 of 30 days of JS
// Bubble Sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
const unsortedArr = [5, 4, 3, 2, 1];
console.log(bubbleSort(unsortedArr));

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr; 
}
console.log(selectionSort([5, 4, 3, 2, 1]));

// quickSort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort([5, 4, 3, 2, 1]));

// 
// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 5));

// Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr2, 5));
console.log(binarySearch(arr2, 0));

function countOccurence(arr, target) {
    if (arr.length === 0) {
      return 0;
    }
    if (arr[0] === target) {
      return 1 + countOccurence(arr.slice(1), target);
    }
    return countOccurence(arr.slice(1), target);
  }
  const arr3 = [1, 2, 3, 4, 5,5,5,5, 6, 7, 8, 9,5,5, 10];
  console.log(countOccurence(arr3, 5));

//   longest substring without repeating characters
function longestSubstring(str) {
    if (str.length === 0) {
      return 0;
    }
    let maxLength = 0;
    let currentLength = 0;
    for (let i = 0; i < str.length; i++) {
      currentLength = 0;
      for (let j = i; j < str.length; j++) {
        if (str[i] === str[j]) {
          currentLength++;
        } else {
          break;
        }
      }
      maxLength = Math.max(maxLength, currentLength);
    }
   return maxLength;
}
const str = "abcabcbb";
console.log(longestSubstring(str));
// rotate an array by k steps
function rotate(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotate(arr4, 3));
// merge two sorted arrays
function merge(arr1, arr2) {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mergeSort(arr5));
// Dynamic Programming
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