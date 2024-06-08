### Tải Typescript trong thư mục hiện thời
- npm i -g typescript
- npm i -g ts-node

# Chỉnh lại Run Code
- B1: Vào File -> References -> Keyboard Short Cut
- B2: Ở Run Code ta muốn chuyển thành Shift + Enter thì chuyển bằng cách nhấn shift bên trái và nhấn shift bên tay phải với nút Enter

# Run code
- Nhấn cùng lúc Shift + Enter

### Annotations
- Annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch errors early in development by allowing them to specify what types of values can be assigned to a given variable or passed as an argument to a function

- Chú thích được sử dụng để chỉ định kiểu dữ liệu của biến, tham số, giá trị trả về của hàm và các loại giá trị khác. Chú thích giúp nhà phát triển sớm phát hiện lỗi trong quá trình phát triển bằng cách cho phép họ chỉ định loại giá trị nào có thể được gán cho một biến nhất định hoặc được chuyển làm đối số cho hàm

### Type Inference
- Type Inference is a feadture in Typescript that allows the compiler to automatically determine the type of a variable based on its value. In other word, if you declare a variable without explicitly specifying its type, Typescript will try to infer the type based on the value you assign to it.

- Type Inference là một tính năng trong Typescript cho phép trình biên dịch tự động xác định loại biến dựa trên giá trị của nó. Nói cách khác, nếu bạn khai báo một biến mà không chỉ định rõ ràng loại của nó, Typescript sẽ cố gắng suy ra loại dựa trên giá trị bạn gán cho nó


### Any Type
- Typescript has a special any type that can be used to represent any type. When a variable is annotated with the any type, Typescript will allow it to have any value and disable all type checking for that variable and its properties.

- Typescript có một loại đặc biệt có thể được sử dụng để thể hiện bất kỳ loại nào. Khi một biến được chú thích bằng loại any, Typescript sẽ cho phép nó có bất kỳ giá trị nào và vô hiệu hóa tất cả việc kiểm tra loại cho biến đó và các thuộc tính của nó.

### Any Type (WARNING)
- While the any type can be useful in certain situations, it should be used sparingly. Overuse of any can lead to untyped code and make it harder to catch type-related bugs during development. It's is generally better to use more specific types whenever possible to get the benefits of Typescript's type checking.

- Mặc dù loại any có thể hữu ích trong một số trường hợp nhất định nhưng nó nên được sử dụng một cách tiết kiệm. Việc sử dụng quá mức any có thể dẫn đến mã không được gõ và khiến việc phát hiện các lỗi liên quan đến loại trong quá trình phát triển trở nên khó khăn hơn. Nói chung, tốt hơn là nên sử dụng các loại cụ thể hơn bất cứ khi nào có thể để nhận được lợi ích từ việc kiểm tra loại của Typescript.

### Function Parameters Annotations

- Function parameters annotations in Typescript are used to specify rhe expected types of the parameters that a function takes

- Các chú thích tham số hàm trong Typescript được sử dụng để chỉ định các loại tham số dự kiến ​​mà hàm sẽ sử dụng