import { useState } from 'react';
import { Home, User, Briefcase, Code, GraduationCap, Menu, X, Building2 } from 'lucide-react';
import { Button } from '~/components/ui/button';

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Building2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onScrollToSection('home')} 
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            SDE Portfolio
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(id)}
                className="flex items-center space-x-1"
              >
                <Icon size={16} />
                <span>{label}</span>
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
              {navItems.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => handleNavClick(id)}
                >
                  <Icon size={16} />
                  <span className="ml-2">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
