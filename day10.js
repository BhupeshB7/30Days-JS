//  day 10 0f 30 days of javascript
//Event Handling

// Basic Event Handling
let paragraph =document.getElementById("paragraph");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  paragraph.style.color = "red";
})

let box = document.getElementById("box");
let image = document.getElementById("image");
box.addEventListener("dblclick", function(){
  if(image.style.display === "none"){
    box.style.display = "block";
    image.style.display = "none";
  }else{
    box.style.display = "none";
    image.style.display = "block";
  }
})
let heading = document.getElementById("heading1");
heading.addEventListener("mouseover", function(){
  heading.style.backgroundColor = "red";
})
let heading2 = document.getElementById("heading2");
heading2.addEventListener("mouseover", function(){
  heading2.style.backgroundColor = "transparent";
})
//  <!-- Key down event that logs the key pressed to the console -->
let input = document.getElementById("input");
input.addEventListener("keyup", function(event){
  console.log(event.key);
})
// form submit
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target.ggr.value);
}
// Add a change event listner to selected dropdown to display the selected value
const cars = document.getElementById("cars");
cars.addEventListener("change", function(){
  console.log(cars.value);
})

// Event Delegation
const ul = document.getElementById("li1");
ul.addEventListener("click", function(){
  console.log(li1.id);
})
const ul1 = document.getElementById("li2");
ul1.addEventListener("click", function(){
  console.log(li2.id);
})
const ul3 = document.getElementById("li3");
ul1.addEventListener("click", function(){
  console.log(li3.id);
}) 