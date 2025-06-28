import { Mail, Briefcase, Github, Linkedin, Phone, Code, ChevronDown } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Badge } from '~/components/ui/badge';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50">
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
              <h2 className="text-2xl font-medium text-muted-foreground">
                Sethi Jyotir Aditya
              </h2>
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
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onScrollToSection('projects')}
                className="flex items-center space-x-2"
              >
                <Briefcase size={20} />
                <span>View Projects</span>
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/adityasethi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/aditya-sethi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+919348680684" aria-label="Phone Number">
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
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onScrollToSection('about')}
            aria-label="Scroll to About section"
          >
            <ChevronDown className="animate-bounce" size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
