import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';

interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  grade: string;
}

export default function EducationSection() {
  const education: Education[] = [
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
    <section id="education" className="min-h-screen pt-20">
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
    </section>
  );
}
