import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Tag } from 'lucide-react';

const Blog = () => {
  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development and technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-6"
          >
            <div className="text-8xl mb-4">📝</div>
            <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm currently working on creating valuable content for developers. 
              Stay tuned for tutorials, insights, and stories from my coding journey.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>Tutorials</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Weekly Posts</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Tag className="w-5 h-5" />
                <span>Tech Tips</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
