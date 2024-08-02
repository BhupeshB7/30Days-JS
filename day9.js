// day 9 of 30 days of javascript
// Activity 1: Selecting and Manipulating DOM Elements

const id = document.getElementById("id");
id.innerHTML = "Hello World";

const heading = document.getElementsByClassName("heading"
)
heading[0].style.backgroundColor = "red";
heading[0].style.color = "white";
// Activity 2: creating and Appending elements

const newDiv = document.createElement("div");
newDiv.innerHTML = "Hello World";
document.body.appendChild(newDiv);

const newli = document.createElement("li");
newli.innerHTML = "l4";
const ulList = document.getElementsByTagName("li")[2];
ulList.insertAdjacentElement("afterend", newli);

// Activity 3: Remvoing elements
const heading1 = document.getElementsByClassName("heading");
heading1[0].remove();
document.getElementsByTagName("li")[3].remove();
//Activity 4: Modifying Attributes
const image = document.getElementsByTagName("img")[0];
image.src ="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
const removeClass = document.querySelector(".remove-class");
removeClass.classList.remove("remove-class");
// Activity 5: Event Handling
const headingText = document.querySelector("#heading-text");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    headingText.style.color = "red";
    headingText.innerHTML ="Javascript is awesome";
})
const border = document.querySelector(".border");
border.style.border = "1px solid red";
border.style.borderRadius = "10px";
border.style.height = "100px";
border.style.width = "100px";
border.style.margin = "10px";
border.addEventListener("mouseover", function(){
    border.style.border = "2px solid blue";
})

