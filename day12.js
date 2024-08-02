// Day 12 of 30 days of JS
// Error Handling
// Activity 1

function throwError() {
  throw new Error("An error occurred");
}
try {
  throwError();
} catch (error) {
  console.log(error);
}

function DivideByZero() {
  const result = 10 / 0;
  console.log(result);
}
try {
  DivideByZero();
} catch (error) {
  console.log(error);
}
// Activity 2 : Finally
try {
  throwError();
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally block executed");
}
// Activity 3 : Custom Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
throw new CustomError("An error occurred");



  
  // Function to validate input
  function validateUserInput(input) {
    if (input === "") {
      throw new CustomError("Input cannot be empty");
    }
  }
  
  try {
    validateUserInput(""); // This will throw a CustomError
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`CustomError caught: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error.message}`);
    }
  }
  

//   Activity 4  Error Handling in promises 
// use .catch() to handle errors in a promise chain

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("rejected"));
  }, 1000);
});
Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.error(error);
});
// use try/catch in async functions
async function asyncFunction() {
  try {
    await promise1;
    await promise2;
    console.log("All promises resolved");
  } catch (error) {
    console.error(error);
  }
}
asyncFunction();
// Activity 5 : Graceful Error Handling in fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});
