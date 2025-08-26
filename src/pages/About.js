import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
    { category: "Learning", items: ["Next.js", "GraphQL", "Web3", "Machine Learning"] }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Lead developer for multiple client projects, specializing in React and Node.js applications."
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2022 - 2023",
      description: "Developed responsive web applications and interactive user interfaces."
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built and maintained web applications while learning modern development practices."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Technical University",
      period: "2017 - 2021",
      description: "Focused on software engineering, algorithms, and web development."
    }
  ];

  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm Nitish, a passionate full-stack developer with over 3 years of experience 
                    creating digital experiences that make a difference. My journey in technology started 
                    during my college years when I wrote my first "Hello World" program and fell in love 
                    with the power of code.
                  </p>
                  <p>
                    I specialize in building modern web applications using React, Node.js, and various 
                    cloud technologies. What drives me most is solving complex problems and turning ideas 
                    into reality through clean, efficient code.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing my knowledge through blog posts and tutorials. 
                    I believe in continuous learning and staying updated with the latest trends in web development.
                  </p>
                </div>
              </motion.section>

              {/* Experience Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <span className="text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <span className="text-blue-400 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-gray-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Coffee className="w-5 h-5 text-blue-400" />
                    <span>Coffee Enthusiast</span>
                  </div>
                </div>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Fun Facts</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Love building pixel-perfect UIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-yellow-500" />
                    <span>Powered by coffee ☕</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-green-500" />
                    <span>Open source contributor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">🚀</span>
                    <span>Always learning something new</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
