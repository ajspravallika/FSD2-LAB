class College {

    readonly collegeName: string = "SVECW";

    static university: string = "JNTUK";

    display(): void {
        console.log(`College: ${this.collegeName}`);
        console.log(`University: ${College.university}`);
    }
}

const college = new College();

college.display();

// college.collegeName = "ABC"; // Error (readonly)

console.log("University:", College.university);