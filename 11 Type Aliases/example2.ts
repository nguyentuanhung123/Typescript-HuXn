/**
 * Cú pháp user[name] (hoặc user['name']) trong TypeScript (và JavaScript) thường được sử dụng 
 * khi bạn muốn truy cập thuộc tính của một đối tượng bằng cách sử dụng một biến hoặc một chuỗi. 
 * Đây là một trường hợp hữu ích khi bạn không biết trước tên thuộc tính và muốn truy cập nó một cách động.
 * 
 * ruy cập thuộc tính một cách động (dynamic property access) nghĩa là bạn muốn truy cập các thuộc tính của đối tượng 
 * bằng cách sử dụng một biến chứa tên của thuộc tính đó, thay vì biết trước tên thuộc tính và sử dụng cú 
 * pháp dấu chấm. Điều này rất hữu ích trong các tình huống mà tên thuộc tính không cố định hoặc không được biết trước.
 */

/**
 * Ví dụ 1: Truy cập thuộc tính bằng biến
 * Giả sử bạn có một đối tượng user và bạn muốn truy cập một thuộc tính cụ thể của nó mà tên thuộc tính đó được lưu trữ trong một biến:
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

const propertyName = 'age'; // Tên thuộc tính được lưu trong biến

console.log(user[propertyName]); // 22


