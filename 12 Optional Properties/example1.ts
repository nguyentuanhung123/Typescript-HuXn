type User = {
    name: string;
    age?: number;
    location: string
}

const user: User = {
    name: "HuXn",
    location: "China"
}

console.log(`Name: ${user.name} Age: ${user.age} Location: ${user.location}`);
// Name: HuXn Age: undefined Location: China

