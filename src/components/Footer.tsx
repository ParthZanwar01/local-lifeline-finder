import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-foreground-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl">Cypress Community Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting Cypress neighbors with essential services, support programs, and community resources. 
              Together, we build stronger communities in Cypress, Texas.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/submit-resource" className="text-muted-foreground hover:text-foreground transition-colors">
                  Submit Resource
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Cypress, Texas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(281) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@cypresshub.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Cypress Community Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};