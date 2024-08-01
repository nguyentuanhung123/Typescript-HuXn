/**
 * có một vấn đề trong đoạn mã của chúng ta. 
 * Vì TypeScript không thể chắc chắn rằng các thuộc tính của đối tượng User sẽ luôn có giá trị 
 * (có thể một số thuộc tính không tồn tại hoặc có giá trị undefined), 
 * chúng ta cần xử lý trường hợp thuộc tính không tồn tại hoặc có giá trị undefined.
 * 
 * Với sửa đổi này, đoạn mã của bạn sẽ chạy mà không gặp lỗi và in ra các giá trị tương ứng của 
 * các thuộc tính name, location, và age của đối tượng user, bao gồm cả undefined cho các thuộc tính 
 * không được cung cấp.
 */
type User = {
    name: string;
    age?: number;
    location?: string;
}

const user: User = {
    name: 'HuXn',
    age: 22,
    location: 'China'
}

function getProperty(obj: User, propName: keyof User): string | number | undefined {
    return obj[propName];
}

console.log(getProperty(user, 'name')); // 'HuXn'
console.log(getProperty(user, 'location')); // 'China'
console.log(getProperty(user, 'age')); // 22

