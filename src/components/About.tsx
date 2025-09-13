import React from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces with attention to detail'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Performance',
      description: 'Building fast, optimized applications that provide exceptional user experience'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex ideas clearly'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-slide-in-up">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. 
              My journey in tech started 5 years ago when I discovered the perfect blend of creativity and logic that programming offers.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms. 
              I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real problems.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community through blogs and talks.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React & Next.js
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={`glow-card animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;