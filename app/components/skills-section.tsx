import { Code, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
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
    <section id="skills" className="min-h-screen pt-20 bg-muted/30">
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
    </section>
  );
}
