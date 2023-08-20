import express from 'express';
import connectDB from './config/db.js';
import ProductRouter from './routes/productRoutes.js';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5000;


connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res)=>{
    res.send('API is running...')
})

app.use('/api/products', ProductRouter);


app.listen(port, ()=> console.log(`Server is running on ${port}`))

