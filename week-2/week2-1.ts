// Function with parameter types and return type

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

function Greet(name: string): string {
    return `Hello, ${name}!`;
}

const total = calculateTotal(250, 3);
const message = Greet("Jahnavi");

console.log("Total Amount:", total);
console.log(message);