
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SchoolCrest = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer Shield Shape */}
    <path d="M40 20 H360 V350 C360 420 200 480 200 480 C200 480 40 420 40 350 V20Z" fill="white" stroke="#000033" strokeWidth="4"/>
    
    {/* Blue Background Blocks */}
    <path d="M50 60 H180 V170 H50 V60Z" fill="#000044"/>
    <path d="M220 60 H350 V170 H220 V60Z" fill="#000044"/>
    <path d="M50 200 H180 V400 C110 380 50 340 50 340 V200Z" fill="#000044"/>
    <path d="M220 200 H350 V340 C350 340 290 380 220 400 V200Z" fill="#000044"/>
    
    {/* NHC Gothic Initials Text */}
    <text x="285" y="135" fontFamily="Serif" fontSize="70" fontWeight="bold" fill="white" textAnchor="middle" style={{ fontVariant: 'small-caps' }}>NHC</text>
    
    {/* Yellow Circle with Star */}
    <circle cx="285" cy="285" r="70" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
    
    {/* Star of David */}
    <path d="M285 225 L335 315 L235 315 Z" fill="none" stroke="black" strokeWidth="2"/>
    <path d="M285 345 L235 255 L335 255 Z" fill="none" stroke="black" strokeWidth="2"/>
    
    {/* Small Book in Star */}
    <path d="M270 285 C270 280 285 280 285 285 C285 280 300 280 300 285 V295 C300 290 285 290 285 295 C285 290 270 290 270 295 V285Z" fill="white" stroke="black" strokeWidth="1"/>
    <line x1="285" y1="285" x2="285" y2="295" stroke="black" strokeWidth="1"/>

    {/* Header Text */}
    <text x="200" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#000044" textAnchor="middle">NEW HOLY CROSS E.B.S SCHOOL</text>
  </svg>
);

const SchoolLogo = ({ className = "", showSlogan = true }: { className?: string, showSlogan?: boolean }) => (
  <div className={`flex items-center space-x-2 sm:space-x-4 tap-scale ${className}`}>
    <div className="relative school-crest-shadow shrink-0">
      <SchoolCrest className="w-10 sm:w-14 h-auto" />
      <div className="absolute -top-0.5 -right-0.5 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-indigo-900 font-extrabold text-sm sm:text-lg leading-none tracking-tight">NEW HOLY CROSS</span>
      <span className="text-indigo-900 font-bold text-[8px] sm:text-[10px] leading-none mb-1">E.B.S. SCHOOL</span>
      <div className="flex flex-col">
        <span className="text-indigo-500 text-[7px] sm:text-[9px] tracking-[0.1em] sm:tracking-[0.2em] font-bold uppercase">Kathmandu • Estd: 2055</span>
        {showSlogan && (
          <span className="text-yellow-400 text-[7px] sm:text-[9px] font-bold mt-0.5 border-t border-indigo-100 pt-0.5 uppercase tracking-wider">
            "Light shines in darkness"
          </span>
        )}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-indigo-50">
      {/* Top Credit Bar */}
      <div className="bg-indigo-950 text-white/60 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="hidden sm:flex items-center space-x-4">
             <span className="flex items-center hover:text-white transition-colors cursor-pointer"><i className="fas fa-phone-alt mr-2 text-yellow-400"></i> 01-4990131</span>
             <span className="w-px h-3 bg-white/10"></span>
             <span className="flex items-center hover:text-white transition-colors cursor-pointer"><i className="fas fa-envelope mr-2 text-yellow-400"></i> info@newholycross.edu.np</span>
          </div>
          <div className="flex-grow sm:flex-grow-0 text-center sm:text-right">
            Made by <span className="text-yellow-400 animate-pulse">Samrat Karki</span> & <span className="text-yellow-400 animate-pulse">John Tamang</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 sm:h-24">
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <SchoolLogo />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
                } font-bold transition-all duration-200 py-1 text-sm uppercase tracking-wider tap-scale relative group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link to="/admissions" className="bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-200 tap-scale active:scale-90">
              Apply Now
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-indigo-900 p-2 sm:p-3 bg-indigo-50 rounded-xl hover:bg-indigo-100 tap-scale transition-all"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-indigo-950/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col p-6 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
             <SchoolLogo showSlogan={false} />
             <button 
               onClick={() => setIsOpen(false)} 
               className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 tap-scale transition-colors"
               aria-label="Close Menu"
              >
               <i className="fas fa-times"></i>
             </button>
          </div>
          <div className="space-y-3 flex-grow overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all tap-scale ${
                  location.pathname === link.path 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                    : 'text-gray-500 hover:bg-gray-50 border border-transparent'
                }`}
              >
                <span>{link.name}</span>
                <i className={`fas fa-chevron-right text-[10px] ${location.pathname === link.path ? 'opacity-100' : 'opacity-20'}`}></i>
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100">
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full px-6 py-5 bg-indigo-900 text-white rounded-2xl text-center font-black uppercase tracking-[0.2em] shadow-xl tap-scale transition-all mb-8"
            >
              Start Admission
            </Link>
            <div className="flex justify-center space-x-8 text-indigo-300">
               <a href="#" className="hover:text-indigo-600 transition-all tap-scale"><i className="fab fa-facebook-f text-xl"></i></a>
               <a href="#" className="hover:text-indigo-600 transition-all tap-scale"><i className="fab fa-instagram text-xl"></i></a>
               <a href="#" className="hover:text-indigo-600 transition-all tap-scale"><i className="fab fa-whatsapp text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#000033] text-white pt-16 sm:pt-24 pb-12 relative overflow-hidden">
      {/* Decorative SVG watermark in footer */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
         <SchoolCrest className="w-[300px] sm:w-[600px] h-auto" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 relative z-10">
        <div className="space-y-6 sm:space-y-8 animate-reveal-up">
          <SchoolLogo className="brightness-200" />
          <p className="text-gray-400 text-sm leading-relaxed italic">
            <span className="text-yellow-400">"Light shines in darkness."</span> <br/>
            Founded in 2055 BS, New Holy Cross E.B.S School is dedicated to academic excellence in Kandaghari, Kathmandu.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover-lift tap-scale"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover-lift tap-scale"><i className="fab fa-instagram"></i></a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover-lift tap-scale"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="animate-reveal-up delay-100">
          <h4 className="text-lg font-bold mb-6 sm:mb-8 relative inline-block text-white uppercase tracking-widest">
            Our Portal
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link to="/about" className="hover:text-yellow-400 transition-all flex items-center group"><i className="fas fa-chevron-right text-[10px] mr-3 text-indigo-400 group-hover:translate-x-1 transition-transform"></i> Our Legacy</Link></li>
            <li><Link to="/academics" className="hover:text-yellow-400 transition-all flex items-center group"><i className="fas fa-chevron-right text-[10px] mr-3 text-indigo-400 group-hover:translate-x-1 transition-transform"></i> Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-yellow-400 transition-all flex items-center group"><i className="fas fa-chevron-right text-[10px] mr-3 text-indigo-400 group-hover:translate-x-1 transition-transform"></i> Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-all flex items-center group"><i className="fas fa-chevron-right text-[10px] mr-3 text-indigo-400 group-hover:translate-x-1 transition-transform"></i> Visit Us</Link></li>
          </ul>
        </div>

        <div className="animate-reveal-up delay-200">
          <h4 className="text-lg font-bold mb-6 sm:mb-8 relative inline-block text-white uppercase tracking-widest">
            Curriculum
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li className="flex items-center hover:text-white transition-colors cursor-default"><div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Pre-Primary Wing</li>
            <li className="flex items-center hover:text-white transition-colors cursor-default"><div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Primary Level</li>
            <li className="flex items-center hover:text-white transition-colors cursor-default"><div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Secondary Wing</li>
            <li className="flex items-center hover:text-white transition-colors cursor-default"><div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div> Extracurriculars</li>
          </ul>
        </div>

        <div className="animate-reveal-up delay-300">
          <h4 className="text-lg font-bold mb-6 sm:mb-8 relative inline-block text-white uppercase tracking-widest">
            Contact
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
          </h4>
          <ul className="space-y-5 text-gray-400 text-sm">
            <li className="flex items-start space-x-3 group">
              <i className="fas fa-map-marker-alt mt-1 text-yellow-400 group-hover:scale-125 transition-transform"></i>
              <span className="group-hover:text-white transition-colors">Kandaghari-9, Kathmandu<br />Bagmati Province, Nepal</span>
            </li>
            <li className="flex items-center space-x-3 group cursor-pointer tap-scale">
              <i className="fas fa-phone-alt text-yellow-400 group-hover:scale-125 transition-transform"></i>
              <span className="group-hover:text-white transition-colors">01-4990131</span>
            </li>
            <li className="flex items-center space-x-3 group cursor-pointer tap-scale">
              <i className="fas fa-envelope text-yellow-400 group-hover:scale-125 transition-transform"></i>
              <span className="group-hover:text-white transition-colors">info@newholycross.edu.np</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pt-8 border-t border-white/10 text-center text-gray-500 text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold space-y-4">
        <div>&copy; {new Date().getFullYear()} NEW HOLY CROSS E.B.S SCHOOL • <span className="text-yellow-400">LIGHT SHINES IN DARKNESS</span></div>
        <div className="tracking-[0.1em] sm:tracking-[0.25em] text-indigo-400 text-[10px] sm:text-xs font-bold bg-white/5 py-3 px-4 sm:px-6 rounded-2xl border border-white/10 inline-block shadow-inner animate-float">
           made by <span className="text-yellow-400 uppercase">Samrat Karki</span> and <span className="text-yellow-400 uppercase">John Tamang</span>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
