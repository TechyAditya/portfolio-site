import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "PwC",
      position: "Tech Consultancy (Specialist)",
      duration: "October 2024 - Present",
      responsibilities: [
        "Developed a generative AI chatbot integrated with SLCM portal",
        "Implemented comprehensive feature set including finance and academic integrations",
        "Built university document repository search functionality",
        "Worked on Koha library system installation and configuration"
      ],
      technologies: ["Generative AI", "Chatbot Development", "SLCM Integration", "Document Search", "Koha"]
    },
    {
      company: "PwC",
      position: "Tech Consultancy (Intern)",
      duration: "January 2024 - October 2024",
      responsibilities: [
        "Leading development and maintenance of Koha library management system",
        "Implementing CI/CD pipelines on Azure DevOps for seamless deployments",
        "Developing custom theming and UI enhancements for better user experience",
        "Building integration middleware using Node.js to connect with SLCM portal"
      ],
      technologies: ["Koha", "Azure DevOps", "CI/CD", "Node.js", "Middleware Development"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen pt-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey and achievements</p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-sm">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-base mb-2">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
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
