for(let x = 0; x<10; x+=3){
    console.log(x);
}




// For example, let's say you're writing a program to flip a coin. You need to find how many times the coin lands on heads when tossed 10 times. You can do it by using the Math.random method:

// When the number is lower than 0.5 you need to increment the tails counter
// When the number is 0.5 and up you must increment the heads counter

let headsCount = 0;
let tailsCount = 0;


for(let i = 0; i <10; i++){

     // Generate a random number between 0 and 1
    let randomNumber = Math.random();

// Check if the random number is less than 0.5 (tails)
    if(randomNumber <0.5){
        tailsCount ++
    }else{
        // If the random number is 0.5 or greater (heads)
        headsCount++
    }
}
console.log("Heads count:", headsCount);
console.log("Tails count:", tailsCount);