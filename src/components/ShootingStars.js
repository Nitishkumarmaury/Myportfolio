import React from 'react';

const ShootingStars = () => {
  return (
    <>
      {/* CSS Styles */}
      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(-200px) translateY(100px) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 200px)) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .shooting-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          animation: shooting linear infinite;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 3px;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(255,255,255,0.4), transparent);
          transform: translateY(-50%);
          border-radius: 1px;
        }
        
        .shooting-star::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 3px;
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          transform: translateY(-50%);
          border-radius: 1px;
          filter: blur(1px);
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${10 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Twinkling Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: 'white',
              borderRadius: '50%',
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.6,
            }}
          />
        ))}
        
        {/* Special Glowing Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`glow-star-${i}`}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.6), 0 0 16px 4px rgba(255, 255, 255, 0.3)',
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ShootingStars;
