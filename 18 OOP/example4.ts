/**
 * private first: string: Thuộc tính first được khai báo với từ khóa private, 
 * có nghĩa là thuộc tính này chỉ có thể được truy cập từ bên trong lớp Person. 
 * Không thể truy cập thuộc tính first từ bên ngoài lớp.
 * 
 * public last: string: Thuộc tính last được khai báo với từ khóa public, cho phép truy cập từ bên ngoài lớp.
 * getName(): Phương thức này trả về tên đầy đủ của người bằng cách kết hợp thuộc tính first và last.
 * 
 * Tóm tắt:
 * private: Các thuộc tính hoặc phương thức được khai báo với từ khóa private chỉ có thể được truy cập từ bên trong lớp đó. Điều này giúp bảo vệ dữ liệu và quản lý quyền truy cập.
 * public: Các thuộc tính hoặc phương thức được khai báo với từ khóa public có thể được truy cập từ bất kỳ đâu.
 * Phương thức getName() cho phép bạn truy cập thuộc tính private để trả về tên đầy đủ của người mà không cần truy cập trực tiếp thuộc tính first.
 */

class Person {
    private first: string;
    public last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }

    getName(): string {
        return `${this.first} ${this.last}`
    }
}

let p1 = new Person("John", "Doe") ;
// console.log(p1.first); // ERROR
console.log(p1.getName()); // John Doe


