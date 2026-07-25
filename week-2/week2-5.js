"use strict";
// Traditional Function
function multiply(a, b) {
    return a * b;
}
// Arrow Function
const multiplyArrow = (a, b) => {
    return a * b;
};
console.log("Traditional Function:", multiply(5, 6));
console.log("Arrow Function:", multiplyArrow(5, 6));
