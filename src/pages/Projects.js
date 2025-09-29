import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// Real project data
const projectsData = [
  {
    id: 1,
    title: "AWS Infrastructure as Code with Terraform",
    description: "Modular Terraform configurations to provision secure, multi-AZ AWS infrastructure with 40+ resources, including VPC, subnets, EC2 Auto Scaling Groups, and RDS with version control.",
    image: "/api/placeholder/600/400",
    tags: ["Terraform", "AWS", "IaC", "VPC", "EC2", "RDS"],
    category: "Cloud Infrastructure",
    github: "https://github.com/Nitishkumarmaury/terraform-aws-infrastructure",
    demo: null,
    featured: true,
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Smart India Hackathon - MLOps Platform",
    description: "Real-time MLOps platform on AWS achieving 40% cost reduction through optimized EKS configuration. Winner of ₹1 Lakh prize. Implemented GitOps workflow accelerating delivery by 10x.",
    image: "/api/placeholder/600/400",
    tags: ["AWS", "EKS", "MLOps", "Jenkins", "GitOps", "Python"],
    category: "AI/ML",
    github: "https://github.com/Nitishkumarmaury/sih-2023",
    demo: "https://sih-project.com",
    featured: true,
    date: "2023-12-01"
  },
  {
    id: 3,
    title: "New India Vibrant Hackathon - IoT Platform",
    description: "Highly available IoT data ingestion platform on AWS using Terraform. Handles 10,000+ concurrent connections with 99.95% uptime. Winner of ₹2 Lakhs prize.",
    image: "/api/placeholder/600/400",
    tags: ["AWS", "Terraform", "IoT", "High Availability", "Kubernetes"],
    category: "Cloud Infrastructure",
    github: "https://github.com/Nitishkumarmaury/iot-platform",
    demo: null,
    featured: true,
    date: "2023-08-15"
  },
  {
    id: 4,
    title: "AI Fitness Health Analyzer",
    description: "AI-powered application analyzing user health data and body posture from video feeds to provide personalized fitness insights using computer vision and machine learning.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Health Tech"],
    category: "AI/ML",
    github: "https://github.com/Nitishkumarmaury/ai-fitness-analyzer",
    demo: null,
    featured: false,
    date: "2024-02-20"
  },
  {
    id: 5,
    title: "AWS Flask Application with Terraform and Ansible",
    description: "End-to-end automated deployment of Python Flask web application on AWS using Terraform for infrastructure provisioning and Ansible for server configuration management.",
    image: "/api/placeholder/600/400",
    tags: ["AWS", "Terraform", "Ansible", "Flask", "Python", "Automation"],
    category: "Cloud Infrastructure",
    github: "https://github.com/Nitishkumarmaury/aws-flask-terraform",
    demo: null,
    featured: false,
    date: "2023-11-10"
  },
  {
    id: 6,
    title: "Kubernetes Observability Stack",
    description: "Deployed kube-prometheus-stack via Helm on GKE cluster with custom Grafana dashboards for monitoring application SLOs and resource utilization.",
    image: "/api/placeholder/600/400",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Helm", "GKE", "Observability"],
    category: "Observability",
    github: "https://github.com/Nitishkumarmaury/k8s-observability",
    demo: null,
    featured: false,
    date: "2024-01-05"
  },
  {
    id: 7,
    title: "Accident Detection System",
    description: "Real-time traffic accident detection system leveraging computer vision techniques on video streams for automated emergency response and traffic management.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "OpenCV", "YOLO", "Computer Vision", "Real-time"],
    category: "AI/ML",
    github: "https://github.com/Nitishkumarmaury/accident-detection",
    demo: null,
    featured: false,
    date: "2023-09-20"
  },
  {
    id: 8,
    title: "Smart Meter IoT Project",
    description: "IoT-based smart metering solution for remote, real-time energy consumption monitoring and data analysis with cloud integration and mobile dashboard.",
    image: "/api/placeholder/600/400",
    tags: ["IoT", "Arduino", "AWS", "Python", "Real-time", "Energy"],
    category: "IoT",
    github: "https://github.com/Nitishkumarmaury/smart-meter",
    demo: null,
    featured: false,
    date: "2023-07-15"
  }
];

const categories = ["All", "Cloud Infrastructure", "AI/ML", "IoT", "Observability"];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 h-full">
        {/* Image */}
        <div className="aspect-w-16 aspect-h-10 bg-gray-800 relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
            <span className="text-gray-400">Project Image</span>
          </div>
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">{project.category}</span>
              <span className="text-sm text-gray-500">
                {new Date(project.date).toLocaleDateString()}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              <Link to={`/projects/${project.id}`}>
                {project.title}
              </Link>
            </h3>
            
            <p className="text-gray-400 mb-4 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-sm text-gray-400">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-white/10 hover:bg-white/20 text-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of my work spanning web development, AI applications, and creative experiments. 
              Each project represents a learning journey and technical challenge.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-gray-400">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>

          {/* Projects Grid */}
          {paginatedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {paginatedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
