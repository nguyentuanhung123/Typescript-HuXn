/**
 * Ví dụ 3: Duyệt qua các thuộc tính của đối tượng
 * Khi bạn cần duyệt qua tất cả các thuộc tính của đối tượng và xử lý chúng một cách động:
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

/**
 * 1. Sử dụng key as keyof User:
 * key as keyof User: Đảm bảo rằng key là một khóa hợp lệ của kiểu User. 
 * Điều này giúp TypeScript nhận diện rằng key có thể là 'name', 'age', hoặc 'location'.
 * 
 * 2. Kiểm tra hasOwnProperty:
 * Sử dụng user.hasOwnProperty(key) để kiểm tra xem thuộc tính có phải là thuộc tính trực tiếp của đối tượng user, 
 * không phải thuộc tính kế thừa.
 * 
 * Với sửa đổi này, đoạn mã của bạn sẽ chạy mà không gặp lỗi và in ra các giá trị tương ứng của các thuộc tính name, age, và location của đối tượng user.
 */
for (const key in user) {
    if (user.hasOwnProperty(key)) { // Kiểm tra thuộc tính có phải là của đối tượng (không phải kế thừa)
        // Đảm bảo rằng key là một khóa hợp lệ của User
        const value = user[key as keyof User];
        console.log(`${key}: ${value}`);
    }
}