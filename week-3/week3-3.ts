class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }
}

class Student extends Person {

    showCity(): void {
        console.log(`City: ${this.city}`);
    }
}

const student = new Student("Jahnavi", 19, "Hyderabad");

console.log(student.name);

// console.log(student.age);    // Error (Private)
// console.log(student.city);   // Error (Protected)

student.display();
student.showCity();