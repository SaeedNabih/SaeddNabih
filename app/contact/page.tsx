'use client';

import { useState, useEffect } from 'react';
import { Code2, Mail, MapPin, Phone, Clock, Send, CheckCircle, MessageCircle, Calendar, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';


export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Get in touch via email",
      value: "saidtolan111@gmail.com"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Social Media",
      description: "Connect on social platforms",
      value: "@saeeddev"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      description: "Based in Cairo, Egypt",
      value: "Cairo, Egypt"
    }
  ];

  const projectTypes = [
    "Web Application Development",
    "E-Commerce Solution",
    "Dashboard & Analytics",
    "Portfolio Website",
    "Landing Page",
    "API Integration",
    "Performance Optimization",
    "Consulting & Code Review"
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
              <a href="/contact" className="text-white font-medium">Contact</a>
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Create Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into exceptional digital experiences? I'm here to help you
              build innovative web solutions that exceed expectations and drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Start Your Project</CardTitle>
                  <CardDescription className="text-gray-300">
                    Tell me about your project and let's discuss how I can help bring your vision to life.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white">
                            Company/Organization
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                            placeholder="Your company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectType" className="text-white">
                            Project Type
                          </Label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                          >
                            <option value="" className="bg-gray-800">Select project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type} className="bg-gray-800">
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="Brief description of your project"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none"
                          placeholder="Tell me more about your project, timeline, budget, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-400" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-950 text-sm leading-relaxed">
                    Need immediate assistance or have a quick question? Reach out directly through any of these channels.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-gray-600 text-stone-950 hover:bg-gray-800">
                      <Mail className="mr-2 h-4 w-4" />
                      saidtolan111@gmail.com
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-stone-950">Connect With Me</CardTitle>
                  <CardDescription className="text-stone-950">
                    Follow my work and connect on social platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="https://github.com/SaeedNabih/SaeddNabih" target="_blank">
                    <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-400" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Status</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-950">Response Time</span>
                      <span className="text-white">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Timezone</span>
                      <span className="text-white">Cairo (UTC+2)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="/contact" className="text-white">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700">
                <Mail className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700">
                <Linkedin className="h-4 w-4" />
              </Button>
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