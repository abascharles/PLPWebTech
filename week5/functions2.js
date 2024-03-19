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