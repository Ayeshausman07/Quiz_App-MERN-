const { Question, QuizResult } = require('../models/quizModel');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// ====================== USER QUIZ FUNCTIONS ======================

// Get all available topics
exports.getTopics = asyncHandler(async (req, res) => {
  const topics = await Question.distinct('topic');
  res.json(topics);
});

// Start a new quiz
exports.startQuiz = asyncHandler(async (req, res) => {
  const { topic, difficulty, questionCount } = req.body;
  
  // Validate inputs
  if (!topic || !difficulty || !questionCount) {
    res.status(400);
    throw new Error('Please provide topic, difficulty, and question count');
  }

  if (questionCount < 5 || questionCount > 25) {
    res.status(400);
    throw new Error('Question count must be between 5 and 25');
  }

  // Get random questions
  const questions = await Question.aggregate([
    { $match: { topic, difficulty } },
    { $sample: { size: parseInt(questionCount) } },
    { $project: { correctAnswer: 0 } } // Don't send correct answers to client
  ]);

  if (questions.length === 0) {
    res.status(404);
    throw new Error('No questions found for the selected criteria');
  }

  res.json({
    topic,
    difficulty,
    questions,
    totalQuestions: questions.length
  });
});

// Submit quiz results
exports.submitQuiz = asyncHandler(async (req, res) => {
  const { topic, difficulty, answers, timeTaken } = req.body;
  const userId = req.user._id;

  // Validate inputs
  if (!topic || !difficulty || !answers || !timeTaken) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  // Get correct answers
  const questionIds = answers.map(a => a.questionId);
  const questions = await Question.find({ 
    _id: { $in: questionIds },
    topic,
    difficulty
  });

  if (questions.length !== answers.length) {
    res.status(400);
    throw new Error('Invalid quiz submission');
  }

  // Calculate score
  let score = 0;
  const results = answers.map(answer => {
    const question = questions.find(q => q._id.toString() === answer.questionId);
    const isCorrect = question.correctAnswer === answer.selectedOption;
    if (isCorrect) score++;
    return {
      questionId: question._id,
      question: question.question,
      selectedOption: answer.selectedOption,
      correctOption: question.correctAnswer,
      isCorrect
    };
  });

  // Save quiz result
  const quizResult = await QuizResult.create({
    user: userId,
    topic,
    difficulty,
    score,
    totalQuestions: answers.length,
    timeTaken
  });

  res.json({
    score,
    totalQuestions: answers.length,
    percentage: Math.round((score / answers.length) * 100),
    timeTaken,
    results,
    quizResultId: quizResult._id
  });
});

// Get user's quiz history
exports.getQuizHistory = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const history = await QuizResult.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(10);
  
  res.json(history);
});

// ====================== ADMIN QUIZ FUNCTIONS ======================

// Get all questions (admin)
exports.getQuestions = asyncHandler(async (req, res) => {
  const { topic, difficulty } = req.query;
  const query = {};
  
  if (topic) query.topic = topic;
  if (difficulty) query.difficulty = difficulty;

  const questions = await Question.find(query).sort({ createdAt: -1 });
  res.json(questions);
});

// Add new question (admin)
exports.addQuestion = asyncHandler(async (req, res) => {
  const { topic, difficulty, question, options, correctAnswer } = req.body;
  
  // Validate inputs
  if (!topic || !difficulty || !question || !options || !correctAnswer) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  if (options.length < 2 || options.length > 6) {
    res.status(400);
    throw new Error('Questions must have between 2-6 options');
  }

  if (!options.includes(correctAnswer)) {
    res.status(400);
    throw new Error('Correct answer must be one of the options');
  }

  const newQuestion = await Question.create({
    topic,
    difficulty,
    question,
    options,
    correctAnswer
  });

  res.status(201).json(newQuestion);
});

// Update question (admin)
exports.updateQuestion = asyncHandler(async (req, res) => {
  const { topic, difficulty, question, options, correctAnswer } = req.body;
  
  // Validate inputs
  if (!topic || !difficulty || !question || !options || !correctAnswer) {
    res.status(400);
    throw new Error('Please fill all fields');
  }

  if (options.length < 2 || options.length > 6) {
    res.status(400);
    throw new Error('Questions must have between 2-6 options');
  }

  if (!options.includes(correctAnswer)) {
    res.status(400);
    throw new Error('Correct answer must be one of the options');
  }

  const updatedQuestion = await Question.findByIdAndUpdate(
    req.params.id,
    {
      topic,
      difficulty,
      question,
      options,
      correctAnswer
    },
    { new: true }
  );
  
  if (!updatedQuestion) {
    res.status(404);
    throw new Error('Question not found');
  }

  res.json(updatedQuestion);
});

// Delete question (admin)
exports.deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findByIdAndDelete(req.params.id);
  
  if (!question) {
    res.status(404);
    throw new Error('Question not found');
  }

  res.json({ message: 'Question removed' });
});

// Get all quiz results (admin)
exports.getAllResults = asyncHandler(async (req, res) => {
  const { topic, userId } = req.query;
  const query = {};
  
  if (topic) query.topic = topic;
  if (userId) query.user = userId;

  const results = await QuizResult.find(query)
    .populate('user', 'name email')
    .sort({ createdAt: -1 })
    .limit(100);

  res.json(results);
});

// Get detailed result (admin)
exports.getResultDetails = asyncHandler(async (req, res) => {
  const result = await QuizResult.findById(req.params.id)
    .populate('user', 'name email');
  
  if (!result) {
    res.status(404);
    throw new Error('Result not found');
  }

  res.json(result);
});

// @desc    Get dashboard statistics
// @route   GET /api/quiz/dashboard/stats
// @access  Private/Admin
exports.getDashboardStats = asyncHandler(async (req, res) => {
  try {
    // Get user count
    const userCount = await User.countDocuments();
    
    // Get question count
    const questionCount = await Question.countDocuments();
    
    // Get quiz results stats
    const resultsStats = await QuizResult.aggregate([
      {
        $group: {
          _id: null,
          totalQuizzes: { $sum: 1 },
          averageScore: { $avg: { $multiply: [{ $divide: ["$score", "$totalQuestions"] }, 100] } },
          highScore: { $max: { $multiply: [{ $divide: ["$score", "$totalQuestions"] }, 100] } }
        }
      }
    ]);
    
    // Get questions by topic
    const questionsByTopic = await Question.aggregate([
      {
        $group: {
          _id: "$topic",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    // Get recent activity
    const recentUsers = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email createdAt');
      
    const recentResults = await QuizResult.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('user', 'name')
      .select('user score totalQuestions topic difficulty createdAt');

    res.json({
      userCount,
      questionCount,
      quizStats: resultsStats[0] || { totalQuizzes: 0, averageScore: 0, highScore: 0 },
      questionsByTopic,
      recentActivity: {
        users: recentUsers,
        results: recentResults
      }
    });
    
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
    res.status(500);
    throw new Error('Failed to fetch dashboard statistics');
  }
});