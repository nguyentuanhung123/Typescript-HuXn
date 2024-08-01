let password: 'secretpassword' = 'secretpassword';
console.log(password); // secretpassword

/**
 * Đoạn mã của bạn khai báo một biến password với kiểu là một literal type, 
 * cụ thể là 'secretpassword', và gán giá trị 'secretpassword' cho nó.
 */

/**
 * Giải thích:
 * 
 * Literal Type:
 * password: 'secretpassword': Biến password có kiểu literal type 'secretpassword'. 
 * Điều này có nghĩa là password chỉ có thể nhận giá trị 'secretpassword'. 
 * Đây là một cách để TypeScript hạn chế giá trị của biến chỉ ở một giá trị cụ thể.
 * 
 * Gán giá trị:
 * password = 'secretpassword': Bạn gán giá trị 'secretpassword' cho biến password, 
 * và điều này hợp lệ vì giá trị này đúng với kiểu của biến.
 * 
 * In ra giá trị:
 * console.log(password);: In ra giá trị của biến password, sẽ là 'secretpassword'.
 * 
 * Lưu ý:
 * Nếu bạn cố gắng gán một giá trị khác cho biến password, 
 * TypeScript sẽ báo lỗi vì giá trị đó không phù hợp với kiểu literal type 'secretpassword'.
 */