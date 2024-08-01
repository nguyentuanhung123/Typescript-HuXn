/**
 * Ví dụ 2: Truy cập thuộc tính trong hàm với tên thuộc tính là đối số
 * Khi bạn viết một hàm để truy cập giá trị của một thuộc tính dựa trên tên thuộc tính được truyền vào:
 */
type User = {
    name: string;
    age: number;
    location: string;
}

const user: User = {
    name: 'HuXn',
    age: 22,
    location: 'China'
}

function getProperty(obj: User, propName: keyof User) {
    return obj[propName];
}

console.log(getProperty(user, 'name')); // 'HuXn'
console.log(getProperty(user, 'location')); // 'China'


