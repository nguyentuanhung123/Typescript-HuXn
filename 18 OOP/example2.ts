/**
 * readonly: Các thuộc tính readonly không thể bị thay đổi sau khi được gán lần đầu tiên. 
 * Điều này giúp bảo vệ các thuộc tính của đối tượng khỏi bị thay đổi một cách không mong muốn.
 */

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

person.name = 'Dadid'
console.log(person); // Error