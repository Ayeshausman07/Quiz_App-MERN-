import { useEffect, useState } from 'react';
import API from '../utils/axios';
import { toast } from 'react-toastify';

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    topic: 'HTML',
    difficulty: 'easy',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  
  // Filter states
  const [topicFilter, setTopicFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await API.get('/quiz/questions');
      setQuestions(data);
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError(err);
      toast.error(err.response?.data?.message || 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data
      if (!formData.question.trim()) {
        throw new Error('Question text is required');
      }
      if (formData.options.some(opt => !opt.trim())) {
        throw new Error('All options must be filled');
      }
      if (!formData.correctAnswer) {
        throw new Error('Please select the correct answer');
      }

    if (editMode) {
  await API.put(`/quiz/questions/${currentQuestionId}`, formData);
  toast.success('Question updated successfully!');
} else {
  await API.post('/quiz/questions', formData);
  toast.success('Question added successfully!');
}
      setShowForm(false);
      fetchQuestions();
      // Reset form
      setFormData({
        topic: 'HTML',
        difficulty: 'easy',
        question: '',
        options: ['', '', '', ''],
        correctAnswer: ''
      });
      setEditMode(false);
      setCurrentQuestionId(null);
    } catch (err) {
      console.error('Error adding/updating question:', err);
      toast.error(err.response?.data?.message || err.message || 'Failed to add/update question');
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await API.delete(`/quiz/questions/${id}`);
      toast.success('Question deleted successfully');
      fetchQuestions();
    } catch (err) {
      console.error('Error deleting question:', err);
      toast.error(err.response?.data?.message || 'Failed to delete question');
    }
  };

  const editQuestion = (question) => {
    setFormData({
      topic: question.topic,
      difficulty: question.difficulty,
      question: question.question,
      options: [...question.options],
      correctAnswer: question.correctAnswer
    });
    setCurrentQuestionId(question._id);
    setEditMode(true);
    setShowForm(true);
  };

  // Filter questions based on filters and search term
  const filteredQuestions = questions.filter(question => {
    const matchesTopic = topicFilter === 'all' || question.topic === topicFilter;
    const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.options.some(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesTopic && matchesDifficulty && matchesSearch;
  });

  // Pagination logic
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Quiz Questions</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showForm ? 'Cancel' : 'Add Question'}
          </button>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading questions. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="ml-0 p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
             <h1 className="text-2xl font-bold text-red-700 mb-4 md:mb-0 flex items-center">Question Bank</h1>
            <p className="text-gray-600 mt-1">
              {filteredQuestions.length} questions • {new Set(filteredQuestions.map(q => q.topic)).size} topics
            </p>
          </div>
          <button 
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) {
                setEditMode(false);
                setCurrentQuestionId(null);
                setFormData({
                  topic: 'HTML',
                  difficulty: 'easy',
                  question: '',
                  options: ['', '', '', ''],
                  correctAnswer: ''
                });
              }
            }}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-md transition-all ${
              showForm 
                ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            {showForm ? 'Cancel' : 'Add Question'}
          </button>
        </div>

        {/* Filter Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            Filter Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Content</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
              <select
                value={topicFilter}
                onChange={(e) => {
                  setTopicFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Topics</option>
                {['HTML', 'CSS', 'JS', 'React', 'Tailwind', 'Bootstrap', 'TypeScript', 'MongoDB', 'Express', 'Firebase'].map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={difficultyFilter}
                onChange={(e) => {
                  setDifficultyFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => {
                  setTopicFilter('all');
                  setDifficultyFilter('all');
                  setSearchTerm('');
                }}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editMode ? 'Edit Question' : 'Create New Question'}
              </h2>
              {editMode && (
                <button
                  onClick={() => {
                    setEditMode(false);
                    setShowForm(false);
                    setFormData({
                      topic: 'HTML',
                      difficulty: 'easy',
                      question: '',
                      options: ['', '', '', ''],
                      correctAnswer: ''
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  >
                    {['HTML', 'CSS', 'JS', 'React', 'Tailwind', 'Bootstrap', 'TypeScript', 'MongoDB', 'Express', 'Firebase'].map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                    className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
                <textarea
                  value={formData.question}
                  onChange={(e) => setFormData({...formData, question: e.target.value})}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  rows={3}
                  required
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Answer Options</label>
                <div className="space-y-3">
                  {formData.options.map((option, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={formData.correctAnswer === option}
                        onChange={() => setFormData({...formData, correctAnswer: option})}
                        className="h-5 w-5 text-red-600 focus:ring-red-500"
                        disabled={!option.trim()}
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...formData.options];
                          newOptions[i] = e.target.value;
                          setFormData({...formData, options: newOptions});
                        }}
                        placeholder={`Option ${i+1}`}
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="submit" 
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg shadow-md hover:from-red-700 hover:to-red-800 transition-all"
                >
                  {editMode ? 'Update Question' : 'Save Question'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Questions List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No questions found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setTopicFilter('all');
                  setDifficultyFilter('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {currentQuestions.map(q => (
                  <div key={q._id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 flex-shrink-0 h-4 w-4 rounded-full ${
                            q.difficulty === 'easy' ? 'bg-green-400' :
                            q.difficulty === 'medium' ? 'bg-yellow-400' :
                            q.difficulty === 'hard' ? 'bg-orange-400' : 'bg-red-400'
                          }`} />
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">{q.question}</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {q.options.map((opt, i) => (
                                <span 
                                  key={i} 
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                    opt === q.correctAnswer 
                                      ? 'bg-green-100 text-green-800 ring-1 ring-green-200' 
                                      : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {opt}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {q.topic}
                              </span>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                q.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                q.difficulty === 'hard' ? 'bg-orange-100 text-orange-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {q.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => editQuestion(q)}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </button>
                        <button 
                          onClick={() => deleteQuestion(q._id)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{indexOfFirstQuestion + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(indexOfLastQuestion, filteredQuestions.length)}</span> of{' '}
                      <span className="font-medium">{filteredQuestions.length}</span> results
                    </p>
                    <nav className="flex gap-1">
                      <button
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => paginate(pageNum)}
                            className={`px-3 py-1 border text-sm font-medium ${
                              currentPage === pageNum
                                ? 'bg-red-600 text-white border-red-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            } rounded-md`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}