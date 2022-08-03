const prompt = require("prompt-sync")({ sigint: true });
// Control Flow

/**
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
    theNumber * theNumber);

 */

// Conditional Execution
/**

let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
}

 */

// While Loop
// Find the value of 2 to the power of 10 using while loop

/**
let count = 0;
let result = 1;

while (count < 10) {
    result = result * 2;
    count++;
}
console.log(result);

 */

// For Loop
// Find the value of 2 to the power of 10 using while loop

/**
let result = 1;
for (let count = 0; count < 10; count++) {
    result = result * 2;
}
console.log(result)
 */

// Break Statement
// find the first number that is both greater than or equal to 20 and divisible by 7

/**
for(let number = 20; number >= 20; number++)
{
    if(number % 7 == 0)
    {
        console.log(number);
        break;
    }
}
 */

// Switch

/**
switch (prompt("What is the weather like today?")) {
    case "rainy":
        console.log("Take an Umbrella when you go out");
        break;

    case "sunny":
        console.log("Good day to go out for a walk");
        break;

    case "cloudy":
        console.log("Go outside, enjoy the calm");
        break;

    default:
        console.log("Unknown Weather Type");
        break;
}
 */

// Exercise:
// Looping a triangle
/**
let output = "*";
let counter = 0;

while (counter < 7) {
    console.log(output);
    output = output + "*";
    counter++;
}
 */

//FizzBuzz
/**
 Write a program that uses console.log to print all the numbers from 1
to 30, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).

    _________Answer______

for (let number = 1; number <= 30; number++) {

    if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log("FizzBuzz")
    }

    else if (number % 3 == 0) {
        console.log("Fizz");
    }

    else if (number % 5 == 0) {
        console.log("Buzz");
    }


    else {
        console.log(number);
    }

}

    __________ A more efficient and effective way_______

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

 */


// Chessboard
/**
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.

_______________________ANSWER____________________
let boardSize = 8;
let board = "";

for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#";
        }


    }
    board += "\n";
}

console.log(board)


 */

