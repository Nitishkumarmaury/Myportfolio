import React from 'react';
import { motion } from 'framer-motion';
import { Settings, FileText, Users, BarChart } from 'lucide-react';

const Admin = () => {
  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">
              Portfolio Content Management System
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FileText, title: 'Projects', count: '12', color: 'blue' },
              { icon: Users, title: 'Blog Posts', count: '8', color: 'green' },
              { icon: BarChart, title: 'Views', count: '1.2k', color: 'purple' },
              { icon: Settings, title: 'Settings', count: '5', color: 'yellow' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${item.color}-600/20 rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-2xl font-bold text-white">{item.count}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-white mb-4">Under Development</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The admin dashboard is currently being built. Features will include content management, 
              analytics, and portfolio customization tools.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Admin;
