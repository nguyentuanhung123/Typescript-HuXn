interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const john: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    sayHello() {
        console.log('Hi There');
    },
};

const huxn: Person = {
    firstName: 'HuXn',
    lastName: 'WebDev',
    age: 20,
    sayHello() {
        console.log("What's good");
    },
};

greet(john);
greet(huxn);

