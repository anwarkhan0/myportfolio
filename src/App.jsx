'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code2, Database, Cloud, Layers, Sparkles, ArrowRight, Menu, X, Server, Shield } from 'lucide-react';
import img from './assets/profile.png';
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'Node.js', level: 90, icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'Express', level: 88, icon: <Code2 className="w-5 h-5" />, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, icon: <Database className="w-5 h-5" />, category: 'Backend' },
    { name: 'MongoDB', level: 82, icon: <Database className="w-5 h-5" />, category: 'Backend' },
    { name: 'React', level: 87, icon: <Layers className="w-5 h-5" />, category: 'Frontend' },
    { name: 'Next.js', level: 83, icon: <Layers className="w-5 h-5" />, category: 'Frontend' },
    { name: 'REST APIs', level: 92, icon: <Cloud className="w-5 h-5" />, category: 'Backend' },
    { name: 'JWT Auth', level: 88, icon: <Shield className="w-5 h-5" />, category: 'Backend' },
    { name: 'Docker', level: 75, icon: <Cloud className="w-5 h-5" />, category: 'DevOps' },
  ];

const projects = [
  {
    title: 'Scalable Multi-Tenant SaaS Backend',
    description: 'Designed and built a multi-tenant backend system supporting isolated customer environments with role-based access control, rate limiting, and tenant-aware database architecture. Implemented caching and background jobs for high performance under load.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'Multi-tenant architecture (tenant isolation)',
      'Redis caching + rate limiting',
      'Background jobs with queues (BullMQ)'
    ]
  },
  {
    title: 'Production-Grade Authentication & Authorization System',
    description: 'Engineered a secure authentication system with JWT access/refresh tokens, rotating refresh tokens, RBAC, and account security features. Designed for production with audit logging and attack protection mechanisms.',
    tech: ['Node.js', 'MongoDB', 'JWT', 'Redis'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'Refresh token rotation & session management',
      'RBAC & permission system',
      'Brute-force protection & audit logs'
    ]
  },
  {
    title: 'High-Performance API with Caching & Load Optimization',
    description: 'Built a high-performance REST API optimized for heavy traffic using Redis caching, query optimization, and pagination strategies. Reduced response time and database load significantly.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'Express'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'Redis caching strategies',
      'Database query optimization',
      'Pagination & rate limiting'
    ]
  },
  {
    title: 'Event-Driven E-Commerce Backend (Microservices)',
    description: 'Designed an event-driven e-commerce backend using microservices architecture. Implemented order processing, payment workflows, and inventory updates using message queues.',
    tech: ['Node.js', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'Event-driven architecture',
      'Message queues (RabbitMQ)',
      'Service-to-service communication'
    ]
  },
  {
    title: 'Real-Time Notification System (WebSockets + Queue)',
    description: 'Developed a scalable real-time notification system using WebSockets and message queues. Supports live updates, user presence, and background job processing.',
    tech: ['Node.js', 'Socket.io', 'Redis', 'BullMQ'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'WebSocket scalability patterns',
      'Queue-based async processing',
      'User presence tracking'
    ]
  },
  {
    title: 'Cloud-Deployed Backend (AWS Production Setup)',
    description: 'Deployed a production-ready backend on AWS with CI/CD pipeline, Docker containers, Nginx reverse proxy, and HTTPS setup. Implemented logging, monitoring, and environment-based configuration.',
    tech: ['AWS', 'Docker', 'Nginx', 'Node.js', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    github: 'https://github.com/syedanwar',
    demo: '#',
    highlights: [
      'AWS deployment (EC2, S3)',
      'CI/CD pipeline setup',
      'Nginx + HTTPS configuration'
    ]
  }
];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-white/95 backdrop-blur-lg shadow-lg') : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            &lt;Syed Anwar /&gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item
                    ? 'text-purple-500'
                    : darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-6 py-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === item ? 'text-purple-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} border ${darkMode ? 'border-purple-500/30' : 'border-purple-200'}`}>
              <Sparkles className="inline w-4 h-4 mr-2" />
              Available for new opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Syed Anwar
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Software Engineer | Backend & Full-Stack Developer
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I build scalable web applications with secure APIs, clean architecture, and production-ready deployments. I focus on backend systems, performance, and solving real business problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 rounded-full font-semibold border-2 transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10' 
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-3xl overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/30">
                <img 
                  src={img} 
                  alt="Syed Anwar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full transform scale-110"></div>
            </div>
            
            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a backend-focused software engineer with a passion for building robust, scalable systems. With expertise in Node.js, databases, and API design, I create solutions that are both efficient and maintainable.
              </p>
              
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My approach combines clean code principles with practical problem-solving. Whether it's designing a secure authentication system or optimizing database queries, I focus on delivering production-ready solutions that scale.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-500">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-1">Backend</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Node.js, Express, REST APIs</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-1">Database</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>PostgreSQL, MongoDB</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-1">Frontend</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>React, Next.js</p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <p className="font-semibold mb-1">DevOps</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Docker, Git, Vercel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gray-800 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30' 
                    : 'bg-white shadow-lg hover:shadow-purple-200'
                }`}
              >
              
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>KEY FEATURES</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-900/50 hover:to-blue-900/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30' 
                    : 'bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-blue-50 shadow-lg hover:shadow-purple-200'
                } border ${darkMode ? 'border-gray-700 hover:border-purple-500/50' : 'border-gray-200 hover:border-purple-300'}`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-purple-500/20 group-hover:bg-purple-500/30' 
                      : 'bg-purple-100 group-hover:bg-purple-200'
                  }`}>
                    <div className="text-purple-500 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-center font-bold text-lg mb-2 group-hover:text-purple-500 transition-colors">
                  {skill.name}
                </h3>
                
                <p className={`text-center text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {skill.category}
                </p>
                
                <div className="flex justify-center">
                  <div className="relative w-20 h-20">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className={darkMode ? 'text-gray-700' : 'text-gray-200'}
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-500">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Looking for a backend developer who can build scalable, secure systems? Let's connect and discuss how I can help bring your project to life.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:syedanwar.dev@email.com"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Mail className="w-6 h-6 text-purple-500" />
                  <span>syedanwar.dev@email.com</span>
                </a>
                
                <a
                  href="https://github.com/syedanwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Github className="w-6 h-6 text-purple-500" />
                  <span>github.com/syedanwar</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/syedanwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin className="w-6 h-6 text-purple-500" />
                  <span>linkedin.com/in/syedanwar</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-500'
                } border-2 outline-none transition-colors`}
              />
              
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-500'
                } border-2 outline-none transition-colors`}
              />
              
              <textarea
                placeholder="Your Message"
                rows="5"
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-purple-500' 
                    : 'bg-white border-gray-300 focus:border-purple-500'
                } border-2 outline-none transition-colors`}
              ></textarea>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo - integrate with your preferred email service)');
                }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 Syed Anwar. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}