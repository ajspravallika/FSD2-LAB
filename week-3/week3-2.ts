class Employee {
    empId: number;
    empName: string;

    constructor(id: number, name: string) {
        this.empId = id;
        this.empName = name;
    }

    showDetails(): void {
        console.log(`Employee ID: ${this.empId}`);
        console.log(`Employee Name: ${this.empName}`);
    }
}

const emp = new Employee(101, "Pravallika");
emp.showDetails();