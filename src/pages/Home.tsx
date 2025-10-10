import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { BookingForm } from "@/components/ui/booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CaseStudyModal } from "@/components/ui/case-study-modal";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award, Globe, Zap, Target, Heart, Lightbulb, Palette, Code, Briefcase, ExternalLink, Mail, Phone, MessageCircle, MapPin, Clock, Send, Instagram, Linkedin, Facebook, Calendar } from "lucide-react";
const services = [{
  icon: Users,
  title: "Virtual Assistance & Operations",
  description: "Streamline your business operations with our comprehensive virtual assistance services.",
  features: ["Executive & Administrative Assistance", "Project Management & Coordination", "CRM Setup & Management", "Data Entry & Processing", "Customer Support Services", "Workflow Automation"]
}, {
  icon: Palette,
  title: "Creative & Media",
  description: "Bring your brand to life with stunning visuals and compelling creative content.",
  features: ["Brand Identity & Logo Design", "Social Media Graphics & Templates", "Print & Digital Marketing Materials", "Video Editing & Motion Graphics", "UI/UX Design for Web & Mobile", "Photography & Image Editing"]
}, {
  icon: TrendingUp,
  title: "Digital Marketing",
  description: "Grow your online presence and reach your target audience effectively.",
  features: ["Social Media Management", "Content Marketing Strategy", "Paid Advertising (Facebook, Google, LinkedIn)", "Search Engine Optimization (SEO)", "Email Marketing Automation", "Analytics & Performance Tracking"]
}, {
  icon: Code,
  title: "Technology & AI",
  description: "Leverage cutting-edge technology to automate and optimize your business processes.",
  features: ["Website Development (WordPress, Shopify, Webflow)", "E-commerce Store Setup & Optimization", "Custom Web Applications", "Chatbot & AI Assistant Development", "CRM/ERP System Integration", "Workflow & Process Automation"]
}, {
  icon: Briefcase,
  title: "Business Solutions",
  description: "Strategic business services to help you make informed decisions and grow sustainably.",
  features: ["Complete Branding Packages", "Investor Pitch Decks", "Business Plan Development", "Market Research & Analysis", "Data Analytics & Reporting", "Online Reputation Management"]
}];
const projects = [{
  title: "E-commerce Platform Redesign",
  category: "Technology & AI",
  icon: Code,
  description: "Complete e-commerce platform overhaul with AI-powered recommendations and automated inventory management.",
  results: ["300% increase in conversion rate", "50% reduction in cart abandonment", "Automated inventory tracking"],
  technologies: ["Shopify Plus", "AI/ML", "Custom APIs"],
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  link: "#"
}, {
  title: "SaaS Brand Identity & Marketing",
  category: "Creative & Media",
  icon: Palette,
  description: "Complete brand identity creation and multi-channel marketing campaign for a B2B SaaS startup.",
  results: ["Brand recognition increased 400%", "Generated 1000+ qualified leads", "Social engagement up 250%"],
  technologies: ["Brand Strategy", "Social Media", "Content Marketing"],
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  link: "#"
}, {
  title: "Digital Marketing Campaign",
  category: "Digital Marketing",
  icon: TrendingUp,
  description: "Multi-platform digital marketing strategy for healthcare startup targeting millennial professionals.",
  results: ["500% ROI on ad spend", "Generated $2M in revenue", "Built audience of 50K+"],
  technologies: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing"],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  link: "#"
}, {
  title: "Virtual Operations Setup",
  category: "Virtual Assistance",
  icon: Users,
  description: "Complete virtual operations infrastructure for a growing consultancy firm with global clients.",
  results: ["80% reduction in operational costs", "Improved client satisfaction 95%", "Streamlined workflows"],
  technologies: ["CRM Setup", "Process Automation", "Project Management"],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  link: "#"
}, {
  title: "Business Strategy & Pitch Deck",
  category: "Business Solutions",
  icon: Briefcase,
  description: "Strategic business planning and investor pitch deck for Series A funding round.",
  results: ["Successfully raised $5M", "Secured 3 strategic partnerships", "Validated market strategy"],
  technologies: ["Business Strategy", "Financial Modeling", "Market Research"],
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  link: "#"
}, {
  title: "Mobile App UI/UX Design",
  category: "Creative & Media",
  icon: Palette,
  description: "User experience design for a fitness tracking mobile application with social features.",
  results: ["4.8★ app store rating", "40% increase in user retention", "Featured by Apple & Google"],
  technologies: ["UI/UX Design", "User Research", "Prototyping"],
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  link: "#"
}];
const categories = ["Technology & AI", "Creative & Media", "Digital Marketing", "Virtual Assistance & Operations"];
export default function Home({
  onBookingClick
}: {
  onBookingClick?: (service?: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("Technology & AI");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const filteredProjects = selectedCategory === "All Projects" ? projects : projects.filter(project => project.category === selectedCategory);
  const handleViewCaseStudy = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const displayedServices = showAllServices ? services : services.slice(0, 3);
  return <div className="min-h-screen">
      {/* Home Section */}
      <section id="home">
        <HeroSection onBookingClick={() => onBookingClick?.()} />
        
        {/* Brand Story Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                "Mela" means solution and money in Amharic slang, representing growth and smart solutions. 
                "Labs" represents innovation, experimenting, and trying new ideas. Together, we're your 
                digital growth lab delivering affordable, high-quality services with global impact.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Smart Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Data-driven strategies and cutting-edge technology to accelerate your growth.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Virtual-First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Cost-effective solutions without compromising on quality or collaboration.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Global Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Worldwide reach with local expertise to transform businesses globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Digital Solutions for <span className="bg-gradient-hero bg-clip-text text-transparent">Modern Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From creative design to AI automation, we provide comprehensive digital services 
              to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => <Card key={service.title} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => <div key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button className="w-full group" onClick={() => onBookingClick?.(service.title)}>
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {!showAllServices && <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={() => setShowAllServices(true)}>
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success Stories & <span className="bg-gradient-hero bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through our comprehensive digital solutions.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map(category => <Button key={category} variant={category === selectedCategory ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>)}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project, index) => <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                        {project.results.map((result, i) => <li key={i} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                            {result}
                          </li>)}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" size="sm" className="w-full group mt-4" onClick={() => handleViewCaseStudy(project)}>
                      View Case Study
                      <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Contact Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="bg-gradient-hero bg-clip-text text-transparent">Amazing Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team and let's discuss 
              how Mela Labs can help you achieve your digital growth goals.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Quick responses for urgent inquiries",
            contact: "+251925037003",
            action: "Chat Now",
            link: "https://wa.me/251925037003",
            primary: true
          }, {
            icon: Mail,
            title: "Email",
            description: "Detailed project discussions",
            contact: "olinaftesfayea@gmail.com",
            action: "Send Email",
            link: "mailto:olinaftesfayea@gmail.com",
            primary: false
          }, {
            icon: Calendar,
            title: "Book a Call",
            description: "Free 30-minute consultation",
            contact: "Schedule directly",
            action: "Book Now",
            onClick: () => onBookingClick?.(),
            primary: false
          }].map((method, index) => <Card key={index} className={`p-6 text-center hover:shadow-soft transition-all duration-300 ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-full ${method.primary ? 'bg-gradient-hero' : 'bg-muted'} flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-sm mb-4">{method.contact}</p>
                  {method.link ? <Button variant={method.primary ? "default" : "outline"} size="sm" className="w-full" asChild>
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button> : <Button variant={method.primary ? "default" : "outline"} size="sm" className="w-full" onClick={method.onClick}>
                      {method.action}
                    </Button>}
                </CardContent>
              </Card>)}
          </div>

          {/* Contact Form */}
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Mela Labs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Digital Growth Lab
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Smart Solutions, Global Impact
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a virtual-first digital agency that believes great solutions shouldn't be limited by geography. 
              Our global team delivers enterprise-quality services at startup-friendly prices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The Story Behind <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs</span>
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  <strong className="text-primary">Mela</strong> is an Amharic word meaning "solution" and also represents money in slang – 
                  symbolizing our commitment to delivering solutions that drive real business growth and value.
                </p>
                <p>
                  <strong className="text-primary">Labs</strong> represents our innovative approach – like a research laboratory, 
                  we constantly experiment with new technologies, methodologies, and strategies to find the best solutions for our clients.
                </p>
                <p>
                  Founded on the belief that exceptional digital services should be accessible to businesses of all sizes, 
                  Mela Labs was created to bridge the gap between high-quality work and affordable pricing through our virtual-first model.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[{
              number: "100+",
              label: "Projects Completed",
              icon: Target
            }, {
              number: "50+",
              label: "Happy Clients",
              icon: Heart
            }, {
              number: "24/7",
              label: "Global Support",
              icon: Globe
            }, {
              number: "15+",
              label: "Service Areas",
              icon: Zap
            }].map((stat, index) => <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Our Impact Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our Impact in <span className="bg-gradient-hero bg-clip-text text-transparent">Numbers</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real partnerships. Here's how we've helped our clients achieve success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[{
              number: "100+",
              label: "Projects Delivered"
            }, {
              number: "$100K+",
              label: "Client Revenue Generated"
            }, {
              number: "100%",
              label: "Average ROI Increase"
            }, {
              number: "98%",
              label: "Client Satisfaction Rate"
            }].map((stat, index) => <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Testimonials</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                What Our <span className="bg-gradient-hero bg-clip-text text-transparent">Clients Say</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[{
              name: "Sarah Johnson",
              role: "CEO, TechStart",
              content: "Mela Labs transformed our digital presence completely. The ROI was incredible - we saw 300% growth in just 6 months.",
              rating: 5
            }, {
              name: "Michael Chen",
              role: "Founder, E-commerce Plus",
              content: "Professional, efficient, and results-driven. They delivered beyond our expectations while staying within budget.",
              rating: 5
            }, {
              name: "Emily Rodriguez",
              role: "Marketing Director",
              content: "The virtual collaboration was seamless. It felt like they were part of our team from day one.",
              rating: 5
            }].map((testimonial, index) => <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      {Array.from({
                    length: testimonial.rating
                  }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>;
}