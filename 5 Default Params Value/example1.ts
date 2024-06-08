function greet(person: string = "Anonymous") {
    return `Hello ${person}`
}

const res = greet(); // Hello Anonymous
console.log(res);
