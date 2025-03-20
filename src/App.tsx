import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Code2, Terminal, Database, Globe, Cpu, Cloud,
  Binary, Blocks, Brain, Rocket, Server, Wifi, Network, Laptop,
  CircuitBoard, Microscope, Atom, Lightbulb, GitBranch, Code, Coffee, Sparkles,
  Monitor, Headphones, PenTool
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

function TechDoodle({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`doodle-container absolute ${className}`}>
      <div className="doodle-character">
        {children}
      </div>
    </div>
  );
}

const FloatingElement = ({ icon: Icon, className, text, delay = 0 }) => (
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
      {/* Navigation bar */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between z-50 px-8 py-1">
        <div className="animate-fade-in animate-delay-100">
          <Link to="/">
            <img 
              src="/krishlabs-logo.png" 
              alt="KrishLabs" 
              className="h-16 w-auto"
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
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
            <Link to="/services" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
            <Link to="/blog" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
            <Link to="/contact" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
            <Link to="/career" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Career</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </Link>
          </div>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// Create a new Home component for the main page content
function Home({ scrollY }: { scrollY: number }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#ff2994]/10 via-[#070212] to-transparent"></div>
      
      {/* Gradient waves */}
      <div className="fixed inset-0">
        <div 
          className="gradient-blob-1" 
          style={{ 
            transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
        <div 
          className="gradient-blob-2" 
          style={{ 
            transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.03}px) rotate(${scrollY * -0.02}deg)`,
          }}
        ></div>
        <div 
          className="gradient-blob-3" 
          style={{ 
            transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
          }}
        ></div>
      </div>

      {/* Background Layer Elements (Below Text) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Far Background Elements */}
        <FloatingElement 
          icon={CircuitBoard} 
          className="top-[75%] left-[8%] w-12 h-12 text-purple-400/20 path-3"
          delay={2}
        />
        <FloatingElement 
          icon={Binary} 
          className="bottom-[15%] right-[12%] w-10 h-10 text-blue-400/20 path-2"
          delay={1.5}
        />
        <FloatingElement 
          icon={Cpu} 
          className="top-[80%] right-[15%] w-11 h-11 text-green-400/20 path-1"
          delay={3}
        />
        <FloatingElement 
          icon={Code} 
          className="bottom-[85%] left-[18%] w-10 h-10 text-pink-400/20 path-4"
          delay={2.5}
        />
        <pre className="code-snippet bottom-[20%] left-[10%] rotate-[-5deg] opacity-10 path-1">
          <code className="text-xs text-purple-400">
            {`function init() {
  return future;
}`}
          </code>
        </pre>
        <pre className="code-snippet top-[15%] right-[8%] rotate-[8deg] opacity-10 path-2">
          <code className="text-xs text-blue-400/30">
            {`class Future {
  build() {
    return dreams;
  }
}`}
          </code>
        </pre>
        <div className="tech-term absolute bottom-[30%] right-[25%] text-sm text-blue-400/20 rotate-[8deg]">
          Innovation
        </div>
        <div className="tech-term absolute top-[12%] left-[22%] text-sm text-purple-400/20 rotate-[-5deg]">
          Blockchain
        </div>
        <div className="tech-term absolute bottom-[10%] left-[35%] text-sm text-green-400/20 rotate-[3deg]">
          Cloud Native
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        {/* Side Elements (Around Text) */}
        <FloatingElement 
          icon={Database} 
          className="absolute -left-20 top-1/2 w-7 h-7 text-cyan-400 path-2"
          delay={1}
        />
        <FloatingElement 
          icon={Globe} 
          className="absolute -right-16 top-1/3 w-7 h-7 text-blue-400 path-1"
          text="Cloud Native"
          delay={0.5}
        />

        {/* Main Content Text */}
        <div className="text-center">
          <h1 className="text-5xl font-medium text-white text-center max-w-3xl leading-tight mb-8 tracking-wider animate-fade-in animate-delay-200 gradient-text">
            Transform the way you work.
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto animate-fade-in animate-delay-300">
            Innovative software solutions for modern businesses. Build the future with our cutting-edge technology.
          </p>
          <button className="glass-button group relative px-6 py-2.5 text-sm font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white animate-fade-in animate-delay-400">
            <span className="relative z-10 flex items-center">
              Get Started
              <Terminal className="w-4 h-4 ml-2" />
            </span>
          </button>
        </div>
      </div>

      {/* Foreground Layer Elements (Above Text) */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <FloatingElement 
          icon={Brain} 
          className="top-[20%] right-[25%] w-8 h-8 text-pink-400/70 path-4"
          text="AI & ML"
          delay={0.8}
        />
        <FloatingElement 
          icon={Rocket} 
          className="top-[30%] left-[20%] w-7 h-7 text-orange-400/70 path-1"
          delay={1.2}
        />
        <pre className="code-snippet top-[25%] right-[10%] rotate-[3deg] opacity-30 path-2">
          <code className="text-xs text-cyan-400">
            {`const tech = {
  innovation: true
}`}
          </code>
        </pre>
        <div className="tech-term absolute top-[35%] left-[28%] text-xs text-pink-400/40 rotate-[-5deg]">
          Machine Learning
        </div>

        {/* Add far corner elements */}
        <FloatingElement 
          icon={GitBranch} 
          className="top-[8%] left-[15%] w-6 h-6 text-indigo-400/50 path-3"
          delay={1.8}
        />
        <FloatingElement 
          icon={Server} 
          className="bottom-[12%] right-[6%] w-6 h-6 text-cyan-400/50 path-2"
          delay={2.2}
        />
        <FloatingElement 
          icon={Network} 
          className="top-[10%] right-[8%] w-6 h-6 text-orange-400/50 path-1"
          delay={1.6}
        />
      </div>

      {/* Add some subtle elements around the text area */}
      <FloatingElement 
        icon={Cpu} 
        className="top-[45%] left-[12%] w-7 h-7 text-purple-400/30 path-2"
        delay={2}
      />

      <FloatingElement 
        icon={Binary} 
        className="top-[40%] right-[12%] w-7 h-7 text-blue-400/30 path-1"
        delay={1.5}
      />

      {/* Add subtle code snippets near (but not too close to) the text */}
      <pre className="code-snippet top-[40%] left-[8%] rotate-[-5deg] opacity-15 path-1">
        <code className="text-xs text-purple-400">
          {`const dream = true;`}
        </code>
      </pre>

      <pre className="code-snippet top-[45%] right-[8%] rotate-[5deg] opacity-15 path-2">
        <code className="text-xs text-cyan-400">
          {`build.future();`}
        </code>
      </pre>

      {/* Journey Section */}
      <div className="relative min-h-screen flex items-center justify-end px-8">
        <div 
          className="w-1/2 p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 
          border border-white/10 transform hover:scale-[1.02] transition-all duration-500 group"
        >
          {/* Floating elements specific to this section */}
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-all duration-500"></div>
          
          {/* Content */}
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Our Journey and Vision
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed relative group-hover:transform group-hover:translate-x-2 transition-all duration-500">
              <span className="absolute -left-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              At Krishlabs, we are dedicated to delivering exceptional software development services. Our expertise spans various technologies and industries, making us a reliable partner for businesses.
            </p>
            
            <p className="text-gray-300 leading-relaxed relative group-hover:transform group-hover:translate-x-2 transition-all duration-700">
              <span className="absolute -left-4 top-1/2 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
              Krishlabs was founded with a vision to revolutionize the software development landscape. Our journey began with a group of passionate developers seeking to create impactful solutions.
            </p>
          </div>

          {/* Interactive elements */}
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <FloatingElement 
                icon={Brain} 
                className="w-8 h-8 text-purple-400/70 group-hover:text-purple-400 transition-all duration-500"
                delay={0.2}
              />
            </div>
          </div>

          {/* Decorative code snippet */}
          <pre className="absolute -left-40 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-all duration-500">
            <code className="text-xs text-purple-400">
              {`function journey() {
  return {
    passion,
    innovation,
    excellence
  }
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;