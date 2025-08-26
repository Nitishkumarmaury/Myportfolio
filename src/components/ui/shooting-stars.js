import React, { useEffect, useRef, useState, useMemo } from 'react';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className = "",
}) => {
  const [stars, setStars] = useState([]);
  const svgRef = useRef(null);
  const mobile = useMemo(() => isMobile(), []);
  
  // Optimize settings for mobile
  const optimizedSettings = useMemo(() => {
    if (mobile) {
      return {
        maxStars: 2,
        createChance: 0.15,
        trailLength: 80,
        backgroundStars: 50,
      };
    }
    return {
      maxStars: 4,
      createChance: 0.3,
      trailLength: 150,
      backgroundStars: 100,
    };
  }, [mobile]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5, // Top half of screen
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        direction: Math.random() * 45 + 30, // 30-75 degrees
        size: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.6 + 0.4,
        trailLength: Math.random() * optimizedSettings.trailLength + 50,
      };
      return star;
    };

    const addStar = () => {
      setStars(prev => {
        if (prev.length >= optimizedSettings.maxStars) return prev;
        return [...prev, createStar()];
      });
    };

    // Add initial stars
    const initialStars = Array.from({ length: mobile ? 1 : 2 }, () => createStar());
    setStars(initialStars);

    // Add new stars periodically
    const interval = setInterval(() => {
      if (Math.random() < optimizedSettings.createChance) {
        addStar();
      }
    }, Math.random() * (maxDelay - minDelay) + minDelay);

    return () => clearInterval(interval);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, mobile, optimizedSettings]);

  useEffect(() => {
    let animationId;
    
    const animate = () => {
      setStars(prev => 
        prev
          .map(star => ({
            ...star,
            x: star.x + Math.cos((star.direction * Math.PI) / 180) * star.speed * (mobile ? 0.012 : 0.016),
            y: star.y + Math.sin((star.direction * Math.PI) / 180) * star.speed * (mobile ? 0.012 : 0.016),
          }))
          .filter(star => 
            star.x < window.innerWidth + 200 && 
            star.y < window.innerHeight + 200 && 
            star.x > -200 && 
            star.y > -200
          )
      );
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mobile]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor={starColor} stopOpacity="0.8" />
            <stop offset="70%" stopColor={trailColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation={mobile ? "1" : "2"} result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {stars.map(star => {
          const angle = (star.direction * Math.PI) / 180;
          const endX = star.x - Math.cos(angle) * star.trailLength;
          const endY = star.y - Math.sin(angle) * star.trailLength;
          
          return (
            <g key={star.id}>
              {/* Trail */}
              <line
                x1={endX}
                y1={endY}
                x2={star.x}
                y2={star.y}
                stroke="url(#starGradient)"
                strokeWidth={mobile ? starHeight * 0.8 : starHeight}
                opacity={star.opacity}
                filter="url(#glow)"
              />
              {/* Star head */}
              <circle
                cx={star.x}
                cy={star.y}
                r={star.size}
                fill={starColor}
                opacity={star.opacity}
                filter="url(#glow)"
              />
            </g>
          );
        })}
      </svg>
      
      {/* Twinkling background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: optimizedSettings.backgroundStars }, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random() * (mobile ? 1 : 1.5)}px`,
              height: `${0.5 + Math.random() * (mobile ? 1 : 1.5)}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              filter: mobile ? 'none' : 'blur(0.5px)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShootingStars;
