/**
 * public first: string và public last: string: 
 * Các thuộc tính first và last được khai báo với từ khóa public, 
 * có nghĩa là các thuộc tính này có thể được truy cập từ bên ngoài lớp.
 * 
 * Lưu ý:
 * public: Trong TypeScript, từ khóa public là giá trị mặc định cho các thuộc tính và phương thức 
 * trong một lớp. Tức là, nếu bạn không chỉ định bất kỳ quyền truy cập nào (như public, private, hoặc protected), 
 * thuộc tính và phương thức của lớp sẽ được mặc định là public.
 * In đối tượng: Khi bạn in đối tượng ra console, TypeScript/JavaScript hiển thị toàn bộ thuộc tính và giá trị của đối tượng.
 * In thuộc tính: Bạn có thể truy cập và in giá trị của thuộc tính cụ thể của đối tượng bằng cách sử dụng cú pháp object.property.
 *
 */

class Person {
    public first: string;
    public last: string;
    
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last
    }
}

let p1 = new Person("John", "Doe") 
console.log(p1); // Person { first: 'John', last: 'Doe' }
console.log(p1.last); // Doe
