import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Download my resume or view it online
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Online</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">📄</div>
              <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
              <p className="text-gray-400">
                A comprehensive overview of my experience, skills, and achievements in web development.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 text-gray-300">
                <p className="italic">
                  "Full Stack Developer with 3+ years of experience building modern web applications 
                  using React, Node.js, and cloud technologies. Passionate about creating scalable, 
                  user-friendly solutions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;
