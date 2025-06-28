import { Mail, Phone, Github, Linkedin, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';

export default function AboutSection() {
  const stats = [
    { value: '8.41', label: 'CGPA' },
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Technologies' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@adityasethi.dev', href: 'mailto:contact@adityasethi.dev' },
    // { icon: Phone, text: '+91 9348680684', href: 'tel:+919348680684' },
    { icon: Github, text: 'GitHub Profile', href: 'https://github.com/TechyAditya' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/techyguyaditya' },
  ];

  return (
    <section id="about" className="min-h-screen pt-20">
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
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
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
              {contactInfo.map(({ icon: Icon, text, href }, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon className="text-primary" size={20} />
                  <a 
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {text}
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
