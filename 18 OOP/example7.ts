class MyClass {

    private _myProperty: number = 0;

    get myProperty() : number {
        return this._myProperty
    }

    set myProperty(value : number) {
        this._myProperty = value
    }
}

const myInstance = new MyClass();

console.log(`Current Value: ${myInstance.myProperty}`); // Current Value: 0
myInstance.myProperty = 10;
console.log(`Current Value: ${myInstance.myProperty}`); // Current Value: 10
