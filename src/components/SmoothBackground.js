import React, { useMemo } from 'react';

const SmoothBackground = ({ mobile = false, lowEnd = false }) => {
  // Create fewer particles for mobile and low-end devices
  const particleCount = useMemo(() => {
    if (lowEnd) return 10;
    if (mobile) return 20;
    return 30;
  }, [mobile, lowEnd]);

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, [particleCount]);

  return (
    <>
      {/* CSS Styles */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            transform: translateX(-10%);
            opacity: 0.3;
          }
          50% {
            transform: translateX(10%);
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        {/* Smooth gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, #1e1b4b 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #312e81 0%, transparent 50%),
              linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #0f0f23 100%)
            `
          }}
        />
        
        {/* Simple twinkling stars */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: 0.6,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, rgba(147, 51, 234, 0.1) 50%, transparent 60%)',
            animation: 'gradientShift 8s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
};

export default SmoothBackground;
