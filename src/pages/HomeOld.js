import React, { useState, useEffect } from 'react';
imp// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 3D Particle Ring Background */}
      <div className="absolute inset-0">
        <ParticleRing />
      </div>
      
      {/* Hero Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-4">` AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import ParticleRing from '../components/ParticleRing';

// Splash Screen Component
const SplashScreen = ({ onFinish }) => {
  const name = "Nitish Kumar";
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const totalDuration = name.length * 0.3 + 1.5;
    const timer = setTimeout(() => onFinish(), totalDuration * 1000);
    return () => clearTimeout(timer);
  }, [name.length, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="flex space-x-1 select-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ fontFamily: "'Cursive', sans-serif" }}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
              style={{ fontFamily: "'Cursive', sans-serif" }}
            >
              Nitish Kumar
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
              Full Stack Developer & Creative Problem Solver
            </motion.p>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Passionate about building innovative web applications and sharing knowledge 
              through code. I create digital experiences that are both beautiful and functional.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              <span>Get In Touch</span>
            </Link>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 text-gray-300 hover:text-white transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Projects Preview
const FeaturedProjects = () => {
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
      description: "Modern portfolio with shooting stars and smooth animations",
      image: "/api/placeholder/400/250",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "/projects/3"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={project.link} className="block">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-800">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onFinish={handleSplashFinish} />}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <div className="space-y-0">
          <HeroSection />
          <FeaturedProjects />
        </div>
      )}
    </>
  );
};

export default Home;
