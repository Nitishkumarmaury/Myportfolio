import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import Ballpit from '../components/Ballpit';
import MagicBento from '../components/MagicBento';
import VantaBirds from '../components/VantaBirds';
import SplashCursor from '../components/SplashCursor';
import { isMobile, isLowEndDevice, reduceMotion } from '../utils/deviceUtils';

// Hero Section with Vanta Birds Background
const HeroSection = () => {
  const mobile = useMemo(() => isMobile(), []);
  const lowEnd = useMemo(() => isLowEndDevice(), []);
  const shouldReduceMotion = useMemo(() => reduceMotion(), []);

  return (
    <section 
      className="relative"
      style={{ 
        minHeight: '100vh',
        height: 'auto'
      }}
    >
      {/* Vanta Birds Background - Fixed positioning to cover entire viewport */}
      <div className="fixed inset-0" style={{ zIndex: -1 }}>
        <VantaBirds />
      </div>
      
      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen pt-12 sm:pt-16 pb-8" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.5 : 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0.5 : 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
                style={{ 
                  fontFamily: "'Cursive', sans-serif",
                  lineHeight: mobile ? '1.1' : '1.2'
                }}
              >
                Nitish Kumar
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0.5 : 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
              >
                Full Stack Developer crafting digital experiences with passion and precision
              </motion.p>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0.5 : 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4"
            >
              {["React", "Node.js", "TypeScript", "Python", "MongoDB", "AWS"].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0.5 : 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <span>Get In Touch</span>
              </Link>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-gray-300 hover:text-white transition-colors w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Featured Projects Preview
const FeaturedProjects = () => {
  const mobile = useMemo(() => isMobile(), []);
  const shouldReduceMotion = useMemo(() => reduceMotion(), []);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/projects/1"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration and modern UI",
      image: "/api/placeholder/400/250",
      tags: ["React", "Socket.io", "AI"],
      link: "/projects/2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio with 3D animations and interactive elements",
      image: "/api/placeholder/400/250",
      tags: ["React", "Three.js", "Tailwind"],
      link: "/projects/3"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8 }}
          viewport={{ once: true, margin: mobile ? "-50px" : "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.5 : 0.8, 
                delay: shouldReduceMotion ? 0 : (mobile ? index * 0.1 : index * 0.2) 
              }}
              viewport={{ once: true, margin: mobile ? "-30px" : "-50px" }}
            >
              <Link
                to={project.link}
                className="group block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 sm:p-8 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Magic Bento Skills Section
const SkillsSection = () => {
  const mobile = useMemo(() => isMobile(), []);
  const lowEnd = useMemo(() => isLowEndDevice(), []);
  const shouldReduceMotion = useMemo(() => reduceMotion(), []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8 }}
          viewport={{ once: true, margin: mobile ? "-50px" : "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            My Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Interactive showcase of my skills and services with magical animations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          viewport={{ once: true, margin: mobile ? "-30px" : "-50px" }}
          className="flex justify-center"
        >
          <MagicBento 
            textAutoHide={mobile}
            enableStars={!lowEnd}
            enableSpotlight={!mobile && !lowEnd}
            enableBorderGlow={!lowEnd}
            enableTilt={!mobile && !shouldReduceMotion}
            enableMagnetism={!mobile && !lowEnd}
            clickEffect={!lowEnd}
            spotlightRadius={mobile ? 150 : 300}
            particleCount={mobile ? 6 : (lowEnd ? 4 : 12)}
            glowColor="132, 0, 255"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  // Fix mobile scrolling issues
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Enable scrolling on mobile
      document.body.style.overflowY = 'auto';
      document.body.style.webkitOverflowScrolling = 'touch';
      
      // Fix viewport height issues on mobile
      const updateViewportHeight = () => {
        if (window.visualViewport) {
          document.documentElement.style.setProperty('--vh', `${window.visualViewport.height * 0.01}px`);
        } else {
          document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        }
      };

      updateViewportHeight();
      window.addEventListener('resize', updateViewportHeight);
      window.addEventListener('orientationchange', updateViewportHeight);

      return () => {
        window.removeEventListener('resize', updateViewportHeight);
        window.removeEventListener('orientationchange', updateViewportHeight);
      };
    }
  }, []);

  return (
    <>
      {/* Interactive Fluid Cursor Effect */}
      <SplashCursor />
      
      <div className="min-h-screen" style={{ 
        overflowY: 'auto', 
        WebkitOverflowScrolling: 'touch',
        height: 'auto'
      }}>
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
      </div>
    </>
  );
};

export default Home;
