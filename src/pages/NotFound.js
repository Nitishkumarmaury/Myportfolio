import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            404
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved to another location.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>

              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Browse Projects</span>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-gray-500 text-sm"
          >
            <p>Error 404 - The shooting stars couldn't find this page either! 🌟</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
