import React from 'react';
import { ShoppingCart, DollarSign, Handshake } from 'lucide-react';

const HowYouCanHelp = () => {
  const helpSections = [
    {
      icon: <ShoppingCart className="text-yellow-400 w-14 h-14" />,
      title: "Food Donation",
      description: "Donate surplus food or sponsor meals to help end hunger. Every meal makes a difference.",
      stats: [
        "Every meal you donate feeds a hungry child",
        "Partner with local food banks to make an impact"
      ],
      bgGradient: "from-[#fde68a]/50 to-[#fcd34d]/60",
      // bgGradient: "from-[#fbbf24]/40 to-[#f59e0b]/60",


      buttonText: "Donate Food"
    },
    {
      icon: <DollarSign className="text-green-400 w-14 h-14" />,
      title: "Community Funds",
      description: "Your contributions help fund education, healthcare, and basic needs for underprivileged communities.",
      stats: [
        "Even a small donation can create lasting change",
        "Support long-term solutions to fight hunger"
      ],
      bgGradient: "from-[#34d399]/20 to-[#065f46]/30",
      buttonText: "Contribute"
    },
    {
      icon: <Handshake className="text-blue-400 w-14 h-14" />,
      title: "Partner With Us",
      description: "Businesses, NGOs, and changemakers—join us in making a larger impact. Let’s create a hunger-free world together.",
      stats: [
        "Collaborate on food drives and fundraising",
        "Leverage networks to expand impact"
      ],
      bgGradient: "from-[#60a5fa]/20 to-[#1e3a8a]/30",
      buttonText: "Partner Now"
    }
  ];

  return (
    <div className="bg-[#f0f4ff] text-white py-24 px-6">
      {/* Heading */}
      <h2 className="text-5xl text-black font-extrabold text-center mb-16 font-poppins">
        Be the Change: <span className="text-yellow-500">Make an Impact Today!</span>
      </h2>

      {/* Help Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {helpSections.map((section, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 bg-gradient-to-br ${section.bgGradient}
              border border-white/10 shadow-xl backdrop-blur-sm transition transform 
              hover:scale-105 hover:shadow-yellow-400/40`}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-md z-0" />
            
            {/* Content */}
            <div className="relative z-10 space-y-6 text-black">
              <div className="flex items-center space-x-4 mb-4">
                {section.icon}
                <h3 className="text-3xl font-bold">{section.title}</h3>
              </div>
              <p className="text-lg text-black/90">{section.description}</p>
              <ul className="space-y-3">
                {section.stats.map((stat, statIndex) => (
                  <li key={statIndex} className="flex items-center text-black/80">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3" />
                    {stat}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition shadow-md">
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer CTA */}
      <div className="mt-16 flex justify-center">
        <button className="w-full max-w-3xl py-4 text-2xl font-semibold bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition">
          Become a Volunteer
        </button>
      </div>
    </div>
  );
};

export default HowYouCanHelp;
