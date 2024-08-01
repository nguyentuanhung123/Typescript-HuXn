/**
 * 1. Generics <T>:
 * <T> là một loại tham số chung (generic) giúp hàm có thể hoạt động với bất kỳ loại nào. 
 * Nó cho phép bạn xác định kiểu dữ liệu mà hàm sẽ làm việc.
 * 
 * 2. Tham số array: 
 * array: T[] nghĩa là array là một mảng chứa các phần tử có kiểu dữ liệu là T.
 * 
 * 3. Tham số condition:
 * condition: (item: T) => boolean là một hàm nhận vào một phần tử của mảng (kiểu T) và trả về một giá trị boolean. 
 * Hàm này định nghĩa điều kiện để lọc các phần tử trong mảng.
 * 
 * 4. Giá trị trả về:
 * T[] là kiểu dữ liệu của mảng kết quả sau khi đã lọc. Mảng này chứa các phần tử có kiểu dữ liệu là T.
 * 
 * 5. Sử dụng array.filter:
 * return array.filter((item) => condition(item)); 
 * sử dụng phương thức filter của mảng để lọc các phần tử thỏa mãn điều kiện. 
 * Hàm filter sẽ gọi hàm condition trên từng phần tử của mảng và chỉ giữ lại những phần tử mà hàm condition trả về true.
 * 
 */

function filterArray<T>(array: T[], condition: (item: T) => boolean) : T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

const stringArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWords); // [ 'apple', 'date' ]
