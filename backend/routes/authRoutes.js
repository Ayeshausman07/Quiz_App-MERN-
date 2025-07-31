const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  forgotPassword,
  resetPassword,
  toggleBlockUser,
} = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Protected routes
router.get('/users', protect, adminOnly, getAllUsers);
router.put('/users/toggle-block/:id', protect, adminOnly, toggleBlockUser);

module.exports = router;