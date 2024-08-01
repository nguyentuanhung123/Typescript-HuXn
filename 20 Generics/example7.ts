interface Fruit {
    name: string;
    color: string
}

const fruitArray: Fruit[] = [
    { name: 'Apple', color: 'red' },
    { name: 'Banana', color: 'yellow' },
    { name: 'Orange', color: 'orange' },
    { name: 'Pear', color: 'green' },
    { name: 'Cherry', color: 'red' },
]

function filterArray<T>(array: T[], condition: (item: T) => boolean) : T[] {
    return array.filter((item) => condition(item));
}

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'red');
console.log(redFruits); // [ { name: 'Apple', color: 'red' }, { name: 'Cherry', color: 'red' } ]
