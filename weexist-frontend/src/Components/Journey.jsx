import React, { useEffect, useRef } from 'react';
import boyImage from '../assets/child-begging-sketch.png';

const WeExistJourneyStory = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Add intersection observer for slide animations
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0) rotateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);

    const slides = document.querySelectorAll('.story-slide');
    slides.forEach(slide => {
      slide.style.opacity = '0.7';
      slide.style.transform = 'translateY(30px) rotateY(-5deg)';
      observer.observe(slide);
    });

    // Smooth scroll behavior for horizontal scrolling
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    // Cleanup
    return () => {
      slides.forEach(slide => observer.unobserve(slide));
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const slides = [
    {
      id: 1,
      type: 'discomfort',
      bgClass: 'bg-gradient-to-br from-pink-300 via-pink-200 to-purple-200',
      title: "It started with one moment... a child begging for food while cafés tossed leftovers.",
      caption: '"That contrast haunted me."',
      doodles: ['⭐', '💔']
    },
    {
      id: 2,
      type: 'question',
      bgClass: 'bg-gradient-to-br from-teal-200 via-pink-200 to-pink-300',
      title: 'The question that changed everything',
      messages: [
        { type: 'friend', text: 'Are you seriously going to do this?' },
        { type: 'you', text: 'I don\'t know. But I have to try.' }
      ],
      doodles: ['➜']
    },
    {
      id: 3,
      type: 'first-step',
      bgClass: 'bg-gradient-to-br from-yellow-200 via-orange-200 to-orange-300',
      title: "15 meals. 2 friends. No plan. But we started.",
      caption: "Sometimes you just have to begin",
      doodles: ['✨']
    },
    {
      id: 4,
      type: 'people-joined',
      bgClass: 'bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200',
      title: "We thought it was just us. Turns out, many felt the same.",
      caption: "Community grows from shared purpose 💝",
      doodles: ['💕']
    },
    {
      id: 5,
      type: 'weexist-born',
      bgClass: 'bg-gradient-to-br from-yellow-200 via-orange-200 to-orange-300',
      title: "From one moment to a movement.",
      caption: "And we're just getting started 🚀",
      doodles: ['🌟']
    },
    {
      id: 6,
      type: 'founder-note',
      bgClass: 'bg-gradient-to-br from-purple-300 via-blue-200 to-blue-300',
      title: "A personal promise",
      doodles: ['💫']
    }
  ];

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'discomfort':
        return (
          <>
            <div className="absolute top-16 right-10 bg-white p-4 pb-12 shadow-lg transform rotate-8 rounded-sm">
                <div className="w-48 h-36 rounded-sm overflow-hidden shadow-lg">
                <img 
                    src={boyImage} 
                    alt="Boy begging" 
                    className="w-full h-full object-cover object-top" 
                />
                </div>

            </div>
            <div className="absolute bottom-20 left-8 right-8 z-10">
              <div className="text-2xl text-slate-800 mb-4 transform -rotate-1" style={{ fontFamily: 'Caveat, cursive', lineHeight: '1.4' }}>
                {slide.title}
              </div>
              <div className="text-base text-slate-600 italic" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                {slide.caption}
              </div>
            </div>
          </>
        );

      case 'question':
        return (
          <>
            <div className="absolute top-20 left-8 right-8 flex flex-col gap-5">
              {slide.messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'you' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-4 rounded-2xl shadow-md relative ${
                    msg.type === 'you' ? 'bg-green-100' : 'bg-blue-100'
                  }`} style={{ fontFamily: 'Patrick Hand, cursive' }}>
                    {msg.text}
                    {msg.text.includes('try') && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl text-pink-500">
                        ➜
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-20 left-8 right-8 text-center">
              <div className="text-base text-slate-600" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                {slide.title}
              </div>
            </div>
          </>
        );

      case 'first-step':
        return (
          <>
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
              🍽️
            </div>
            <div className="absolute bottom-20 left-8 right-8 text-center">
              <div className="text-2xl text-slate-800 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                {slide.title}
              </div>
              <div className="text-base text-slate-600" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                {slide.caption}
              </div>
            </div>
          </>
        );

      case 'people-joined':
        return (
          <>
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex items-center gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">👤</div>
              <div className="w-8 h-1 bg-pink-500 rounded"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">👤</div>
              <div className="w-8 h-1 bg-pink-500 rounded"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">👤</div>
            </div>
            <div className="absolute bottom-20 left-8 right-8">
              <div className="text-2xl text-slate-800 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                {slide.title}
              </div>
              <div className="text-base text-slate-600" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                {slide.caption}
              </div>
            </div>
          </>
        );

      case 'weexist-born':
        return (
          <>
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center">
              <div 
                className="text-5xl text-slate-800 animate-pulse"
                style={{ 
                  fontFamily: 'Dancing Script, cursive',
                  textShadow: '0 0 20px rgba(255, 107, 157, 0.6), 0 0 30px rgba(255, 107, 157, 0.4)',
                  animation: 'logoGlow 3s ease-in-out infinite alternate'
                }}
              >
                WeExist
              </div>
            </div>
            <div className="absolute bottom-20 left-8 right-8 text-center">
              <div className="text-2xl text-slate-800 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                {slide.title}
              </div>
              <div className="text-base text-slate-600" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                {slide.caption}
              </div>
            </div>
          </>
        );

      case 'founder-note':
        return (
          <>
            <div className="absolute top-20 left-8 right-8 bg-white p-8 rounded-lg shadow-lg transform -rotate-1">
              <div 
                className="min-h-48 relative"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 24px,
                    rgba(0,0,0,0.1) 24px,
                    rgba(0,0,0,0.1) 25px
                  `
                }}
              >
                <div 
                  className="text-xl text-slate-800 py-5 leading-loose"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  This isn't just a platform.<br />
                  It's a promise.<br /><br />
                  A promise that every person matters,<br />
                  every story counts,<br />
                  and together we can create<br />
                  the change we wish to see.
                </div>
              </div>
              <div 
                className="absolute bottom-5 right-8 text-lg text-slate-600 transform -rotate-2"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                — Farin, Founder of WeExist
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Patrick+Hand&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <style jsx>{`
        @keyframes logoGlow {
          0% { text-shadow: 0 0 10px rgba(255, 107, 157, 0.3); }
          100% { text-shadow: 0 0 20px rgba(255, 107, 157, 0.6), 0 0 30px rgba(255, 107, 157, 0.4); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        .story-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .story-slide:hover {
          transform: translateY(-10px) rotateY(5deg) !important;
        }
        
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ff6b9d, #c44569);
          border-radius: 4px;
        }
        
        .doodle-star {
          animation: twinkle 2s ease-in-out infinite alternate;
        }
        
        .doodle-heart {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .scroll-hint {
          animation: bounce 2s infinite;
        }
      `}</style>

      <div className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 min-h-screen overflow-x-hidden">
        {/* Decorative Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(173, 216, 230, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 
            className="text-6xl text-slate-800 mb-5 relative"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Our Journey
          </h1>
          <p 
            className="text-2xl text-slate-600 transform -rotate-1 inline-block"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            From one moment to a movement ✨
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="scroll-container flex overflow-x-auto gap-10 px-16 py-10"
          style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className={`story-slide min-w-[450px] h-[600px] relative ${slide.bgClass} rounded-3xl shadow-2xl border-4 border-white overflow-hidden`}
              style={{ 
                scrollSnapAlign: 'center',
                transformStyle: 'preserve-3d',
                background: `${slide.bgClass.replace('bg-gradient-to-br', 'linear-gradient(135deg,')} )`
              }}
            >
              {/* Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 2px,
                    rgba(0,0,0,0.02) 2px,
                    rgba(0,0,0,0.02) 4px
                  )`
                }}
              />

              {/* Slide Content */}
              {renderSlideContent(slide)}

              {/* Decorative Doodles */}
              {slide.doodles.map((doodle, idx) => (
                <div 
                  key={idx}
                  className={`absolute text-2xl pointer-events-none opacity-60 ${
                    doodle === '⭐' || doodle === '✨' || doodle === '🌟' ? 'top-5 right-5 doodle-star' :
                    doodle === '💔' || doodle === '💕' || doodle === '💫' ? 'bottom-5 left-5 doodle-heart' :
                    'top-1/2 -right-4 transform -translate-y-1/2 -rotate-45 text-pink-500'
                  }`}
                >
                  {doodle}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="scroll-hint ml-48 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-slate-600 text-xl" style={{ fontFamily: 'Caveat, cursive' }}>
          <span>Scroll to explore the journey</span>
          <span>→</span>
        </div>
      </div>
    </>
  );
};

export default WeExistJourneyStory;