import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, User, Phone, Mail, MapPin, Check, Sparkles, Heart, Star } from 'lucide-react';

const VolunteerProfile = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    availability: '',
    skills: [],
    location: {
      city: '',
      state: ''
    },
    profilePicture: '',
    isVerified: false
  });

  const navigate = useNavigate();

  const steps = [
    { title: 'Personal Info', icon: User, color: 'from-emerald-400 to-cyan-400' },
    { title: 'Profile Details', icon: Heart, color: 'from-violet-400 to-purple-400' },
    { title: 'Location & Photo', icon: Sparkles, color: 'from-pink-400 to-rose-400' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('location.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter(skill => skill !== value)
    }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log('Form submitted:', formData);
      // Save name to localStorage for Thank You page personalization
      localStorage.setItem('volunteerName', formData.name);
      navigate('/volunteer/thankyou');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium"
                  placeholder="Your full name"
                  required
                />
                <User className="absolute right-4 top-4 w-6 h-6 text-emerald-500" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium"
                  placeholder="your.email@example.com"
                  required
                />
                <Mail className="absolute right-4 top-4 w-6 h-6 text-cyan-500" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium"
                  placeholder="+1 (555) 123-4567"
                  required
                />
                <Phone className="absolute right-4 top-4 w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium appearance-none cursor-pointer"
                >
                  <option value="">Select your gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <div className="absolute right-4 top-4 pointer-events-none">
                  <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium appearance-none cursor-pointer"
                  required
                >
                  <option value="">When are you available?</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays & weekends</option>
                </select>
                <div className="absolute right-4 top-4 pointer-events-none">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                What are your superpowers? ✨
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { skill: 'Teaching', icon: '📚', color: 'from-emerald-400 to-teal-400' },
                  { skill: 'Food Distribution', icon: '🍽️', color: 'from-orange-400 to-red-400' },
                  { skill: 'Elderly Support', icon: '👴', color: 'from-blue-400 to-indigo-400' },
                  { skill: 'Tech Assistance', icon: '💻', color: 'from-cyan-400 to-blue-400' },
                  { skill: 'Content Creation', icon: '🎨', color: 'from-violet-400 to-purple-400' }
                ].map(({ skill, icon, color }) => (
                  <label key={skill} className="group cursor-pointer">
                    <div className={`relative p-4 rounded-2xl bg-white/80 backdrop-blur-xl border-2 transition-all duration-300 hover:bg-white/90 ${
                      formData.skills.includes(skill) 
                        ? 'border-transparent shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      {formData.skills.includes(skill) && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur opacity-20`}></div>
                      )}
                      <div className="relative flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${
                          formData.skills.includes(skill) 
                            ? `bg-gradient-to-r ${color} text-white shadow-lg` 
                            : 'bg-gray-100 text-gray-600'
                        } transition-all duration-300`}>
                          {icon}
                        </div>
                        <div className="flex-1">
                          <span className={`text-lg font-semibold ${
                            formData.skills.includes(skill) ? 'text-gray-800' : 'text-gray-600'
                          } transition-colors duration-300`}>
                            {skill}
                          </span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          formData.skills.includes(skill)
                            ? `bg-gradient-to-r ${color} border-transparent`
                            : 'border-gray-300 bg-white'
                        }`}>
                          {formData.skills.includes(skill) && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        name="skills"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleSkillChange}
                        className="sr-only"
                      />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type="text"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleChange}
                    className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium"
                    placeholder="City"
                    required
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type="text"
                    name="location.state"
                    value={formData.location.state}
                    onChange={handleChange}
                    className="w-full bg-white/90 backdrop-blur-xl border-0 rounded-2xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:bg-white transition-all duration-300 shadow-lg font-medium"
                    placeholder="State"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Show your beautiful face! 📸
              </h3>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData(prev => ({ ...prev, profilePicture: reader.result }));
                      };
                      if (file) reader.readAsDataURL(file);
                    }}
                    className="w-full text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-pink-400 file:to-orange-400 file:text-white hover:file:from-pink-500 hover:file:to-orange-500 transition-all duration-300 file:shadow-lg cursor-pointer"
                  />
                  {formData.profilePicture && (
                    <div className="mt-8 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur opacity-30"></div>
                        <img
                          src={formData.profilePicture}
                          alt="Preview"
                          className="relative rounded-full w-32 h-32 object-cover shadow-2xl border-4 border-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-7xl flex gap-8 z-10">
        
        {/* Main Form Container */}
        <div className="flex-1 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
          
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {steps.map((stepItem, index) => {
                const StepIcon = stepItem.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                      index <= step 
                        ? `bg-gradient-to-r ${stepItem.color} text-white shadow-lg scale-110` 
                        : 'bg-white/20 text-white/60 scale-100'
                    }`}>
                      {index < step ? (
                        <Check className="w-8 h-8" />
                      ) : (
                        <StepIcon className="w-8 h-8" />
                      )}
                      {index <= step && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${stepItem.color} rounded-2xl blur opacity-50 animate-pulse`}></div>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-20 h-2 mx-4 rounded-full transition-all duration-500 ${
                        index < step ? `bg-gradient-to-r ${stepItem.color}` : 'bg-white/20'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-2">{steps[step].title}</h2>
              <p className="text-white/70 text-lg">Step {step + 1} of {steps.length}</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="mb-12">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                step === 0
                  ? 'bg-white/10 text-white/50 cursor-not-allowed'
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-xl shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            {step === steps.length - 1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="relative group flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <span className="relative">Submit Profile</span>
                <Star className="relative w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="relative group flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <span className="relative">Next Step</span>
                <ChevronRight className="relative w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="hidden lg:block w-96">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 sticky top-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span>Live Preview</span>
            </h3>
            
            <div className="text-center mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-2xl">
                  {formData.profilePicture ? (
                    <img
                      src={formData.profilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {formData.name || 'Your Name'}
              </h4>
              <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full">
                <Star className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Volunteer</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-xl rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {formData.email || 'email@example.com'}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-xl rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {formData.phone || '+1 (555) 000-0000'}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-xl rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {formData.location.city && formData.location.state 
                    ? `${formData.location.city}, ${formData.location.state}` 
                    : 'City, State'}
                </span>
              </div>
            </div>

            {formData.skills.length > 0 && (
              <div className="mt-6">
                <p className="text-white/90 text-sm font-semibold mb-3">Skills & Superpowers</p>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-gradient-to-r ${
                        ['from-emerald-400 to-teal-400', 'from-violet-400 to-purple-400', 'from-pink-400 to-rose-400', 'from-blue-400 to-cyan-400', 'from-orange-400 to-red-400'][index % 5]
                      } rounded-full text-xs text-white font-semibold shadow-lg`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {formData.availability && (
              <div className="mt-6">
                <p className="text-white/90 text-sm font-semibold mb-2">Availability</p>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm text-white font-semibold capitalize">
                    {formData.availability}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;