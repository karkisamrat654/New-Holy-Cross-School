
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateNewsItems } from '../services/geminiService';
import { NewsItem } from '../types';
import { SchoolCrest } from '../components/Layout';

const FeatureCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-indigo-50 hover-lift tap-scale group animate-reveal-up">
    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-900 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-indigo-900 transition-all duration-500 shadow-lg shadow-indigo-100">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const items = await generateNewsItems();
      setNews(items);
      setLoadingNews(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="space-y-12 sm:space-y-24 pb-12 sm:pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] flex items-center overflow-hidden bg-[#000033]">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/YBkNL79X/434584455-1921653348363501-540408245288096641-n.jpg" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
            alt="New Holy Cross E.B.S School Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000033] via-[#000033]/90 to-transparent"></div>
        </div>

        <div className="absolute -left-40 sm:-left-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform -rotate-12 select-none animate-float">
           <SchoolCrest className="w-[800px] sm:w-[1200px] h-auto brightness-0 invert" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/10 mb-6 sm:mb-10 shadow-2xl animate-reveal-up">
              <i className="fas fa-shield-alt text-yellow-400 text-sm"></i>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.5em] uppercase text-yellow-400">Established 2055 BS</span>
            </div>
            
            <div className="relative mb-6 sm:mb-12 animate-reveal-up delay-100">
               <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black leading-[1.1] sm:leading-[1] tracking-tighter text-yellow-400 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase italic">
                  Light Shines <br className="sm:hidden" />
                  in <br />
                  Darkness.
               </h1>
               <div className="absolute -left-6 sm:-left-10 top-0 bottom-0 w-1.5 sm:w-2 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)]"></div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-indigo-100/80 leading-relaxed font-medium max-w-2xl border-l-2 sm:border-l-4 border-white/10 pl-5 sm:pl-8 animate-reveal-up delay-200">
              Welcome to <span className="font-bold text-white">New Holy Cross E.B.S School</span>. 
              The beacon of academic brilliance in Kandaghari-9, Kathmandu.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 animate-reveal-up delay-300">
              <Link to="/admissions" className="bg-yellow-400 text-[#000033] hover:bg-white px-8 sm:px-14 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black transition-all text-center shadow-2xl shadow-yellow-400/30 tap-scale uppercase tracking-widest active:scale-90">
                Join our Legacy
              </Link>
              <Link to="/about" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 px-8 sm:px-14 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold transition-all text-center tap-scale">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 -mt-12 sm:-mt-24 relative z-20 border border-indigo-50 animate-reveal-up delay-400">
          <div className="text-center group tap-scale">
            <div className="text-3xl sm:text-5xl font-black text-indigo-900 mb-1 group-hover:text-yellow-500 transition-colors">28+</div>
            <div className="text-gray-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">Years of Glory</div>
          </div>
          <div className="text-center group tap-scale">
            <div className="text-3xl sm:text-5xl font-black text-indigo-900 mb-1 group-hover:text-yellow-500 transition-colors">600+</div>
            <div className="text-gray-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">Active Students</div>
          </div>
          <div className="text-center group tap-scale">
            <div className="text-3xl sm:text-5xl font-black text-indigo-900 mb-1 group-hover:text-yellow-500 transition-colors">50+</div>
            <div className="text-gray-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">Certified Faculty</div>
          </div>
          <div className="text-center group tap-scale">
            <div className="text-3xl sm:text-5xl font-black text-indigo-900 mb-1 group-hover:text-yellow-500 transition-colors">A+</div>
            <div className="text-gray-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.2em]">SEE Excellence</div>
          </div>
        </div>
      </section>

      {/* Campus Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-10 text-center lg:text-left animate-reveal-up">
             <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600">
               <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
               <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Our Campus Heritage</span>
             </div>
             <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 leading-tight">
               The Heart of <br/>
               <span className="text-indigo-600">New Holy Cross</span>
             </h2>
             <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
               Located in the serene locality of Kandaghari-9, our vibrant blue-and-glass facade stands as a landmark of education. Our modern architectural design is built to provide an inspiring environment where knowledge and creativity flourish.
             </p>
             <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover-lift tap-scale">
                   <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-indigo-900">
                      <i className="fas fa-building"></i>
                   </div>
                   <div className="text-left">
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Facility</p>
                      <p className="text-sm font-black text-indigo-900">Modern Labs</p>
                   </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover-lift tap-scale">
                   <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center text-white">
                      <i className="fas fa-users"></i>
                   </div>
                   <div className="text-left">
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Community</p>
                      <p className="text-sm font-black text-indigo-900">600+ Students</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 relative animate-reveal-up">
            <div className="absolute -top-10 -right-10 w-40 sm:w-64 h-40 sm:h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative group perspective-1000">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,51,0.3)] border-[8px] sm:border-[16px] border-white transition-all duration-700 group-hover:scale-[1.02] bg-gray-100">
                <img 
                  src="https://i.ibb.co/YBkNL79X/434584455-1921653348363501-540408245288096641-n.jpg" 
                  alt="New Holy Cross School Building in Kathmandu" 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                
                <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-[2rem] shadow-2xl border border-white/50 max-w-[200px] sm:max-w-xs animate-reveal-up">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0 animate-bounce">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Official Premises</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">Kandaghari-9, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="mb-12 sm:mb-20 animate-reveal-up">
            <span className="text-indigo-600 font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">Core Principles</span>
            <h2 className="text-3xl sm:text-5xl font-black text-indigo-950">Illuminate Your Path</h2>
            <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-yellow-400 mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
          <FeatureCard 
            icon="fa-laptop-code" 
            title="Digital Mastery" 
            description="Our IT infrastructure ensures students are proficient in 21st-century digital skills from an early age."
          />
          <FeatureCard 
            icon="fa-flask" 
            title="Scientific Inquiry" 
            description="Hands-on learning in modern laboratories that spark curiosity and experimental thinking."
          />
          <FeatureCard 
            icon="fa-basketball-ball" 
            title="Athletic Spirit" 
            description="Developing teamwork and physical resilience through a comprehensive sports program."
          />
        </div>
      </section>

      {/* News & Notices */}
      <section className="bg-[#000033] py-16 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-20 gap-6 sm:gap-8 animate-reveal-up">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 sm:mb-4">Official Notices</h2>
              <p className="text-indigo-300 font-medium text-sm sm:text-base">Keep up to date with the latest from the school office.</p>
            </div>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all border border-white/10 uppercase tracking-widest text-[10px] sm:text-xs tap-scale">
              View Notice Board
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {loadingNews ? (
              [1, 2, 3].map(i => (
                <div key={i} className="bg-white/5 rounded-[1.5rem] sm:rounded-[2.5rem] p-8 h-64 sm:h-72 animate-pulse border border-white/5"></div>
              ))
            ) : (
              news.map((item, idx) => (
                <div key={item.id} className={`bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-10 shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-indigo-50 relative group overflow-hidden text-left animate-reveal-up`} style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="relative z-10">
                    <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6">
                      {item.category}
                    </div>
                    <span className="block text-gray-400 text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 uppercase tracking-wider">{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-indigo-950 leading-tight line-clamp-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                    <button className="text-indigo-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:text-indigo-900 transition-colors flex items-center tap-scale">
                      Read Details <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#000033] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden relative p-8 sm:p-16 md:p-32 text-center text-white border-b-[10px] sm:border-b-[20px] border-yellow-400 shadow-2xl animate-reveal-up">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-[6rem] font-black mb-6 sm:mb-10 leading-[1] sm:leading-[0.9] text-yellow-400 drop-shadow-2xl italic">
               Light Shines <br/> in Darkness.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link to="/admissions" className="bg-white text-[#000033] px-10 sm:px-14 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl hover:bg-yellow-400 transition-all shadow-2xl w-full sm:w-auto uppercase tracking-widest tap-scale active:scale-90">
                Enroll Today
              </Link>
              <Link to="/contact" className="border-2 border-white/20 hover:bg-white/10 px-10 sm:px-14 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold transition-all w-full sm:w-auto uppercase tracking-widest text-[10px] sm:text-sm backdrop-blur-md tap-scale">
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
