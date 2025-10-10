import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseStudyModal } from "@/components/ui/case-study-modal";
import { 
  ExternalLink,
  ArrowRight,
  Palette,
  Code,
  TrendingUp,
  Users,
  Briefcase
} from "lucide-react";

const projects = [
  {
    title: "Virtual Assistance & Operations",
    category: "Virtual Assistance & Operations",
    icon: Users,
    description: "Complete task management, scheduling, and workflow optimization system for growing businesses.",
    results: [
      "80% reduction in manual administrative tasks",
      "Improved team productivity by 150%",
      "Streamlined client communications across all channels"
    ],
    technologies: ["Executive Assistance", "CRM Setup", "Workflow Automation", "Project Management"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Paid Advertising Campaigns",
    category: "Digital Marketing",
    icon: TrendingUp,
    description: "Targeted advertising campaigns across Facebook, Google, and LinkedIn that drive measurable business results.",
    results: [
      "500% ROI on ad spend",
      "Generated $2M in revenue within 6 months",
      "Built qualified audience of 50K+ prospects"
    ],
    technologies: ["Facebook Ads", "Google Ads", "LinkedIn Ads", "Analytics & Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Business Automation Systems",
    category: "Technology & AI",
    icon: Code,
    description: "System setup and automation solutions that save time and dramatically improve operational efficiency.",
    results: [
      "90% reduction in repetitive tasks",
      "Automated 70% of manual workflows",
      "Saved 40+ hours per week in operations time"
    ],
    technologies: ["Zapier", "Make.com", "API Integration", "Process Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "AI Consulting & Integration",
    category: "Technology & AI",
    icon: Code,
    description: "Smart AI solutions for digital productivity, including chatbots, AI assistants, and intelligent automation.",
    results: [
      "85% increase in customer response speed",
      "Automated 60% of customer support queries",
      "Enhanced decision-making with AI insights"
    ],
    technologies: ["AI/ML Integration", "Chatbot Development", "AI Workflow Automation", "Custom AI Solutions"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Website Development",
    category: "Technology & AI",
    icon: Code,
    description: "Responsive, high-performance websites for businesses and startups built with modern technologies.",
    results: [
      "Mobile-first responsive design",
      "50% faster page load times",
      "300% increase in lead conversions"
    ],
    technologies: ["React", "WordPress", "Shopify", "Custom Development", "SEO Optimization"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    link: "#"
  }
];

const categories = [
  "All Projects",
  "Virtual Assistance & Operations",
  "Digital Marketing",
  "Technology & AI"
];

export default function Portfolio({ onBookingClick }: { onBookingClick?: (service?: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewCaseStudy = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success Stories &
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth 
            through our comprehensive digital solutions and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                className="mb-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Results */}
                    <div>
                      <h4 className="font-medium text-sm mb-2 text-primary">Key Results</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                     {/* CTA */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group mt-4"
                      onClick={() => handleViewCaseStudy(project)}
                    >
                      View More Case Study
                      <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact in <span className="bg-gradient-hero bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships. Here's how we've helped our clients achieve success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "$100K+", label: "Client Revenue Generated" },
              { number: "100%", label: "Average ROI Increase" },
              { number: "98%", label: "Client Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and transform 
            your business through our proven digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onBookingClick?.()}>
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" onClick={() => onBookingClick?.()}>
              Book Now
            </Button>
          </div>
        </div>
      </section>

      <CaseStudyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}