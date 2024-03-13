// data typyes used to hold more than one value   - locker used to store whic items can be stored.

let birds =  ['Owl', 'Eagle', 'Parrot'];
// acessing element in the array list
console.log(birds[0]);

// Adding element to array list

birds [2] = 'Vulture';
console.log(birds[2]);

// adding element to ana array

birds.push('parrot');  // adds at the far end
console.log(birds);

// removing element from an array  - rmoves at the far end 

birds.pop();
console.log(birds);


// adding items infornt of an index at 0 
birds.unshift('pigeon');

//Getting the index of an item in an a array

console.log(birds.indexOf('Owl'));
console.log(birds.length);