import { useEffect, useState } from 'react';
import React from 'react';
import { 
  FiUsers, 
  FiBook, 
  FiBarChart2,
  FiTrendingUp,
  FiAward,
  FiClock,
  FiUserPlus,
  FiFileText,
  FiCheckCircle
} from 'react-icons/fi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import API from '../utils/axios';
import moment from 'moment';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    questions: 0,
    quizzesTaken: 0,
    averageScore: 0,
    userDistribution: [],
    questionsByTopic: [],
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get('/quiz/dashboard/stats');
      
      setStats({
        users: data.userCount,
        questions: data.questionCount,
        quizzesTaken: data.quizStats.totalQuizzes,
        averageScore: Math.round(data.quizStats.averageScore),
        userDistribution: [
          { label: 'Active', value: data.userCount - data.userCount/10, color: '#10B981' },
          { label: 'Inactive', value: data.userCount/20, color: '#F59E0B' },
          { label: 'Admin', value: data.userCount/10, color: '#3B82F6' }
        ],
        questionsByTopic: data.questionsByTopic,
        recentActivity: [
          ...data.recentActivity.users.map(user => ({
            type: 'user',
            icon: <FiUserPlus />,
            color: 'bg-green-100 text-green-600',
            title: `New user: ${user.name}`,
            time: moment(user.createdAt).fromNow()
          })),
          ...data.recentActivity.results.map(result => ({
            type: 'quiz',
            icon: <FiCheckCircle />,
            color: 'bg-blue-100 text-blue-600',
            title: `${result.user.name} scored ${Math.round((result.score/result.totalQuestions)*100)}% on ${result.topic}`,
            time: moment(result.createdAt).fromNow()
          }))
        ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 5)
      });

    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Chart data
  const userData = {
    labels: stats.userDistribution.map(item => item.label),
    datasets: [
      {
        data: stats.userDistribution.map(item => item.value),
        backgroundColor: stats.userDistribution.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  const questionData = {
    labels: stats.questionsByTopic.map(item => item._id),
    datasets: [
      {
        label: 'Questions by Topic',
        data: stats.questionsByTopic.map(item => item.count),
        backgroundColor: '#EF4444',
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 ml-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-700 mb-4 md:mb-0 flex items-center">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Users" 
            value={stats.users} 
            icon={<FiUsers />}
            color="bg-red-50 text-red-600"
          />
          <StatCard 
            title="Total Questions" 
            value={stats.questions} 
            icon={<FiBook />}
            color="bg-blue-50 text-blue-600"
          />
          <StatCard 
            title="Quizzes Taken" 
            value={stats.quizzesTaken} 
            icon={<FiTrendingUp />}
            color="bg-green-50 text-green-600"
          />
          <StatCard 
            title="Avg. Score" 
            value={`${stats.averageScore}%`} 
            icon={<FiAward />}
            color="bg-yellow-50 text-yellow-600"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard 
            title="User Distribution" 
            icon={<FiUsers className="text-red-600" />}
          >
            <div className="h-64">
              <Pie 
                data={userData} 
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }} 
              />
            </div>
          </ChartCard>

          <ChartCard 
            title="Questions by Topic" 
            icon={<FiBook className="text-red-600" />}
          >
            <div className="h-64">
              <Bar 
                data={questionData} 
                options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }} 
              />
            </div>
          </ChartCard>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FiClock className="text-red-600" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {stats.recentActivity.map((activity, index) => (
              <ActivityItem 
                key={index}
                icon={activity.icon}
                color={activity.color}
                title={activity.title}
                time={activity.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {React.cloneElement(icon, { className: "text-xl" })}
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, icon, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

function ActivityItem({ icon, color, title, time }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${color}`}>
          {React.cloneElement(icon, { className: "text-lg" })}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
    </div>
  );
}