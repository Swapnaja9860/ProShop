import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc Auth user and get the token
// @route POST /api/users/login
// @access Public
const authUser =  asyncHandler(async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id) 
        res.status(200).json({
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
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email, 
        password
    });

// if we look in local storage, that user is stored in local storage.
// And if I go down to my cookie, you can see that my http only cookie is stored as well.
// So I'm logged in. And then if I log out, that gets destroyed.
// So I think that this is not only it's not only more secure than sending your Json web token back to the client and storing it in local storage, it's not only more secure than that, but it's also easier.
// We don't have to worry about sending a token, you know, manually to every protected route because it's always going to be sent when you store it in Http only cookie, it's going to be sent until it's destroyed.


    if(user){
         generateToken(res, user._id) 
        res.status(201).json({
            _id : user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
    })
    } else{
        res.status(400);
        throw new Error('Invalid User Data');
    }
   
})

// @desc Logout User / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser =  asyncHandler(async (req, res)=>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({message: "Logged out successfully!"})
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile =  asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id);

    if(user){
    res.status(200).json({
    _id : user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
    })
    }
    else{
        res.status(404);
        throw new Error('User not found')
    }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile =  asyncHandler(async (req, res)=>{
    //const user = await User.findById(req.user._id);
    const user = req.user;

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password;
        }
        const updateUser = await user.save();

         res.status(200).json({
        _id : updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin
        })
    } else{
        res.status(404);
        throw new Error('User not found')
    }

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