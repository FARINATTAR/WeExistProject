// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Ensure toast styles are included
// import { Eye, EyeOff } from 'lucide-react';

// function Signup() {
//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const navigate = useNavigate();

//     const API_URL = import.meta.env.VITE_API_URL || "https://weexist99.onrender.com";

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSignupInfo((prev) => ({ ...prev, [name]: value }));
//     };

//     const togglePasswordVisibility = (field) => {
//         if (field === 'password') {
//             setShowPassword(!showPassword);
//         } else {
//             setShowConfirmPassword(!showConfirmPassword);
//         }
//     };

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = signupInfo;

//         if (!name || !email || !password || !confirmPassword) {
//             return toast.error('All fields are required.', { position: 'top-right', autoClose: 3000 });
//         }

//         if (password !== confirmPassword) {
//             return toast.error('Passwords do not match.', { position: 'top-right', autoClose: 3000 });
//         }

//         setIsLoading(true);
//         try {
//             const response = await fetch(`${API_URL}/auth/signup`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, email, password }),
//             });

//             const result = await response.json();
//             console.log(result); // Debugging: Check API response in console

//             if (result.success) {
//                 toast.success(result.message || 'Signup successful!', { position: 'top-right', autoClose: 2000 });
//                 setTimeout(() => navigate('/login'), 1000); // Delay navigation to show toast
//             } else {
//                 toast.error(result.error?.details?.[0]?.message || result.message, { position: 'top-right', autoClose: 3000 });
//             }
//         } catch (err) {
//             toast.error(err.message || 'Something went wrong.', { position: 'top-right', autoClose: 3000 });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
//             <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
//                 <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Sign Up</h1>
//                 <form onSubmit={handleSignup} className="space-y-5 font-poppins">
//                     <div className="flex flex-col">
//                         <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
//                         <input
//                             onChange={handleChange}
//                             type="text"
//                             name="name"
//                             placeholder="Enter your full name"
//                             value={signupInfo.name}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
//                         <input
//                             onChange={handleChange}
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={signupInfo.email}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-lg font-semibold text-gray-700">Set Password</label>
//                         <div className="relative">
//                             <input
//                                 onChange={handleChange}
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 placeholder="Create a password"
//                                 value={signupInfo.password}
//                                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => togglePasswordVisibility('password')}
//                                 className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             >
//                                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-700">Confirm Password</label>
//                         <div className="relative">
//                             <input
//                                 onChange={handleChange}
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 name="confirmPassword"
//                                 placeholder="Confirm your password"
//                                 value={signupInfo.confirmPassword}
//                                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => togglePasswordVisibility('confirm')}
//                                 className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             >
//                                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                             </button>
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 
//                         ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
//                     >
//                         {isLoading ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                     <p className="text-center text-gray-600 mt-3">
//                         Already have an account?{' '}
//                         <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">Login</Link>
//                     </p>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default Signup;

// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Eye, EyeOff } from 'lucide-react';
// import { useAuth } from '../context/AuthContext.jsx';

// function Signup() {
//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const { login } = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from || new URLSearchParams(location.search).get('redirect') || "/";
//     const API_URL = import.meta.env.VITE_API_URL || "https://weexist99.onrender.com";

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSignupInfo((prev) => ({ ...prev, [name]: value }));
//     };

//     const togglePasswordVisibility = (field) => {
//         if (field === 'password') {
//             setShowPassword(!showPassword);
//         } else {
//             setShowConfirmPassword(!showConfirmPassword);
//         }
//     };

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = signupInfo;

//         if (!name || !email || !password || !confirmPassword) {
//             return toast.error('All fields are required.', { position: 'top-right', autoClose: 3000 });
//         }

//         if (password !== confirmPassword) {
//             return toast.error('Passwords do not match.', { position: 'top-right', autoClose: 3000 });
//         }

//         setIsLoading(true);
//         try {
//             const response = await fetch(`${API_URL}/auth/signup`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, email, password }),
//             });

//             const result = await response.json();
//             console.log(result);

//             if (result.success) {
//                 toast.success(result.message || 'Signup successful!', { position: 'top-right', autoClose: 2000 });
//                 // const searchParams = new URLSearchParams(location.search);
//                 const redirectPath = location.state?.from || new URLSearchParams(location.search).get('redirect') || '/home';
//                 // login({ name, email }); // Log in the user after successful signup
//                 setTimeout(() => {
//                     navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`, {
//                         state: { from: redirectPath }
//                     });
//                 }, 1000);
//             } else {
//                 toast.error(result.error?.details?.[0]?.message || result.message, { position: 'top-right', autoClose: 3000 });
//             }
//         } catch (err) {
//             toast.error(err.message || 'Something went wrong.', { position: 'top-right', autoClose: 3000 });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
//             <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
//                 <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Sign Up</h1>
//                 <form onSubmit={handleSignup} className="space-y-5 font-poppins">
//                     <div className="flex flex-col">
//                         <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
//                         <input
//                             onChange={handleChange}
//                             type="text"
//                             name="name"
//                             placeholder="Enter your full name"
//                             value={signupInfo.name}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
//                         <input
//                             onChange={handleChange}
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={signupInfo.email}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-lg font-semibold text-gray-700">Set Password</label>
//                         <div className="relative">
//                             <input
//                                 onChange={handleChange}
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 placeholder="Create a password"
//                                 value={signupInfo.password}
//                                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => togglePasswordVisibility('password')}
//                                 className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             >
//                                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex flex-col">
//                          <label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-700">Confirm Password</label>
//                         <div className="relative">
//                             <input
//                                 onChange={handleChange}
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 name="confirmPassword"
//                                 placeholder="Confirm your password"
//                                  value={signupInfo.confirmPassword}
//                                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                              <button
//                                  type="button"
//                                  onClick={() => togglePasswordVisibility('confirm')}
//                                  className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                            >
//                                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                              </button>
//                          </div>
//                      </div>
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 
//                         ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
//                     >
//                         {isLoading ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                     <p className="text-center text-gray-600 mt-3">
//                         Already have an account?{' '}
//                         <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">Login</Link>
//                     </p>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        street: '',
        area: '',
        pincode: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.from || new URLSearchParams(location.search).get('redirect') || '/';

    const API_URL = import.meta.env.VITE_API_URL || "https://weexistproject.onrender.com";

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({ ...prev, [name]: value }));
    };

const handleSignup = async (e) => {
    e.preventDefault();

    const {
        name, email, password, confirmPassword, phone,
        gender, dateOfBirth, street, area, pincode
    } = signupInfo;

    // 🔒 Field validation
    if (!name || !email || !password || !confirmPassword ||
        !phone || !gender || !dateOfBirth || !street || !area || !pincode) {
        return toast.error('All fields are required.', { position: 'top-right', autoClose: 3000 });
    }

    if (password !== confirmPassword) {
        return toast.error('Passwords do not match.', { position: 'top-right', autoClose: 3000 });
    }

    setIsLoading(true);
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                gender,
                dateOfBirth,
                address: {
                    street,
                    area,
                    pincode
                },
                role: "volunteer"
            }),
        });

        const result = await response.json();
        console.log("Signup response:", result);

        if (result.success) {
            // 🔐 Store email for fallback if needed
            localStorage.setItem("pendingEmail", email);

            if (result.isVerified === false) {
                toast.info('OTP sent to your email. Please verify.', {
                    position: 'top-right',
                    autoClose: 2500
                });

                setTimeout(() => {
                    navigate(`/verify-otp?redirect=${encodeURIComponent(redirectPath)}`, {
                        state: { email }  // ✅ crucial for VerifyOtp.jsx
                    });
                }, 1000);
            } else {
                toast.success(result.message || 'Signup successful!', {
                    position: 'top-right',
                    autoClose: 2000
                });

                setTimeout(() => {
                    navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`, {
                        state: { from: redirectPath }
                    });
                }, 1000);
            }
        } else {
            toast.error(result.error?.details?.[0]?.message || result.message, {
                position: 'top-right',
                autoClose: 3000
            });
        }
    } catch (err) {
        toast.error(err.message || 'Something went wrong.', {
            position: 'top-right',
            autoClose: 3000
        });
    } finally {
        setIsLoading(false);
    }
};


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Sign Up</h1>
                <form onSubmit={handleSignup} className="space-y-4 font-poppins">
                    {/* Original Fields */}
                    {/* name, email, password, confirmPassword same as before */}
                     <div className="flex flex-col">
                         <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
                         <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={signupInfo.name}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={signupInfo.email}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold text-gray-700">Set Password</label>
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create a password"
                                value={signupInfo.password}
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('password')}
                                className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                         <label htmlFor="confirmPassword" className="text-lg font-semibold text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                onChange={handleChange}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                 value={signupInfo.confirmPassword}
                                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                             <button
                                 type="button"
                                 onClick={() => togglePasswordVisibility('confirm')}
                                 className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                           >
                                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                             </button>
                         </div>
                     </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-lg font-semibold text-gray-700">Phone Number</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={signupInfo.phone}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col">
                        <label htmlFor="gender" className="text-lg font-semibold text-gray-700">Gender</label>
                        <select
                            name="gender"
                            onChange={handleChange}
                            value={signupInfo.gender}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* DOB */}
                    <div className="flex flex-col">
                        <label htmlFor="dateOfBirth" className="text-lg font-semibold text-gray-700">Date of Birth</label>
                        <input
                            onChange={handleChange}
                            type="date"
                            name="dateOfBirth"
                            value={signupInfo.dateOfBirth}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Address Fields */}
                    <div className="flex flex-col">
                        <label htmlFor="street" className="text-lg font-semibold text-gray-700">Street</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="street"
                            value={signupInfo.street}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="area" className="text-lg font-semibold text-gray-700">Area</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="area"
                            value={signupInfo.area}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pincode" className="text-lg font-semibold text-gray-700">Pincode</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="pincode"
                            value={signupInfo.pincode}
                            className="mt-2 p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
                    >
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>

                    <p className="text-center text-gray-600 mt-3">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">Login</Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Signup;
