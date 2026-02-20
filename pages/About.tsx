
import React from 'react';

const About: React.FC = () => {
  // Provided photo of Mr. Dipesh (Account & IT Faculty)
  const dipeshPhoto = "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80";

  const leaders = [
    { 
      name: 'Dinesh Kumar Karki', 
      role: 'Principal', 
      img: 'https://i.imgur.com/pPnjyGs.jpeg',
      bio: 'With over 25 years of experience in educational leadership, Mr. Karki leads with moral integrity and a commitment to academic excellence.'
    },
    { 
      name: 'Ms. Bimala', 
      role: 'Primary Coordinator', 
      img: 'https://i.ibb.co/hRf88cyF/613893771-1401861455284687-1393452380332136606-n.jpg',
      bio: 'As our Primary Coordinator, Ms. Bimala oversees foundational growth, ensuring our youngest learners receive the best start in their academic journey.'
    },
    { 
      name: 'Mr. Suman Magar', 
      role: 'Coordinator', 
      img: 'https://i.imgur.com/15J9aY9.jpeg',
      bio: 'Mr. Magar ensures academic excellence as the Math HOD, bridging the gap between curriculum and real-world application.'
    },
  ];

  const teachers = [
    { 
      name: 'Mr. Suman Magar', 
      role: 'Math Specialist', 
      subject: 'Maths (Grades 8-10)', 
      experience: '',
      img: 'https://i.imgur.com/15J9aY9.jpeg' 
    },
    { 
      name: 'Ms. Manisha Magar', 
      role: 'Senior English Teacher', 
      subject: 'English (Grades 6-10)', 
      experience: '2 years 11months',
      img: 'https://i.ibb.co/3yGrv6hx/615685494-1401859818618184-2565250727373780711-n.jpg'
    },
    { 
      name: 'Mr. Purna Limbu', 
      role: 'Science Lead', 
      subject: 'Science & Math (Grades 7-10)', 
      experience: '9 years',
      img: 'https://i.ibb.co/wrJwM0dZ/615341345-1401859285284904-8397075382132389111-n.jpg' 
    },
    { 
      name: 'Mr. Dipesh', 
      role: 'Account & IT Faculty', 
      subject: 'Account, Comp & Eco', 
      experience: '1year 6months',
      img: 'https://i.ibb.co/qM2FPQzp/IMG-20260117-WA0000.jpg',
    },
    { 
      name: 'Ms. Elina Rai', 
      role: 'Health & Opt. Math', 
      subject: 'O. Math & Health (Grades 6-10)', 
      experience: '1year 6months',
      img: 'https://i.ibb.co/ZpQvR18B/615424889-1401861085284724-1338242797783152388-n.jpg'
    },
    { 
      name: 'Ms. Kenjal', 
      role: 'Nepali & Social Faculty', 
      subject: 'Nepali & Social (Grades 8-10)', 
      experience: '6months',
      img: 'https://i.ibb.co/Q378QX67/615500826-1401862158617950-1334219891003978112-n.jpg' 
    },
    { 
      name: 'Ms. Mishra', 
      role: 'Primary Nepali Lead', 
      subject: 'Nepali (Grades 4-7)', 
      experience: '10 years',
      img: 'https://i.ibb.co/KpSFpRq3/615044986-1401861871951312-2117300019815182557-n.jpg' 
    },
    { 
      name: 'Ms. Anita', 
      role: 'Sero/Social Specialist', 
      subject: 'Sero, Kag & Social Studies', 
      experience: '6 years',
      img: 'https://i.ibb.co/mCpcjJL0/615138608-1401861811951318-6032889791042831707-n.jpg' 
    },
    { 
      name: 'Ms. Sophie', 
      role: 'foundational English', 
      subject: 'English', 
      experience: '4months',
      img: 'https://i.ibb.co/TxNGBZF8/614891019-1401859538618212-8035333294311106419-n.jpg' 
    },
    { 
      name: 'Ms. Pabita', 
      role: 'Primary Science/IT', 
      subject: 'Sci/Com (Grades 4-6)', 
      experience: '5 years',
      img: 'https://i.imgur.com/iY5c9VA.jpeg'

    },
     
    { 
      name: 'Ms. Manju', 
      role: 'Primary Math Lead', 
      subject: 'Maths (Grades 4-6)', 
      experience: '9 years',
      img: 'https://i.imgur.com/DzJprRS.jpeg'
    },
    {
      name: 'Rebeca Adhakari', 
      role: 'Class-3 Garde Teacher',
      experience: '5 years',
      img: 'https://i.imgur.com/RaKJaEp.jpeg' 
    },
     
     {
     name: 'Kamala Shrestha',
      role: 'Class-2 Garde Teacher',
      experience: '5 years',
      img: 'https://i.ibb.co/M59Gbkb5/615437052-1401861908617975-5120913462507915805-n.jpg'
    },
     
     {
     name: 'Susmita karki',
      role: 'Class-1 Garde Teacher',
      experience: '5 years',
      img: 'https://i.ibb.co/9HYGLkQ5/615429243-1401861528618013-6896234730925825267-n.jpg' 
    },
    {
     name: 'Monika Mandal',
      role: 'Class-1 Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.ibb.co/zTkGgH0k/613586328-1401859365284896-2861314471494782816-n.jpg' 
    },
    {
     name: 'Samuel Subedi',
      role: 'UKG Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.imgur.com/bg3SPXU.jpeg' 
    },
     {
     name: 'Sabita Subedi',
      role: ' UKG Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.ibb.co/jvzhsT3W/615223819-1401859418618224-1593664101036778342-n.jpg' 
    },  
     
     {
     name: 'Sabitra Thapa',
      role: 'LKG Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.ibb.co/WN3tYV06/614040101-1401861171951382-7535547950966016561-n.jpg' 
    },
     {
     name: 'Srijana Dhahal',
      role: 'NUR Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.ibb.co/60mQTQxT/615205084-1401861065284726-145464633137010237-n.jpg'
      

      
    },
     {
     name: 'Mandira Khadka',
      role: 'NUR Garde Teacher',
    
      experience: '5 years',
      img: 'https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/613916014_1401861401951359_124637384738688526_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=ftmbv6arPWUQ7kNvwFeBu85&_nc_oc=AdmR1Xa9OKRfhd-tUckOgNvp8uNmI9Z9El6bbRoYE18sDxHdZTOVSkV-a0pf6ESb1U0&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=cOlLQMJEDDzjghFtG8ga2Q&oh=00_AfsrYL_ddrYAEaEG9ngI_OSBVz00r_4cPnXVt7_5lpeFVw&oe=699C8FD5'
    },
     {
     name: 'Bhawana Deuja',
      role: 'NUR Garde Teacher',
    
      experience: '5 years',
      img: 'https://i.ibb.co/q39HrhXN/616814497-122232618062318752-1532449998622329372-n.jpg' 
    } 
  ];
    
    

  const facilities = [
    { name: 'Smart Classrooms', desc: 'Fully equipped with digital boards and interactive learning tools.', icon: 'fa-chalkboard-teacher' },
    { name: 'Science Labs', desc: 'Modern Physics, Chemistry, and Biology labs for practical learning.', icon: 'fa-flask' },
    { name: 'Library', desc: 'A rich collection of over 5000+ books, journals, and digital resources.', icon: 'fa-book' },
    { name: 'Computer Lab', desc: 'High-speed internet and latest hardware for digital literacy.', icon: 'fa-laptop' },
    { name: 'Transportation', desc: 'Safe and reliable bus service across major Kathmandu routes.', icon: 'fa-bus' },
    { name: 'Cafeteria', desc: 'Hygienic and nutritious meals prepared with the highest standards.', icon: 'fa-utensils' },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      {/* Page Header */}
      <div className="bg-indigo-900 py-16 sm:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" className="object-cover w-full h-full" alt="" />
        </div>
        <div className="relative z-10 px-4">
          <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-400 font-bold text-[10px] sm:text-sm mb-3 sm:mb-4 block">Light shines in the darkness</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight italic">Excellence in Every Step</h1>
          <p className="text-indigo-100/80 max-w-3xl mx-auto text-base sm:text-xl leading-relaxed font-light">
            Empowering the next generation of leaders in Kandaghari-9, Kathmandu through values-based education.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mt-16 sm:mt-32">
          <div className="bg-indigo-50 p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] text-center group hover:bg-indigo-600 transition-all duration-500">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">Our Vision</h3>
            <p className="text-gray-600 group-hover:text-indigo-100 transition-colors leading-relaxed text-sm">
              To be a beacon of academic excellence in Kathmandu, producing global citizens who are prepared to navigate the complexities of a digital world.
            </p>
          </div>
          <div className="bg-indigo-50 p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] text-center group hover:bg-indigo-600 transition-all duration-500">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">Our Mission</h3>
            <p className="text-gray-600 group-hover:text-indigo-100 transition-colors leading-relaxed text-sm">
              To provide a safe, student-centered environment that fosters critical thinking and a love for continuous self-improvement.
            </p>
          </div>
          <div className="bg-indigo-50 p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] text-center group hover:bg-indigo-600 transition-all duration-500">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">Our Values</h3>
            <p className="text-gray-600 group-hover:text-indigo-100 transition-colors leading-relaxed text-sm">
              Integrity, Discipline, and Excellence. These three core pillars guide every interaction within the New Holy Cross family.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <section className="mt-20 sm:mt-40">
           <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">World Class Facilities</h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac, i) => (
              <div key={i} className="bg-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <i className={`fas ${fac.icon} text-3xl sm:text-4xl text-indigo-600 mb-4 sm:mb-6`}></i>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{fac.name}</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* School Leadership */}
        <section className="mt-20 sm:mt-40">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">School Leadership</h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg border border-gray-50 group hover:-translate-y-2 transition-transform">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 sm:p-10 text-center">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">{leader.name}</h4>
                  <p className="text-indigo-600 font-bold mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs">{leader.role}</p>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Section */}
        <section className="mt-20 sm:mt-40 mb-12 sm:mb-20">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">Our Dedicated Faculty</h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
              As listed in our 2082 (Winter) academic routine, our specialized team is committed to academic rigor across all grades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {teachers.map((teacher, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:bg-indigo-50 transition-colors group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 border-2 border-indigo-100 group-hover:border-indigo-600 transition-colors">
                  <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm sm:text-base">{teacher.name}</h5>
                <p className="text-indigo-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">{teacher.role}</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-50 space-y-1">
                   <div className="text-indigo-900 text-[10px] sm:text-xs font-bold">{teacher.subject}</div>
                  <div className="flex items-center justify-center space-x-1.5 text-gray-400">
                    <i className="fas fa-history text-[8px] sm:text-[10px]"></i>
                    <span className="text-[10px] sm:text-xs font-semibold">{teacher.experience} Experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
