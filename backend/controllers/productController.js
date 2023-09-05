import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts =  asyncHandler(async (req, res)=>{
    const products = await Product.find({})
    res.json(products);
})

// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
const getProduct =  asyncHandler(async (req, res) =>{
    const productId = req.params.id
    const product = await Product.findById(productId)
    if(product){
        return res.json(product)
    }
    else{
        res.status(404);
        throw new Error('Resource not Found');
    }
})

export {getProducts, getProduct};
