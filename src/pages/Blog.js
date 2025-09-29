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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Cloud Engineering: The Modern IT Career</h2>
            <p className="text-gray-300 text-lg mb-4">
              Cloud engineering is at the heart of digital transformation. As a cloud engineer, you design, build, and manage scalable, secure, and resilient cloud infrastructure using platforms like AWS, Azure, and Google Cloud. The role blends software engineering, DevOps, and IT operations, making it one of the most in-demand tech careers today.
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Key Skills:</strong> Cloud platforms (AWS, Azure, GCP), Linux, Networking, Infrastructure as Code (Terraform, CloudFormation), CI/CD, Containers (Docker, Kubernetes), Scripting (Python, Bash), Monitoring, Security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Cloud Engineer Roadmap</h2>
            <ol className="list-decimal list-inside text-gray-200 space-y-2 text-left">
              <li><strong>Learn the Basics:</strong> Linux, Networking, Databases, Programming (Python recommended)</li>
              <li><strong>Master a Cloud Platform:</strong> Start with AWS, Azure, or Google Cloud (get certified if possible)</li>
              <li><strong>Infrastructure as Code:</strong> Learn Terraform or AWS CloudFormation</li>
              <li><strong>Containers & Orchestration:</strong> Docker, Kubernetes, ECS/EKS/GKE</li>
              <li><strong>CI/CD & Automation:</strong> Jenkins, GitHub Actions, GitLab CI, scripting</li>
              <li><strong>Monitoring & Logging:</strong> Prometheus, Grafana, CloudWatch, ELK stack</li>
              <li><strong>Security Best Practices:</strong> IAM, encryption, compliance, vulnerability scanning</li>
              <li><strong>Build Projects:</strong> Deploy real apps, automate infrastructure, contribute to open source</li>
              <li><strong>Stay Current:</strong> Follow cloud blogs, join communities, keep learning!</li>
            </ol>
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
