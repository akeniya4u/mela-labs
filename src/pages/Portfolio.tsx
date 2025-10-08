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
    title: "E-commerce Platform Redesign",
    category: "Technology & AI",
    icon: Code,
    description: "Complete e-commerce platform overhaul with AI-powered recommendations and automated inventory management.",
    results: [
      "300% increase in conversion rate",
      "50% reduction in cart abandonment",
      "Automated inventory tracking"
    ],
    technologies: ["Shopify Plus", "AI/ML", "Custom APIs"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "SaaS Brand Identity & Marketing",
    category: "Creative & Media",
    icon: Palette,
    description: "Complete brand identity creation and multi-channel marketing campaign for a B2B SaaS startup.",
    results: [
      "Brand recognition increased 400%",
      "Generated 1000+ qualified leads",
      "Social engagement up 250%"
    ],
    technologies: ["Brand Strategy", "Social Media", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Digital Marketing Campaign",
    category: "Digital Marketing", 
    icon: TrendingUp,
    description: "Multi-platform digital marketing strategy for healthcare startup targeting millennial professionals.",
    results: [
      "500% ROI on ad spend",
      "Generated $2M in revenue",
      "Built audience of 50K+"
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Virtual Operations Setup",
    category: "Virtual Assistance",
    icon: Users,
    description: "Complete virtual operations infrastructure for a growing consultancy firm with global clients.",
    results: [
      "80% reduction in operational costs",
      "Improved client satisfaction 95%",
      "Streamlined workflows"
    ],
    technologies: ["CRM Setup", "Process Automation", "Project Management"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Business Strategy & Pitch Deck",
    category: "Business Solutions",
    icon: Briefcase,
    description: "Strategic business planning and investor pitch deck for Series A funding round.",
    results: [
      "Successfully raised $5M",
      "Secured 3 strategic partnerships",
      "Validated market strategy"
    ],
    technologies: ["Business Strategy", "Financial Modeling", "Market Research"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Mobile App UI/UX Design",
    category: "Creative & Media",
    icon: Palette,
    description: "User experience design for a fitness tracking mobile application with social features.",
    results: [
      "4.8★ app store rating",
      "40% increase in user retention",
      "Featured by Apple & Google"
    ],
    technologies: ["UI/UX Design", "User Research", "Prototyping"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "#"
  }
];

const categories = [
  "All Projects",
  "Technology & AI",
  "Creative & Media", 
  "Digital Marketing",
  "Virtual Assistance",
  "Business Solutions"
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