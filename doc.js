// Variables & Math Operators
let a = 10;
console.log(a);
console.log(9*a);

let b = 7 * a
console.log(b);

const Max = 57;
var actual = Max - 13;
var percentage = actual / Max;

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


console.log("Hello, World");
console.log(23 + 97);
console.log(2,4,6,3,7,8,9);
console.log((4+6+9) / 77);

// Conditionals (If ... else example)
let carritoDeHelados = false;
estadoDeLaCasa = true;

if (!(carritoDeHelados || estadoDeLaCasa === 'en llamas')) {
    console.log('Es mejor que te quedes dentro de casa');
} else {
    console.log('Debes salir de la casa rápidamente.');
}

// Functions
function add7(number) {
    return number + 7;
}

function multiply(a, b) {
    return a * b;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lastLetter(string) {
    return string.charAt(string.length - 1);
}

lastLetter('hello');

// Problem Solving
// Solving the Popular FizzBUzz Problem
/* 
Write a program that allows the user to enter a number, print each number between one and the number the user entered, 
but for numbers that divide by 3 without a remainder print Fizz instead. 
For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.
*/
// PLAN:
/* 
What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. 
But each number that is divisible by 3 will output Fizz, 
each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz.
*/
// PSEUDOCODE :
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

// DIVIDE & CONQUER
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// UNDERSTANDING ERRORS
/* Common Error Types: 
        - Syntax Errors: Occurs when the code you are trying to execute is not in the correct format, according
        with the grammatical rules of JavaScript.
        - Reference Errors: Occurs when you try to reference a variable or function that does not exist.
        - Type Errors: Occurs when you try to perform an operation that is not valid for the data type, Or when attempting to modify a value that cannot
        be modified.
*/
