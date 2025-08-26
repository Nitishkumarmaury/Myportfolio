import React from "react";

const ParticleRing = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {/* Large rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Medium ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
          </div>
        </div>

        {/* Small inner ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-200 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-pink-200 rounded-full"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-2.5 h-2.5 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-16 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </div>
  );
};

export default ParticleRing;
