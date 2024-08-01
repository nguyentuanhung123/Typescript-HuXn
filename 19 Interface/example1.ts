// Interface definition
interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

// Usage
const computerExample: Computer = {
    name: 'i7',
    ram: 8,
    hdd: 100
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
