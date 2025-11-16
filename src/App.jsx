import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code2, Database, Cloud, Layers, Sparkles, ArrowRight, Menu, X } from 'lucide-react';

import anwarImage from './assets/profile.png';
import './index.css';
const Portfolio = () => {
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
    { name: 'React', level: 90, icon: <Layers className="w-5 h-5" /> },
    { name: 'Node.js', level: 85, icon: <Code2 className="w-5 h-5" /> },
    { name: 'TypeScript', level: 88, icon: <Code2 className="w-5 h-5" /> },
    { name: 'AWS', level: 75, icon: <Cloud className="w-5 h-5" /> },
    { name: 'PostgreSQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Docker', level: 78, icon: <Layers className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Task Manager',
      description: 'Smart productivity app with AI-powered task prioritization and natural language processing.',
      tech: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live data visualization platform with WebSocket streaming and interactive charts.',
      tech: ['React', 'D3.js', 'Socket.io', 'Express'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API with authentication, rate limiting, and comprehensive documentation.',
      tech: ['Node.js', 'Express', 'JWT', 'Redis'],
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'DevOps Pipeline Tool',
      description: 'CI/CD automation tool with Docker integration and deployment monitoring.',
      tech: ['Python', 'Docker', 'AWS', 'GitHub Actions'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracker with workout plans and progress analytics.',
      tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop',
      github: '#',
      demo: '#'
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
            
            {/* Mobile Menu Button */}
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
            Full Stack Web Developer
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafting elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies and clean architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
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
                  src={anwarImage} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full transform scale-110"></div>
            </div>
            
            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Hey there! I'm a passionate full-stack developer with 5+ years of experience building web applications that users love. I thrive on turning complex problems into elegant, scalable solutions.
              </p>
              
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you'll find me contributing to open source, writing technical blog posts, or exploring the latest frameworks and tools in the ever-evolving world of web development.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-500">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'TypeScript', 'Next.js', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white'
                      } transition-all cursor-pointer`}
                    >
                      {tech}
                    </span>
                  ))}
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
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
                      className={`flex items-center gap-2 ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-500">{skill.icon}</div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-purple-500 font-semibold">{skill.level}%</span>
                </div>
                <div className={`h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
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
                Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and innovative ideas. Drop me a message!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:ianwarsyed@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Mail className="w-6 h-6 text-purple-500" />
                  <span>ianwarsyed@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/anwarkhan0"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Github className="w-6 h-6 text-purple-500" />
                  <span>github.com/anwarkhan0</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin className="w-6 h-6 text-purple-500" />
                  <span>linkedin.com/in/SyedAnwar000</span>
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
                  alert('Message sent! (This is a demo)');
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
            © 2025 Syed Anwar. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;