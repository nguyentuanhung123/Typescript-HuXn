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
        return `${this.first} ${this.last} Age: ${this.age}`;
    }
}

class Person extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }

    // Thử truy cập thuộc tính `private` và `protected` từ lớp con
    testAccess() {
        console.log(this.first); // Lỗi: Property 'first' is private and only accessible within class 'Human'.
        console.log(this.age);   // Lỗi: Property 'age' is protected and only accessible within class 'Human' and its subclasses.
    }
}

const huxn = new Person("HuXn", "WebDev", 20);
huxn.testAccess(); // Sẽ gây lỗi khi biên dịch