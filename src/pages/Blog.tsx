import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronRight, Brain, Database, Cloud, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/text/Typewriter';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we develop software, from code generation to testing.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Building Scalable Microservices Architecture",
    excerpt: "Learn the best practices for designing and implementing microservices that can scale with your business needs.",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    category: "Architecture"
  },
  {
    id: 3,
    title: "The Rise of Edge Computing",
    excerpt: "Discover how edge computing is changing the landscape of data processing and application deployment.",
    date: "Mar 8, 2024",
    readTime: "6 min read",
    category: "Infrastructure"
  },
  {
    id: 4,
    title: "Securing Your Cloud Infrastructure",
    excerpt: "Essential security practices and tools to protect your cloud-based applications and data.",
    date: "Mar 5, 2024",
    readTime: "8 min read",
    category: "Security"
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Technology':
      return <Brain className="w-8 h-8 text-[#f4921e]" />;
    case 'Architecture':
      return <Database className="w-8 h-8 text-[#f4921e]" />;
    case 'Infrastructure':
      return <Cloud className="w-8 h-8 text-[#f4921e]" />;
    case 'Security':
      return <Shield className="w-8 h-8 text-[#f4921e]" />;
    default:
      return null;
  }
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // State to track which blog cards are expanded on mobile
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  
  // Toggle card expansion
  const toggleCardExpansion = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#050109] pt-24 pb-16">
      {/* Header Section */}
      <div className="py-10 px-4 sm:px-8 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto my-12 md:my-24">
          {/* Gradient blobs */}
          <div className="absolute w-80 h-80 bg-[#f4921e]/10 rounded-full -mt-32 blur-2xl"></div>
          <div className="absolute w-64 h-64 bg-[#ff5500]/10 rounded-full -mr-40 -mb-32 blur-2xl"></div>
          <div className="absolute w-64 h-64 bg-[#f4921e]/10 rounded-full -ml-48 -mb-32 blur-2xl"></div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-wider">
            <Typewriter text="Our Blog" speed={70} />
          </h1>
          <p className="text-gray-300 mt-6 text-base md:text-2xl max-w-3xl">
            Stay updated with the latest trends and insights in technology and software development.
          </p>
        </div>
      </div>

      {/* Division Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
      </div>

      {/* Featured Post */}
      <div className="px-4 sm:px-8 md:px-20 mb-8 md:mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12">
          <div className="flex flex-wrap gap-2 md:gap-0 md:flex-nowrap md:items-center md:space-x-4 mb-4">
            <span className="text-[#f4921e] bg-[#f4921e]/10 px-3 py-1 rounded-full text-sm">
              Featured
            </span>
            <span className="text-gray-300 flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Mar 20, 2024
            </span>
            <span className="text-gray-300 flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              10 min read
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            The Evolution of Web Development: 2024 and Beyond
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-3xl">
            Discover the latest trends shaping the future of web development, from AI-powered tools to revolutionary frameworks.
          </p>
          <Link 
            to="/blog/evolution-web-development" 
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-[#f4921e]/40 to-[#ff5500]/40 text-white font-medium border border-white/10 backdrop-blur-sm transition-all duration-300 hover:from-[#f4921e]/50 hover:to-[#ff5500]/50 group"
          >
            Read Article
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="px-4 sm:px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map(post => (
            <div 
              key={post.id}
              className="bg-black/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300 p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-[#f4921e]/10 text-[#f4921e] px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {post.category}
                </span>
                {getCategoryIcon(post.category)}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {post.title}
              </h3>
              
              {/* Mobile excerpt with read more toggle */}
              {isMobile ? (
                <div>
                  <p className="text-gray-400 mb-3">
                    {expandedCards[post.id] 
                      ? post.excerpt 
                      : post.excerpt.length > 60 
                        ? post.excerpt.substring(0, 60) + '...' 
                        : post.excerpt
                    }
                  </p>
                  {post.excerpt.length > 60 && (
                    <button 
                      onClick={() => toggleCardExpansion(post.id)}
                      className="inline-flex items-center text-[#f4921e] mb-4 text-sm focus:outline-none"
                    >
                      {expandedCards[post.id] ? 'Show Less' : 'Read More'}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expandedCards[post.id] ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
              ) : (
                // Desktop view - show full excerpt
                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>
              )}
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-[#f4921e] hover:text-[#ff5500] transition-colors group"
              >
                Read Full Article
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 