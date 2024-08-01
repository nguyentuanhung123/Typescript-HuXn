class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

/**
 * Tạo một đối tượng person của lớp Person với tên là 'John' và tuổi là 20.
 */
const person = new Person("John", 20);
console.log(person); // Person { name: 'John', age: 20 }

person.name = 'David' 
console.log(person); // Person { name: 'David', age: 20 }