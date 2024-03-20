// Stores multiple values like array but stores related objects in key:value Pairs

let myBook = {
    title: 'Sebastian',
    author: 'Kingkong',
    describe:function(){
        console.log(`Book title: ${this.title}`);

        console.log(`Book author: ${this.author}`);
    },
}
// An object item is also known as a property, with the key as property name and value as property value.


// Acessing the value of an object use the .notation or square [] bracket notation.

//.notation
console.log(myBook.title);
console.log(myBook.author);

// [] bracket

console.log(myBook['title']);
console.log(myBook["author"]);

// Adding element to an object 

// add release year property
myBook.year = 2023;

// add publisher property
myBook['publisher'] = 'Code With Nathan';

console.log(myBook);

// delete object  properties

delete myBook.author;

console.log(myBook);

// check is a property is present in an object  using in 

console.log('age' in myBook);
