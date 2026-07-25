// REST Parameters

function findSum(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Sum:", findSum(10, 20, 30));
console.log("Sum:", findSum(5, 15, 25, 35));