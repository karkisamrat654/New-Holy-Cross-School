
import React from 'react';

const Academics: React.FC = () => {
  const departments = [
    { title: 'Mathematics', desc: 'Focusing on logic, problem-solving, and analytical thinking.', icon: 'fa-square-root-alt' },
    { title: 'Science & Tech', desc: 'Exploring the natural world through inquiry and experimentation.', icon: 'fa-microscope' },
    { title: 'Languages', desc: 'Mastering English and Nepali through literature and creative writing.', icon: 'fa-language' },
    { title: 'Social Studies', desc: 'Understanding society, geography, and civic responsibility.', icon: 'fa-globe-asia' },
    { title: 'Creative Arts', desc: 'Nurturing aesthetic appreciation through music, dance, and art.', icon: 'fa-palette' },
    { title: 'Physical Education', desc: 'Building fitness, teamwork, and healthy lifestyle habits.', icon: 'fa-running' },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      <div className="bg-indigo-900 py-16 sm:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://i.ibb.co/YBkNL79X/434584455-1921653348363501-540408245288096641-n.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">Academic Excellence</h1>
          <p className="text-indigo-100/80 max-w-2xl mx-auto text-base sm:text-xl font-light">
            A curriculum designed to inspire curiosity and prepare students for a changing world.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-24">
        {/* Curricular Levels */}
        <div className="space-y-20 sm:space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center text-center md:text-left">
            <div className="order-2 md:order-1 relative px-4 sm:px-0">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Primary School" className="rounded-2xl sm:rounded-3xl shadow-2xl aspect-video md:aspect-auto object-cover w-full" />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-white hidden sm:block shadow-xl">
                <p className="text-2xl sm:text-3xl font-bold">1:15</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Teacher Ratio</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-8 text-indigo-900">Primary Wing (Nursery - Grade 5)</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
                Our primary program is the foundation of the NHC experience. We utilize the Montessori approach in early years and transition to a more structured yet active learning environment by Grade 1.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  'Integrated thematic curriculum',
                  'Phonetics-based reading program',
                  'Hands-on Math and Science kits',
                  'Regular field trips and outdoor learning',
                  'Social-emotional skills development'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium text-xs sm:text-base">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-indigo-600 text-[8px] sm:text-[10px]"></i>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center text-center md:text-left">
            <div className="order-1">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-8 text-indigo-900">Secondary Wing (Grade 6 - 10)</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
                The secondary program is designed to meet the rigorous standards of the National Examination Board (NEB) while encouraging critical inquiry. We focus on preparing students for the SEE examinations and beyond.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  'Advanced Science & IT labs',
                  'Intensive SEE preparation classes',
                  'Leadership and Public Speaking workshops',
                  'Career counseling and university prep',
                  'Participation in national Olympiads'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium text-xs sm:text-base">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-indigo-600 text-[8px] sm:text-[10px]"></i>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative px-4 sm:px-0">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Secondary School" className="rounded-2xl sm:rounded-3xl shadow-2xl aspect-video md:aspect-auto object-cover w-full" />
              <div className="absolute -top-4 -left-4 bg-indigo-900 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-white hidden sm:block shadow-xl">
                <p className="text-2xl sm:text-3xl font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">SEE Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <section className="mt-20 sm:mt-40">
           <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">Our Departments</h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all group text-center md:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-6 sm:mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all mx-auto md:mx-0">
                  <i className={`fas ${dept.icon}`}></i>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{dept.title}</h4>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">{dept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Academics */}
        <section className="mt-20 sm:mt-40">
          <div className="bg-indigo-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-white relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 p-10 opacity-10 hidden sm:block">
              <i className="fas fa-palette text-[10rem]"></i>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 leading-tight">Co-Curricular Holistic Growth</h2>
              <p className="text-indigo-100/80 mb-8 sm:mb-12 text-sm sm:text-lg leading-relaxed">
                At New Holy Cross, the school day doesn't end in the classroom. We offer over 15 different clubs and activities to help students discover their passions.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: 'Coding', icon: 'fa-code' },
                  { name: 'Drama', icon: 'fa-theater-masks' },
                  { name: 'Eco-Club', icon: 'fa-leaf' },
                  { name: 'Music', icon: 'fa-music' },
                ].map((act, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center mb-3 mx-auto border border-white/20 group-hover:bg-white/20 transition-colors">
                      <i className={`fas ${act.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <span className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">{act.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
