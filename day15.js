// day 15 of 30 days of JS
// Closure
// Activity 1
function makeCounter() {
  var count = 0;
  return function () {
    count += 1;
    return count;
  };
}

var counter = makeCounter();
console.log(counter());

// Activity 2
function generateUniqueId(start = 0) {
  let lastId = start;
  return function () {
    let currentId = lastId;
    lastId += 1;
    return currentId;
  };
}
var uniqueId = generateUniqueId(100);
console.log(uniqueId());
console.log(uniqueId());

function userNames(name = "john") {
  let userName = name;
  return function () {
    return `Hello + ${userName}`;
  };
}
console.log(userNames("john")());
console.log(userNames("jane")());
// Activity 3
let functions = [];
for (let i = 0; i < 10; i++) {
  functions[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}

functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();
// Activity 4
function createItem(){
    let items = [];
    function addItem(item){
        items.push(item);
    }
    function removeItem(item){
        items.splice(items.indexOf(item), 1);
        // items.filter(i => i !== item);
    }
    function listItems(){
        return items;
    }
    return {addItem, removeItem, listItems};
}
let item = createItem();
item.addItem("item 1");
item.addItem("item 2");
item.addItem("item 3");
item.removeItem("item 2");
console.log(item.listItems());

function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    if (cache.has(args)) {
      return cache.get(args);
    }
    let result = fn(...args);
    cache.set(args, result);
    return result;
  };
}
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(5));
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));