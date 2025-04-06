import React, { useState, useEffect } from 'react';

// Define breakpoints for responsive design
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Hook to check if we're on a mobile device
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoints.md);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

// Hook to check if we're on a tablet device
export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= breakpoints.md && width < breakpoints.lg);
    };

    // Initial check
    checkIfTablet();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfTablet);

    // Clean up
    return () => window.removeEventListener('resize', checkIfTablet);
  }, []);

  return isTablet;
};

// A general hook to get current screen size category
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.sm) {
        setScreenSize('sm');
      } else if (width < breakpoints.md) {
        setScreenSize('md');
      } else if (width < breakpoints.lg) {
        setScreenSize('lg');
      } else if (width < breakpoints.xl) {
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    // Initial update
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

// A responsive container component that adapts to different screen sizes
export const ResponsiveContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto ${className}`}>
      {children}
    </div>
  );
};

// A component that renders different content based on screen size
export const ResponsiveView: React.FC<{
  mobileContent: React.ReactNode;
  tabletContent?: React.ReactNode;
  desktopContent: React.ReactNode;
}> = ({ mobileContent, tabletContent, desktopContent }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return <>{mobileContent}</>;
  } else if (isTablet && tabletContent) {
    return <>{tabletContent}</>;
  } else {
    return <>{desktopContent}</>;
  }
};

// A component that applies different styles based on screen size
export const ResponsiveStyled: React.FC<{
  children: React.ReactNode;
  mobileClassName: string;
  tabletClassName?: string;
  desktopClassName: string;
}> = ({ children, mobileClassName, tabletClassName, desktopClassName }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  let className = '';
  if (isMobile) {
    className = mobileClassName;
  } else if (isTablet && tabletClassName) {
    className = tabletClassName;
  } else {
    className = desktopClassName;
  }

  return <div className={className}>{children}</div>;
};

// A responsive spacing component that can be used to add more/less space depending on screen size
export const ResponsiveSpacing: React.FC<{
  mobileSize: number;
  tabletSize?: number;
  desktopSize: number;
  isVertical?: boolean;
}> = ({ mobileSize, tabletSize, desktopSize, isVertical = true }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  let size = 0;
  if (isMobile) {
    size = mobileSize;
  } else if (isTablet && tabletSize) {
    size = tabletSize;
  } else {
    size = desktopSize;
  }

  const style = isVertical
    ? { height: `${size}px`, width: '100%' }
    : { width: `${size}px`, height: '100%' };

  return <div style={style} />;
};

export default {
  useIsMobile,
  useIsTablet,
  useScreenSize,
  ResponsiveContainer,
  ResponsiveView,
  ResponsiveStyled,
  ResponsiveSpacing,
}; 