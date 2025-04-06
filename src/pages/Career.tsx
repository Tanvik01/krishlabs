import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin, Phone, Code, Palette, LineChart, Briefcase, Target, Users, Rocket, Clock, Server, MonitorSmartphone } from "lucide-react";
import Typewriter from "../components/text/Typewriter";

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#f4921e]/5 via-[#070212] to-transparent"></div>

      <main className="relative">
        {/* Hero Section */}
        <section className="w-full bg-black/30 shadow-[0_0_25px_rgba(0,0,0,0.3)] backdrop-blur-sm py-16 sm:py-20 md:py-28 text-center">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              <Typewriter text="Join Our Team" delay={100} />
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We're looking for talented individuals to help us build the future of digital innovation. Explore current opportunities and become part of our journey.
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 sm:py-20 w-full min-h-screen">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Career Opportunities</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                We are currently hiring for the following positions. If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
        </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* UI/UX Designer - Internship Position */}
              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                  
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  UI/UX Designer
                </h3>
                </div>
                  <span className="px-3 py-1 bg-[#f4921e]/10 text-[#f4921e] text-xs font-semibold rounded-full w-fit mb-4 sm:mb-0">Internship</span>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experience: 0-1 Year</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Location: Remote / On-site (Hybrid options available)</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Target className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Type: Paid Internship after probation</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Duration: 3 to 6 months</span>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">About the Role:</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Krishlabs is seeking creative UI/UX design interns to help us build intuitive, user-centered digital products.
                  </p>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">Responsibilities:</h4>
                  <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                    <li>Design user interfaces for web and mobile apps</li>
                    <li>Create wireframes, user flows, and prototypes using Figma or Adobe XD</li>
                    <li>Collaborate with developers and stakeholders to refine design concepts</li>
                    <li>Conduct user research and apply feedback for continuous improvement</li>
                  </ul>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">Requirements:</h4>
                  <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                    <li>Basic understanding of UI/UX principles</li>
                    <li>Familiarity with Figma, Adobe XD, or similar tools</li>
                    <li>A portfolio showcasing academic, personal, or freelance projects</li>
                  </ul>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">Stipend:</h4>
                  <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                    <li>1-month probation (unpaid)</li>
                    <li>Paid stipend starts post-probation based on performance</li>
                  </ul>
                </div>
                
                <a href="https://forms.gle/iQa2coULH1ti7L2H6" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block">
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-gradient-to-r from-[#f4921e] to-[#ff5500] rounded-full hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                    Apply Now
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </a>
              </div>

              {/* Frontend Developer Position */}
              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                  </div>
                  
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Frontend Developer
                </h3>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                    <span className="px-3 py-1 bg-[#f4921e]/10 text-[#f4921e] text-xs font-semibold rounded-full w-fit">Internship</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full w-fit">Experienced</span>
                  </div>
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experience: Internship (0-1 year) | Experienced (2+ years)</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Location: Remote / On-site (Hybrid options available)</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <MonitorSmartphone className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Tech Stack: React.js, Next.js, TypeScript, TailwindCSS</span>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">For Interns:</h4>
                  <div className="border-l-2 border-[#f4921e]/30 pl-3 sm:pl-4 mb-3 sm:mb-4">
                    <h5 className="text-white text-sm sm:text-base font-medium mb-1 sm:mb-2">Responsibilities:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Develop and maintain responsive web applications using modern frameworks</li>
                      <li>Collaborate with design team to implement UI elements</li>
                      <li>Participate in code reviews and improve skills</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Requirements:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Basic knowledge of React, HTML, CSS, and JavaScript</li>
                      <li>Understanding of responsive design principles</li>
                      <li>Enthusiasm for learning and growth</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Stipend:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>1-month probation (unpaid)</li>
                      <li>Paid stipend starts post-probation based on performance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">For Experienced Candidates:</h4>
                  <div className="border-l-2 border-blue-400/30 pl-3 sm:pl-4">
                    <h5 className="text-white text-sm sm:text-base font-medium mb-1 sm:mb-2">Responsibilities:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Build complex, high-performance web applications</li>
                      <li>Architect frontend solutions and implement best practices</li>
                      <li>Mentor junior developers and contribute to team growth</li>
                      <li>Collaborate with cross-functional teams to deliver projects</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Requirements:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>2+ years of experience with React and modern JavaScript</li>
                      <li>Proficiency with TypeScript and state management solutions</li>
                      <li>Experience with Next.js and server-side rendering</li>
                      <li>Understanding of performance optimization techniques</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Package:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Competitive salary based on experience</li>
                      <li>Performance-based incentives</li>
                    </ul>
                  </div>
                </div>
                
                <a href="https://forms.gle/iQa2coULH1ti7L2H6" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block">
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-gradient-to-r from-[#f4921e] to-[#ff5500] rounded-full hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                    Apply Now
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </a>
              </div>

              {/* Backend Developer Position */}
              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                    <Server className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                  </div>
                 </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Backend Developer
                </h3>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                    <span className="px-3 py-1 bg-[#f4921e]/10 text-[#f4921e] text-xs font-semibold rounded-full w-fit">Internship</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full w-fit">Experienced</span>
                  </div>
                
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experience: Internship (0-1 year) | Experienced (2+ years)</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Location: Remote / On-site (Hybrid options available)</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-2 text-gray-300">
                    <Target className="w-4 h-4 text-[#f4921e] mt-0.5 sm:mt-0 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Tech Stack: Node.js, Express, MongoDB, Python, Django, RESTful APIs</span>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">For Interns:</h4>
                  <div className="border-l-2 border-[#f4921e]/30 pl-3 sm:pl-4 mb-3 sm:mb-4">
                    <h5 className="text-white text-sm sm:text-base font-medium mb-1 sm:mb-2">Responsibilities:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Develop and maintain server-side applications</li>
                      <li>Design and implement database schemas</li>
                      <li>Work with RESTful APIs and data integrations</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Requirements:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Basic knowledge of Node.js or Python</li>
                      <li>Familiarity with databases (SQL or NoSQL)</li>
                      <li>Understanding of API development fundamentals</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Stipend:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>1-month probation (unpaid)</li>
                      <li>Paid stipend starts post-probation based on performance</li>
                  </ul>
                </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#f4921e] mb-1 sm:mb-2">For Experienced Candidates:</h4>
                  <div className="border-l-2 border-blue-400/30 pl-3 sm:pl-4">
                    <h5 className="text-white text-sm sm:text-base font-medium mb-1 sm:mb-2">Responsibilities:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Design and build scalable backend systems</li>
                      <li>Optimize database performance and query efficiency</li>
                      <li>Implement security best practices and data protection</li>
                      <li>Lead backend architecture decisions and technical planning</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Requirements:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>2+ years of experience with Node.js/Express or Python/Django</li>
                      <li>Strong knowledge of database design and optimization</li>
                      <li>Experience with cloud services (AWS, GCP, or Azure)</li>
                      <li>Understanding of security principles and best practices</li>
                    </ul>
                    
                    <h5 className="text-white text-sm sm:text-base font-medium mt-3 sm:mt-4 mb-1 sm:mb-2">Package:</h5>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-4 sm:pl-5">
                      <li>Competitive salary based on experience</li>
                      <li>Performance-based incentives</li>
                  </ul>
                  </div>
                </div>
                
                <a href="https://forms.gle/iQa2coULH1ti7L2H6" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block">
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-gradient-to-r from-[#f4921e] to-[#ff5500] rounded-full hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                    Apply Now
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="bg-black/20 py-16 sm:py-20">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Why Join Krishlabs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Collaborative Culture
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Work in a supportive environment where ideas are valued and diverse perspectives are encouraged. Learn and grow alongside talented teammates.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                  <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Growth Opportunities
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Continuous learning paths, mentorship programs, and career advancement possibilities. We invest in your professional development.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#f4921e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Innovative Projects
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Work on cutting-edge technologies and challenging projects that make a real difference. Your contributions will have meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Queries */}
        <section className="py-16 sm:py-20">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Have Questions?</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-12">
                If you have any questions about our open positions or the application process, please don't hesitate to reach out.
              </p>
        </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-[#f4921e]" />
                <a href="mailto:careers@krishlabs.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  careers@krishlabs.com
              </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-[#f4921e]" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +91 98765 43210
              </a>
            </div>
          </div>
            
            <Link to="/contact">
              <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-gradient-to-r from-[#f4921e] to-[#ff5500] rounded-full hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base">
                Contact Us
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </Link>
        </div>
        </section>
      </main>
    </div>
  );
}

export default Career; 