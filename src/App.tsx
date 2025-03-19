import React, { useState } from 'react';
import { ChevronDown, Menu, X, Code2, Terminal, Database, Globe, Cpu, Cloud,
  Binary, Blocks, Brain, Rocket, Server, Wifi, Network, Laptop,
  CircuitBoard, Microscope, Atom, Lightbulb, GitBranch, Code, Coffee, Sparkles,
  Monitor, Headphones, PenTool
} from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Updated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff2994]/10 via-[#070212] to-transparent"></div>
      
      {/* Gradient waves */}
      <div className="absolute inset-0">
        <div className="gradient-blob-1"></div>
        <div className="gradient-blob-2"></div>
        <div className="gradient-blob-3"></div>
        <div className="noise-overlay"></div>
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

      {/* Centered Navigation */}
      <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
        {/* Logo */}
        <div className="absolute left-4 animate-fade-in animate-delay-100 z-[60]">
          <h1 className="text-2xl font-semibold gradient-text flex items-center">
            <Code2 className="w-6 h-6 mr-2" />
            KrishLabs
          </h1>
        </div>

        {/* Add these elements near the logo area */}
        <div className="absolute top-[8%] left-[8%] z-30 opacity-20 path-2">
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
        </div>

        <div className="absolute top-[10%] left-[6%] z-30 opacity-15 path-3" style={{ animationDelay: "1.2s" }}>
          <div className="w-3 h-3 rounded-full bg-pink-400/30"></div>
        </div>

        {/* Also add a subtle code element below the logo */}
        <pre className="code-snippet top-[12%] left-[5%] rotate-[0deg] opacity-15 path-1 z-30">
          <code className="text-xs text-cyan-400/50">
            {`// innovate`}
          </code>
        </pre>

        {/* Navigation with fade-in */}
        <nav className="rounded-full backdrop-blur-md bg-white/5 border border-white/10 px-5 py-2 animate-fade-in">
          <div className="flex items-center space-x-6">
            {/* Navigation Items */}
            <a href="#" className="nav-link active relative px-4 py-1 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-all duration-300 group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </a>
            <a href="#" className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </a>
            {/* More Dropdown */}
            <div className="relative group">
              <button className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group flex items-center">
                <span className="relative z-10">More</span>
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
              <div className="absolute left-0 mt-2 w-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-[-10px]">
                <div className="rounded-lg shadow-lg overflow-hidden backdrop-blur-md bg-black/50 border border-white/10">
                  <div className="py-1">
                    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-300 hover:text-white relative group">
                      <span className="relative z-10">Blogs</span>
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                    </a>
                    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-300 hover:text-white relative group">
                      <span className="relative z-10">Contact</span>
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                    </a>
                    <a href="#" className="dropdown-item block px-4 py-2 text-sm text-gray-300 hover:text-white relative group">
                      <span className="relative z-10">Career</span>
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Auth buttons with enhanced hover effects */}
        <div className="absolute right-4 flex items-center space-x-4 animate-fade-in animate-delay-200">
          <button className="nav-link relative px-4 py-1 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group">
            <span className="relative z-10">Log in</span>
            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </button>
          <button className="glass-button relative px-5 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/10 text-white group overflow-hidden">
            <span className="relative z-10">Sign up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;