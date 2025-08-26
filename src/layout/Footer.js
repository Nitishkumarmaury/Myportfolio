import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Nitishkumarmaury', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nitish-kumar-maury', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:nitish@example.com', label: 'Email' },
    { icon: FaTwitter, href: 'https://twitter.com/nitish', label: 'Twitter' },
  ];

  const sitemapLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
              Nitish Kumar
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative solutions and sharing knowledge through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {sitemapLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                📧 nitish@example.com
              </p>
              <p className="text-gray-300 text-sm">
                📱 +91 XXXXX XXXXX
              </p>
              <p className="text-gray-300 text-sm">
                📍 India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nitish Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
