class Person {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("John", 20);
console.log(person); // Person { name: 'John', age: 20 }
console.log(person.name); // John