/* Exercise #7
Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.
The function accepts one parameter: the side of the square.
The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.
The output shows the size of the size, the area, and the perimeter as follows:
The square side is 8
The area of the square is 64
The perimeter of the square is 32
*/

function calculateSquare(side){
    console.log(`The square side is: ${side}`);
    console.log(`The perimeter side is: ${side*side}`);
    console.log(`The perimeter of the square is: ${4*side}`);
}

let areaPerimeter = calculateSquare(8);
console.log(areaPerimeter);