import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  ArrowRight,
  ArrowLeft,
  Lock,
  User,
  Eye,
  EyeOff,
  Twitch,
  Twitter,
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounted
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.d)
    if (isLogin) {
      // Login API call
      try {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Login successful:", data);
          localStorage.setItem("token", data.token);
          window.location.href = "/";
          // Handle successful login (e.g., store token, redirect)
        } else {
          console.error("Login failed:", data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      // Signup API call
      try {
        const response = await fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Signup successful:", data);
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          console.error("Signup failed:", data.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const quote = isLogin
    ? "Unlock your potential with every login."
    : "Begin your journey with us, sign up today.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-200/50 dark:bg-indigo-800/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 150}px`,
              height: `${Math.random() * 30 + 150}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Auth Container */}
      <div className="relative w-full mt-7 max-w-md z-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Transition Container */}
        <div className="relative h-[520px] overflow-hidden">
          {/* Login Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
              isLogin ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 italic transition-opacity duration-300">
                  {quote}
                </p>
              </div>

              {/* Username */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute top-4 left-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full px-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute top-4 left-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 cursor-pointer" />
                    ) : (
                      <Eye className="w-5 h-5 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-300 shadow-md hover:shadow-lg mt-6"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-between my-2">
                <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
                <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
                  or
                </span>
                <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-4">
                {[Twitch, Twitter, Github].map((Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-3 rounded-xl bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition-colors duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Signup Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
              !isLogin ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Create Account
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 italic transition-opacity duration-300">
                  {quote}
                </p>
              </div>

              {/* Username */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute top-4 left-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <input
                    type="text"
                    placeholder="Choose a username"
                    className="w-full px-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute top-4 left-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute top-4 left-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full px-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 cursor-pointer" />
                    ) : (
                      <Eye className="w-5 h-5 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-300 shadow-md hover:shadow-lg mt-6"
              >
                Sign Up
              </button>

              {/* Divider */}
              <div className="flex items-center justify-between my-6">
                <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
                <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
                  or
                </span>
                <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-4">
                {[Twitch, Twitter, Github].map((Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-3 rounded-xl bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition-colors duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="p-6 text-center border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <button
            onClick={toggleForm}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            {isLogin ? (
              <>
                Need an account? <span className="font-bold">Sign Up</span>
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="font-bold">Login</span>
                <ArrowLeft className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
