function greet(person: string = "Anonymous") {
    return `Hello ${person}`
}

const res = greet("HuXn"); // Hello HuXn
console.log(res);