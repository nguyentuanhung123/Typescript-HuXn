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

/**
 * Trong lớp Dog, bạn có thể chọn không truyền tham số species trong hàm khởi tạo để đơn giản hóa việc khởi tạo đối tượng. 
 * Thay vào đó, bạn có thể cung cấp giá trị mặc định cho thuộc tính species khi gọi super từ lớp cơ sở Animal. 
 * Đây là cách để đảm bảo rằng lớp Dog có thể tự thiết lập thuộc tính species mà không yêu cầu người dùng phải truyền giá trị cho nó.
 */
class Dog extends Animal {
    constructor(name: string, age: number) {
        // Gọi hàm khởi tạo của lớp cơ sở Animal để khởi tạo các thuộc tính name, age, và species của đối tượng Dog.
        super(name, age, "Canine")
    }

    public getInfo(): string {
        return `${this.name} is a ${this.species} and is ${this.getAge()} years old`;
    }
}

const d1 = new Dog("Puppy", 3)
console.log(d1.getInfo()); // Puppy is a Canine and is 3 years old

