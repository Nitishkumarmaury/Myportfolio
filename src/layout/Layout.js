import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 text-white font-sans relative">
      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1" style={{ 
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
