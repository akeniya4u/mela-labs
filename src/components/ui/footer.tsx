import { Link } from "react-router-dom";
import { Button } from "./button";
import { Instagram, Linkedin, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import melaLabsLogo from "@/assets/mela-labs-logo.png";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={melaLabsLogo} alt="Mela Labs Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold">Mela Labs</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Your Digital Growth Lab – delivering smart solutions with global impact. 
              Virtual-first agency providing affordable, high-quality digital services.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="secondary" asChild>
                
              </Button>
              <Button size="sm" variant="outline" className="text-background border-background/20 hover:bg-background/10" asChild>
                <a href="mailto:salesmelalabs@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[{
              name: "Home",
              href: "/"
            }, {
              name: "Services",
              href: "/services"
            }, {
              name: "About Us",
              href: "/about"
            }, {
              name: "Portfolio",
              href: "/portfolio"
            }, {
              name: "Contact",
              href: "/contact"
            }].map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 text-background/70" />
                <span className="text-background/70 text-sm">
                  salesmelalabs@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-background/70" />
                <span className="text-background/70 text-sm">+251-9-2503003</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-background/70" />
                <span className="text-background/70 text-sm">
                  Virtual Office Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/mela_labs?igsh=MW8xZ25zeWkzcG41aw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/olinaf-abdisa-034151285" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580970369824" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-background/70 text-sm">
            © {currentYear} Mela Labs. All rights reserved.
          </p>
        </div>
      </div>

    </footer>;
}