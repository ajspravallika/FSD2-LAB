interface HasLength {
    length: number;
}

function printLength<T extends HasLength>(item: T): void {
    console.log("Length:", item.length);
}

printLength("TypeScript");
printLength([10, 20, 30, 40]);
printLength({ length: 25 });