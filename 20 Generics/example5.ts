/**
 * Đoạn code bạn đưa ra là một hàm TypeScript có chức năng chọn ngẫu nhiên một cặp khóa-giá trị từ một đối tượng và trả về cặp đó.
 * 
 * 1.Generics <T>:
 * <T> là một loại tham số chung (generic) giúp hàm có thể hoạt động với bất kỳ loại nào. 
 * Nó cho phép bạn xác định kiểu dữ liệu mà hàm sẽ làm việc.
 * 
 * 2. Tham số obj:
 * obj: { [key: string]: T } nghĩa là obj là một đối tượng với các khóa là chuỗi và các giá trị có kiểu dữ liệu là T.
 * 
 * 3. Giá trị trả về:
 * { key: string; value: T } là kiểu của đối tượng mà hàm sẽ trả về. 
 * Đối tượng này có hai thuộc tính: key là chuỗi và value có kiểu dữ liệu là T.
 * 
 * 4. Lấy tất cả các khóa của đối tượng:
 * const keys = Object.keys(obj); sử dụng Object.keys để lấy danh sách tất cả các khóa của đối tượng obj.
 * 
 * 5. Chọn một khóa ngẫu nhiên:
 * const randKey = keys[Math.floor(Math.random() * keys.length)]; chọn ngẫu nhiên một khóa từ danh sách các khóa 
 * bằng cách sử dụng Math.random và Math.floor.
 * 
 * 6. Trả về cặp khóa-giá trị:
 * return { key: randKey, value: obj[randKey] }; tạo một đối tượng chứa khóa ngẫu nhiên và giá trị tương ứng, sau đó trả về đối tượng này.
 */

function getRandomKeyValuePair<T>(obj: {[key: string] : T}) : { 
    key: string;
    value: T
} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];

    return { key: randKey, value: obj[randKey] };
}

const stringObject = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair); // { key: 'b', value: 'banana' }

const numberObject = {
    one: 1,
    two: 2,
    three: 3
};

const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair); // { key: 'one', value: 1 }


