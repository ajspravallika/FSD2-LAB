// Optional Parameter
function displayStudent(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}`);
    }
}

// Default Parameter
function welcome(name: string, city: string = "Hyderabad"): void {
    console.log(`Welcome ${name} from ${city}`);
}

// Function Calls
displayStudent("Jahnavi", 19);
displayStudent("Sai");

welcome("Jahnavi");
welcome("Pravallika", "Bangalore");