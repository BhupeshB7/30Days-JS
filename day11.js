// Day 11 of 30 days of JS
// Promises and Async Await

// Activity 1
const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 completed");
  }, 2000);
});

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = new Error("Task 2 failed");
    reject(error);
  }, 1000);
});
task2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// Activity 2 : chaining promises
task1
  .then((result) => {
    console.log(result);
    return task2;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// Activity 3 : async await
async function asyncTask1() {
  await task1;
  console.log("Task 1 completed");
}
 async function handleRejected(){
    try {
        await task2;
    } catch (error) {
        console.log(error);
    }
}

// Activity 4 : Fetching data from API
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
 fetchData();
//  Activity 5 : Concurrent promises
const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 completed");
  }, 2000);
});
const task4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 4 completed");
  }, 1000);
});
Promise.all([task3, task4]).then((results) => {
  console.log(results);
});


const task5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 5 completed");
  }, 2000);
});
const task6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 6 completed");
  }, 1000);
});
Promise.race([task5, task6]).then((result) => {
  console.log(result);
});