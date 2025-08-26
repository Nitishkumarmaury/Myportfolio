import React, { useEffect, useRef, useState } from 'react';
import { isMobile, isLowEndDevice } from '../utils/deviceUtils';

const VantaBirds = ({ children, className = "" }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Check if Vanta is available
    if (!window.VANTA) {
      console.warn('Vanta.js is not loaded');
      return;
    }

    const mobile = isMobile();
    const lowEnd = isLowEndDevice();
    
    // Don't load heavy animation on low-end devices
    if (lowEnd) {
      setIsLoaded(true);
      return;
    }

    try {
      // Initialize Vanta Birds effect
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: mobile ? 0.8 : 1.00,
        scaleMobile: 0.8,
        // Optimize for performance
        birdSize: mobile ? 1.2 : 1.5,
        wingSpan: mobile ? 20 : 25,
        speedLimit: mobile ? 3 : 5,
        separation: mobile ? 15 : 20,
        alignment: mobile ? 15 : 20,
        cohesion: mobile ? 15 : 20,
        quantity: mobile ? 3 : 4, // Decreased from 4-6 to 3-4
        // Colors
        backgroundColor: 0x0a0a0f,
        color1: 0x3b82f6, // Blue
        color2: 0x8b5cf6, // Purple
        colorMode: 'variance',
        // Performance settings
        backgroundAlpha: 0.0
      });
      
      setIsLoaded(true);
    } catch (error) {
      console.error('Error initializing Vanta Birds:', error);
      setIsLoaded(true);
    }

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect.current && vantaEffect.current.resize) {
        try {
          vantaEffect.current.resize();
        } catch (error) {
          console.error('Error resizing Vanta effect:', error);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lowEnd = isLowEndDevice();

  return (
    <div 
      ref={vantaRef}
      className={`relative ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        // Fallback background for low-end devices or when Vanta fails to load
        background: lowEnd || !isLoaded 
          ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)'
          : 'transparent'
      }}
    >
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
      {/* Loading indicator */}
      {!isLoaded && !lowEnd && (
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default VantaBirds;
