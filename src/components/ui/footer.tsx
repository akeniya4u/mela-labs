import { Link } from "react-router-dom";
import { Button } from "./button";
import { Instagram, Linkedin, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold">ML</span>
              </div>
              
            </Link>
            
            
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
                  
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
            
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/i_am_elyara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
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

      {/* CTA Banner */}
      <div className="bg-gradient-hero">
        
      </div>
    </footer>;
}