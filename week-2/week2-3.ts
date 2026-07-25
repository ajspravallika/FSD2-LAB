// Arrow Functions

const add = (a: number, b: number): number => {
    return a + b;
};

const square = (num: number): number => {
    return num * num;
};

const greet = (name: string): void => {
    console.log(`Hello, ${name}`);
};

console.log("Sum:", add(10, 20));
console.log("Square:", square(6));
greet("Jahnavi");