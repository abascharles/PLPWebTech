/*
Exercise #4
Create an array named colors that include the 'red', 'green, and 'blue' colors.

First, add a 'black' color after the last index of the array. Then print the array.

Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

Finally, add the color 'yellow' on the first index of the array, then print the array.

The result output is as follows:

[ 'red', 'green', 'blue', 'black' ]

[ 'blue', 'green', 'black' ]

[ 'yellow', 'blue', 'green', 'black' ]

*/

let colors = ['Red', 'Blue', ' Green'];

// Add 'black' color after the last index
colors.push('Black');
console.log(colors);


// Remove 'red' and swap 'green' and 'blue'
colors.shift();  //Removes the first element / can also use splice.
let temp = colors[1];
colors[1] = colors[2];
colors[2] = temp;
console.log(colors);

// Add 'yellow' on the first index
colors.unshift('Yellow');
console.log(colors);