import React, { useEffect, useState } from 'react';
import { CheckCircle, Heart, Home } from 'lucide-react';

const VolunteerThankYou = () => {
  const [name, setName] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    // Get name from localStorage (set on profile submit)
    const storedName = localStorage.getItem('volunteerName');
    setName(storedName || '');
    setTimeout(() => setAnimateElements(true), 100);
    setTimeout(() => setShowConfetti(true), 500);
  }, []);

  // Simple confetti component
  const Confetti = () => {
    const pieces = Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-gradient-to-r ${
          i % 4 === 0 ? 'from-red-400 to-pink-500' :
          i % 4 === 1 ? 'from-yellow-400 to-orange-500' :
          i % 4 === 2 ? 'from-green-400 to-emerald-500' :
          'from-blue-400 to-purple-500'
        } rounded-full animate-bounce opacity-80`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ));
    
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {pieces}
      </div>
    );
  };

  const handleBackToHome = () => {
    // In a real React Router setup, this would navigate
    console.log('Navigating back to home...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I just volunteered!',
        text: 'I just signed up to volunteer and make a difference! 🌟',
        url: window.location.origin
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = 'I just signed up to volunteer and make a difference! 🌟';
      navigator.clipboard.writeText(text);
      alert('Message copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Main Card */}
      <div className={`bg-white/90 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl max-w-lg text-center border border-white/20 transform transition-all duration-700 ${
        animateElements ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
      }`}>
        
        {/* Animated Check Icon */}
        <div className={`mb-6 transform transition-all duration-1000 ${
          animateElements ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}>
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto drop-shadow-lg" />
        </div>

        {/* Personalized Heading */}
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent transform transition-all duration-700 ${
          animateElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ animationDelay: '200ms' }}>
          Thank You{name ? `, ${name}` : ''}!
        </h1>

        {/* Subtitle */}
        <h2 className={`text-xl sm:text-2xl font-semibold text-gray-700 mb-6 transform transition-all duration-700 ${
          animateElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ animationDelay: '400ms' }}>
          for choosing to make a difference! 🙌
        </h2>

        {/* Description */}
        <p className={`text-gray-600 mb-8 text-lg leading-relaxed transform transition-all duration-700 ${
          animateElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ animationDelay: '600ms' }}>
          Your submission has been received. Our team will get in touch with you soon to discuss exciting volunteer opportunities. 
          <span className="block mt-2 text-emerald-600 font-medium flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 text-red-500" />
            You just made the world a little better 🌍
          </span>
        </p>

        {/* Action Buttons */}
        <div className={`space-y-4 transform transition-all duration-700 ${
          animateElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ animationDelay: '800ms' }}>
          
          {/* Back to Home Button */}
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>

          {/* Share Button */}
          <div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-2 rounded-full border-2 border-emerald-500 hover:bg-emerald-50 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" />
              Share Your Good Deed
            </button>
          </div>
        </div>

        {/* Inspiring Quote */}
        <div className={`mt-8 pt-6 border-t border-gray-200 transform transition-all duration-700 ${
          animateElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ animationDelay: '1000ms' }}>
          <p className="text-sm text-gray-500 italic">
            "We make a living by what we get, but we make a life by what we give."
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerThankYou;