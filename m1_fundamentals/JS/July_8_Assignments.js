// Raninder's Assignments

const book = {
    bname: "Naked, Short, and Greedy",
    author: "Dr. Susanne Trimbath",
    read: true,
    display: function(){
        return this.author + " author of book " + this.bname + ":" + "Finished? " + this.read;
    }
}

if (book.read == true) {
    console.log("you have already read " + book.bname + " by " + book.author);
}
else {
    console.log("you have not read " + book.bname + " by " + book.author)
}

const book2 = {
    bname: "1984",
    author: "George Orwell",
    read: false,
    display: function(){
        return this.author + " author of book " + this.bname + ":" + "Finished? " + this.read;
    }
}

if (book2.read == true) {
    console.log("you have already read " + book2.bname + " by " + book2.author);
}
else {
    console.log("you have not read " + book2.bname + " by " + book2.author)
}


// Assignment 2

const books = {
    book1: {
        bname: "A book",
        author: "An author",
        read: true
    },

    book2: {
        bname: "A book 2",
        author: " An Author 2",
        read: false,
    }
}

if (books.book1.read == true) {
    console.log("you have already read " + books.book1.bname + " by " + books.book1.author);
}
else {
    console.log("you have not read " + books.book1.bname + " by " + books.book1.author)
}

if (books.book2.read == true) {
    console.log("you have already read " + books.book2.bname + " by " + books.book2.author);
}
else {
    console.log("you have not read " + books.book2.bname + " by " + books.book2.author)
}


// Assignment 3

const recipe = {
    recipe: "Scrambled Eggs",
    servings: 1,
    ingredients: ["2 eggs", "1 garlic clove", "1 table spoon of Coconut oil", ]
}

console.log

