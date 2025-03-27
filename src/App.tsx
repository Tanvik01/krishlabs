import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Code2, Terminal, Database, Globe, Cpu, Cloud,
  Binary, Blocks, Brain, Rocket, Server, Wifi, Network, Laptop,
  CircuitBoard, Microscope, Atom, Lightbulb, GitBranch, Code, Coffee, Sparkles,
  Monitor, Headphones, PenTool, LucideIcon, ChevronRight, User, Quote,
  Linkedin, Instagram, Mail
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

interface TechDoodleProps {
  className: string;
  children: React.ReactNode;
}

interface FloatingElementProps {
  icon: LucideIcon;
  className: string;
  text?: string;
  delay?: number;
}

interface HomeProps {
  scrollY: number;
}

function TechDoodle({ className, children }: TechDoodleProps) {
  return (
    <div className={`doodle-container absolute ${className}`}>
      <div className="doodle-character">
        {children}
      </div>
    </div>
  );
}

const FloatingElement = ({ icon: Icon, className, text, delay = 0 }: FloatingElementProps) => (
  <div className={`floating-element ${className}`} style={{ animationDelay: `${delay}s` }}>
    <Icon className="floating-icon" />
    {text && <span className="element-text">{text}</span>}
  </div>
);

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="font-[Poppins]">
        {/* Navigation bar */}
        <div className={`fixed top-0 left-0 right-0 flex items-center justify-between z-50 px-8 py-3 transition-all duration-300 border-b border-transparent ${
          scrollY > 50 ? 'bg-[#050109]/70 backdrop-blur-md border-white/5' : ''
        }`}>
          <div className="animate-fade-in animate-delay-100">
            <Link to="/">
              <img 
                src="/krishlabs-logo.png" 
                alt="KrishLabs" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="animate-fade-in">
            {/* Navigation Items */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="nav-link active relative px-3 py-1 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/15 transition-all duration-300 group">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/about" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              </Link>
              <Link to="/services" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              </Link>
              <Link to="/blog" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              </Link>
              <Link to="/contact" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              </Link>
              <button className="glass-button group relative ml-2 px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#f4921e]/30 to-[#ff5500]/30 backdrop-blur-md border border-white/10 text-white hover:from-[#f4921e]/40 hover:to-[#ff5500]/40 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <Terminal className="w-3.5 h-3.5 ml-1.5" />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home scrollY={scrollY} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050109] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-20 py-16">
          <div className="grid grid-cols-3 gap-16">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Krishlabs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founded by experts, Krishlabs excels in delivering innovative software solutions to clients worldwide.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies Policy</Link></li>
                <li><Link to="/data-processing" className="text-gray-400 hover:text-white transition-colors">Data Processing</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 KrishLabs. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/krishlabs/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@krishlabs.in" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

// Create a new Home component for the main page content
function Home({ scrollY }: HomeProps) {
  const journeySectionRef = useRef<HTMLDivElement>(null);

  const scrollToJourney = (e: React.MouseEvent) => {
    e.preventDefault();
    journeySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate gradient darkness based on scroll position
  const darknessFactor = Math.min(scrollY / 1500, 1); // Max darkness at 1500px scroll
  const darknessValue = Math.floor(darknessFactor * 30); // Up to 30% darker

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Gradient overlay that darkens with scroll */}
      <div 
        className="fixed inset-0 transition-colors duration-300"
        style={{ 
          background: `linear-gradient(to bottom, 
            rgba(255, 41, 148, ${0.10 - darknessFactor * 0.05}) 0%, 
            rgba(7, 2, 18, ${0.7 + darknessFactor * 0.3}) 50%, 
            rgba(5, 1, 9, ${0.8 + darknessFactor * 0.2}) 100%)` 
        }}
      ></div>
      
      {/* Gradient waves with adjusted opacity based on scroll */}
      <div className="fixed inset-0">
        <div 
          className="gradient-blob-1" 
          style={{ 
            transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px) rotate(${scrollY * 0.02}deg)`,
            opacity: Math.max(0.3 - darknessFactor * 0.2, 0.1), // Reduce opacity as we scroll
          }}
        ></div>
        <div 
          className="gradient-blob-2" 
          style={{ 
            transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.03}px) rotate(${scrollY * -0.02}deg)`,
            opacity: Math.max(0.3 - darknessFactor * 0.2, 0.1), // Reduce opacity as we scroll
          }}
        ></div>
        <div 
          className="gradient-blob-3" 
          style={{ 
            transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
            opacity: Math.max(0.3 - darknessFactor * 0.2, 0.1), // Reduce opacity as we scroll
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-between p-8 pt-24 px-20">
        {/* Main Content Text - Left side */}
        <div className="text-left max-w-xl">
          <h1 className="text-5xl font-medium text-white leading-tight mb-8 tracking-wider animate-fade-in animate-delay-200 gradient-text">
              Transform the way you work.
            </h1>
            <p className="text-lg text-gray-400 mb-8 animate-fade-in animate-delay-300">
              Innovative software solutions for modern businesses. Build the future with our cutting-edge technology.
            </p>
          <button 
            onClick={scrollToJourney}
            className="glass-button group relative px-6 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#f4921e]/30 to-[#ff5500]/30 backdrop-blur-md border border-white/10 text-white animate-fade-in animate-delay-400 hover:from-[#f4921e]/40 hover:to-[#ff5500]/40 transition-all duration-300"
          >
              <span className="relative z-10 flex items-center">
              Learn More
              <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
              </span>
            </button>
        </div>
        
        {/* Illustration - Right side */}
        <div className="w-1/2 flex justify-center items-center animate-fade-in animate-delay-500">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg">
            <img 
              src="/illustration.png" 
              alt="Digital Illustration" 
              className="w-full h-auto object-contain shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Added spacing for better separation */}
      <div className="h-32"></div>

      {/* Dividing Line */}
      <div className="relative z-10 flex justify-center px-20 py-8">
        <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      </div>

      {/* Journey Section */}
      <div 
        ref={journeySectionRef} 
        id="journey-section" 
        className="relative min-h-screen flex flex-col items-center justify-center px-20 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 300 ? 1 : 0, 
          transform: scrollY > 300 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent text-center">
          Our Journey and Vision
        </h2>
        
        <div 
          className="w-11/12 p-6 rounded-2xl backdrop-blur-sm bg-black/20 
          border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
        >
          <div className="flex flex-row items-center">
            {/* Left side - Working from home image */}
            <div 
              className="w-1/2 flex justify-center items-center pr-12 opacity-0 transform -translate-x-10 transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY > 400 ? 1 : 0, 
                transform: scrollY > 400 ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="relative w-full max-w-lg overflow-hidden rounded-xl">
                <img 
                  src="/working-from-home.png" 
                  alt="Working From Home" 
                  className="w-full h-auto object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div 
              className="w-1/2 pl-12 opacity-0 transform translate-x-10 transition-all duration-700 ease-out delay-200"
              style={{ 
                opacity: scrollY > 400 ? 1 : 0, 
                transform: scrollY > 400 ? 'translateX(0)' : 'translateX(40px)',
              }}
            >
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  At Krishlabs, we are dedicated to delivering exceptional software development services. Our expertise spans various technologies and industries, making us a reliable partner for businesses.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Krishlabs was founded with a vision to revolutionize the software development landscape. Our journey began with a group of passionate developers seeking to create impactful solutions.
                </p>
                
                <div className="mt-8">
                  <Link to="/about" className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f4921e]/40 to-[#ff5500]/40 text-white font-medium border border-white/10 backdrop-blur-sm transition-all duration-300 hover:from-[#f4921e]/50 hover:to-[#ff5500]/50 group">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Division Line */}
      <div className="relative z-10 flex justify-center px-20 py-16">
        <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      </div>
            
      {/* Personalized Consultation Services Section */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center px-20 py-24 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 800 ? 1 : 0, 
          transform: scrollY > 800 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent text-center">
          Personalized Consultation Services
        </h2>
        
        <div 
          className="w-11/12 p-8 rounded-2xl backdrop-blur-sm bg-black/20 
          border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
        >
          <div className="flex flex-row items-center">
            {/* Left side - Content */}
            <div 
              className="w-1/2 pr-12 opacity-0 transform -translate-x-10 transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY > 900 ? 1 : 0, 
                transform: scrollY > 900 ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="space-y-0">
                <div className="py-6">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-400" />
                    Business Analysis
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-7">
                    In-depth analysis to understand your unique business requirements.
                  </p>
                </div>
                
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                  </div>
                  
                <div className="py-6">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <Blocks className="w-5 h-5 mr-2 text-purple-400" />
                    Technical Architecture
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-7">
                    Creating robust architectures to ensure scalable and efficient solutions.
                  </p>
                </div>
                
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                      </div>
                      
                <div className="py-6">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <GitBranch className="w-5 h-5 mr-2 text-purple-400" />
                    Project Management
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-7">
                    Expert project management to keep your projects on track and within budget.
                  </p>
                      </div>
                      
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                      </div>
                      
                <div className="py-6">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <Microscope className="w-5 h-5 mr-2 text-purple-400" />
                    Quality Assurance
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-7">
                    Comprehensive testing services to ensure high-quality deliverables.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Consultation image */}
            <div 
              className="w-1/2 flex justify-center items-center pl-12 opacity-0 transform translate-x-10 transition-all duration-700 ease-out delay-200"
              style={{ 
                opacity: scrollY > 900 ? 1 : 0, 
                transform: scrollY > 900 ? 'translateX(0)' : 'translateX(40px)',
              }}
            >
              <div className="relative w-full max-w-lg overflow-hidden rounded-xl">
                <img 
                  src="/consultation.png" 
                  alt="Consultation Services" 
                  className="w-full h-auto object-cover shadow-xl transform hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Division Line */}
      <div className="relative z-10 flex justify-center px-20 py-16">
        <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      </div>
            
      {/* Our Development Process Section */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center px-20 py-24 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 1200 ? 1 : 0, 
          transform: scrollY > 1200 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {/* Orange indicator line at top */}
        <div 
          className="absolute top-28 left-20 w-0 h-1.5 transition-all duration-1000 ease-out"
          style={{ 
            width: scrollY > 1200 ? '6rem' : '0',
            backgroundColor: '#f4921e'
          }}
        ></div>
        
        <div className="w-full mb-8 flex justify-between items-start">
          <h2 
            className="text-5xl font-bold text-white opacity-0 transform -translate-x-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1250 ? 1 : 0, 
              transform: scrollY > 1250 ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            Our Development Process
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-md opacity-0 transform translate-x-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1250 ? 1 : 0, 
              transform: scrollY > 1250 ? 'translateX(0)' : 'translateX(40px)',
            }}
          >
            Learn about our structured approach to delivering exceptional software solutions.
          </p>
        </div>

        {/* Dividing Line */}
        <div 
          className="w-full h-px bg-white/10 mb-16 mt-4 transform scaleX-0 transition-all duration-1000 ease-out"
          style={{ 
            transform: scrollY > 1300 ? 'scaleX(1)' : 'scaleX(0)',
          }}
        ></div>
        
        {/* Three-column Process Steps */}
        <div className="w-full grid grid-cols-3 gap-8">
          {/* Step 1: Discovery Phase */}
          <div 
            className="flex flex-col opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1350 ? 1 : 0, 
              transform: scrollY > 1350 ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0ms'
            }}
          >
            <span className="text-xl font-medium mb-3" style={{ color: '#f4921e' }}>01</span>
            <h3 className="text-3xl font-bold text-white mb-4">Discovery Phase</h3>
            <p className="text-gray-300">
              We collaborate with you to gather requirements and understand your vision.
            </p>
          </div>
          
          {/* Step 2: Design Stage */}
          <div 
            className="flex flex-col opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1350 ? 1 : 0, 
              transform: scrollY > 1350 ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '200ms'
            }}
          >
            <span className="text-xl font-medium mb-3" style={{ color: '#f4921e' }}>02</span>
            <h3 className="text-3xl font-bold text-white mb-4">Design Stage</h3>
            <p className="text-gray-300">
              Our team designs intuitive interfaces and user experiences tailored to your needs.
            </p>
          </div>
          
          {/* Step 3: Development & Testing */}
          <div 
            className="flex flex-col opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1350 ? 1 : 0, 
              transform: scrollY > 1350 ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '400ms'
            }}
          >
            <span className="text-xl font-medium mb-3" style={{ color: '#f4921e' }}>03</span>
            <h3 className="text-3xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-300">
              We develop the solution while integrating thorough testing to ensure quality.
            </p>
          </div>
        </div>
      </div>

      {/* Final Division Line */}
      <div className="relative z-10 flex justify-center px-20 py-16">
        <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      </div>
            
      {/* What Clients Say Section */}
      <div 
        className="relative min-h-screen flex flex-col items-start justify-center px-20 py-24 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 1600 ? 1 : 0, 
          transform: scrollY > 1600 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {/* Orange indicator line at top */}
        <div 
          className="w-0 h-1.5 mb-8 transition-all duration-1000 ease-out"
          style={{ 
            width: scrollY > 1600 ? '6rem' : '0',
            backgroundColor: '#f4921e'
          }}
        ></div>

        <h2 className="text-5xl font-bold text-white mb-4">
          What Clients Say
        </h2>
        
        <p className="text-lg text-gray-400 mb-16">
          Hear from our satisfied customers.
        </p>

        {/* Testimonials Grid */}
        <div className="w-full grid grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div 
            className="opacity-0 transform -translate-x-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1650 ? 1 : 0, 
              transform: scrollY > 1650 ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <div className="relative mb-6">
                  <Quote 
                    className="w-6 h-6 absolute -left-1 -top-2 text-[#f4921e]/30 rotate-180"
                  />
                  <p className="text-gray-300 text-lg leading-relaxed pl-6">
                    Krishlabs transformed our vision into reality with their exceptional services. Their professionalism and expertise are unmatched in the industry.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#f4921e]/20 flex items-center justify-center bg-black/30">
                    <User className="w-6 h-6 text-[#f4921e]" />
                  </div>
                  <span className="text-white font-medium ml-4">Saleem</span>
                </div>
              </div>
              </div>
            </div>
            
          {/* Testimonial 2 */}
          <div 
            className="opacity-0 transform translate-x-10 transition-all duration-700 ease-out delay-200"
            style={{ 
              opacity: scrollY > 1650 ? 1 : 0, 
              transform: scrollY > 1650 ? 'translateX(0)' : 'translateX(40px)',
            }}
          >
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <div className="relative mb-6">
                  <Quote 
                    className="w-6 h-6 absolute -left-1 -top-2 text-[#f4921e]/30 rotate-180"
                  />
                  <p className="text-gray-300 text-lg leading-relaxed pl-6">
                    Working with Krishlabs has been a game-changer for our business. Their dedication to quality and service is truly commendable.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#f4921e]/20 flex items-center justify-center bg-black/30">
                    <User className="w-6 h-6 text-[#f4921e]" />
                  </div>
                  <span className="text-white font-medium ml-4">Rakesh reddy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      {/* Help You Achieve Your Goals Section */}
      <div 
        className="relative min-h-[30vh] flex items-center px-20 py-12 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 1800 ? 1 : 0, 
          transform: scrollY > 1800 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <div 
          className="w-full p-8 rounded-2xl backdrop-blur-sm bg-black/40 border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)]"
        >
          <div className="flex justify-between items-center">
            {/* Left side - Content and Buttons */}
            <div className="w-1/2">
              <h2 className="text-4xl font-bold mb-3 text-white">
                Take the First Step
              </h2>
              
              <p className="text-gray-300 text-base mb-6 max-w-xl">
                Your discovery consultation should leave you, not the other way around. We're happy to help you.
              </p>

              <button className="w-40 bg-gradient-to-r from-[#f4921e] via-[#ff7a00] to-[#ff5500] hover:from-[#f4921e]/90 hover:via-[#ff7a00]/90 hover:to-[#ff5500]/90 text-white font-medium py-2 px-5 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/30">
                Book a Call
              </button>
            </div>

            {/* Right side - Illustration */}
            <div className="w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-xl">
                <img 
                  src="/cta.png" 
                  alt="CTA Illustration" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Division Line */}
      <div className="relative z-10 flex justify-center px-20 py-16">
        <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      </div>
    </div>
  );
}

export default App;