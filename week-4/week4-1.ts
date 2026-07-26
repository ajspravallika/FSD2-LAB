namespace StudentInfo {

    export class Student {

        constructor(public name: string, public age: number) {}

        display(): void {
            console.log(`Name: ${this.name}`);
            console.log(`Age: ${this.age}`);
        }
    }
}

const student = new StudentInfo.Student("Jahnavi", 19);
student.display();