function display<T>(value: T): void {
    console.log(value);
}

display<number>(100);
display<string>("Hello TypeScript");
display<boolean>(true);