function printNumber(item: any, defaultValue: any): [any, any] {
    return [item, defaultValue]
}

const num = printNumber(1, 'something');
console.log(num); // [ 1, 'something' ]
