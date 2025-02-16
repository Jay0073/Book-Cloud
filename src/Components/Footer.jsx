import React from "react";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Apple,
  PlayCircle,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Book Cloud</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Explore the universe of books through our comprehensive digital library. 
              We're dedicated to making reading accessible to everyone, everywhere.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>support@BookCloud.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+91 76608 16065</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Laldarwaza, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <a href="#" className="
                  p-2 bg-gray-800 rounded-full 
                  hover:bg-indigo-600 transition-colors duration-300
                ">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="
                  p-2 bg-gray-800 rounded-full 
                  hover:bg-indigo-600 transition-colors duration-300
                ">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="
                  p-2 bg-gray-800 rounded-full 
                  hover:bg-indigo-600 transition-colors duration-300
                ">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="
                  p-2 bg-gray-800 rounded-full 
                  hover:bg-indigo-600 transition-colors duration-300
                ">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="pt-4">
                <h4 className="text-white mb-4">Subscribe to Newsletter</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="
                      px-4 py-2 
                      bg-gray-800 
                      rounded-lg 
                      flex-grow
                      focus:outline-none focus:ring-2 focus:ring-indigo-500
                      text-sm
                    "
                  />
                  <button className="
                    px-4 py-2 
                    bg-indigo-600 hover:bg-indigo-700 
                    rounded-lg
                    transition-colors duration-300
                    text-white
                    text-sm font-medium
                  ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Download App</h3>
            <div className="space-y-4">
              <button className="
                w-full
                px-6 py-3
                bg-gray-800 hover:bg-gray-700
                rounded-xl
                flex items-center gap-3
                transition-colors duration-300
              ">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="
                w-full
                px-6 py-3
                bg-gray-800 hover:bg-gray-700
                rounded-xl
                flex items-center gap-3
                transition-colors duration-300
              ">
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">About Us</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">FAQ</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Help Center</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Book Cloud. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Book Cloud Team</span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">License</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
