'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Zap, Github, ExternalLink, Mail, MessageCircle, Calendar, Users, Award, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Harnessing Modern Technologies for Exceptional User Experiences",
      description: "Crafting pixel-perfect, responsive applications with cutting-edge technologies for seamless user interactions and lasting digital impact."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Agile Methodologies for Efficient Development and Seamless Collaboration",
      description: "Implementing best practices through iterative development cycles, ensuring rapid delivery and exceptional stakeholder collaboration."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Best Practices in Frontend Development for Optimal Performance and Accessibility",
      description: "Following industry standards to deliver high-performing, accessible applications that reach every user with excellence."
    }
  ];

  const projects = [
    {
      title: "AI-Powered Writing Assistant Web App",
      description: "Revolutionary writing platform built with React and Groq Cloud API, empowering users to create compelling content with AI assistance.",
      image: "/imgs/1.jpg",
      tags: ["React.js", "Groq API", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-Commerce Platform for Seamless Shopping Experience",
      description: "Full-featured e-commerce solution with advanced filtering, secure payments, and intuitive user interface for optimal conversion rates.",
      image: "/imgs/2.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Interactive Web Application for Real-Time Data Visualization",
      description: "Dynamic dashboard providing real-time analytics with interactive charts and responsive design for data-driven decision making.",
      image: "/imgs/3.jpg",
      tags: ["React.js", "D3.js", "WebSocket", "Node.js"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Mastering CSS Grid Layouts",
      description: "Comprehensive guide to creating responsive and dynamic layouts using modern CSS Grid techniques.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "/imgs/4.jpg"
    },
    {
      title: "JavaScript Best Practices for Developers",
      description: "Essential coding standards and optimization techniques for writing maintainable JavaScript applications.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      image: "/imgs/5.jpg"
    },
    {
      title: "Optimizing Web Performance Techniques",
      description: "Advanced strategies for improving website speed, Core Web Vitals, and overall user experience.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "/imgs/6.jpg"
    }
  ];

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
              <a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                  Frontend Developer • Cairo, Egypt
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Transforming Ideas into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Stunning Web Experiences
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  As a passionate Frontend Developer specializing in React and Next.js, I create
                  exceptional digital experiences through clean, responsive code that brings
                  your vision to life with precision and style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <a href="/contact">Get Started</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <a href="/about">Learn More</a>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-700">
                  <a href="https://drive.google.com/file/d/1DOJP50HUITBxohLmwMfLqjtTAqGzSK53/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src="/imgs/1.jpg" alt="Digital Excellence" className="object-cover w-full h-full rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforming Ideas into Interactive Experiences with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Cutting-Edge Frontend Development
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success & Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transforming User Experience with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Innovative Web Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Driven by innovative problem-solving approach, I leverage a meticulous and systematic
                platform that prioritizes user experience through modern, responsive interfaces that exceed
                client expectations for lasting business impact and growth results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white flex items-center">
                    <Award className="h-8 w-8 text-blue-400 mr-2" />
                    Success
                  </h3>
                  <p className="text-gray-300">
                    Delivering exceptional user experiences and measurable business results through innovative web solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white flex items-center">
                    <TrendingUp className="h-8 w-8 text-purple-400 mr-2" />
                    Impact
                  </h3>
                  <p className="text-gray-300">
                    Transforming digital presence with high-performance applications that drive engagement and growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <img src="/imgs/Innovation in Action.jpg" alt="Innovation in Action" className="object-cover w-full h-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-400/50 text-purple-400 mb-4">
              Innovation
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore My Latest{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Frontend Development Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I specialize in creating, developing, and implementing web applications. Each project showcases my
              commitment to quality and user experience.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let's Collaborate on Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Project
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to bring your ideas to life? Let's connect and discuss how we can create something
                extraordinary together. I'm always excited to tackle new challenges and deliver exceptional results.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <img src="/imgs/4.jpg" alt="Let's Connect" className="object-cover w-full h-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Insights on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Frontend Development
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest thoughts on frontend development, best practices, and industry trends.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <div className="aspect-video flex items-center justify-center overflow-hidden">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home Page</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</a>
              <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog Post</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Saeed Nabih. All rights reserved. • <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> • <a href="#" className="hover:text-white transition-colors">Terms of Service</a> • <a href="#" className="hover:text-white transition-colors">Cookie Policy</a> • <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
