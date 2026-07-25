"use strict";
class Person {
    name;
    age;
    city;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }
}
class Student extends Person {
    showCity() {
        console.log(`City: ${this.city}`);
    }
}
const student = new Student("Jahnavi", 19, "Hyderabad");
console.log(student.name);
// console.log(student.age);    // Error (Private)
// console.log(student.city);   // Error (Protected)
student.display();
student.showCity();
