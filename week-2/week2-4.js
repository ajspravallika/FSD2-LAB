"use strict";
// REST Parameters
function findSum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log("Sum:", findSum(10, 20, 30));
console.log("Sum:", findSum(5, 15, 25, 35));
