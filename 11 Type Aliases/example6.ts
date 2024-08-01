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
 * Khai báo kiểu cho properties:
 * keyof User là một kiểu đại diện cho tất cả các khóa hợp lệ của User, tức là 'name' | 'age' | 'location'.
 * Mảng properties được khai báo là một mảng của các giá trị kiểu keyof User.
 */

const properties: (keyof User)[] = ['name', 'age', 'location'];

/**
 * user[prop] sẽ không gặp lỗi vì prop được đảm bảo là một khóa hợp lệ của User
 */

properties.forEach(prop => {
    // Đảm bảo rằng prop là một khóa hợp lệ của User
    console.log(user[prop]);
});

/**
 * Sử dụng keyof User giúp TypeScript biết rằng các giá trị trong mảng properties là các thuộc tính hợp lệ của đối tượng user.
 * Điều này giúp đảm bảo rằng bạn không gặp lỗi khi truy cập các thuộc tính của đối tượng bằng cách sử dụng giá trị từ mảng properties.
 */