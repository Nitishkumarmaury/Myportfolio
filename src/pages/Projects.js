import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock project data - replace with API call
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full Stack",
    github: "https://github.com/example/ecommerce",
    demo: "https://example-ecommerce.com",
    featured: true,
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration using OpenAI API. Includes modern UI, message history, and smart responses.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Socket.io", "OpenAI", "Tailwind"],
    category: "AI/ML",
    github: "https://github.com/example/ai-chat",
    demo: "https://example-chat.com",
    featured: true,
    date: "2024-02-20"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website with shooting stars background, smooth animations, and responsive design.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Framer Motion", "Tailwind", "React Router"],
    category: "Frontend",
    github: "https://github.com/example/portfolio",
    demo: "https://example-portfolio.com",
    featured: true,
    date: "2024-03-10"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Redux", "Firebase", "DnD Kit"],
    category: "Full Stack",
    github: "https://github.com/example/task-app",
    demo: "https://example-tasks.com",
    featured: false,
    date: "2023-12-05"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with charts, forecasts, and location-based weather data.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Chart.js", "Weather API", "Geolocation"],
    category: "Frontend",
    github: "https://github.com/example/weather",
    demo: "https://example-weather.com",
    featured: false,
    date: "2023-11-20"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure voting system built on Ethereum blockchain with smart contracts and web3 integration.",
    image: "/api/placeholder/600/400",
    tags: ["Solidity", "Web3.js", "Ethereum", "React"],
    category: "Blockchain",
    github: "https://github.com/example/voting",
    demo: "https://example-voting.com",
    featured: false,
    date: "2023-10-15"
  }
];

const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Blockchain"];

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
