// Default and null 
// When you pass default while calling a parameter the default  value will be prined however when you pass null nothing will be printed

function greet(name = 'John'){
    console.log(`Hello ${name}`);
}

greet(undefined);
greet(null);

// This is one of the common mistakes that beginners make when learning JavaScript. When you use the value null, JavaScript will think you want that value to be empty, so it doesn't replace the value with the default parameter.
// When you use undefined, then JavaScript will replace it with the default parameter. You might encounter this issue as you work with JavaScript code in your career, so just keep this in mind


// The return statement
function sum(a, b){
    return a+b;
}

let result = sum(1, 2);
console.log(result);


function checkAge(age){

if(age > 18){
    return 'You may get a car license';
}
    return 'Wait till you turn 18';
}

console.log(checkAge(20));
console.log(checkAge(15));

// variable Scope - global and local

// Rest parameter - paramter that can accept any number of data as its arguments and store them as an array

function printArguments(...args){
    console.log(args);
}

printArguments(1, 2, 3, 4);
printArguments('A', 'B', 'C');
