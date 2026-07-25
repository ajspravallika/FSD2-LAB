"use strict";
class College {
    collegeName = "SVECW";
    static university = "JNTUK";
    display() {
        console.log(`College: ${this.collegeName}`);
        console.log(`University: ${College.university}`);
    }
}
const college = new College();
college.display();
// college.collegeName = "ABC"; // Error (readonly)
console.log("University:", College.university);
