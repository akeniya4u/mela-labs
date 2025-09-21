import { useState } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { Footer } from "@/components/ui/footer";
import { BookingForm } from "@/components/ui/booking-form";
import { LeadForm } from "@/components/ui/lead-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award, Globe, Zap, DollarSign } from "lucide-react";

export default function Home() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onBookingClick={() => setIsBookingFormOpen(true)} />
      
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

      <ServicesSection />

      {/* Updated Impact Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-accent/20">
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

      {/* Client Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="bg-gradient-hero bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content: "Mela Labs transformed our digital presence completely. The ROI was incredible - we saw 300% growth in just 6 months.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, E-commerce Plus",
                content: "Professional, efficient, and results-driven. They delivered beyond our expectations while staying within budget.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                content: "The virtual collaboration was seamless. It felt like they were part of our team from day one.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="bg-gradient-hero bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your free consultation today and let's discuss how we can transform your business.
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsBookingFormOpen(true)}
            className="group"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <LeadForm />
      <Footer />

      <BookingForm 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </div>
  );
}