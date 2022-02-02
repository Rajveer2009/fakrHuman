import faker from "faker";

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let fullName = firstName + " " + lastName;
let email = faker.internet.email(fullName);
let phone = faker.phone.phoneNumber()

const fakrHuman = {
    "firstName": firstName,
    "lastName": lastName,
    "fullName": fullName,
    "phoneNumber": phone,
    "email": email
};

console.log(fakrHuman);