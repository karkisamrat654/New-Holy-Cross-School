
import React, { useState } from 'react';

const Admissions: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-16 sm:pb-24 animate-in fade-in duration-700">
      <div className="bg-indigo-900 py-16 sm:py-24 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-4 tracking-tight animate-reveal-up">Admissions</h1>
        <p className="text-indigo-100/80 max-w-2xl mx-auto text-base sm:text-lg px-6 font-light animate-reveal-up delay-100">Join a community dedicated to your child's success.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Inquiry Form */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-3xl shadow-xl border border-gray-100 h-fit animate-reveal-up delay-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 text-center sm:text-left">Admission Inquiry</h2>
            {submitted ? (
              <div className="text-center py-8 sm:py-12 animate-in zoom-in-95">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">Thank You!</h3>
                <p className="text-gray-600 text-sm sm:text-base">Your inquiry has been received. Our admission officer will contact you within 24-48 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-indigo-600 font-bold underline text-sm tap-scale">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Parent's Name</label>
                    <input required type="text" className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm transition-all bg-gray-50/30" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Student's Name</label>
                    <input required type="text" className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm transition-all bg-gray-50/30" placeholder="Jane Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input required type="email" className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm transition-all bg-gray-50/30" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input required type="tel" className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm transition-all bg-gray-50/30" placeholder="+977-98XXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applying for Grade</label>
                  <select className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm bg-gray-50/30 cursor-pointer appearance-none">
                    <option>Select Grade</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => <option key={g}>Grade {g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Any Specific Questions?</label>
                  <textarea rows={4} className="w-full p-3.5 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-base sm:text-sm transition-all bg-gray-50/30" placeholder="Tell us more..."></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4.5 sm:py-5 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-indigo-700 transition-all shadow-lg tap-scale active:scale-90">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Admission Process */}
          <div className="space-y-10 sm:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center sm:text-left animate-reveal-up delay-100">Admission Process</h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { step: '01', title: 'Submit Inquiry', desc: 'Fill out the online inquiry form or visit our school office in Kandaghari.' },
                  { step: '02', title: 'School Visit', desc: 'Experience our learning environment firsthand and meet with our faculty.' },
                  { step: '03', title: 'Entrance Assessment', desc: 'Prospective students undergo a friendly assessment to determine academic levels.' },
                  { step: '04', title: 'Interview', desc: 'A short discussion with the parents and the child to align on educational goals.' },
                  { step: '05', title: 'Enrollment', desc: 'Finalize paperwork and secure your child’s seat in our community.' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-5 sm:space-x-6 group animate-reveal-up" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-transform group-hover:scale-110 tap-scale">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-1.5 sm:mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-amber-100 shadow-inner animate-reveal-up delay-[800ms]">
              <h4 className="font-bold text-amber-900 mb-2 flex items-center text-sm sm:text-base">
                <i className="fas fa-info-circle mr-2 text-amber-500 animate-pulse"></i>
                Important Notice
              </h4>
              <p className="text-amber-800 text-[13px] sm:text-sm leading-relaxed">
                Admissions for the 2083 - 2084 session are now open and filling up fast. We maintain a low student-to-teacher ratio for personalized attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
