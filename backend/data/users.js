import bcrypt from 'bcryptjs';

const users = [
{
    name : "Admin user",
    email: "admin@gmail.com",
    isAdmin: true,
    password : bcrypt.hashSync('123456', 10)
    // the second param is salt: the greater the number, it will
    // more secure but it will take more time
},
{
    name : "John Doe",
    email: "john_doe@gmail.com",
    isAdmin: false,
    password : bcrypt.hashSync('123456', 10)
},{
    name : "Jane Doe",
    email: "jane@gmail.com",
    isAdmin: false,
    password : bcrypt.hashSync('123456', 10)
}]

export default users;
