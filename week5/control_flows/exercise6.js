// Exercise #6
// Write a program that prints a half pyramid using asterisks * as shown below:

// *

// **

// ***

// ****

// *****

// Next, print a reverse half pyramid as follows:

// *****

// ****

// ***

// **

// *

// Write a program that prints a half pyramid using
// Defines the height of the pyramid
const height = 5;

// Outer loop to iterate through each row
for (let i = 1; i <= height; i++) {
    let row = ' '; // Initialize an empty string for the current row
    //Inner loop to print asterisks for each row
    for (let j = 1; j <= i; j++) {
        row = row + '*   '; // Append an asterisk followed by a space to the row string
    }
    console.log(row); // Print the completed row
}






