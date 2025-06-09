import React, { useEffect, useRef, useState } from 'react';

const TimelineStep = ({ step, index, isLeft = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={elementRef}
      className="relative w-full py-20"
    >
      {/* Timeline Node */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg transition-all duration-600 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}></div>

      {/* Connecting Line - Left Side */}
      {isLeft && (
        <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-l from-blue-400 to-transparent -translate-x-full transition-all duration-800 delay-200 origin-right ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>
      )}

      {/* Connecting Line - Right Side */}
      {!isLeft && (
        <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-400 to-transparent translate-x-0 transition-all duration-800 delay-200 origin-left ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>
      )}

      {/* Content Card - Left Side */}
      {isLeft && (
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1/2 pr-12 transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-20'
        }`}>
          <div className="ml-auto max-w-sm">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-3 shadow-md">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Card - Right Side */}
      {!isLeft && (
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 pl-12 transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-20'
        }`}>
          <div className="mr-auto max-w-sm">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
              <div className="text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-3 shadow-md">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SocialImpactTimeline = () => {
  const timelineSteps = [
    {
      title: 'You See the Need',
      description: 'You see someone in your area who needs help — food, education, or essentials.'
    },
    {
      title: 'You Raise a Request',
      description: 'Submit a request using our app or website. It takes less than 2 minutes.'
    },
    {
      title: 'We Verify the Case',
      description: 'Our team verifies the request with simple checks to avoid misuse.'
    },
    {
      title: 'A Donor is Matched',
      description: 'We instantly match the request to a nearby donor or volunteer.'
    },
    {
      title: 'Help is Delivered & Tracked',
      description: 'Support is delivered, and you receive a notification. Every impact is trackable.'
    }
  ];

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      {/* Header Section */}
      <div className="py-20 px-4">
        <div 
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A simple journey that connects those who need help with those who can provide it
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-500 -translate-x-0.5"></div>
        
        {/* Timeline Steps */}
        <div className="space-y-8">
          {timelineSteps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* End Node */}
        <div className="flex justify-center pt-8">
          <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Ready to Make an <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Impact?</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Join thousands of people creating positive change in their communities
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
            Get Started Today
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialImpactTimeline;