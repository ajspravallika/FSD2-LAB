"use strict";
// Arrow Functions
const add = (a, b) => {
    return a + b;
};
const square = (num) => {
    return num * num;
};
const greet = (name) => {
    console.log(`Hello, ${name}`);
};
console.log("Sum:", add(10, 20));
console.log("Square:", square(6));
greet("Jahnavi");
