import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Code2, Terminal, Database, Globe, Cpu, Cloud,
  Binary, Blocks, Brain, Rocket, Server, Wifi, Network, Laptop,
  CircuitBoard, Microscope, Atom, Lightbulb, GitBranch, Code, Coffee, Sparkles,
  Monitor, Headphones, PenTool, LucideIcon, ChevronRight, User, Quote,
  Linkedin, Instagram, Mail, Facebook, Twitter, MessageCircle, Briefcase, Home as HomeIcon,
  ArrowLeft, ArrowRight
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';
import ServiceDetail from './pages/ServiceDetail';
import Typewriter from './components/text/Typewriter';
import MobileMenu, { MobileMenuButton } from './components/MobileMenu';
import MobileFAB from './components/MobileFAB';
import './styles/responsive.css';

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

function Navigation({ scrollY }: { scrollY: number }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className={`fixed top-0 left-0 right-0 flex items-center justify-between z-50 px-4 sm:px-6 md:px-8 py-3 transition-all duration-300 border-b border-transparent ${
      scrollY > 50 ? 'bg-[#050109]/70 backdrop-blur-md border-white/5' : ''
    }`}>
      <div className="animate-fade-in animate-delay-100">
        <Link to="/" className="flex items-center">
          <img 
            src="/krishlabs-logo.png" 
            alt="Krishlabs Logo" 
            className="h-10 sm:h-12 w-auto"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <MobileMenuButton 
        isOpen={isMobileMenuOpen} 
        onClick={toggleMobileMenu} 
      />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
        <Link 
          to="/services" 
          className={`relative px-2 py-1 text-sm font-medium transition-colors ${
            location.pathname === '/services' ? 'text-[#f4921e]' : 'text-gray-300 hover:text-white'
          } group`}
        >
          <span className="relative z-10">Services</span>
          <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
            location.pathname === '/services' ? 'bg-[#f4921e]/10' : 'bg-transparent group-hover:bg-white/5'
          }`}></div>
        </Link>

        <Link 
          to="/about" 
          className={`relative px-2 py-1 text-sm font-medium transition-colors ${
            location.pathname === '/about' ? 'text-[#f4921e]' : 'text-gray-300 hover:text-white'
          } group`}
        >
          <span className="relative z-10">About</span>
          <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
            location.pathname === '/about' ? 'bg-[#f4921e]/10' : 'bg-transparent group-hover:bg-white/5'
          }`}></div>
        </Link>

        <Link 
          to="/blog" 
          className={`relative px-2 py-1 text-sm font-medium transition-colors ${
            location.pathname === '/blog' ? 'text-[#f4921e]' : 'text-gray-300 hover:text-white'
          } group`}
        >
          <span className="relative z-10">Blog</span>
          <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
            location.pathname === '/blog' ? 'bg-[#f4921e]/10' : 'bg-transparent group-hover:bg-white/5'
          }`}></div>
        </Link>

        <Link 
          to="/contact" 
          className={`relative px-2 py-1 text-sm font-medium transition-colors ${
            location.pathname === '/contact' ? 'text-[#f4921e]' : 'text-gray-300 hover:text-white'
          } group`}
        >
          <span className="relative z-10">Contact</span>
          <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
            location.pathname === '/contact' ? 'bg-[#f4921e]/10' : 'bg-transparent group-hover:bg-white/5'
          }`}></div>
        </Link>

        <Link 
          to="/career" 
          className={`relative px-2 py-1 text-sm font-medium transition-colors ${
            location.pathname === '/career' ? 'text-[#f4921e]' : 'text-gray-300 hover:text-white'
          } group`}
        >
          <span className="relative z-10">Career</span>
          <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
            location.pathname === '/career' ? 'bg-[#f4921e]/10' : 'bg-transparent group-hover:bg-white/5'
          }`}></div>
        </Link>

        <Link 
          to="/contact" 
          className="glass-button group relative ml-2 px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#f4921e]/30 to-[#ff5500]/30 backdrop-blur-md border border-white/10 text-white hover:from-[#f4921e]/40 hover:to-[#ff5500]/40 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center">
            Get Started
            <Terminal className="w-3.5 h-3.5 ml-1.5" />
          </span>
        </Link>
      </nav>
    </div>
  );
}

function AppContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-[Poppins]">
      <Navigation scrollY={scrollY} />
      
      {/* Mobile Floating Action Buttons */}
      <MobileFAB phoneNumber="918977217554" whatsappNumber="918977217554" />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage scrollY={scrollY} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050109] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-5 md:py-8">
          {/* Main Footer Content - Compact Design */}
          <div className="flex flex-wrap justify-between items-start gap-y-6">
            {/* Logo and Tagline - Horizontal on mobile */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-0">
              <img 
                src="/krishlabs-logo.png" 
                alt="Krishlabs Logo" 
                className="h-10 w-auto"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center sm:text-left">
                Founded by experts, Krishlabs excels in delivering innovative software solutions to clients worldwide.
              </p>
            </div>

            {/* Quick Links - Horizontal Grid */}
            <div className="w-full sm:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                {/* Company Links */}
                <div className="col-span-1">
                  <h4 className="text-sm font-bold uppercase text-[#f4921e] mb-2">Company</h4>
                  <ul className="space-y-1">
                    <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
                    <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
                    <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                  </ul>
                </div>
                
                <div className="col-span-1">
                  <h4 className="text-sm font-bold uppercase text-[#f4921e] mb-2">Resources</h4>
                  <ul className="space-y-1">
                    <li><Link to="/career" className="text-gray-400 hover:text-white transition-colors text-sm">Career</Link></li>
                    <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                  </ul>
                </div>
                
                {/* Legal Links */}
                <div className="col-span-1">
                  <h4 className="text-sm font-bold uppercase text-[#f4921e] mb-2">Legal</h4>
                  <ul className="space-y-1">
                    <li><a href="/Terms of Service.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Services</a></li>
                    <li><a href="/krishlabs privacy and cookies.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy & Cookies</a></li>
                  </ul>
                </div>
                
                
              </div>
            </div>
          </div>

          {/* Social Links & Copyright - Compact Bar */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">© 2024 <span className="text-[#f4921e]">KrishLabs</span>. All rights reserved.</p>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="https://www.linkedin.com/company/krishlabs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/krishlabs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573870959719&sk=about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/itskrishlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918977217554" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:hello@krishlabs.in" className="text-gray-400 hover:text-[#f4921e] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add responsive styles via a proper style tag */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              /* Responsive text classes */
              .responsive-padding {
                padding-left: 1rem !important;
                padding-right: 1rem !important;
              }
              .responsive-text-3xl {
                font-size: 1.75rem !important;
                line-height: 2.25rem !important;
              }
              .responsive-text-2xl {
                font-size: 1.5rem !important;
                line-height: 2rem !important;
              }
              .responsive-text-xl {
                font-size: 1.125rem !important;
                line-height: 1.75rem !important;
              }
              
              /* Hide all images on mobile but preserve their containers for layout */
              img:not(.keep-visible):not([alt="Krishlabs Logo"]) {
                display: none !important;
              }
              
              /* Hide image containers on mobile for cleaner layout */
              .hero-image,
              .w-full.md\\:w-2\\/5.animate-fade-in,
              .w-full.md\\:w-2\\/5.animate-fade-in.animate-delay-200 {
                display: none !important;
              }
              
              /* Section styling enhancements for mobile */
              .min-h-screen {
                min-height: auto !important;
                padding-top: 3.5rem !important;
                padding-bottom: 3.5rem !important;
                position: relative !important;
              }
              
              /* Add visual flair to sections with accent borders */
              #journey-section::before,
              .relative.min-h-screen.flex.flex-col.items-center::before {
                content: none !important;
              }
              
              /* Enhance section headings with icons */
              .responsive-text-2xl::before,
              .text-2xl.sm\\:text-3xl.md\\:text-4xl::before,
              .text-3xl.sm\\:text-4xl.md\\:text-5xl::before {
                content: none !important;
                display: none !important;
              }
              
              /* Enhance text cards with subtle borders and better spacing */
              .p-4.sm\\:p-6,
              .p-4.sm\\:p-6.md\\:p-8 {
                border: 1px solid rgba(244, 146, 30, 0.2) !important;
                border-radius: 12px !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
                margin-bottom: 1rem !important;
              }
              
              /* Add subtle background effect to main content */
              .relative.z-10.flex.flex-col.min-h-screen.items-center.justify-center.responsive-padding {
                background: linear-gradient(0deg, rgba(5,1,9,0) 0%, rgba(244,146,30,0.03) 50%, rgba(5,1,9,0) 100%) !important;
                border-radius: 0 0 40px 40px !important;
              }
              
              /* Improve buttons with subtle effects */
              a[class*="rounded-full"] {
                box-shadow: 0 2px 8px rgba(244, 146, 30, 0.2) !important;
                transform: translateY(0) !important;
                transition: transform 0.2s, box-shadow 0.2s !important;
              }
              
              a[class*="rounded-full"]:active {
                transform: translateY(1px) !important;
                box-shadow: 0 1px 3px rgba(244, 146, 30, 0.1) !important;
              }
              
              /* Add divider styling */
              .w-3\\/4.md\\:w-1\\/3.h-0\\.5 {
                height: 2px !important;
                background: linear-gradient(90deg, rgba(244,146,30,0), rgba(244,146,30,0.2), rgba(244,146,30,0)) !important;
                margin: 1rem auto !important;
              }
              
              /* Adjust section padding (less extreme) */
              [class*="py-16"] {
                padding-top: 3rem !important;
                padding-bottom: 3rem !important;
              }
              
              /* Adjust heading margins (more moderate) */
              [class*="mb-16"] {
                margin-bottom: 2rem !important;
              }
              
              /* Moderate gap reduction in grids */
              .grid.gap-8 {
                gap: 1.5rem !important;
              }
              
              /* Enhance testimonial cards */
              .bg-black\\/20.backdrop-blur-sm.border.border-white\\/10.p-6.sm\\:p-8.rounded-2xl {
                border-left: 3px solid rgba(244, 146, 30, 0.3) !important;
                position: relative !important;
              }
              
              .bg-black\\/20.backdrop-blur-sm.border.border-white\\/10.p-6.sm\\:p-8.rounded-2xl::after {
                content: "" !important;
                position: absolute !important;
                top: 10px !important;
                right: 15px !important;
                font-size: 40px !important;
                font-family: serif !important;
                color: rgba(244, 146, 30, 0.1) !important;
              }
              
              /* Make content full width on mobile */
              .w-full.md\\:w-1\\/2,
              .w-full.md\\:w-3\\/5 {
                width: 100% !important;
              }
              
              /* More spacing for division lines */
              .py-4.md\\:py-8 {
                padding-top: 2rem !important;
                padding-bottom: 2rem !important;
              }
              
              /* Style numbered process steps */
              [style*="color: #f4921e"] {
                font-weight: bold !important;
                position: relative !important;
                z-index: 1 !important;
                display: inline-block !important;
                width: 30px !important;
                height: 30px !important;
                line-height: 30px !important;
                text-align: center !important;
                border-radius: 50% !important;
                background: rgba(244, 146, 30, 0.1) !important;
                box-shadow: 0 0 0 2px rgba(244, 146, 30, 0.2) !important;
              }
              
              /* Mobile menu styles */
              .fixed.inset-0.z-\\[9999\\] {
                opacity: 1 !important;
                visibility: visible !important;
              }
              
              /* Mobile menu button */
              button[aria-label="Open menu"],
              button[aria-label="Close menu"] {
                z-index: 10000 !important;
                position: relative !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 0.5rem !important;
                min-width: 44px !important;
                min-height: 44px !important;
                background-color: transparent !important;
                -webkit-tap-highlight-color: transparent !important;
                touch-action: manipulation !important;
                user-select: none !important;
              }
              
              /* Menu button icons */
              button[aria-label="Open menu"] svg,
              button[aria-label="Close menu"] svg {
                width: 24px !important;
                height: 24px !important;
                pointer-events: none !important;
              }
            }
          `
        }} 
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(244, 146, 30, 0.3);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(244, 146, 30, 0.5);
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(244, 146, 30, 0.3) rgba(255, 255, 255, 0.05);
              -ms-overflow-style: auto;
            }
          `
        }} 
      />
    </Router>
  );
}

// Utility classes for responsive design
const responsiveText3XL = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
const responsiveText2XL = "text-xl sm:text-2xl md:text-3xl";
const responsiveTextXL = "text-base sm:text-lg md:text-xl";
const responsivePadding = "px-4 sm:px-6 md:px-8 lg:px-16";

// Create a new HomePage component for the main page content
function HomePage({ scrollY }: HomeProps) {
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Handle window resize for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
            rgba(5, 1, 9, ${0.85 + darknessFactor * 0.15}) 0%, 
            rgba(7, 2, 18, ${0.9 + darknessFactor * 0.1}) 50%, 
            rgba(5, 1, 9, ${0.95 + darknessFactor * 0.05}) 100%)` 
        }}
      ></div>
      
      {/* Gradient blobs with enhanced colors */}
      <div className="fixed inset-0 overflow-hidden">
        <div 
          className="absolute w-80 h-80 bg-[#f4921e]/10 rounded-full -mt-32 blur-2xl"
          style={{ 
            transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px) rotate(${scrollY * 0.02}deg)`,
            opacity: Math.max(0.6 - darknessFactor * 0.3, 0.25),
            willChange: "transform"
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-[#ff5500]/10 rounded-full -mr-40 -mb-32 blur-2xl"
          style={{ 
            transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.03}px) rotate(${scrollY * -0.02}deg)`,
            opacity: Math.max(0.6 - darknessFactor * 0.3, 0.25),
            willChange: "transform"
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-[#f4921e]/10 rounded-full -ml-48 -mb-32 blur-2xl"
          style={{ 
            transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
            opacity: Math.max(0.6 - darknessFactor * 0.3, 0.25),
            willChange: "transform"
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center responsive-padding pt-8 md:pt-6">
        {/* Main Content Text - Updated for left alignment with image on right */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Text content - Left aligned */}
          <div className="text-left md:text-left w-full md:w-1/2 pt-0 pr-0 md:pr-8">
            <h1 className="responsive-text-3xl font-medium leading-tight mb-3 md:mb-4 tracking-wider animate-fade-in animate-delay-200">
              <Typewriter
                text="Transform the way you work."
                speed={70}
                className="text-white"
                cursorChar="_"
              />
            </h1>
            <p className="responsive-text-xl text-gray-400 mb-6 md:mb-8 animate-fade-in animate-delay-300">
              Innovative software solutions for modern businesses. Build the future with our cutting-edge technology.
            </p>
          </div>
          
          {/* Hero Image - Right side */}
          <div className="w-full md:w-1/2 animate-fade-in animate-delay-400 mt-2 md:mt-0">
            <img
              src="/illustration.png"
              alt="Innovation Illustration"
              className="w-full max-w-sm mx-auto md:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Added spacing for better separation */}
      <div className="h-4 md:h-8"></div>

      {/* Division Line */}
      <div className="relative z-10 flex justify-center responsive-padding-x py-4 md:py-8">
        <div className="w-3/4 md:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
      </div>

      {/* Journey Section */}
      <div 
        ref={journeySectionRef} 
        id="journey-section" 
        className="relative min-h-screen flex flex-col items-start justify-center responsive-padding py-8 md:py-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 300 ? 1 : 0, 
          transform: scrollY > 300 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2 className="responsive-text-2xl font-bold mb-6 md:mb-12 text-white text-left">
          <Typewriter text="Our Journey and Vision" speed={70} />
        </h2>
        
        <div 
          className="w-full md:w-11/12 p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-black/20 
          border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* About Image - Left side on desktop, top on mobile */}
            <div className="w-full md:w-2/5 animate-fade-in pb-4 md:pb-0">
              <img
                src="/about.png"
                alt="Our Team Collaboration"
                className="w-full max-w-sm mx-auto md:max-w-full rounded-lg"
              />
            </div>

            {/* Content - Right side on desktop, bottom on mobile */}
            <div 
              className="w-full md:w-3/5 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY > 400 ? 1 : 0, 
                transform: scrollY > 400 ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg text-center md:text-left">
                  At Krishlabs, we are dedicated to delivering exceptional software development services. Our expertise spans various technologies and industries, making us a reliable partner for businesses.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-base md:text-lg text-center md:text-left">
                  Krishlabs was founded with a vision to revolutionize the software development landscape. Our journey began with a group of passionate developers seeking to create impactful solutions.
                </p>
                
                <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                  <Link to="/about" className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#f4921e]/40 to-[#ff5500]/40 text-white font-medium border border-white/10 backdrop-blur-sm transition-all duration-300 hover:from-[#f4921e]/50 hover:to-[#ff5500]/50 group">
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
      <div className="relative z-10 flex justify-center responsive-padding-x py-4 md:py-8">
        <div className="w-3/4 md:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
      </div>
            
      {/* Personalized Consultation Services Section */}
      <div 
        className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-20 py-8 md:py-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 800 ? 1 : 0, 
          transform: scrollY > 800 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-white text-left">
          <Typewriter text="Personalized Consultation Services" speed={70} />
        </h2>
        
        <div 
          className="w-full md:w-11/12 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-black/20 
          border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Consultation Image - Top on mobile, Right on desktop */}
            <div className="w-full md:w-2/5 animate-fade-in animate-delay-200 order-first md:order-last pb-4 md:pb-0">
              <img
                src="/consultation.png"
                alt="Consultation Services"
                className="w-full max-w-sm mx-auto md:max-w-full rounded-lg"
              />
            </div>
            
            {/* Services Content - Bottom on mobile, Left on desktop */}
            <div 
              className="w-full md:w-3/5 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY > 900 ? 1 : 0, 
                transform: scrollY > 900 ? 'translateY(0)' : 'translateY(-40px)',
              }}
            >
              <div className="space-y-0">
                <div className="py-3 md:py-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-[#f4921e] flex-shrink-0" />
                    <span>Business Analysis</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-7">
                    In-depth analysis to understand your unique business requirements.
                  </p>
                </div>
                
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                </div>
                  
                <div className="py-3 md:py-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center">
                    <Blocks className="w-5 h-5 mr-2 text-[#f4921e] flex-shrink-0" />
                    <span>Technical Architecture</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-7">
                    Creating robust architectures to ensure scalable and efficient solutions.
                  </p>
                </div>
                
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                </div>
                      
                <div className="py-3 md:py-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center">
                    <GitBranch className="w-5 h-5 mr-2 text-[#f4921e] flex-shrink-0" />
                    <span>Project Management</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-7">
                    Expert project management to keep your projects on track and within budget.
                  </p>
                </div>
                      
                {/* Dividing line between services */}
                <div className="flex justify-center py-1">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                </div>
                      
                <div className="py-3 md:py-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center">
                    <Microscope className="w-5 h-5 mr-2 text-[#f4921e] flex-shrink-0" />
                    <span>Quality Assurance</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-7">
                    Comprehensive testing services to ensure high-quality deliverables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      {/* Our Development Process Section */}
      <div 
        className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-20 py-12 md:py-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 1200 ? 1 : 0, 
          transform: scrollY > 1200 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <div className="w-full mb-8 flex flex-col justify-start items-start gap-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left opacity-0 transform -translate-x-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1250 ? 1 : 0, 
              transform: scrollY > 1250 ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <Typewriter text="Our Development Process" speed={70} />
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-300 max-w-md text-left opacity-0 transform translate-x-10 transition-all duration-700 ease-out"
            style={{ 
              opacity: scrollY > 1250 ? 1 : 0, 
              transform: scrollY > 1250 ? 'translateX(0)' : 'translateX(40px)',
            }}
          >
            Learn about our structured approach to delivering exceptional software solutions.
          </p>
        </div>

        {/* Dividing Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent mb-8 md:mb-16 mt-4 transform scaleX-0 transition-all duration-1000 ease-out"
          style={{ 
            transform: scrollY > 1300 ? 'scaleX(1)' : 'scaleX(0)',
          }}
        ></div>
        
        {/* Three-column Process Steps */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Discovery Phase</h3>
            <p className="text-sm sm:text-base text-gray-300">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Design Stage</h3>
            <p className="text-sm sm:text-base text-gray-300">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-sm sm:text-base text-gray-300">
              We develop the solution while integrating thorough testing to ensure quality.
            </p>
          </div>
        </div>
            </div>
            
      {/* Division Line */}
      <div className="relative z-10 flex justify-center responsive-padding-x py-4 md:py-8">
        <div className="w-3/4 md:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
            </div>
            
      {/* What Clients Say Section */}
      <div 
        className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-20 py-12 md:py-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
        style={{ 
          opacity: scrollY > 1600 ? 1 : 0, 
          transform: scrollY > 1600 ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-left w-full">
          <Typewriter text="What Clients Say" speed={70} />
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 mb-8 md:mb-12 text-left w-full">
          Hear from our satisfied customers.
        </p>

        {/* Testimonials Slider */}
        <TestimonialsSlider />
      </div>

      {/* Final Division Line */}
      <div className="relative z-10 flex justify-center responsive-padding-x py-4 md:py-8">
        <div className="w-3/4 md:w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      quote: "Krishlabs delivered a high-quality, responsive website for our business. Their ability to handle both frontend and backend development with cutting-edge technologies like Node.js and React was impressive. We saw a significant improvement in our user engagement and SEO rankings.",
      name: "Sowkath, Founder, RS Restaurants"
    },
    {
      quote: "We needed a custom web solution for our e-commerce platform, and Krishlabs delivered beyond our expectations. Their expertise in Laravel and React helped us create a seamless, scalable, and secure website. Their professionalism and attention to detail made all the difference.",
      name: "Ajay Kumar, Founder, Buddies Basket"
    },
    {
      quote: "Krishlabs transformed our vision into a stunning mobile app! Their team was highly skilled, responsive, and delivered an intuitive, high-performance app that exceeded our expectations. From UI/UX design to backend integration, everything was flawless. Highly recommended!",
      name: "Rakesh reddy, Director, Knowledge Kraft"
    },
    {
      quote: "Krishlabs transformed our vision into reality with their exceptional services. Their professionalism and expertise are unmatched in the industry.",
      name: "Saleem"
    },
    {
      quote: "We partnered with Krishlabs to develop a CRM solution tailored to our business needs. Their team was extremely professional, delivering a feature-rich platform with seamless third-party integrations. Their expertise in cloud-based applications and security was commendable.",
      name: "Arun Chandra, Director, Lite Bites"
    }
  ];
  
  const totalTestimonials = testimonials.length;
  const visibleTestimonials = 1; // Always show only 1 card
  const maxIndex = totalTestimonials - visibleTestimonials;
  
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };
  
  // Auto-play functionality with reduced time
  useEffect(() => {
    let interval: number;
    
    if (!isPaused) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 8000); // Changed from 5000ms to 3000ms (3 seconds)
    }
    
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [currentIndex, isPaused, maxIndex]);
  
  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonials wrapper with full-width border */}
      <div className="relative mb-10 overflow-hidden border-t border-b border-[#f4921e]/10">
        {/* Removed gradient overlays for edges */}
        
        {/* Testimonials slider */}
        <div 
          className="flex transition-transform duration-500 ease-out" /* Changed duration from 700 to 500 */
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-full transition-all duration-300" /* Removed px-4 padding */
              style={{ 
                opacity: index === currentIndex ? 1 : 0.3,
                transform: index === currentIndex ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              <div className="p-4 sm:p-6 rounded-2xl h-full transform transition-all duration-300 w-full border-2 border-[#f4921e]/70 bg-black/80"> 
                {/* Full-width card with orange border and darker background */}
                <div className="flex justify-between mb-2">
                  <Quote className="w-6 h-6 text-[#f4921e]" />
                </div>
                <div className="h-[100px] sm:h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-auto border-t border-[#f4921e]/10 pt-3 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#f4921e]/20 flex items-center justify-center bg-black/30">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#f4921e]" />
                  </div>
                  <span className="text-white font-medium ml-3 text-sm">{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="flex items-center justify-between w-full px-4">
        {/* Pagination indicators */}
        <div className="flex space-x-3">
          {Array.from({ length: totalTestimonials }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 
                'bg-[#f4921e] w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Next/Prev buttons */}
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30 border border-white/10 text-white hover:border-[#f4921e]/30 hover:bg-black/50 transition-all transform hover:-translate-x-1"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30 border border-white/10 text-white hover:border-[#f4921e]/30 hover:bg-black/50 transition-all transform hover:translate-x-1"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;