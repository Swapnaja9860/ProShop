import express from 'express';
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
import ProductRouter from './routes/productRoutes.js';
import UserRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT || 5000;


connectDB(); // Connect to MongoDB

const app = express();

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded())

//Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send('API is running...')
})


app.use('/api/products', ProductRouter);
app.use('/api/users', UserRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server is running on ${port}`))

