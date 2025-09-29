import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Cloud Platforms", items: ["AWS (EKS, Lambda, EC2, S3, RDS)", "GCP (GKE)", "Azure DevOps"] },
    { category: "IaC & Config", items: ["Terraform", "Ansible", "Packer"] },
    { category: "CI/CD & Automation", items: ["Jenkins", "GitHub Actions", "Bash", "Python (Boto3)"] },
    { category: "Containerization", items: ["Docker", "Kubernetes", "Helm"] },
    { category: "Observability & SRE", items: ["Prometheus", "Grafana", "Splunk"] },
    { category: "Languages", items: ["Python", "Bash", "YAML", "HCL"] }
  ];

  const experience = [
    {
      title: "Cloud Engineering Intern",
      company: "CloudDevOpsHub",
      period: "Jun 2025 - Present · 4 mos",
      description: "CloudDevOps is a comprehensive educational platform dedicated to closing the skills gap in cloud computing and DevOps. Working with cutting-edge technologies including AWS, Azure, Docker, Kubernetes, Terraform, Jenkins, and AIOps integration. Hands-on experience with CI/CD pipelines, infrastructure automation, and cloud security implementations."
    },
    {
      title: "Lead Cloud & AI Engineer",
      company: "Smart India Hackathon Winner",
      period: "Dec 2023 - Present",
      description: "Engineered a real-time MLOps platform on AWS, achieving 40% reduction in cloud costs through optimized EKS configuration. Implemented GitOps workflow with Jenkins, accelerating feature delivery by 10x."
    },
    {
      title: "Cloud Infrastructure Architect",
      company: "New India Vibrant Hackathon Winner",
      period: "Aug 2023",
      description: "Deployed highly available IoT data ingestion platform on AWS using Terraform, handling 10,000+ concurrent device connections with 99.95% uptime and single-digit millisecond latency."
    },
    {
      title: "Cloud Platform Engineer",
      company: "Independent Projects",
      period: "2022 - Present",
      description: "Built production-ready infrastructure using Terraform, Kubernetes, and CI/CD pipelines. Specialized in AWS services, observability with Prometheus/Grafana, and Python automation."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chandigarh University, Punjab",
      period: "2022 - 2026",
      description: "Specialization in Cloud Computing. Co-inventor of patent application 'Automated Plants Water System For Road Dividers' (Application No: 202311064721)."
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
                    Hello! I'm Nitish Kumar, an award-winning Cloud Platform Engineer with ₹3 Lakhs in national competition funding for architecting high-availability systems. My journey in cloud computing began during my engineering studies at Chandigarh University, where I developed a passion for building scalable, resilient infrastructure.
                  </p>
                  <p>
                    I specialize in Site Reliability Engineering (SRE) principles, building immutable infrastructure with Terraform, and orchestrating containerized microservices on Kubernetes. My expertise spans across AWS, GCP, and Azure, with proven ability to drive performance gains and cost optimization through robust CI/CD practices.
                  </p>
                  <p>
                    When I'm not architecting cloud solutions, you can find me contributing to open-source projects, participating in hackathons (where I've won ₹3 Lakhs in prize money), or exploring the latest in MLOps and automation. I believe in continuous learning and sharing knowledge with the developer community.
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
                    <span>Punjab, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>4th Year Student (2022-2026)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span>Cloud Computing Student</span>
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
