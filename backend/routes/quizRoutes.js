const express = require('express');
const router = express.Router();
const {
  getTopics,
  startQuiz,
  submitQuiz,
  getQuizHistory,
  getQuestions,
  addQuestion,
  deleteQuestion,
  getAllResults,
  updateQuestion,
  getDashboardStats // Add this new import
} = require('../controllers/quizController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/topics', protect, getTopics);
router.post('/start', protect, startQuiz);
router.post('/submit', protect, submitQuiz);
router.get('/history', protect, getQuizHistory);

// Admin question management
router.get('/questions', protect, adminOnly, getQuestions);
router.post('/questions', protect, adminOnly, addQuestion);
router.put('/questions/:id', protect, adminOnly, updateQuestion);
router.delete('/questions/:id', protect, adminOnly, deleteQuestion);

// Admin results
router.get('/results', protect, adminOnly, getAllResults);

// Admin dashboard stats
router.get('/dashboard/stats', protect, adminOnly, getDashboardStats); // Add this new route

module.exports = router;