// day 8 of 30 days of JS
// Es6 +features
// Activity 1: Template literals
const name = "John"
const age = 30
const personalInfo = `My name is ${name} and I am ${age} years old`
console.log(personalInfo)
const lang = "JavaScript"
const multilineString = `
   Hey, I am a ${name}!
   I am ${age} years old.
   I love programming in ${lang}!
`
console.log(multilineString)
// Activity 2: Destructuring
const numbers = [1, 2, 3, 4, 5]
let [first, second, , , fifth] = numbers
console.log(first, second, fifth)

const obj ={
    name: "John",
    age: 30,
    city: "Patna"
}
let [newName, newAge, newCity] = [obj.name, obj.age, obj.city]
console.log(newName, newAge, newCity)

// Activity 3: Spread operator
const arr1 = [1, 2, 3]
const arr2= [4, 5, 6]
const arr3=[...arr1, ...arr2, 7,8,9]
console.log(arr3)

const sum = (...nums)=>{
let total =0;
nums.forEach(num => total += num)
return total;
}
console.log(sum(1,2,3,4,5))
console.log(sum(...[1,2,3,4,5]))

// Activity 4: Default parameters
const prod=(num1, num2=1)=>{
    return num1*num2;
}
console.log(prod(2))
console.log(prod(2,3))

// Activity 5: Enhanced object literals
function getBook(title, author, year) {
    return {
        title,
        author,
        year,
    }
}
let book = getBook("The Great Gatsby", "F. Scott Fitzgerald", 1925)
console.log(book)

// create an object with computed properties name based on variables and log the result the object to the console
const key1 ="name";
const key2 ="age";
const key3 ="city";
let obj1 ={
    [key1]: "John",
    [key2]: 30,
    [key3]: "Patna"
}
console.log(obj1)