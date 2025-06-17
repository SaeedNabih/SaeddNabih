'use client';
import { useState, useEffect } from 'react';
import { Code2, ExternalLink, Github, Calendar, Clock, ArrowRight, Filter, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "AI-Powered Writing Assistant",
      description: "A revolutionary writing platform built with React and Groq Cloud API, empowering users to create compelling content with AI assistance.",
      image: "/api/placeholder/400/250",
      tags: ["React.js", "Groq API", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with advanced filtering, secure payments, and intuitive user interface for optimal conversion rates.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Real-Time Data Visualization",
      description: "Dynamic dashboard providing real-time analytics with interactive charts and responsive design for data-driven decision making.",
      image: "/api/placeholder/400/250",
      tags: ["React.js", "D3.js", "WebSocket", "Node.js"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = ['All', 'Web Application', 'E-Commerce', 'Dashboard', 'Productivity', 'Template', 'Social Media'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === 'All' || project.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Saeed</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/projects" className="text-white font-medium">Projects</a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="outline" className="border-blue-400/50 text-blue-400">
              Portfolio Showcase
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative web applications, each crafted with precision, 
              modern technologies, and a focus on exceptional user experience. From AI-powered tools 
              to comprehensive e-commerce solutions, discover how I bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <Code2 className="h-12 w-12 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-white/10 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 backdrop-blur-sm p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Impressed by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                What You See?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              These projects represent just a glimpse of what's possible. Let's collaborate to create 
              something extraordinary that exceeds your expectations and delivers exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Saeed</span>
            </div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="/projects" className="text-white">Projects</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Saeed Nabih. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}