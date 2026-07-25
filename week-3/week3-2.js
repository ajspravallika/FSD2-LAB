"use strict";
class Employee {
    empId;
    empName;
    constructor(id, name) {
        this.empId = id;
        this.empName = name;
    }
    showDetails() {
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Name: ${this.empName}`);
    }
}
const emp = new Employee(101, "Pravallika");
emp.showDetails();
