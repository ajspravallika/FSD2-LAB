"use strict";
// Function with parameter types and return type
function calculateTotal(price, quantity) {
    return price * quantity;
}
function Greet(name) {
    return `Hello, ${name}!`;
}
const total = calculateTotal(250, 3);
const message = Greet("Jahnavi");
console.log("Total Amount:", total);
console.log(message);
