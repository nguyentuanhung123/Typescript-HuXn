/**
 * Hàm throwError:
 * Hàm này nhận một chuỗi msg và trả về kiểu never.
 * Bên trong hàm, nó ném ra một lỗi (Error) với thông báo msg.
 * Khi một lỗi được ném ra, hàm sẽ không bao giờ hoàn thành việc thực thi một cách bình thường. 
 * Do đó, kiểu trả về never là phù hợp.
 */
function throwError(msg: string): never {
    throw new Error(msg);
} 

/**
 * Hàm infiniteLoop:
 * Hàm này không nhận bất kỳ tham số nào và trả về kiểu never.
 * Bên trong hàm, một vòng lặp vô tận (while (true) {}) được sử dụng.
 * Vì vòng lặp này không bao giờ kết thúc, hàm cũng không bao giờ hoàn thành việc thực thi một cách bình thường, do đó kiểu trả về never là đúng.
 */
function infiniteLoop(): never {
    while (true) {}
}

/**
 * Biến x và hàm neverReturns:
 * x được khai báo với kiểu never.
 * Hàm neverReturns tương tự như infiniteLoop, có một vòng lặp vô tận và trả về kiểu never.
 * Cuối cùng, x được gán giá trị trả về của neverReturns().
 * Vì neverReturns không bao giờ hoàn thành một cách bình thường, kiểu never là hợp lệ cho biến x.
 */
let x:never;
function neverReturns(): never {
    while (true) {}
}

x = neverReturns();

/**
 * Tóm tắt: Trong TypeScript, kiểu never dùng để chỉ rằng một hàm không bao giờ hoàn thành một cách bình thường, 
 * có thể là do ném ra một lỗi hoặc một vòng lặp vô tận. 
 * Các hàm trong đoạn mã này đều minh họa cho các tình huống như vậy.
 */


