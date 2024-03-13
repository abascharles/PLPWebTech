let age = 15;

switch(age){
    case 10:
        console.log('Age is 10');
        break;

    case 20:
        console.log("Age is 20");
    break;

    default:
        console.log('Age is neither 10 or 20');
}

// You can also put expressions as values

switch(20){
case 10+10:
console.log;
console.log('Value is 20');
break;
}