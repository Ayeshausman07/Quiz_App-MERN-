// pages/Profile.jsx
import { useEffect, useState } from 'react';
import API from '../utils/axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import { FaTrophy, FaClock, FaChartLine, FaArrowRight } from 'react-icons/fa';

export default function Profile() {
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        const res = await API.get('/quiz/history');
        setQuizHistory(res.data);
      } catch (err) {
        console.error('Failed to fetch quiz history', err);
        toast.error('Failed to load your quiz history');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mt-16">My Quiz Results</h1>
            {quizHistory.length > 0 && (
              <div className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full">
                <FaChartLine className="mr-2" />
                <span>{quizHistory.length} {quizHistory.length === 1 ? 'Quiz' : 'Quizzes'} Taken</span>
              </div>
            )}
          </div>
          
          {quizHistory.length === 0 ? (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-red-600 text-3xl" />
              </div>
              <p className="text-lg text-gray-600 mb-4">You haven't attempted any quizzes yet.</p>
              <Link 
                to="/" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Take Your First Quiz
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {quizHistory.map((quiz) => (
                <div key={quiz._id} className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {quiz.topic} <span className="text-gray-500">({quiz.difficulty})</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(quiz.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${
                            quiz.score / quiz.totalQuestions >= 0.7 ? 'text-green-600' : 
                            quiz.score / quiz.totalQuestions >= 0.4 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {Math.round((quiz.score / quiz.totalQuestions) * 100)}%
                          </div>
                          <div className="text-xs text-gray-500">
                            {quiz.score}/{quiz.totalQuestions} correct
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center text-gray-600">
                            <FaClock className="mr-1" />
                            <span>
                              {Math.floor(quiz.timeTaken / 60)}m {quiz.timeTaken % 60}s
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">Time taken</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            quiz.score / quiz.totalQuestions >= 0.7 ? 'bg-green-600' : 
                            quiz.score / quiz.totalQuestions >= 0.4 ? 'bg-yellow-600' : 'bg-red-600'
                          }`} 
                          style={{ width: `${(quiz.score / quiz.totalQuestions) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <FaTrophy className={`mr-2 ${
                        quiz.score / quiz.totalQuestions >= 0.7 ? 'text-yellow-500' : 'text-gray-400'
                      }`} />
                      <span className="text-sm text-gray-600">
                        {quiz.score / quiz.totalQuestions >= 0.7 ? 'Excellent!' : 
                         quiz.score / quiz.totalQuestions >= 0.4 ? 'Good effort!' : 'Keep practicing!'}
                      </span>
                    </div>
                    {/* <Link 
                      to={`/quiz/results/${quiz._id}`} 
                      className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
                    >
                      View Details <FaArrowRight className="ml-1" />
                    </Link> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}