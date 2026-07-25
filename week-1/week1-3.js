"use strict";
//program with annotations 
let book = "Women";
let publishyear = 2024;
let isgood = true;
function getbookreview(name, year, isgood) {
    return `${name} is published in the year ${year} and it is ${isgood ? "good" : "bad"}`;
}
let jonor = ["love", "respect"];
const summary = getbookreview(book, publishyear, isgood);
console.log(summary);
console.log("Hello");
