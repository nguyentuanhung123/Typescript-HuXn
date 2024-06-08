let password: string | number = 20

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    first: "John",
    last: "Doe",
    age: 19,
}

console.log(user);



