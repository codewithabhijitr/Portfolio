import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket', 'Shadcn/ui'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform that uses machine learning to provide insights and predictions for business data.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate listing platform with advanced search filters, virtual tours, and integrated mapping functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Mapbox', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool that allows users to schedule posts, analyze engagement, and track performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'GraphQL', 'Node.js', 'Redis', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with video streaming, progress tracking, quizzes, and certification features for online learning.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Supabase', 'Stripe', 'AWS S3', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`glow-card group overflow-hidden animate-slide-in-up animate-delay-${index * 100}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`glow-card group cursor-pointer animate-slide-in-up animate-delay-${index * 100}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <button className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      <ExternalLink size={14} />
                      Live
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      <Github size={14} />
                      Code
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-in-up animate-delay-400">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
