type MyType = string | number

function exampleFunction(value: MyType): void {
    if (typeof value === "string") {
        // Within this block, TypeScript knows that `value` is a string
        console.log(value.toUpperCase());
    } else {
        // Within this block, TypeScript knows that `value` is a number
        console.log(value.toFixed(2));
    }
}

exampleFunction("hello"); // HELLO
exampleFunction(20); // 20.00