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
    title: "Automated Task Management System",
    category: "Virtual Assistance & Operations",
    icon: Users,
    description: "Built a comprehensive task automation and workflow optimization system for a consultancy firm managing 50+ clients.",
    results: [
      "80% reduction in manual tasks",
      "Improved team productivity by 150%",
      "Streamlined client communications"
    ],
    technologies: ["CRM Setup", "Process Automation", "Project Management Tools"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Brand Identity & Video Campaign",
    category: "Creative & Media",
    icon: Palette,
    description: "Complete brand redesign with promotional video series and social media content for a tech startup.",
    results: [
      "Brand recognition increased 400%",
      "Videos reached 500K+ views",
      "Social engagement up 250%"
    ],
    technologies: ["Brand Design", "Video Editing", "Content Creation"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Multi-Channel Ad Campaign",
    category: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven advertising campaign with analytics dashboard and audience targeting for e-commerce brand.",
    results: [
      "500% ROI on ad spend",
      "Generated $2M in revenue",
      "Built audience of 50K+"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Analytics Dashboard"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "AI-Powered Chatbot & Web Automation",
    category: "Technology & AI",
    icon: Code,
    description: "Custom chatbot with AI-assisted workflows and web automation tools for customer service optimization.",
    results: [
      "90% reduction in response time",
      "Automated 70% of support queries",
      "Customer satisfaction up 85%"
    ],
    technologies: ["AI/ML", "Chatbot Development", "Web Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Client Dashboard & Reporting System",
    category: "Business Solutions",
    icon: Briefcase,
    description: "Business intelligence dashboard with automated reporting and process optimization tools for data-driven decisions.",
    results: [
      "Real-time insights enabled",
      "Report generation time cut by 75%",
      "Improved decision-making speed"
    ],
    technologies: ["Business Intelligence", "Dashboard Design", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    link: "#"
  },
  {
    title: "Social Media Content Strategy",
    category: "Creative & Media",
    icon: Palette,
    description: "Comprehensive content creation and design system for consistent brand presence across all platforms.",
    results: [
      "Content output increased 300%",
      "Follower growth of 15K in 3 months",
      "Engagement rate up 180%"
    ],
    technologies: ["Graphic Design", "Content Strategy", "Social Media Management"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    link: "#"
  }
];

const categories = [
  "All Projects",
  "Virtual Assistance & Operations",
  "Creative & Media",
  "Digital Marketing",
  "Technology & AI",
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