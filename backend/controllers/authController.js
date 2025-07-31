const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const crypto = require('crypto');
const { sendEmail, getPasswordResetEmail } = require('../utils/sendEmail');

// ===========================
// ✅ Register User
// ===========================
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(res, user._id);

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isBlocked: user.isBlocked,
    token,
  });
});

// ===========================
// ✅ Login User
// ===========================
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide both email and password');
  }

  const user = await User.findOne({ email }).select('+password');
  
  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  if (user.isBlocked) {
    res.status(403);
    throw new Error('Your account has been blocked. Please contact admin.');
  }

  const token = generateToken(res, user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isBlocked: user.isBlocked,
    token,
  });
});

// ===========================
// ✅ Logout User
// ===========================
exports.logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

// ===========================
// ✅ Get All Users (Admin)
// ===========================
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

// ===========================
// ✅ Block/Unblock User (Admin)
// ===========================
exports.toggleBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  // Prevent admin from blocking themselves
  if (id === req.user._id.toString()) {
    res.status(400);
    throw new Error('You cannot block yourself');
  }

  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  user.isBlocked = !user.isBlocked;
  await user.save();

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isBlocked: user.isBlocked,
    message: `User ${user.isBlocked ? 'blocked' : 'unblocked'} successfully`
  });
});

// ===========================
// ✅ Forgot Password
// ===========================
exports.forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error('No user found with this email');
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  const emailHTML = getPasswordResetEmail(resetURL);

  try {
    await sendEmail(user.email, 'Reset Your Password', emailHTML);
    res.json({ message: 'Reset link sent to your email' });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    res.status(500);
    throw new Error('Failed to send reset email');
  }
});

// quizController.js
exports.getAllResults = asyncHandler(async (req, res) => {
  const results = await QuizResult.find()
    .populate('user', 'name email')
    .sort({ createdAt: -1 });
  res.json(results);
});

// ===========================
// ✅ Reset Password
// ===========================
exports.resetPassword = asyncHandler(async (req, res) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Reset token is invalid or has expired');
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.json({ message: 'Password updated successfully' });
});