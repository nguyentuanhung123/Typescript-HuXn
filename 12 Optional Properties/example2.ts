type User = {
    name: string;
    age?: number;
    readonly location: string
}

const user: User = {
    name: "HuXn",
    location: "China"
}

user.location = "USA"

console.log(`Name: ${user.name} Age: ${user.age} Location: ${user.location}`);
// ERROR

