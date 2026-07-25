"use strict";
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
const student1 = new Student("Jahnavi", 19);
student1.display();
