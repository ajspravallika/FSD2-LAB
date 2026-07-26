"use strict";
class Staff {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Salary: ${this.salary}`);
    }
}
const emp = new Staff(101, "Pravallika", 50000);
emp.display();
