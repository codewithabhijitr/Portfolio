import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Linux', level: 95 },
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 90 },
        { name: 'Ansible', level: 85 },
        { name: 'CloudFormation', level: 80 },
        { name: 'Helm', level: 75 },
      ]
    },
    {
      title: 'CI/CD & Automation',
      skills: [
        { name: 'Jenkins', level: 90 },
        { name: 'GitLab CI', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'ArgoCD', level: 75 },
      ]
    },
    {
      title: 'Monitoring & Security',
      skills: [
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 80 },
        { name: 'ELK Stack', level: 75 },
        { name: 'Security Scanning', level: 80 },
      ]
    }
  ];

  const tools = [
    'AWS CLI', 'kubectl', 'Terraform', 'Ansible', 'Jenkins', 'Docker',
    'Git', 'Prometheus', 'Grafana', 'Vault', 'Consul', 'Nginx'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className={`glow-card animate-slide-in-up animate-delay-${categoryIndex * 100}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center animate-slide-in-up animate-delay-400">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span 
                key={tool}
                className={`px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary/10 hover:border-primary transition-colors animate-fade-in animate-delay-${index * 50}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;