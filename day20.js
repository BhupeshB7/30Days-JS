// Day 20 of 30 days of JS
// Local Storage and session storage
const value = "Hello World";
localStorage.setItem("key", value);
console.log(localStorage.getItem("key"));
localStorage.removeItem("key");
const obj = {name: "John", age: 30};
localStorage.setItem("obj", JSON.stringify(obj));
console.log(localStorage.getItem("obj"));
localStorage.removeItem("obj");


const form = document.getElementById('userForm');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  displayUserData();
}

function displayUserData() {
  const name = localStorage.getItem('userName');
  const email = localStorage.getItem('userEmail');
  const userDataDiv = document.getElementById('userData');
  if (name && email && name !== '' && email !== '') {
    userDataDiv.innerHTML = `
      <h2>User Data:</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
    `;
  } else {
    userDataDiv.innerHTML = '<h2>User Data:</h2><p>No user data found</p>';
  }
  setTimeout(() => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    if (name && email && name !== '' && email !== '') {
     userDataDiv.innerHTML=`
     <h3>Data Removed from local storage</h3>`
    }
  }, 5000);

  
}

// Display user data on page load if available
displayUserData();


const sessionValue = "Hello World";
sessionStorage.setItem("key", sessionValue);
console.log(sessionStorage.getItem("key"));
sessionStorage.removeItem("key");
const sessionObj = {name: "John", age: 30};
sessionStorage.setItem("obj", JSON.stringify(sessionObj));
console.log(sessionStorage.getItem("obj"));
sessionStorage.removeItem("obj");
// Compare local storage and session storage
console.log(localStorage.getItem("key") === sessionStorage.getItem("key"));
console.log(localStorage.getItem("obj") === sessionStorage.getItem("obj"));