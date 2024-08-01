/**
 * Hàm mapArray
 * Hàm mapArray sẽ chuyển đổi các phần tử trong một mảng từ kiểu dữ liệu này sang kiểu dữ liệu khác 
 * bằng cách sử dụng một hàm chuyển đổi.
 * 
 * 1. Generics <T, U>:
 * <T> là kiểu dữ liệu của các phần tử trong mảng đầu vào.
 * <U> là kiểu dữ liệu của các phần tử trong mảng đầu ra.
 * 
 * 2.Tham số array:
 * array: T[] nghĩa là array là một mảng chứa các phần tử có kiểu dữ liệu là T.
 * 
 * 3. Tham số transform:
 * transform: (item: T) => U là một hàm nhận vào một phần tử của mảng (kiểu T) và trả về một phần tử mới (kiểu U). 
 * Hàm này định nghĩa cách chuyển đổi từng phần tử.
 * 
 * 4. Giá trị trả về:
 * U[] là kiểu dữ liệu của mảng kết quả sau khi đã chuyển đổi. Mảng này chứa các phần tử có kiểu dữ liệu là U.
 * 
 * 5. Sử dụng array.map:
 * return array.map((item) => transform(item)); 
 * sử dụng phương thức map của mảng để chuyển đổi các phần tử. 
 * Hàm map sẽ gọi hàm transform trên từng phần tử của mảng và trả về một mảng mới chứa các phần tử đã được chuyển đổi.
 */

function mapArray<T, U>(array: T[], transform: (item: T) => U) : U[] {
    return array.map((item) => transform(item));
}

/**
 * Example 1
 * numberToString là một hàm chuyển đổi trả về chuỗi biểu diễn của số.
 * mapArray<number, string>(numbers, numberToString) sẽ trả về một mảng chứa các chuỗi biểu diễn của các số từ numbers.
 */
const numbers = [1, 2, 3, 4, 5];
const numberToString = (n: number) => n.toString();

const stringNumbers = mapArray<number, string>(numbers, numberToString);
console.log(stringNumbers); // ["1", "2", "3", "4", "5"]


/**
 * Example 2
 * toObject là một hàm chuyển đổi trả về một đối tượng chứa thuộc tính name với giá trị là chuỗi đầu vào.
 * mapArray<string, { name: string }>(strings, toObject) sẽ trả về một mảng chứa các đối tượng từ strings.
 */
const strings = ['apple', 'banana', 'cherry'];
const toObject = (s: string) => ({ name: s });

const objectArray = mapArray<string, { name: string }>(strings, toObject);
console.log(objectArray);  // [ { name: 'apple' }, { name: 'banana' }, { name: 'cherry' } ]

/**
 * Example 3
 * isGreaterThanTwo là một hàm chuyển đổi trả về true nếu số lớn hơn 2, ngược lại trả về false.
 * mapArray<number, boolean>(numbers, isGreaterThanTwo) sẽ trả về một mảng chứa các giá trị boolean từ numbers.
 */
const nums = [1, 2, 3, 4, 5];
const isGreaterThanTwo = (n: number) => n > 2;

const booleanArray = mapArray<number, boolean>(nums, isGreaterThanTwo);
console.log(booleanArray); // [false, false, true, true, true]


