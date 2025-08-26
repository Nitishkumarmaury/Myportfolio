import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Blog Post
            </h1>
            <p className="text-gray-400">
              Post: {slug} - Coming Soon
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
