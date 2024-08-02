// day 7 of 30 days of js
// Objects
// Activity 1
const book1= {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
}
console.log(book1)

console.log("Title: " + book1.title)
console.log("Author: " + book1.author)

// Activity 2 Objects methods
const book2 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    getTitle: function() {
        return this.title;
    },
    getAuthor: function() {
        return this.author;
    }
}
console.log(book2.getTitle())
book2.getAuthor()
// 

const book3 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
}

// update book year using method
function updateYear(book, newYear) {
    book.year = newYear;
}
updateYear(book3, 1926)
console.log(book3)
// Activity 3 Nested Objects
const library = {
    name: 'library',
    books: [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        },
        {
            title: 'The Catcher in the Rye',
            author: 'J. D. Salinger',
            year: 1951
        }
    ],
}
console.log(library);
console.log("Library name: " + library.name);
library.books.forEach(book => console.log(book.title));

// Activity 4 this keyword
const book4 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    getTitle: function() {
        return this.title;
    },
    getYear: function() {
        return this.year;
    }
}
console.log(book4.getTitle())

// Activity 5 Objects Iterations
const book5 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
}
// console.log("Object keys:");
for (const key in book5) {
    // console.log(key);
    console.log(book5[key])
}
const book6 = {
    title:" Ready Player One",
    author: "Ernest Cline",
    year: 1949,
}
console.log("Console book using object keys, values and entries")
Object.keys(book6).forEach(key => console.log(book6[key]))
Object.values(book6).forEach(value => console.log(value))
Object.entries(book6).forEach(entry => console.log(entry))

