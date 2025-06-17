'use client';

import { useState, useEffect } from 'react';
import { Code2, Sparkles, Award, Clock, Users, Coffee, ArrowRight, Download, Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with attention to detail"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience in agile development"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Project Management",
      description: "Efficient time management and project delivery"
    }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovation Hub",
      period: "2022 - Present",
      description: "Leading frontend development projects using React and Next.js, implementing modern design systems and optimizing performance for large-scale applications.",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Agency",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces with exceptional user experiences.",
      technologies: ["React.js", "JavaScript", "CSS3", "SASS"]
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Studio",
      period: "2019 - 2020",
      description: "Built foundational web development skills while working on client projects, focusing on modern JavaScript and responsive web design principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "50+ Projects Completed",
      description: "Successfully delivered diverse web applications across multiple industries and scales."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "25+ Happy Clients",
      description: "Built lasting relationships through exceptional service and high-quality deliverables."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "5+ Years Experience",
      description: "Continuous growth and expertise development in modern frontend technologies."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "1000+ Cups of Coffee",
      description: "Fueling creativity and productivity through countless late-night coding sessions."
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
              <a href="/about" className="text-white font-medium">About</a>
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
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                  About Me
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Passionate About{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Creating Excellence
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm Saeed Nabih, a dedicated Frontend Developer based in Cairo, Egypt, with over 5 years
                  of experience crafting exceptional digital experiences. My passion lies in transforming
                  complex ideas into intuitive, beautiful, and high-performing web applications.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Specializing in React.js and Next.js, I combine technical expertise with creative problem-solving
                  to deliver solutions that not only meet business objectives but exceed user expectations.
                  I believe that great frontend development is where art meets science.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <a href="https://drive.google.com/file/d/1DOJP50HUITBxohLmwMfLqjtTAqGzSK53/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SN</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Saeed Nabih</h3>
                    <p className="text-gray-300">Frontend Developer</p>
                    <p className="text-gray-400">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My comprehensive skill set spans modern frontend technologies, with deep expertise in
              React ecosystem and contemporary development practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="text-blue-400 mb-4">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A progressive career path focused on mastering modern frontend development
              and delivering exceptional user experiences.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-400 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Key{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that reflect my commitment to excellence and continuous growth in frontend development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 backdrop-blur-sm p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Together?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise in modern frontend development can help bring your vision to life
              and create exceptional digital experiences for your users.
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
              <a href="/about" className="text-white">About</a>
              <a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
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