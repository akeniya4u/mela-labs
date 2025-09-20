import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Facebook,
  Calendar
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team and let's discuss 
            how Mela Labs can help you achieve your digital growth goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick responses for urgent inquiries",
                contact: "+1 (555) 123-4567",
                action: "Chat Now",
                primary: true
              },
              {
                icon: Mail,
                title: "Email",
                description: "Detailed project discussions",
                contact: "hello@melalabs.com", 
                action: "Send Email",
                primary: false
              },
              {
                icon: Calendar,
                title: "Book a Call",
                description: "Free 30-minute consultation",
                contact: "Schedule directly",
                action: "Book Now",
                primary: false
              }
            ].map((method, index) => (
              <Card key={index} className={`p-6 text-center hover:shadow-soft transition-all duration-300 ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-full ${method.primary ? 'bg-gradient-hero' : 'bg-muted'} flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-sm mb-4">{method.contact}</p>
                  <Button 
                    variant={method.primary ? "default" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">Get Started Today</CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and we'll get back to you within 24 hours with a customized proposal.
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Inc." />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="services">Services Interested In *</Label>
                    <select 
                      id="services" 
                      className="w-full p-3 border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="virtual-assistance">Virtual Assistance & Operations</option>
                      <option value="creative-media">Creative & Media</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="technology-ai">Technology & AI</option>
                      <option value="business-solutions">Business Solutions</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <select 
                      id="budget" 
                      className="w-full p-3 border border-input rounded-md bg-background"
                    >
                      <option value="">Select budget range...</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">hello@melalabs.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground text-sm">Virtual Office Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-semibold">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  {[
                    "We review your project details within 24 hours",
                    "Schedule a free consultation call",
                    "Receive a customized proposal with pricing",
                    "Start your project with our expert team"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{step}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-semibold">Follow Us</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Stay updated with our latest work and insights
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/melalabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-hero hover:opacity-90 flex items-center justify-center transition-opacity"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/melalabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-hero hover:opacity-90 flex items-center justify-center transition-opacity"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href="https://facebook.com/melalabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-hero hover:opacity-90 flex items-center justify-center transition-opacity"
                    >
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "Most projects can begin within 1-2 business days after approval. Rush projects available for additional fee."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We specialize in helping businesses of all sizes, from startups to enterprises."
              },
              {
                question: "What's included in the free consultation?",
                answer: "A 30-minute strategy session, project scoping, and a customized proposal with transparent pricing."
              },
              {
                question: "How do you ensure quality across time zones?",
                answer: "Our virtual-first processes include regular check-ins, project management tools, and dedicated account managers."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}