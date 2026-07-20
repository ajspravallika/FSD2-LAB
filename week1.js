"use strict";
let userName = "Jahnavi";
let age = 19;
let ismember = true;
console.log("Datatyp of username is -->" + typeof userName);
console.log("Datatyp of age is -->" + typeof age);
console.log("Datatyp of ismember is -->" + typeof ismember);
function displayuserprofile(name, age, active) {
    console.log(`User :${name}`);
    console.log(`age :${age}`);
    console.log(`status :${active ? "Active" : "InActive"}`);
}
displayuserprofile(userName, age, ismember);
