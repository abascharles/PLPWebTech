// function greetings(){
//     console.log('Hello World');
// }

// greettings();


// Default Paramentr

function greet(name = 'Nathan' ){
    console.log(`Hello ${name}`);
    console.log('Nice wheather today right?');
}

greet();
greet('James');


// Mixed parameter

function sing(melody, name = 'Tindel'){
    console.log(`Hello ${melody} is it ${name}`);
}

sing();