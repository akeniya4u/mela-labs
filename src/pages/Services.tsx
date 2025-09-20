import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Palette, 
  TrendingUp, 
  Code, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Virtual Assistance & Operations",
    description: "Streamline your business operations with our comprehensive virtual assistance services.",
    features: [
      "Executive & Administrative Assistance",
      "Project Management & Coordination", 
      "CRM Setup & Management",
      "Data Entry & Processing",
      "Customer Support Services",
      "Workflow Automation",
      "Process Documentation",
      "Quality Assurance"
    ],
    pricing: "Starting at $15/hour",
    delivery: "Same day setup"
  },
  {
    icon: Palette,
    title: "Creative & Media",
    description: "Bring your brand to life with stunning visuals and compelling creative content.",
    features: [
      "Brand Identity & Logo Design",
      "Social Media Graphics & Templates",
      "Print & Digital Marketing Materials", 
      "Video Editing & Motion Graphics",
      "UI/UX Design for Web & Mobile",
      "Illustration & Icon Design",
      "Photography & Image Editing",
      "Content Creation Strategy"
    ],
    pricing: "Starting at $299/project",
    delivery: "2-5 business days"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Grow your online presence and reach your target audience effectively.",
    features: [
      "Social Media Management",
      "Content Marketing Strategy",
      "Paid Advertising (Facebook, Google, LinkedIn)",
      "Search Engine Optimization (SEO)",
      "Email Marketing Automation",
      "Influencer Marketing Campaigns",
      "Analytics & Performance Tracking",
      "Conversion Rate Optimization"
    ],
    pricing: "Starting at $999/month",
    delivery: "Campaign launch in 3 days"
  },
  {
    icon: Code,
    title: "Technology & AI",
    description: "Leverage cutting-edge technology to automate and optimize your business processes.",
    features: [
      "Website Development (WordPress, Shopify, Webflow)",
      "E-commerce Store Setup & Optimization",
      "Custom Web Applications",
      "Chatbot & AI Assistant Development",
      "CRM/ERP System Integration",
      "Workflow & Process Automation",
      "Database Design & Management",
      "API Integration & Development"
    ],
    pricing: "Starting at $1,999/project",
    delivery: "2-4 weeks delivery"
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Strategic business services to help you make informed decisions and grow sustainably.",
    features: [
      "Complete Branding Packages",
      "Investor Pitch Decks",
      "Business Plan Development",
      "Market Research & Analysis",
      "Data Analytics & Reporting",
      "Online Reputation Management",
      "Customer Experience Strategy",
      "Digital Transformation Consulting"
    ],
    pricing: "Starting at $499/project",
    delivery: "1-2 weeks delivery"
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Digital Solutions
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              For Modern Businesses
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From creative design to AI automation, we provide comprehensive digital services 
            to help your business thrive in the digital age. All delivered by our expert virtual team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/40">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.delivery}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/40">
                    <Button className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and effective. Here's how we work together to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We understand your needs, goals, and challenges in detail."
              },
              {
                step: "02", 
                title: "Strategy & Proposal",
                description: "Receive a customized solution with transparent pricing and timeline."
              },
              {
                step: "03",
                title: "Execution",
                description: "Our expert team gets to work with regular updates and communication."
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Get your completed project with ongoing support and optimization."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-hero text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project requirements and 
            discover how we can help accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}