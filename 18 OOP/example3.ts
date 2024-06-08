class Person {
    public first: string;
    public last: string;
    
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }
}

let p1 = new Person("John", "Doe") 
console.log(p1); // Person { first: 'John', last: 'Doe' }
console.log(p1.last); // Doe
