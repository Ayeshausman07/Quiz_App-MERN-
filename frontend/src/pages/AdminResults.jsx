import { useEffect, useState } from 'react';
import API from '../utils/axios';
import { toast } from 'react-toastify';
import { FiSearch, FiChevronLeft, FiChevronRight, FiUser, FiAward, FiClock, FiBook } from 'react-icons/fi';

export default function AdminResults() {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Available topics for filter
  const topics = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'TypeScript', 
    'Tailwind', 'Bootstrap', 'Firebase'
  ];

  // Available difficulty levels
  const levels = ['easy', 'medium', 'hard', 'advanced'];

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await API.get('/quiz/results');
        setResults(data);
        setFilteredResults(data);
      } catch (err) {
        console.error('Failed to fetch results:', err);
        setError(err);
        toast.error(err.response?.data?.message || 'Failed to load quiz results');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  // Apply filters whenever search term or filters change
  useEffect(() => {
    let filtered = results;
    
    if (searchTerm) {
      filtered = filtered.filter(result => 
        result.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (levelFilter !== 'all') {
      filtered = filtered.filter(result => result.difficulty === levelFilter);
    }
    
    if (topicFilter !== 'all') {
      filtered = filtered.filter(result => result.topic === topicFilter);
    }
    
    setFilteredResults(filtered);
    setCurrentPage(1);
  }, [searchTerm, levelFilter, topicFilter, results]);

  // Get current results for pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(filteredResults.length / resultsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 max-w-md">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
            <h1 className="text-xl font-bold mb-2">Failed to load results</h1>
            <p>{error.message || 'Please try again later'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-700 mb-4 md:mb-0 flex items-center">Quiz Results Dashboard</h1>
          <p className="text-gray-600">Track and analyze user quiz performance</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" style={{ marginTop: '-10px' }} />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 w-full rounded-lg border-gray-200 focus:border-red-300 focus:ring-red-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Topic Filter */}
            <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
    <FiBook className="h-5 w-5 text-gray-400" style={{ marginTop: '-10px' }} />
  </div>
              <select
                className="pl-10 w-full rounded-lg border-gray-200 focus:border-red-300 focus:ring-red-300"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
              >
                <option value="all">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
            
            {/* Level Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiAward className="text-gray-400" style={{ marginTop: '-10px' }} />
              </div>
              <select
                className="pl-10 w-full rounded-lg border-gray-200 focus:border-red-300 focus:ring-red-300"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="all">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Reset Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setLevelFilter('all');
                setTopicFilter('all');
              }}
              className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                <FiUser className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Attempts</p>
                <p className="text-2xl font-bold text-gray-800">{filteredResults.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                <FiAward className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Unique Users</p>
                <p className="text-2xl font-bold text-gray-800">
                  {new Set(filteredResults.map(r => r.user?._id)).size}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                <FiClock className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg. Time</p>
                <p className="text-2xl font-bold text-gray-800">
                  {filteredResults.length > 0 
                    ? Math.round(filteredResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0) / filteredResults.length)
                    : 0
                  }s
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {filteredResults.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-500 mb-4 text-lg">
                {results.length === 0 ? 'No quiz results available yet.' : 'No results match your filters.'}
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setLevelFilter('all');
                  setTopicFilter('all');
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-red-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        Topic
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        Level
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-red-600 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentResults.map((result) => {
                      const percentage = Math.round((result.score / result.totalQuestions) * 100);
                      return (
                        <tr key={result._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                                {result.user?.name?.charAt(0) || 'U'}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {result.user?.name || 'Unknown User'}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {result.user?.email || 'No email'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {result.topic || 'General'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                              result.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              result.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {result.difficulty || 'unknown'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-20 mr-3">
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${
                                      percentage >= 70 ? 'bg-green-500' :
                                      percentage >= 40 ? 'bg-yellow-500' :
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="text-sm font-medium">
                                {percentage}%
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {result.timeTaken || 'N/A'}s
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(result.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstResult + 1}</span> to{' '}
                        <span className="font-medium">{Math.min(indexOfLastResult, filteredResults.length)}</span> of{' '}
                        <span className="font-medium">{filteredResults.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Previous</span>
                          <FiChevronLeft className="h-5 w-5" />
                        </button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                              onClick={() => setCurrentPage(pageNum)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                currentPage === pageNum
                                  ? 'z-10 bg-red-50 border-red-500 text-red-600'
                                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <span className="sr-only">Next</span>
                          <FiChevronRight className="h-5 w-5" />
                        </button>
                      </nav>
                    </div>
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