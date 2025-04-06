import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Code, 
  User, 
  PenTool, 
  Mail, 
  Briefcase, 
  Home as HomeIcon,
  LucideIcon
} from 'lucide-react';
import { useIsMobile } from './ResponsiveUtils';

interface MenuItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const menuItems: MenuItem[] = [
  { path: '/', label: 'Home', icon: HomeIcon },
  { path: '/services', label: 'Services', icon: Code },
  { path: '/about', label: 'About', icon: User },
  { path: '/blog', label: 'Blog', icon: PenTool },
  { path: '/contact', label: 'Contact', icon: Mail },
  { path: '/career', label: 'Career', icon: Briefcase },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Debug helper - log state changes
  useEffect(() => {
    console.log('Mobile menu state:', isOpen ? 'OPEN' : 'CLOSED');
  }, [isOpen]);
  
  // Close menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      onClose();
    }
  }, [isMobile, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] md:hidden ${isOpen ? 'visible' : 'invisible'}`}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0 }}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#050109]/95 border-l border-white/10 shadow-xl transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div>
            <img 
              src="/krishlabs-logo.png" 
              alt="Krishlabs Logo" 
              className="h-10 w-auto"
            />
          </div>
          <button 
            className="text-white p-2 focus:outline-none"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Menu Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(100%-64px)]">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-[#f4921e]/10 text-[#f4921e]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={onClose}
                >
                  <div className="flex items-center">
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-[#f4921e]' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-[#f4921e]" />}
                </Link>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#f4921e]/40 to-[#ff5500]/40 text-white font-medium hover:from-[#f4921e]/50 hover:to-[#ff5500]/50 transition-all"
              onClick={onClose}
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>Need Help? <a href="tel:+918977217554" className="text-[#f4921e]">Call Us</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

// Simplified MobileMenuButton
export const MobileMenuButton: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => {
  // Handle clicks with 300ms debounce to prevent double-taps
  const handleClick = () => {
    // Use a timeout to prevent accidental double-clicks
    setTimeout(() => {
      onClick();
    }, 10);
  };
  
  return (
    <button
      className="md:hidden text-white p-2 focus:outline-none z-[10000] relative"
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      style={{ touchAction: 'manipulation' }}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </div>
    </button>
  );
}; 