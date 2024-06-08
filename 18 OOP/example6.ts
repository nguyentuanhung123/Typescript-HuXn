class Animal {
    public name: string;
    private age: number;
    protected species: string

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getSpecies(): string {
        return this.species
    }
}

const a1 = new Animal("Cook", 3, "Dog");
console.log(a1.getName()); // Cook
console.log(a1.getAge()); // 3
console.log(a1.getSpecies()); // Dog

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Canine")
    }

    public getInfo(): string {
        return `${this.name} is a ${this.species} and is ${this.getAge()} years old`;
    }
}

const d1 = new Dog("Puppy", 3)
console.log(d1.getInfo()); // Puppy is a Canine and is 3 years old

