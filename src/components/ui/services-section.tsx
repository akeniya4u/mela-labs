import { 
  Users, 
  Palette, 
  TrendingUp, 
  Code, 
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const services = [
  {
    icon: Users,
    title: "Virtual Assistance & Operations",
    description: "Executive assistance, project management, CRM setup, data entry, customer support, workflow automation.",
    features: ["24/7 Support", "CRM Management", "Process Automation"],
  },
  {
    icon: Palette,
    title: "Creative & Media",
    description: "Graphic design, branding, social media design, video editing, motion graphics, UI/UX design.",
    features: ["Brand Identity", "Social Media Design", "Video Production"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Social media management, content creation, paid ads (Facebook, Google, LinkedIn), SEO, email marketing automation.",
    features: ["Paid Advertising", "SEO Optimization", "Content Strategy"],
  },
  {
    icon: Code,
    title: "Technology & AI",
    description: "Website development (WordPress, Shopify, Webflow), e-commerce stores, chatbot/AI assistants, CRM/ERP setup, workflow automations.",
    features: ["Custom Development", "AI Integration", "E-commerce Solutions"],
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Branding packages, pitch decks, data analytics, online reputation management, outsourced customer experience team.",
    features: ["Strategic Planning", "Analytics & Insights", "Reputation Management"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-accent/50 text-accent-foreground mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Digital Solutions
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From creative design to cutting-edge AI, we provide all the digital services 
            your business needs to grow and succeed in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/40"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}