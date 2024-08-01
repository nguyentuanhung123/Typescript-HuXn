function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue]
}

const res = uniqueDataTypesFunc<number>(10, 20)
const str = uniqueDataTypesFunc<string>('hello', 'world')
const bool = uniqueDataTypesFunc<boolean>(true, false)
console.log(res); // [ 10, 20 ]
console.log(str); // [ 'hello', 'world' ]
console.log(bool); // [ true, false ]
