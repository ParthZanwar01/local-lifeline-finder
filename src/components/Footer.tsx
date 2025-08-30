import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-community-orange mr-3" />
              <h3 className="text-2xl font-bold">Community Hub</h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting neighbors with essential services, support programs, and community resources. 
              Together, we build stronger communities.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-community-blue hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-community-blue hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-community-blue hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#resource-directory" className="text-background/80 hover:text-community-orange transition-colors">
                  Resource Directory
                </a>
              </li>
              <li>
                <a href="#featured-resources" className="text-background/80 hover:text-community-orange transition-colors">
                  Featured Resources
                </a>
              </li>
              <li>
                <a href="#add-resource" className="text-background/80 hover:text-community-orange transition-colors">
                  Add a Resource
                </a>
              </li>
              <li>
                <a href="#community-news" className="text-background/80 hover:text-community-orange transition-colors">
                  Community News
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-background/80 hover:text-community-orange transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-community-green transition-colors">
                  Food Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-community-green transition-colors">
                  Health & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-community-green transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-community-green transition-colors">
                  Housing
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-community-green transition-colors">
                  Employment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-community-blue mr-3" />
                <span className="text-background/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-community-green mr-3" />
                <span className="text-background/80">info@communityhub.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-community-orange mr-3 mt-1" />
                <span className="text-background/80">
                  123 Community Drive<br />
                  Your City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/80 mb-4 md:mb-0">
            © 2024 Community Resource Hub. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/80 hover:text-community-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-community-orange transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/80 hover:text-community-orange transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};