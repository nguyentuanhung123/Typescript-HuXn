class Human {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last} Age: ${this.age}`
    }
}

class Person extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }
}

const huxn = new Person("HuXn", "WebDev", 20)
console.log(huxn); // Person { first: 'HuXn', last: 'WebDev', age: 20 }
