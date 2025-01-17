function plus(x: number | string | undefined, y: number | string | undefined): number | string | undefined {
    // Check if either value is undefined
    if (x === undefined || y === undefined) {
        return undefined;
    }
    // Check if both values are numbers
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    // Check if both values are strings
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    // If the types don't match, return undefined
    return undefined;
}
console.log(plus(2025, 1));           
console.log(plus(undefined, 21));   
console.log(plus("StackUp", "Learn"));
