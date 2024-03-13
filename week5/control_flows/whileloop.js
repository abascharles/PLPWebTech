let flips = 0; // Initialize a variable to keep track of the number of flips
let isHeads = false; // Initialize a variable to track if the outcome is heads

while (!isHeads) { // Start a while loop that continues until isHeads is true
    flips++; // Increment the number of flips by 1

    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    // If the random number is less than 0.5, set isHeads to true
    // Otherwise, isHeads remains false, and the loop continues
    isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads.`); // Print the number of flips it took to land on heads
