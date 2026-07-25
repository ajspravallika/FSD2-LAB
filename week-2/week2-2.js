"use strict";
// Optional Parameter
function displayStudent(name, age) {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else {
        console.log(`Name: ${name}`);
    }
}
// Default Parameter
function welcome(name, city = "Hyderabad") {
    console.log(`Welcome ${name} from ${city}`);
}
// Function Calls
displayStudent("Jahnavi", 19);
displayStudent("Sai");
welcome("Jahnavi");
welcome("Pravallika", "Bangalore");
