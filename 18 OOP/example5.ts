/**
 * Trong đoạn mã này, bạn định nghĩa hai lớp: Human và Person. 
 * Person kế thừa từ Human và sử dụng các thuộc tính và phương thức của lớp cơ sở. 
 * 
 * private first: string: Thuộc tính first là private, chỉ có thể được truy cập từ bên trong lớp Human.
 * public last: string: Thuộc tính last là public, có thể được truy cập từ bất kỳ đâu.
 * protected age: number: Thuộc tính age là protected, có thể được truy cập từ bên trong lớp Human và các lớp kế thừa (Person).
 * getName(): Phương thức getName() trả về chuỗi kết hợp tên, họ và tuổi của Human.
 */

class Human {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last} Age: ${this.age}`
    }
}

/**
 * extends Human: Lớp Person kế thừa từ lớp Human, 
 * có nghĩa là Person sẽ có tất cả các thuộc tính và phương thức của lớp Human.
 * 
 * super(first, last, age): Gọi hàm khởi tạo của lớp cơ sở (Human) để gán giá trị cho các thuộc tính kế thừa.
 */
class Person extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }
}

/**
 * Tạo một đối tượng huxn từ lớp Person với các giá trị 'HuXn', 'WebDev', và 20.
 * console.log(huxn); in toàn bộ đối tượng huxn, sẽ hiển thị các thuộc tính và giá trị của nó.
 */
const huxn = new Person("HuXn", "WebDev", 20)
console.log(huxn); // Person { first: 'HuXn', last: 'WebDev', age: 20 }

/**
 * Kết quả đúng của TypeScript: Person { last: 'WebDev', age: 20 }
 * 
 * Giải thích Kết quả:
 * Thuộc tính private: Thuộc tính first không được hiển thị trong kết quả vì nó là private.
 * Thuộc tính public: Thuộc tính last là public, nên nó hiển thị trong kết quả.
 * Thuộc tính protected: Thuộc tính age là protected, nên nó không hiển thị trong kết quả khi in đối tượng. Tuy nhiên, nó vẫn có thể được truy cập từ phương thức trong lớp hoặc lớp kế thừa.
 * 
 * Khi in đối tượng Person ra console, thuộc tính private (first) không nên hiển thị, 
 * nhưng thuộc tính protected (age) có thể được hiển thị, tùy thuộc vào cách môi trường phát triển xử lý việc hiển thị thuộc tính.
 * 
 * Điều này cho thấy rằng tất cả các thuộc tính của đối tượng Person đều được hiển thị, 
 * bao gồm cả thuộc tính private và protected, điều này không phải là hành vi mặc định của TypeScript hoặc JavaScript. 
 * Dưới đây là giải thích chi tiết về lý do:
 * 
 * 1. private và protected trong TypeScript:
 * private: Thuộc tính private chỉ có thể được truy cập từ bên trong lớp mà nó được khai báo. 
 * Trong lý thuyết, thuộc tính private không nên xuất hiện khi bạn in đối tượng ra console.
 * protected: Thuộc tính protected có thể được truy cập từ các lớp kế thừa nhưng không thể được truy cập từ bên ngoài lớp hoặc lớp kế thừa.
 * 
 * 2. Hành vi in đối tượng:
 * Khi bạn in đối tượng ra console, trình duyệt hoặc môi trường thực thi JavaScript có thể 
 * hiển thị tất cả các thuộc tính của đối tượng, bao gồm cả thuộc tính private và protected. 
 * Điều này không phải là hành vi chính thức của TypeScript nhưng có thể xảy ra do cách mà console log 
 * hiển thị các thuộc tính của đối tượng trong các môi trường khác nhau.
 */




