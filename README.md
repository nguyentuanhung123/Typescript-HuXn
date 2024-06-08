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

### Void In Typescript

- Void is a type the represents the absence of any value. It is often used as the return type for functions that do not return a value

- Void là một loại đại diện cho sự vắng mặt của giá trị any. Nó thường được sử dụng làm kiểu trả về cho các hàm không trả về giá trị


### Never
- The never keyword is used to indicate that a fuction will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instated of runtime

- Từ khóa never được sử dụng để chỉ ra rằng một hàm sẽ không trả về bất cứ thứ gì hoặc một biến không bao giờ có giá trị. Loại never hữu ích để chỉ ra rằng không bao giờ có thể đạt được một số đường dẫn mã nhất định hoặc không thể đạt được một số giá trị nhất định. Nó có thể giúp phát hiện lỗi tại thời điểm biên dịch ngay trong thời gian chạy

## Never

# A function that always throws an error (Một hàm luôn đưa ra lỗi)
# A function that has an infinite loop (Một hàm có vòng lặp vô hạn)
# A function that can never have a value (Một hàm không bao giờ có giá trị)


### Arrays Types
- Arrays are a type of object that can store multiple values of the same data type. Arrays in Typescript are typed, which means you can specify the type of calues that an array can hold

- Mảng là một loại đối tượng có thể lưu trữ nhiều giá trị của cùng một kiểu dữ liệu. Mảng trong Typescript được gõ, có nghĩa là bạn có thể chỉ định loại giá trị mà một mảng có thể chứa

## 2 Tpes Of Arrays

# Using the square bracket notation [] to indicate an array of a specific type (Sử dụng ký hiệu ngoặc vuông [] để biểu thị một mảng thuộc loại cụ thể)

# Using the generic Array<type> notation to indicate an array of a specific type (Sử dụng ký hiệu Array<type> chung để biểu thị một mảng thuộc loại cụ thể)


### Multi Dimensional

- A multi-dimensional array is an array that contains other arrays as its elements. Multi-dimensional arrays can be defined using the same notations as one-dimensional arrays, but with nested square brackets.

- Mảng đa chiều là mảng có chứa các mảng khác làm phần tử của nó. Mảng đa chiều có thể được xác định bằng cách sử dụng các ký hiệu giống như mảng một chiều, nhưng có dấu ngoặc vuông lồng nhau.

### Objects
- An object in Typescript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. Typescript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

- Object trong Typescript là một kiểu dữ liệu có cấu trúc đại diện cho một tập hợp các thuộc tính, mỗi thuộc tính có một khóa và một giá trị liên quan. Các thuộc tính của một object có thể có các kiểu cụ thể và bản thân object đó có thể được chú thích bằng một kiểu, thường được xác định bằng giao diện hoặc bí danh kiểu. Typescript sử dụng kiểu gõ cấu trúc, nghĩa là hình dạng của một object (cấu trúc hoặc thuộc tính của nó) là yếu tố quan trọng đối với khả năng tương thích kiểu.

### Type Aliases

- A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

- Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

- Bí danh type là cách tạo tên mới cho type hiện có. Nó cho phép bạn xác định một type tùy chỉnh đề cập đến một type khác và đặt cho nó một tên có ý nghĩa hoặc mang tính mô tả hơn.

- Bí danh type được xác định bằng từ khóa type, theo sau là tên của bí danh, dấu bằng (=) và type mà nó đề cập đến.


### Optional Properties

- You can make a certain property optional in an object type by adding a question mark (?) after the property name.

- For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark after the email property:

- Bạn có thể tạo một thuộc tính tùy chọn nhất định trong một loại đối tượng bằng cách thêm dấu chấm hỏi (?) sau tên thuộc tính.

- Ví dụ: giả sử bạn có một loại đối tượng cho một người có các thuộc tính tên, tuổi và email nhưng bạn muốn đặt thuộc tính email là tùy chọn. Bạn có thể thực hiện việc này bằng cách thêm dấu chấm hỏi sau thuộc tính email:


### Intersection Types

- An intersection type is a way to combine multiple types into a single type that include all the properties and methods of each constituent type. An intersection type is denoted by the & symbol

- Intersection type là cách kết hợp nhiều type thành một type duy nhất bao gồm tất cả các thuộc tính và phương thức của từng type thành phần. Intersection type được biểu thị bằng ký hiệu &

