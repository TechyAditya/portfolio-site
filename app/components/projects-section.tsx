import { ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlight?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
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
    <section id="projects" className="min-h-screen pt-20">
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
    </section>
  );
}
