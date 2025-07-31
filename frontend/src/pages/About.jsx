// pages/About.jsx
import Footer from "../components/Footer";
import { FaRocket, FaUsers, FaTrophy, FaChartLine, FaCodeBranch, FaLaptopCode } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 " >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
            About <span className="text-red-600">Quiz</span>Code
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering developers through interactive coding quizzes and challenges
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" 
              alt="Coding quiz animation" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My<span className="text-red-600"> Mission</span>
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              At QuizCode, we're revolutionizing how developers test and improve their skills. 
              Our platform offers an engaging way to master web technologies through interactive quizzes.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe in learning by doing, and our quizzes are designed to challenge you 
              while providing immediate feedback to reinforce your knowledge.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <p className="text-gray-800 italic">
                "The expert in anything was once a beginner. Our quizzes help bridge that gap."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-red-600">Quiz</span>Code?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-600 mb-4">
                <FaRocket className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Skill Development</h3>
              <p className="text-gray-600">
                Our quizzes are designed to accelerate your learning curve with targeted questions 
                that reinforce key concepts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-600 mb-4">
                <FaUsers className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Questions are curated by experienced developers and continuously updated 
                based on community feedback.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-600 mb-4">
                <FaTrophy className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gamified Learning</h3>
              <p className="text-gray-600">
                Earn badges, track your progress, and compete on leaderboards to stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-red-100">Active Users</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-red-100">Quiz Questions</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-red-100">Web Technologies</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-red-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Meet The <span className="text-red-600">Creator</span>
    </h2>
    
    <div className="max-w-2xl mx-auto">
      <div className="text-center">
        <img 
          src="https://www.shutterstock.com/image-vector/vector-sketch-cartoon-illustration-fashion-260nw-1673891575.jpg" 
          alt="Developer working" 
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-red-100"
        />
        <h3 className="text-2xl font-semibold">Ayesha Usman</h3>
        <p className="text-red-600 mb-3 text-lg">Full-Stack Developer & Quiz Enthusiast</p>
        <p className="text-gray-600 mb-4">
          The visionary behind QuizCode, combining technical expertise with a passion for creating engaging learning experiences.
        </p>
        <div className="bg-red-50 p-4 rounded-lg max-w-md mx-auto">
          <p className="text-gray-800 italic">
            "I built QuizCode to help developers test their knowledge in a fun, interactive way. 
            Every quiz is carefully crafted to challenge and educate simultaneously."
          </p>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-red-600 font-bold">100%</p>
          <p className="text-gray-600 text-sm">Handcrafted Quizzes</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-red-600 font-bold">Full-Stack</p>
          <p className="text-gray-600 text-sm">Development Skills</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-red-600 font-bold">Passion</p>
          <p className="text-gray-600 text-sm">For Education</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Test Your <span className="text-red-600">Skills</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are sharpening their skills with QuizCode.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Quizzing Now
            </a>
            <a 
              href="/contact" 
              className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}