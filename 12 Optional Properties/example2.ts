type User = {
    name: string;
    age?: number;
    readonly location: string
}

const user: User = {
    name: "HuXn",
    location: "China"
}

user.location = "USA"

/**
 * Tuy nhiên, vì thao tác thay đổi thuộc tính location sẽ gây ra lỗi biên dịch, 
 * nên đoạn mã này sẽ không thực thi thành công.
 */
console.log(`Name: ${user.name} Age: ${user.age} Location: ${user.location}`);
// error TS2540: Cannot assign to 'location' because it is a read-only property.

