type UserInfo = {
   first: string;
   last: string;
   age: number
}

type AccountDetails = {
   email: string;
   password: string;
}

type User = UserInfo & AccountDetails

const huxn: User = {
   first: "HuXn",
   last: "WebDev",
   age: 20,
   email: "huxn@gmail.com",
   password: "password123"
};

console.log(`Name: ${huxn.first} ${huxn.last} Age: ${huxn.age} Email: ${huxn.email} Password: ${huxn.password}`);
// Name: HuXn WebDev Age: 20 Email: huxn@gmail.com Password: password123

