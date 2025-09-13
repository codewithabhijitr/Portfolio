import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using modern technologies. Mentoring junior developers and collaborating with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Led a team of 4 developers in building a SaaS platform that increased revenue by 40%',
        'Implemented microservices architecture reducing system downtime by 60%',
        'Mentored 3 junior developers and established coding standards for the team'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to data visualization dashboards. Worked closely with designers and product managers.',
      achievements: [
        'Built 8+ production applications serving 10,000+ users',
        'Improved application performance by 50% through optimization techniques',
        'Introduced automated testing reducing bugs in production by 70%'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis', 'GCP']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on creating responsive and interactive user interfaces. Collaborated with UX designers to implement pixel-perfect designs and ensure great user experience.',
      achievements: [
        'Redesigned the main product interface increasing user engagement by 35%',
        'Implemented responsive design supporting all major devices and browsers',
        'Reduced page load times by 40% through code splitting and optimization'
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Jest', 'Figma']
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDev Agency',
      location: 'Boston, MA',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey building websites for small to medium businesses. Learned modern web development practices and worked on diverse projects.',
      achievements: [
        'Delivered 15+ websites for various clients with 100% client satisfaction',
        'Learned and implemented modern JavaScript frameworks and tools',
        'Contributed to agency\'s internal design system and component library'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress', 'PHP']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2014 - 2018',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Meta Frontend Developer Certificate',
    'MongoDB Certified Developer'
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title + exp.company} 
                className={`glow-card animate-slide-in-up animate-delay-${index * 100}`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          <span className="font-medium text-primary">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-slide-in-up animate-delay-400">
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            {education.map((edu, index) => (
              <Card key={edu.degree} className="glow-card">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span className="font-medium text-primary">{edu.school}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-slide-in-up animate-delay-500">
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-lg">Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;