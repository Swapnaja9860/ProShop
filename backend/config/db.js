import mongoose from 'mongoose';

// async because the mongose connect returns a promise
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } 
    catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB;
