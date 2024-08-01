class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent  
    }

    getContent() : T{
        return this.content
    }

    setContent(newContent: T): void {
        this.content = newContent
    }
}

const stringBox = new Box<string>("Hello Typescript")
console.log(stringBox.getContent()); // Hello Typescript

stringBox.setContent("New Content Added")
console.log(stringBox.getContent()); // New Content Added

const numberBox = new Box<number>(10)
console.log(numberBox.getContent()); // 10

numberBox.setContent(100)
console.log(numberBox.getContent()); // 100

