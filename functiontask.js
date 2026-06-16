// Q1. Write a named function to print "Hello World".

console.log("Q1. Write a named function to print 'Hello World'.");
function printHelloWorld() {
    console.log("Hello World");
}

printHelloWorld();

// Q3. Write a named function that prints a given name.

console.log("Q3. Write a named function that prints a given name.");
function printName(name) {
    console.log(name);
}
printName("Dharmik chauhan");

// Q6. Write a named function that returns a random number between 1 and 100.

console.log("Q6. Write a named function that returns a random number between 1 and 100.");
function RandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(RandomNumber());

// Q7. Write a named function that returns the sum of two numbers.

console.log("Q7. Write a named function that returns the sum of two numbers.");

function SumOfTwoNumbers(n1, n2) {
    return n1 + n2;
}

console.log(SumOfTwoNumbers(19, 21));

// Q9. Write a named function that returns the factorial of a number.

console.log("Q9. Write a named function that returns the factorial of a number.");

function Factorial(n) {
    let fact = 1;
    for (let i = 1; i = n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

Factorial(5);