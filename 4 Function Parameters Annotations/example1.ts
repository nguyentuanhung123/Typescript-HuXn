/// Regular Func
function addOne(num: number) {
    return num + 1
}

const result = addOne(3);
console.log(result);

// Arrow Function
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);
