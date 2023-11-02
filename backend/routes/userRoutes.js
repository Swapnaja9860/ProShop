import express from 'express';
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUserById,
    getUsers,
    deleteUser,
    updateUser,
} from '../controllers/userController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.get('/', getProducts)
// router.get('/:id', getProduct)

router.route('/').get(protect, admin, getUsers).post(registerUser)
router.post('/logout', logoutUser)
router.post('/auth', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin,deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router
