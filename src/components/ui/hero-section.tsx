import { useState } from "react";
import { Button } from "./button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onBookingClick?: () => void;
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mela Labs Digital Agency Team"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-accent/50 text-accent-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
            Your Digital Growth Lab
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smart Solutions.
            </span>
            <br />
            <span className="text-foreground">Global Impact.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Virtual-first digital agency delivering affordable, high-quality services. 
            From creative design to AI automation, we're your complete digital growth partner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" onClick={onBookingClick || scrollToBooking}>
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="group" onClick={scrollToBooking}>
              <ArrowRight className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/40">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Global Support
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                50%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Cost Savings
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-hero opacity-20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold opacity-20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
}