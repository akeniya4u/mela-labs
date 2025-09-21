import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { X, ExternalLink, Calendar, TrendingUp, Users } from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    results: string[];
    technologies: string[];
    image: string;
  } | null;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <Badge variant="secondary" className="mb-2">
              {project.category}
            </Badge>
            <CardTitle className="text-2xl">{project.title}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Challenge
              </h3>
              <p className="text-muted-foreground text-sm">
                The client needed a comprehensive digital transformation to compete in the modern marketplace. 
                They required better user experience, improved conversion rates, and streamlined operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Solution
              </h3>
              <p className="text-muted-foreground text-sm">
                We implemented a multi-phase approach focusing on user-centered design, performance optimization, 
                and data-driven decision making to achieve remarkable results.
              </p>
            </div>
          </div>

          {/* Key Results */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Results</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-center p-3 bg-accent/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  <span className="text-sm font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Project Timeline
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span>Discovery & Planning</span>
                <span className="text-muted-foreground">Week 1-2</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span>Design & Development</span>
                <span className="text-muted-foreground">Week 3-8</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span>Testing & Launch</span>
                <span className="text-muted-foreground">Week 9-10</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button className="flex-1 group">
              Start Your Project
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="flex-1">
              View More Case Studies
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}