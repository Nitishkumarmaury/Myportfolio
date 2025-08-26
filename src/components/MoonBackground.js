import React from 'react';

const MoonBackground = () => {
  return (
    <>
      {/* CSS Styles */}
      <style>{`
        .moon {
          top: 10%;
          right: 15%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5f5dc 0%, #e6e6cd 50%, #d3d3b8 100%);
          box-shadow: 
            inset -10px -10px 0 rgba(0,0,0,0.1),
            0 0 50px rgba(245,245,220,0.3),
            0 0 100px rgba(245,245,220,0.2);
          position: absolute;
          animation: moonFloat 6s ease-in-out infinite;
        }
        
        .moon-surface {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%);
        }
        
        .moon-crater {
          position: absolute;
          border-radius: 50%;
          background: rgba(0,0,0,0.1);
        }
        
        .crater-1 {
          width: 15px;
          height: 15px;
          top: 25%;
          left: 30%;
          box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .crater-2 {
          width: 8px;
          height: 8px;
          top: 45%;
          right: 25%;
          box-shadow: inset 1px 1px 2px rgba(0,0,0,0.2);
        }
        
        .crater-3 {
          width: 12px;
          height: 12px;
          bottom: 30%;
          left: 45%;
          box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);
        }
        
        .moon-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,245,220,0.2) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }
        
        .cloud {
          position: absolute;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          backdrop-filter: blur(1px);
        }
        
        .cloud-1 {
          width: 100px;
          height: 40px;
          top: 20%;
          left: 10%;
          animation: cloudFloat1 20s linear infinite;
        }
        
        .cloud-2 {
          width: 80px;
          height: 30px;
          top: 35%;
          right: 5%;
          animation: cloudFloat2 25s linear infinite reverse;
        }
        
        .cloud-3 {
          width: 120px;
          height: 35px;
          bottom: 25%;
          left: 5%;
          animation: cloudFloat1 30s linear infinite;
        }
        
        @keyframes moonFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes cloudFloat1 {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        
        @keyframes cloudFloat2 {
          0% {
            transform: translateX(100px);
          }
          100% {
            transform: translateX(calc(-100vw - 100px));
          }
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .moon {
            width: 80px;
            height: 80px;
            top: 8%;
            right: 10%;
          }
          
          .crater-1 {
            width: 10px;
            height: 10px;
          }
          
          .crater-2 {
            width: 6px;
            height: 6px;
          }
          
          .crater-3 {
            width: 8px;
            height: 8px;
          }
          
          .cloud-1, .cloud-2, .cloud-3 {
            width: 60px;
            height: 25px;
          }
        }
        
        @media (max-width: 480px) {
          .moon {
            width: 60px;
            height: 60px;
            top: 6%;
            right: 8%;
          }
          
          .cloud-1, .cloud-2, .cloud-3 {
            width: 40px;
            height: 20px;
          }
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moon */}
        <div className="moon">
          <div className="moon-surface"></div>
          <div className="moon-crater crater-1"></div>
          <div className="moon-crater crater-2"></div>
          <div className="moon-crater crater-3"></div>
          <div className="moon-glow"></div>
        </div>
        
        {/* Clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>
    </>
  );
};

export default MoonBackground;
