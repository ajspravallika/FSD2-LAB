// Traditional Function

function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow Function

const multiplyArrow = (a: number, b: number): number => {
    return a * b;
};

console.log("Traditional Function:", multiply(5, 6));
console.log("Arrow Function:", multiplyArrow(5, 6));