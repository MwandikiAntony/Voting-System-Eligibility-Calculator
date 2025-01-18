// Part 1: JavaScript Basics
// Variables and Data Types

let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Traveling", "Coding"];
let person = { name: "John", age: 25, isStudent: true };

// Print values and their types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator

function simpleCalculator() {
    // Get input from the user
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;

    // Perform calculations based on user input
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Cannot divide by zero!");
            return;
        }
    } else {
        alert("Invalid operation!");
        return;
    }

    // Display the result in the console
    console.log(`Result: ${result}`);
}

// Call the calculator function
simpleCalculator();

// Functions: Greet User

function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

// Example usage of greetUser
let greetingMessage = greetUser("Alice");
console.log(greetingMessage);

// Part 2: JavaScript Control Structures

// If Statements: Check Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    document.getElementById("dynamic-content").innerHTML = "You are eligible to vote!";
} else {
    document.getElementById("dynamic-content").innerHTML = "You are not eligible to vote.";
}

// Loops: Display numbers from 1 to 10 in an ordered list
let olElement = document.createElement("ol");

for (let i = 1; i <= 10; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = i;
    olElement.appendChild(liElement);
}

// Add the ordered list to the body of the page
document.body.appendChild(olElement);

// Part 3: Introduction to the DOM

// Modify the <h1> text dynamically
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add new <p> inside dynamic-content <div>
let newParagraph = document.createElement("p");
newParagraph.textContent = "Thank You For Being Here.";
document.getElementById("dynamic-content").appendChild(newParagraph);
