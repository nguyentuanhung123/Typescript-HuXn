// Regular Function
function double1(x: number) {
    return x * x
}

const result = double1(2)
console.log(result);

// Allow Function
const double2 = (x: number): number => {
    return x * x
}

const res = double2(3)
console.log(res);
