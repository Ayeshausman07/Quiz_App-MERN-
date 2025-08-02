const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard', 'advanced'],
    required: true
  },
  topic: {
    type: String,
enum: [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'TypeScript',
  'Tailwind',
  'Bootstrap',
  'Firebase',
  'Other',

],
    required: true
  }
});

const quizResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  timeTaken: {
    type: Number, // in seconds
    required: true
  }
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);
const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = { Question, QuizResult };
