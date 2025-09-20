import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe,
  Users,
  Zap,
  Target,
  Heart,
  Lightbulb,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">About Mela Labs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Digital Growth Lab
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smart Solutions, Global Impact
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a virtual-first digital agency that believes great solutions shouldn't be limited by geography. 
            Our global team delivers enterprise-quality services at startup-friendly prices.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Story Behind <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs</span>
              </h2>
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
                <p>
                  Today, we're proud to serve clients worldwide, delivering everything from creative design to AI automation, 
                  all while maintaining our core values of innovation, accessibility, and excellence.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "100+", label: "Projects Completed", icon: Target },
                { number: "50+", label: "Happy Clients", icon: Heart },
                { number: "24/7", label: "Global Support", icon: Globe },
                { number: "15+", label: "Service Areas", icon: Zap },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & <span className="bg-gradient-hero bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core mission and fundamental values that shape our approach to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-soft transition-all duration-300 lg:col-span-3 bg-gradient-hero text-white">
              <CardContent className="p-0">
                <Target className="h-12 w-12 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                  To democratize access to world-class digital services by leveraging virtual collaboration, 
                  enabling businesses of all sizes to compete and thrive in the digital economy without geographical 
                  or budgetary constraints.
                </p>
              </CardContent>
            </Card>

            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
              },
              {
                icon: Users,
                title: "Client-Centric",
                description: "Your success is our success. We build long-term partnerships by understanding your unique challenges and delivering tailored solutions."
              },
              {
                icon: Globe,
                title: "Global Accessibility",
                description: "Geography shouldn't limit great work. Our virtual-first approach makes premium digital services accessible to businesses worldwide."
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a service provider – we're your strategic digital growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual-First Advantage",
                points: [
                  "Access to global talent pool",
                  "50% cost savings on average", 
                  "24/7 support across time zones",
                  "No geographical limitations"
                ]
              },
              {
                title: "Comprehensive Solutions",
                points: [
                  "Full-service digital agency",
                  "Integrated service offerings",
                  "Single point of contact",
                  "Consistent brand experience"
                ]
              },
              {
                title: "Quality & Affordability",
                points: [
                  "Enterprise-grade quality",
                  "Startup-friendly pricing",
                  "Transparent cost structure",
                  "Flexible payment options"
                ]
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Growth Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Mela Labs can become your strategic partner in achieving 
            sustainable digital growth and business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}