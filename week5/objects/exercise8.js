/*
Exercise #8
Create a person object with the following properties:

name - the person's name
age - the person's age
greet() - a function to greet another person
Inside the greet() function, introduce the person, specifying the name and the age.

Here's an example output:

person.greet();
*/

let person = {
    name: 'Abas',
    age:'24',

    greet:function () {
        console.log('Hey there mate!');
        console.log(`This is my friend ${this.name} and he is ${this.age} years old`);
    }

}

person.greet();