interface Employee {
    id: number;
    name: string;
    salary: number;

    display(): void;
}

class Staff implements Employee {

    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    display(): void {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Salary: ${this.salary}`);
    }
}

const emp = new Staff(101, "Pravallika", 50000);

emp.display();