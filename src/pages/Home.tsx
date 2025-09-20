import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Globe, 
  Zap, 
  DollarSign, 
  Star,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Brand Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-accent/50 text-accent-foreground mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs?</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Mela</strong> means "solution" and represents money in Amharic slang – 
                  symbolizing growth and smart financial decisions for your business.
                </p>
                <p>
                  <strong className="text-foreground">Labs</strong> represents innovation, experimentation, 
                  and trying new ideas – just like a research laboratory pushing boundaries.
                </p>
                <p>
                  Together, <strong className="text-primary">Mela Labs</strong> is your Digital Growth Lab, 
                  delivering smart solutions with global impact through virtual-first collaboration.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, title: "Global Reach", desc: "Virtual-first approach" },
                { icon: DollarSign, title: "Cost Effective", desc: "50% savings on average" },
                { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround times" },
                { icon: Star, title: "Premium Quality", desc: "Enterprise-grade solutions" },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Mela Labs?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another agency. We're your strategic digital growth partner 
              committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual-First Advantage",
                description: "Access global talent without geographical limitations. Lower overhead costs mean better value for you.",
                benefits: ["24/7 global support", "Reduced operational costs", "Access to diverse expertise"]
              },
              {
                title: "All-in-One Solutions",
                description: "From creative design to AI automation, we handle everything so you can focus on growing your business.",
                benefits: ["Streamlined communication", "Consistent quality", "Single point of contact"]
              },
              {
                title: "Affordable Excellence",
                description: "Enterprise-quality services at startup-friendly prices. High-quality work shouldn't break the bank.",
                benefits: ["Transparent pricing", "Flexible packages", "No hidden fees"]
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {benefit}
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Mela Labs can help accelerate your business growth 
            with our comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}