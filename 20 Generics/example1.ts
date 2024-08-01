function printNumber(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue]
}

function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue]
}

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
    return [item, defaultValue]
}

const num = printNumber(1, 2)
const str = printString("hello", "world")
const bool = printBoolean(true, false)

console.log(num); // [ 1, 2 ]
console.log(str); // [ "hello", "world" ]
console.log(bool); // [ true, false ]
