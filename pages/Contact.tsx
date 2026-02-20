
import React from 'react';

const Contact: React.FC = () => {
  // Exact coordinates for New Holy Cross School, Kandaghari
  const mapUrl = "https://www.google.com/maps/place/New+Holy+Cross+School/@27.6917647,85.3712395,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1a30141d8e13:0x637894a8607149a4!8m2!3d27.6917647!4d85.3712395!16s%2Fg%2F1tj59_x7";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.766324269931!2d85.3712395!3d27.6917647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a30141d8e13%3A0x637894a8607149a4!2sNew%20Holy%20Cross%20School!5e0!3m2!1sen!2snp!4v1710100000000!5m2!1sen!2snp";

  return (
    <div className="pb-16 sm:pb-24">
      <div className="bg-indigo-900 py-16 sm:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">Contact Us</h1>
          <p className="text-indigo-100/80 max-w-2xl mx-auto text-base sm:text-xl font-light">We welcome parents and students to visit our school premises in Kandaghari.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          <div className="bg-white p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-6 sm:mb-8">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">School Location</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Kandaghari-9, Kapan Road<br />Kathmandu, Nepal</p>
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-6 sm:mb-8">
              <i className="fas fa-phone-volume"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Reach Us</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Office: 01-4990131</p>
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-6 sm:mb-8">
              <i className="fas fa-paper-plane"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Digital Mail</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">info@newholycross.edu.np<br />apply@newholycross.edu.np</p>
          </div>
        </div>

        <div className="relative group">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden h-[400px] sm:h-[650px] relative shadow-2xl border-4 sm:border-8 border-white">
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="New Holy Cross School Exact Location"
            ></iframe>
            
            {/* Map Overlay Controls - Responsive positioning */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex flex-col space-y-2 sm:space-y-3">
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-indigo-900 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl font-black uppercase tracking-widest text-[9px] sm:text-xs hover:bg-indigo-50 transition-all flex items-center space-x-2 border border-indigo-100 scale-100 hover:scale-105"
              >
                <i className="fas fa-search-plus text-indigo-600"></i>
                <span className="hidden sm:inline">View in Larger Map</span>
                <span className="sm:hidden">Full Map</span>
              </a>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=New+Holy+Cross+School+Kandaghari+Kathmandu`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl font-black uppercase tracking-widest text-[9px] sm:text-xs hover:bg-indigo-700 transition-all flex items-center space-x-2 scale-100 hover:scale-105"
              >
                <i className="fas fa-route"></i>
                <span className="hidden sm:inline">Get Directions</span>
                <span className="sm:hidden">Directions</span>
              </a>
            </div>

            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl max-w-sm hidden lg:block border border-white">
              <h4 className="font-extrabold mb-3 text-indigo-900 text-xl flex items-center">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full mr-3"></div>
                  New Holy Cross School
              </h4>
              <p className="text-sm text-gray-500 mb-6 italic">Marked Location: Kandaghari-9, Kathmandu</p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between items-center bg-indigo-50/50 p-2 rounded-lg">
                  <span className="font-medium">School Days (Sun-Thu)</span>
                  <span className="font-bold text-indigo-900">9:00 - 16:30</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-50/50 p-2 rounded-lg">
                  <span className="font-medium">Friday</span>
                  <span className="font-bold text-indigo-900">9:00 - 14:00</span>
                </div>
                <div className="flex justify-center pt-2">
                   <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Closed on Saturdays</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center bg-indigo-50 px-4 py-4 sm:py-6 rounded-xl sm:rounded-2xl border border-indigo-100">
            <p className="text-indigo-900 font-bold text-xs sm:text-sm leading-relaxed">
              <i className="fas fa-info-circle mr-2"></i> 
              The map shows our exact premises in Kandaghari-9. Visit us for admission inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
