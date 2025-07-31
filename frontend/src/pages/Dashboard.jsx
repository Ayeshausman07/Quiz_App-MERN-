import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/axios';
import Footer from '../components/Footer';

// Technology logos (you can replace these with actual image imports if you have them)
const techLogos = {
  'HTML': 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
  'CSS': 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  'JS': 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  'React': 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png',
  'Node': 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  'Express': 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
  'MongoDB': 'https://cdn-icons-png.flaticon.com/512/828/828283.png',
  'TypeScript': 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
  'Tailwind': 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
  'Bootstrap': 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
  'Firebase': 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
};

const techDescriptions = {
  'HTML': 'Test your HTML5 knowledge with interactive questions',
  'CSS': 'Master CSS selectors, layouts and animations',
  'JS': 'JavaScript fundamentals to advanced concepts',
  'React': 'React hooks, components and state management',
  'Node': 'Node.js runtime and core modules',
  'Express': 'Express.js framework and middleware',
  'MongoDB': 'NoSQL database concepts and queries',
  'TypeScript': 'Type systems and interfaces in TS',
  'Tailwind': 'Utility-first CSS framework patterns',
  'Bootstrap': 'Responsive design with Bootstrap',
  'Firebase': 'Real-time database and authentication'
};

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizConfig, setQuizConfig] = useState({
    questionCount: 10,
    difficulty: 'medium',
    timerMinutes: 15
  });
  const [quiz, setQuiz] = useState(null);
  const [timer, setTimer] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const calculateSuggestedTime = (count) => {
    return Math.max(10, Math.min(60, Math.floor(count * 1.5)));
  };
  
const handleLogout = useCallback(() => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  delete API.defaults.headers.common['Authorization'];
  navigate('/login');
}, [navigate]);

  const fetchTopics = useCallback(async () => {
  try {
    const res = await API.get('/quiz/topics');
    setTopics(res.data);
  } catch (err) {
    if (err.response?.status === 401) {
      handleLogout();
    } else {
      console.error('Failed to fetch topics:', err);
      alert('Failed to load quiz topics. Please try again.');
    }
  }
}, [handleLogout]);
useEffect(() => {
  if (!user) {
    navigate('/login');
    return;
  }

  if (user.role === 'admin') {
    navigate('/admin');
  } else {
    setMessage(`Welcome back, ${user.name}!`);
    if (!API.defaults.headers.common['Authorization'] && localStorage.getItem('token')) {
      API.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    fetchTopics();
  }
}, [user, navigate, fetchTopics]);


  const startQuiz = async () => {
    try {
      const res = await API.post('/quiz/start', {
        topic: selectedTopic,
        difficulty: quizConfig.difficulty,
        questionCount: quizConfig.questionCount
      });
      setQuiz(res.data);
      setTimer(quizConfig.timerMinutes * 60);
      setAnswers([]);
      setResult(null);
    } catch (err) {
      console.error('Failed to start quiz:', err);
      alert('Failed to start quiz. Please try again.');
    }
  };

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingIndex] = { questionId, selectedOption };
        return newAnswers;
      }
      return [...prev, { questionId, selectedOption }];
    });
  };

  const submitQuiz = useCallback(async () => {
    if (isSubmitting) return;
    if (!quiz || answers.length !== quiz.questions.length) {
      alert('Please answer all questions before submitting');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await API.post('/quiz/submit', {
        topic: quiz.topic,
        difficulty: quiz.difficulty,
        answers,
        timeTaken: (quizConfig.timerMinutes * 60) - timer
      });
      setResult(res.data);
      setQuiz(null);
    } catch (err) {
      console.error('Failed to submit quiz:', err);
      alert('Failed to submit quiz. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [quiz, answers, quizConfig.timerMinutes, timer, isSubmitting]);

  useEffect(() => {
    let intervalId;
    if (quiz && timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            submitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [quiz, timer, submitQuiz]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  // Quiz in progress view
  if (quiz) {
    return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 relative">
  {/* Sticky Timer Bar */}
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md rounded-lg w-[90%] max-w-4xl px-6 py-3 mt-13">
  <div className="flex justify-between items-center">
    <div className="flex items-center">
      <h2 className="text-xl font-bold text-gray-800 mr-4">
        {quiz.topic} Quiz
      </h2>
      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-800">
        {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
      </span>
    </div>
    <div className={`px-4 py-2 rounded-lg ${timer < 300 ? 'bg-red-100' : 'bg-gray-100'} transition-colors`}>
      <span className="font-medium text-gray-700">Time Remaining: </span>
      <span className={`font-bold text-lg ${timer < 60 ? 'text-red-600' : timer < 300 ? 'text-red-800' : 'text-gray-800'}`}>
        {formatTime(timer)}
      </span>
    </div>
  </div>
</div>


  {/* Quiz Content */}
  <div className="max-w-4xl mx-auto mt-23 bg-white rounded-xl shadow-md overflow-hidden">
    <div className="p-6">
      <div className="space-y-6">
        {quiz.questions.map((q, index) => (
          <div 
            key={`${q._id}-${index}`} 
            className="border border-gray-200 p-6 rounded-lg hover:shadow-sm transition-shadow relative"
            id={`question-${index}`}
          >
            <div className="absolute -left-2 -top-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <p className="font-medium text-lg text-gray-800 mb-4 pl-6">
              {q.question}
            </p>
            <div className="space-y-3">
              {q.options.map((option, optIndex) => (
                <label 
                  key={`${q._id}-${optIndex}`} 
                  className={`flex items-center space-x-3 p-4 rounded-lg transition-all cursor-pointer ${
                    answers.some(a => a.questionId === q._id && a.selectedOption === option) 
                      ? 'bg-red-50 border-2 border-red-300 shadow-sm' 
                      : 'border border-gray-200 hover:border-red-200 hover:bg-red-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${q._id}`}
                    checked={answers.some(a => a.questionId === q._id && a.selectedOption === option)}
                    onChange={() => handleAnswer(q._id, option)}
                    className="h-5 w-5 text-red-600 focus:ring-red-500"
                  />
                  <span className="flex-1 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center">
        <button
          onClick={submitQuiz}
          disabled={isSubmitting}
          className={`px-10 py-4 rounded-xl font-bold text-white transition-all ${
            isSubmitting 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg transform hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Submit Quiz
            </span>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Progress Quick Navigation (optional) */}
  <div className="fixed bottom-6 right-6 z-10">
    <div className="bg-white p-3 rounded-full shadow-xl">
      <div className="grid grid-cols-5 gap-1 max-h-40 overflow-y-auto">
        {quiz.questions.map((_, idx) => (
          <a 
            key={`nav-${idx}`}
            href={`#question-${idx}`}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
              answers.some(a => a.questionId === quiz.questions[idx]._id) 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {idx + 1}
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
    );
  }

  // Results view
  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8 mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Results</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Score</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {result.score}<span className="text-gray-400">/{result.totalQuestions}</span>
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Percentage</p>
                  <p className="text-2xl font-bold text-gray-800">{result.percentage}%</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Time Taken</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s
                  </p>
                </div>
                <div className={`p-4 rounded-lg shadow-sm border ${
                  result.percentage >= 70 ? 'border-green-200 bg-green-50' : 
                  result.percentage >= 50 ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'
                }`}>
                  <p className="text-sm text-gray-500">Performance</p>
                  <p className={`text-2xl font-bold ${
                    result.percentage >= 70 ? 'text-green-700' : 
                    result.percentage >= 50 ? 'text-yellow-700' : 'text-red-700'
                  }`}>
                    {result.percentage >= 70 ? 'Excellent' : 
                     result.percentage >= 50 ? 'Good' : 'Needs Improvement'}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      result.percentage >= 70 ? 'bg-green-500' : 
                      result.percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} 
                    style={{width: `${result.percentage}%`}}
                  ></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Question Review</h3>
            <div className="space-y-4">
              {result.results.map((item, index) => (
                <div 
                  key={`result-${index}`}
                  className={`p-4 rounded-lg border-l-4 ${
                    item.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                  }`}
                >
                  <p className="font-medium text-gray-800">{index + 1}. {item.question}</p>
                  <div className="mt-3 space-y-2">
                    <p className={`text-sm ${
                      item.isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      <span className="font-medium">Your answer:</span> {item.selectedOption}
                    </p>
                    {!item.isCorrect && (
                      <p className="text-sm text-green-700">
                        <span className="font-medium">Correct answer:</span> {item.correctOption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                onClick={() => setResult(null)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md font-medium"
              >
                Take Another Quiz
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard view
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mt-16">{message}</h1>
              <p className="mt-1 text-gray-600">Select a topic to start your quiz</p>
            </div>
            {/* <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition shadow-md flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Logout
            </button> */}
          </div>
          
          {selectedTopic ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <div className="flex items-center mb-6">
   <button 
  onClick={() => setSelectedTopic(null)}
  className="flex items-center font-bold text-white bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg shadow-md"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  Back to Topics
</button>
    </div>
    
    <div className="space-y-6">
                  <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block font-medium text-gray-700">Number of Questions</label>
          <span className="text-lg font-bold text-red-600">{quizConfig.questionCount}</span>
        </div>
        <input
          type="range"
          min="5"
          max="25"
          value={quizConfig.questionCount}
          onChange={(e) => {
            const count = parseInt(e.target.value);
            setQuizConfig(prev => ({
              ...prev,
              questionCount: count,
              timerMinutes: calculateSuggestedTime(count)
            }));
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-1 text-sm text-gray-500">
          <span>5</span>
          <span>25</span>
        </div>
      </div>
      
      <div>
        <label className="block mb-2 font-medium text-gray-700">Difficulty Level</label>
        <div className="grid grid-cols-4 gap-2">
          {['easy', 'medium', 'hard', 'advanced'].map(level => (
            <button
              key={level}
              onClick={() => setQuizConfig(prev => ({...prev, difficulty: level}))}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                quizConfig.difficulty === level
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block font-medium text-gray-700">Time Limit (minutes)</label>
          <span className="text-lg font-bold text-red-600">{quizConfig.timerMinutes}</span>
        </div>
        <input
          type="range"
          min="10"
          max="60"
          value={quizConfig.timerMinutes}
          onChange={(e) => setQuizConfig(prev => ({
            ...prev,
            timerMinutes: parseInt(e.target.value)
          }))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-1 text-sm text-gray-500">
          <span>10</span>
          <span>60</span>
        </div>
      </div>
    </div>
    
    <div className="mt-8 text-center">
      <button
        onClick={startQuiz}
        className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md font-bold text-lg"
      >
        Start Quiz Now
      </button>
    </div>
  </div>
</div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="text-center mb-10 ">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Web Development Quiz Topics</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Test your knowledge across various web technologies. Select a topic to begin your challenge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {topics.map(topic => {
                  const topicData = {
                    image: techLogos[topic] || 'https://cdn-icons-png.flaticon.com/512/3767/3767084.png',
                    description: techDescriptions[topic] || 'Test your knowledge on this technology',
                    locked: false
                  };

                  return (
                    <div 
                      key={topic}
                      onClick={!topicData.locked ? () => setSelectedTopic(topic) : undefined}
                      className={`relative group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                        topicData.locked 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:border-red-300 hover:shadow-lg cursor-pointer'
                      }`}
                    >
                      {topicData.locked && (
                        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10">
                          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            COMING SOON
                          </span>
                        </div>
                      )}
                      
                      <div className="p-5">
                        <div className="flex justify-center mb-4">
                          <img 
                            src={topicData.image} 
                            alt={topic} 
                            className="h-16 w-16 object-contain transition-transform group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                          {topic}
                        </h3>
                        <p className="text-gray-600 text-sm text-center min-h-[40px]">
                          {topicData.description}
                        </p>
                      </div>
                      
                      {!topicData.locked && (
                        <div className="px-4 py-3 text-center border-t border-gray-100 bg-gradient-to-r from-red-50 to-white group-hover:from-red-100 transition-colors">
                          <span className="text-red-600 text-sm font-medium flex items-center justify-center">
                            Start Quiz 
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}