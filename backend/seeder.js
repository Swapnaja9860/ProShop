import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from './data/products.js';
import User from "./models/userModel.js";
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from '../backend/config/db.js'


//The config() function reads the .env file in the current directory and 
//loads its contents into the process's environment variables. 

dotenv.config();

connectDB()

// every mongoose method we call is going to return a promise
const importData = async () => {
    try {
        // delete everything
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users);

        const adminUser = await createUsers[0]._id;
        const productsWithUser = products.map(p => {
        // modifies the original object : not safer
        //    return p["user"] = adminUser

        // make a copy of object and update it : safer
        return {...p, user : adminUser}
        })
        await Product.insertMany(productsWithUser)

        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`{error}`.red.inverse);
        process.exit(1); // exit with error
    }
}

const destroyData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data Destroyed!".green.inverse);
        process.exit();

    } catch (error) {
        console.log(`{error}`.red.inverse);
        process.exit(1); // exit with error
    }
}

if(process.argv[2] === "-d"){
    destroyData();
}else{
    importData()
}
