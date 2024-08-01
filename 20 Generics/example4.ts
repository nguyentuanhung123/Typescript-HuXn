function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue]
}

interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
    { name: "Buddy", breed: "Labrador"},
    { name: "Default", breed: "Unknown"}
);

console.log(dog1); // [ { name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' } ]


