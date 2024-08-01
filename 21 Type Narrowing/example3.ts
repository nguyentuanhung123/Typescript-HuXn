// Define two types
type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string
    role: string
}

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager

// Example usage
const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead"
}

console.log(manager.id); // 123
console.log(manager.name); // John Doe
console.log(manager.department); // Engineering
console.log(manager.role); // Team Lead

