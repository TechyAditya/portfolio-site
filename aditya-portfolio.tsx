import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, Code, Database, Wrench, GraduationCap, User, Briefcase, Home, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Simple router implementation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return React.Children.map(children, child => 
    React.cloneElement(child, { currentPath })
  );
};

const Route = ({ path, component: Component, currentPath }) => {
  return currentPath === path ? <Component /> : null;
};

const Link = ({ to, children, className = "" }) => {
  return (
    <a 
      href={to} 
      className={className}
      onClick={(e) => {
        window.location.hash = to;
      }}
    >
      {children}
    </a>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { path: '#home', label: 'Home', icon: Home },
    { path: '#about', label: 'About', icon: User },
    { path: '#projects', label: 'Projects', icon: Briefcase },
    { path: '#skills', label: 'Skills', icon: Code },
    { path: '#education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="#home" className="text-xl font-bold">
            Aditya Sethi
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Button
                key={path}
                variant="ghost"
                size="sm"
                asChild
              >
                <Link to={path} className="flex items-center space-x-1">
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Button
                  key={path}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link
                    to={path}
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Component - Fixed and Enhanced
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 min-h-[80vh]">
          <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aditya
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Full Stack Developer & Computer Science Engineer passionate about creating innovative solutions with modern technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="mailto:techyguyaditya@gmail.com" className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#projects" className="flex items-center space-x-2">
                  <Briefcase size={20} />
                  <span>View Projects</span>
                </Link>
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/adityasethi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/aditya-sethi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+919348680684">
                  <Phone size={24} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Code size={120} className="text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <Badge variant="secondary" className="px-4 py-2">
                  Available for work
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link to="#about">
              <ChevronDown className="animate-bounce" size={24} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know more about my journey and expertise</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Engineer graduate from KIIT University with a passion for full-stack development. 
                My journey in tech has led me to work with diverse technologies, from React and Node.js to machine learning 
                with Python and scikit-learn.
              </p>
              <p>
                I've successfully delivered multiple projects ranging from emotion analysis APIs to budget management 
                applications. My experience includes working with modern frameworks, databases, and cloud platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">8.41</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span className="text-muted-foreground">techyguyaditya@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span className="text-muted-foreground">+91 9348680684</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-primary" size={20} />
                <span className="text-muted-foreground">GitHub Profile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-primary" size={20} />
                <span className="text-muted-foreground">LinkedIn Profile</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Mo Suraksha",
      description: "Streamlit application with user-friendly interface using 16 components. Implemented SQLite Database for storing results. Qualified for hackathon in top 5 rank.",
      technologies: ["Streamlit", "SQLite", "Matplotlib", "Plotly", "Scikit-learn"],
      category: "Machine Learning",
      highlight: "Top 5 Hackathon"
    },
    {
      title: "Book Reviews API",
      description: "Created backend endpoints in Node.js using Express.js router handling 12 types of REST API routes. Implemented JWT authentication and all 4 CRUD operations.",
      technologies: ["Express.js", "Node.js", "JWT"],
      category: "Backend"
    },
    {
      title: "React Budget App",
      description: "Developed a React-based budget app with user-friendly interface that handles budget management system.",
      technologies: ["React.js"],
      category: "Frontend"
    },
    {
      title: "Emotion Analysis API",
      description: "Managed 3 API Routes and rendering using Flask. Used IBM's Emotion Analysis API to detect dominant emotions from text.",
      technologies: ["Flask", "IBM Watson"],
      category: "API Development"
    },
    {
      title: "E-Labs KIIT Graphics Design",
      description: "Designed numerous Figma graphics for E-Labs KIIT society, resulting in 400% increase in attendance for post-COVID classes.",
      technologies: ["Figma", "Photoshop"],
      category: "Design",
      highlight: "400% Growth"
    },
    {
      title: "IBM Portfolio Site",
      description: "Created a simple portfolio site on the IBM Skills Network platform using vanilla web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground">A showcase of my technical expertise and creativity</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                {project.highlight && (
                  <Badge variant="default" className="w-fit">
                    {project.highlight}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex items-center space-x-1">
                    <ExternalLink size={14} />
                    <span>View</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="flex items-center space-x-1">
                    <Award size={14} />
                    <span>Certificate</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Java", "Python", "SQL", "Bash", "HTML", "CSS", "JavaScript", "Rust"]
    },
    {
      title: "Libraries/Frameworks",
      icon: Wrench,
      skills: ["React.js", "Next.js", "Flask", "Django", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
      title: "Tools / Platforms",
      icon: Wrench,
      skills: ["AWS", "Firebase", "Node.js", "Bun", "Git", "Netlify", "Docker"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Prisma", "Firestore"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className="text-primary" size={24} />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Education Component
const Education = () => {
  const education = [
    {
      institution: "KIIT University",
      degree: "B. Tech Computer Science and Engineering",
      location: "Bhubaneswar",
      duration: "2020 - 2024",
      grade: "CGPA: 8.41"
    },
    {
      institution: "Lakshmipat Singhania Public School",
      degree: "CBSE",
      location: "Jaykaypur, Odisha",
      duration: "2018 - 2020",
      grade: "Percentage: 79.8%"
    },
    {
      institution: "St. Xavier's High School",
      degree: "CBSE",
      location: "Rayagada, Odisha",
      duration: "2016 - 2018",
      grade: "Percentage: 79.6%"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">My academic journey and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      <GraduationCap size={20} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                    <p className="text-lg text-primary mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Router>
        <Route path="#home" component={HomePage} />
        <Route path="#about" component={About} />
        <Route path="#projects" component={Projects} />
        <Route path="#skills" component={Skills} />
        <Route path="#education" component={Education} />
      </Router>
    </div>
  );
};

export default App;