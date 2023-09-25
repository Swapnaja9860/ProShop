import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc Auth user and get the token
// @route POST /api/users/login
// @access Public
const authUser =  asyncHandler(async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET,
            {
                expiresIn : '30d'
            })

        // set JWT as http only cookie
        res.cookie('jwt', token, {
            httpOnly : true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30*24*60*60*1000
        })
        
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else{
        res.status(401);
        throw new Error('Invalid Email or Password')
    }
})

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser =  asyncHandler(async (req, res)=>{
    res.send('register user');
})

// @desc Logout User / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser =  asyncHandler(async (req, res)=>{
    res.send('logout user');
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile =  asyncHandler(async (req, res)=>{
    res.send('get user profile');
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile =  asyncHandler(async (req, res)=>{
    res.send('update user profile');
})

// @desc Get all users
// @route GET /api/users
// @access Private/admin
const getUsers =  asyncHandler(async (req, res)=>{
    res.send('get all users');
})

// @desc Get user by Id
// @route GET /api/users/:id
// @access Private/admin
const getUserById =  asyncHandler(async (req, res)=>{
    res.send('get a user');
})

// @desc Delete all users
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser =  asyncHandler(async (req, res)=>{
    res.send('Delete user');
})

// @desc Update user
// @route PUT /api/users/:id
// @access Private/admin
const updateUser =  asyncHandler(async (req, res)=>{
    res.send('Update a user');
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    getUsers,
    deleteUser,
    updateUser,
}