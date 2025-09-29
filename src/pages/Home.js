import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import MagicBento from '../components/MagicBento';
import VantaBirds from '../components/VantaBirds';
import SplashCursor from '../components/SplashCursor';
import { isMobile, isLowEndDevice, reduceMotion } from '../utils/deviceUtils';

// Hero Section with Vanta Birds Background
const HeroSection = () => {
  const mobile = useMemo(() => isMobile(), []);
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4"
              >
                <span className="block mb-2">SIH'23 Winner | SSIP Gujarat'23 Winner | 7+ Hackathons Winner</span>
                <span className="block text-sm sm:text-base md:text-lg text-gray-400 mb-3">₹3 Lakhs National Competition Funding + ₹5 Lakh+ Hackathon Winnings</span>
                <span className="block">Cloud Computing Student passionate about building resilient, scalable, and automated cloud infrastructure systems</span>
              </motion.p>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0.5 : 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4"
            >
              {["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "Python", "Jenkins", "SRE", "IoT", "Leadership"].map((skill, index) => (
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

// Achievements Section
const AchievementsSection = () => {
  const shouldReduceMotion = useMemo(() => reduceMotion(), []);
  const mobile = useMemo(() => isMobile(), []);

  const achievements = [
    {
      title: "Smart India Hackathon 2023",
      award: "First Prize Winner - ₹1 Lakh",
      description: "Lead Cloud & AI Engineer - Engineered real-time MLOps platform on AWS with 40% cost reduction",
      icon: "🏆",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7145373892595834881?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2BjrYBeCTAy_58w19y8T5efY3vxehK9WY"
    },
    {
      title: "New India Vibrant Hackathon",
      award: "First Prize Winner - ₹2 Lakhs",
      description: "Cloud Infrastructure Architect - Deployed highly available IoT platform handling 10,000+ connections",
      icon: "🚀",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7139801761556463616?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2BjrYBeCTAy_58w19y8T5efY3vxehK9WY"
    },
    {
      title: "Patent Co-Inventor",
      award: "Application No: 202311064721",
      description: "Automated Plants Water System For Road Dividers - IoT-based sustainable solution",
      icon: "💡",
      link: "https://www.linkedin.com/posts/nitish-kumar-a1a6b8249_clouddevopshub-chandigarhuniversity-aws-activity-7375296452597764096-VZc0"
    },
    {
      title: "7+ Hackathons Winner",
      award: "Total Prize Money: ₹5+ Lakhs",
      description: "Consistent winner across multiple national-level hackathons with cloud and IoT solutions",
      icon: "🎯",
      link: "https://www.linkedin.com/posts/nitish-kumar-a1a6b8249_hackathon-hackfest-iitdhanbad-activity-7052530615987920896-BMnd"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8 }}
          viewport={{ once: true, margin: mobile ? "-50px" : "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Award-Winning Achievements
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Recognized excellence in cloud engineering and innovation across national competitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.5 : 0.8, 
                delay: shouldReduceMotion ? 0 : index * 0.1 
              }}
              viewport={{ once: true, margin: mobile ? "-30px" : "-50px" }}
            >
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 h-full"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">{achievement.award}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
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
      title: "Music Streaming App",
      description: "Full-stack music streaming platform with modern UI and audio playback features",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "Audio API"],
      link: "https://music-phi-drab.vercel.app/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern portfolio with 3D animations and interactive elements",
      image: "/api/placeholder/400/250",
      tags: ["React", "Three.js", "Tailwind"],
      link: "/projects/3"
    },
    {
      id: 3,
      title: "AWS Infrastructure as Code",
      description: "Terraform configurations for scalable AWS cloud infrastructure",
      image: "/api/placeholder/400/250",
      tags: ["Terraform", "AWS", "DevOps"],
      link: "/projects/1"
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
              {project.link.startsWith('http') ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              ) : (
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
              )}
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
            Cloud Engineering Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Building scalable cloud solutions and infrastructure services
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

// Detailed Expertise Section
const ExpertiseSection = () => {
  const shouldReduceMotion = useMemo(() => reduceMotion(), []);
  const mobile = useMemo(() => isMobile(), []);

  const expertiseAreas = [
    {
      icon: "☁️",
      title: "Infrastructure as Code (IaC)",
      description: "Building immutable infrastructure and ensuring 100% repeatable environments using Terraform and Ansible.",
      technologies: ["Terraform", "Ansible", "Packer", "CloudFormation"]
    },
    {
      icon: "🐳",
      title: "Containerization & Orchestration",
      description: "Deploying and managing containerized microservices at scale with Docker and Kubernetes (EKS, GKE).",
      technologies: ["Docker", "Kubernetes", "EKS", "GKE", "Helm"]
    },
    {
      icon: "🔄",
      title: "CI/CD & Automation",
      description: "Engineering robust CI/CD pipelines with Jenkins and Python (Boto3) to automate builds, security scans, and deployments.",
      technologies: ["Jenkins", "GitHub Actions", "Python", "Boto3", "GitOps"]
    },
    {
      icon: "📊",
      title: "Observability & SRE",
      description: "Implementing monitoring and alerting with Prometheus & Grafana to ensure system health and optimize performance.",
      technologies: ["Prometheus", "Grafana", "Splunk", "CloudWatch", "SRE"]
    }
  ];

  const education = {
    university: "Chandigarh University, Punjab",
    degree: "Bachelor of Engineering - Computer Science Engineering",
    specialization: "Specialization in Cloud Computing",
    duration: "Aug 2022 - Aug 2026",
    highlights: [
      "Cloud Architecture & Design",
      "AWS Technical Essentials & Core Services (EKS, Lambda, S3, VPC)",
      "Principles of Virtualization & Containerization",
      "Site Reliability Engineering (SRE) Concepts"
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/40 to-gray-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8 }}
          viewport={{ once: true, margin: mobile ? "-50px" : "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Summary
          </h2>
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4">
            <p className="text-lg">
              I am a Cloud Computing student driven by a passion for building systems that are not just functional, 
              but also resilient, scalable, and automated from the ground up. This drive for engineering excellence 
              led my teams to win <span className="text-yellow-400 font-semibold">₹3 Lakhs in national competition funding</span> and 
              <span className="text-yellow-400 font-semibold"> ₹5 Lakh+ in hackathons</span>, where I had the opportunity to 
              architect and deploy high-availability systems under pressure.
            </p>
            <p>
              My core focus is on applying <span className="text-blue-400 font-semibold">Cloud Computing principles</span> 
              to solve complex operational challenges and build scalable cloud-native solutions.
            </p>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          viewport={{ once: true, margin: mobile ? "-30px" : "-50px" }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Core Expertise Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0.5 : 0.8, 
                  delay: shouldReduceMotion ? 0 : index * 0.1 
                }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{area.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-3">{area.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
          viewport={{ once: true, margin: mobile ? "-30px" : "-50px" }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Education & Specialization
            </h3>
            <div className="text-blue-400 font-semibold text-lg">{education.university}</div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">{education.degree}</h4>
              <p className="text-yellow-400 font-medium mb-2">{education.specialization}</p>
              <p className="text-gray-400 mb-4">{education.duration}</p>
              <p className="text-gray-300 leading-relaxed">
                My curriculum and practical labs were deeply focused on modern cloud infrastructure and 
                distributed systems. This foundational knowledge was instrumental in the success of my 
                award-winning hackathon projects.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Academic Foundation</h4>
              <ul className="space-y-2">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
        <AchievementsSection />
        <FeaturedProjects />
        <SkillsSection />
        <ExpertiseSection />
      </div>
    </>
  );
};

export default Home;
