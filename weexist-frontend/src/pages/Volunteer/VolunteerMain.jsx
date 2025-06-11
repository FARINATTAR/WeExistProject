import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Users, MapPin, Heart } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import YouthHelping from '../../assets/youth-helping.png'; // Hero
import GirlHelping from '../../assets/girl-helping.png'; // Emotional
import CityCommunity from '../../assets/city-community.png'; // Community
import FoodDonation from '../../assets/food-donation.png'; // Final CTA

const VolunteerMain = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const newScrollY = window.scrollY;
    setScrollY(newScrollY);
    
    // Calculate current section with better precision
    const windowHeight = window.innerHeight;
    const section = Math.round(newScrollY / windowHeight);
    setCurrentSection(Math.max(0, Math.min(4, section)));
    
    // Set scrolling state
    setIsScrolling(true);
    
    // Clear scrolling state after a delay
    setTimeout(() => setIsScrolling(false), 150);
  }, []);

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Trigger intro animation completion after a delay
    const timer = setTimeout(() => {
      setIntroAnimationComplete(true);
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const handleContinue = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Calculate parallax transforms with smoother transitions
  const getParallaxTransform = (sectionIndex, multiplier = 0.5) => {
    const sectionStart = sectionIndex * window.innerHeight;
    const relativeScroll = Math.max(0, scrollY - sectionStart);
    return `translateY(${relativeScroll * multiplier}px)`;
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-slate-50 overflow-hidden">
        {/* Scroll Indicator */}
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${currentSection >= 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex flex-col items-center text-slate-600 animate-bounce">
            <span className="text-sm mb-2 font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 py-16">
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Side - Text Content (No animation here) */}
    <div className="space-y-6 text-center lg:text-left">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
          Volunteer with
          <span className="text-red-500 block">Purpose</span>
        </h1>
      </div>

      <div>
        <p className="text-xl md:text-2xl text-slate-600 font-light">
          Join in making a difference in communities across the city
        </p>
      </div>

      <div>
        <button
          onClick={() => scrollToSection(1)}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-red-500/25"
        >
          Join as Volunteer now →
        </button>
      </div>
    </div>

    {/* Right Side - Image Grid (Animated on introAnimationComplete) */}
    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
      {/* Top Left */}
      <div className={`transform transition-all duration-300 ease-out ${
        introAnimationComplete 
          ? 'translate-x-0 translate-y-0 opacity-100' 
          : 'translate-x-4 -translate-y-4 opacity-0'
      }`}>
        <div className="relative group cursor-pointer">
          <img 
            src={YouthHelping} 
            alt="Youth helping in community" 
            className="w-full h-56 object-cover object-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-sm">Youth Programs</p>
          </div>
        </div>
      </div>

      {/* Top Right */}
      <div className={`transform transition-all duration-300 ease-out ${
        introAnimationComplete 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-6 opacity-0'
      }`}>
        <div className="relative group cursor-pointer">
          <img 
            src={GirlHelping} 
            alt="Girl helping elderly" 
            className="w-full h-56 object-cover object-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-sm">Senior Care</p>
          </div>
        </div>
      </div>

      {/* Bottom Left */}
      <div className={`transform transition-all duration-300 ease-out ${
        introAnimationComplete 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-6 opacity-0'
      }`}>
        <div className="relative group cursor-pointer">
          <img 
            src={CityCommunity} 
            alt="City community volunteering" 
            className="w-full h-56 object-cover object-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-sm">Urban Outreach</p>
          </div>
        </div>
      </div>

      {/* Bottom Right */}
      <div className={`transform transition-all duration-300 ease-out ${
        introAnimationComplete 
          ? 'translate-x-0 translate-y-0 opacity-100' 
          : 'translate-x-4 translate-y-4 opacity-0'
      }`}>
        <div className="relative group cursor-pointer">
          <img 
            src={FoodDonation} 
            alt="Food donation volunteering" 
            className="w-full h-56 object-cover object-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-sm">Food Security</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Background Blobs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-200/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-green-200/20 rounded-full blur-lg animate-pulse"></div>
  </div>
</section>


        {/* Section 1 - Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with improved parallax */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 transition-transform duration-100 ease-out"
            style={{
              transform: getParallaxTransform(1, 0.3)
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-300/20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-sky-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Users className="w-64 h-64 text-blue-300/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 leading-tight">
              Be the Change.
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-light mb-12">
              Small Acts. Big Impact.
            </p>
            <button
              onClick={handleContinue}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-red-500/25"
            >
              Continue →
            </button>
          </div>
        </section>

        {/* Section 2 - Emotional Touch */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200 transition-transform duration-100 ease-out"
            style={{
              transform: getParallaxTransform(2, 0.25)
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-l from-green-400/20 to-emerald-300/20">
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-green-200/40 rounded-full blur-2xl animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Heart className="w-48 h-48 text-emerald-300/50" />
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-semibold text-slate-800 mb-8 leading-tight">
              Every story matters.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Your time could be someone's turning point.
            </p>
          </div>
        </section>

        {/* Section 3 - Community Focus */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-100 to-indigo-200 transition-transform duration-100 ease-out"
            style={{
              transform: getParallaxTransform(3, 0.25)
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-300/20">
              <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-purple-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-indigo-200/40 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-56 h-56 text-purple-300/50" />
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-semibold text-slate-800 mb-8 leading-tight">
              Our cities need kindness.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-12">
              You're just one step away from making a difference.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-red-500">100+</div>
                <div className="text-sm text-slate-600">volunteers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-red-500">5</div>
                <div className="text-sm text-slate-600">cities active</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-red-500">2K+</div>
                <div className="text-sm text-slate-600">lives touched</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Call to Action */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-200 transition-transform duration-100 ease-out"
            style={{
              transform: getParallaxTransform(4, 0.2)
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-l from-orange-400/20 to-amber-300/20">
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-orange-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-200/40 rounded-full blur-2xl animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-72 h-72 bg-gradient-to-r from-orange-300/40 to-amber-300/40 rounded-full flex items-center justify-center">
                  <div className="text-8xl">🤝</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              This is your journey.
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 font-light mb-12">
              Ready to begin?
            </p>
            <button
              onClick={() => {
                console.log('Navigating to /volunteer/profile');
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-red-500/25"
            >
              Continue →
            </button>
          </div>
        </section>

        {/* Navigation Dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-red-500 scale-125 shadow-lg shadow-red-500/50' 
                  : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VolunteerMain;
