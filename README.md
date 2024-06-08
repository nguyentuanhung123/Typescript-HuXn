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

### Unions

- Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

- The syntax for defining a union type in TypeScript uses the pipe symbol (|)

- Unions dùng để khai báo một kiểu có thể có một trong nhiều kiểu có thể. Unions rất hữu ích khi chúng ta muốn cho phép một biến hoặc tham số chấp nhận nhiều type.

- Cú pháp xác định kiểu kết hợp trong TypeScript sử dụng ký hiệu ống dẫn (|)

### Literal Types

- Literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

- Literal types cho phép bạn chỉ định một giá trị chỉ có thể là một giá trị chữ cụ thể. Điều này có nghĩa là một biến có kiểu chữ chỉ có thể có một giá trị cụ thể và không có giá trị nào khác.

### Tuples

- Tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with know lengths.

- Tuple là kiểu đại diện cho một mảng có số phần tử cố định, trong đó mỗi phần tử có thể có một type khác nhau. Thứ tự của các type trong định nghĩa bộ dữ liệu tương ứng với thứ tự của các giá trị trong mảng thực tế. Bộ dữ liệu tương tự như mảng, nhưng chúng có cấu trúc cụ thể và có thể được sử dụng để mô hình hóa các chuỗi hữu hạn với độ dài đã biết.


### Enums

- Enums is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

- Enums là cách định nghĩa một tập hợp các hằng số được đặt tên. Enums cho phép bạn xác định một tập hợp các giá trị liên quan có thể được sử dụng thay thế cho nhau trong mã của bạn.

### Class Properties Annotations

- You can annotate properties with a type. This allows you to define the data type of the property and ensure that it is always consistent

- Bạn có thể chú thích các thuộc tính bằng type. Điều này cho phép bạn xác định kiểu dữ liệu của thuộc tính và đảm bảo rằng nó luôn nhất quán

## Access Modifiers

- In Typescript, you can use access modifiers to control the visibility of class members (propoerties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class

- Trong Typescript, bạn có thể sử dụng công cụ sửa đổi truy cập để kiểm soát mức độ hiển thị của các thành viên lớp (thuộc tính và phương thức). Công cụ sửa đổi quyền truy cập xác định cách thức mà các thành viên lớp có thể được truy cập từ bên trong và bên ngoài lớp

## There are three types of access modifier in Typescript

- Public
- Private
- Protected

# Public

- Members marked as public can be accessed from anywhere, both inside and outside the class

- Các thành viên được đánh dấu là công khai có thể được truy cập từ mọi nơi, cả trong và ngoài class

# Private

- Members marked as private can only be accessed from within the class they are defined in.

- Các thành viên được đánh dấu là riêng tư chỉ có thể được truy cập từ bên trong class mà chúng được xác định.

# Protected

- Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class

- Các thành viên được đánh dấu là protected có thể được truy cập từ bên trong class mà chúng được định nghĩa, cũng như bất kỳ class con nào mở rộng class đó

## Getters & Setters

- Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

- Getters và setters được sử dụng để truy cập và sửa đổi các thuộc tính của class. Getters và setters cho phép bạn xác định một thuộc tính trong một class trông giống như một biến đơn giản nhìn từ bên ngoài nhưng bên trong có logic bổ sung để nhận và đặt giá trị.
