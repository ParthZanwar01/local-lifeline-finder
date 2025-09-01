import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Heart, Users, MapPin, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/community-hero.jpg";
import { useAuth } from "@/hooks/useAuth";

export const HeroSection = () => {
  const { user } = useAuth();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const scrollToDirectory = () => {
    document.getElementById('resource-directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAddResource = () => {
    document.getElementById('add-resource')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStatClick = (stat: string) => {
    if (stat === 'resources') {
      scrollToDirectory();
    } else if (stat === 'events') {
      document.getElementById('community-news')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Video Overlay and Black Spot */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img
          src="/src/assets/community-hero.jpg"
          alt="Cypress Community"
          className="w-full h-full object-cover"
        />
        
        {/* Video Overlay */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setVideoLoaded(true)}
          >
            {/* Placeholder video source - replace with actual Cypress video */}
            <source src="/videos/cypress-community.mp4" type="video/mp4" />
            <source src="/videos/cypress-community.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Black Spot Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content Container - No Glassmorphism */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Content Container - Transparent */}
          <div className="p-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
              Cypress Texas
              <span className="block mt-2 text-4xl lg:text-5xl font-light text-white/90 animate-fade-in-up animation-delay-200">
                Community Resource Hub
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in-up animation-delay-400 max-w-4xl mx-auto">
              Connecting Cypress neighbors with essential services, support programs, and community resources. 
              Together, we build stronger communities in Cypress, Texas.
            </p>
            
            {/* Buttons - No Glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up animation-delay-600 justify-center">
              <Button 
                onClick={scrollToDirectory}
                className="text-lg px-8 py-6 bg-white/20 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Resources
              </Button>
              <Button 
                onClick={scrollToAddResource}
                className="text-lg px-8 py-6 bg-brand-teal text-white hover:bg-brand-teal-dark hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                {user ? 'Add a Resource' : 'Get Started'}
              </Button>
            </div>

            {/* Stats Section - No Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up animation-delay-800">
              <div 
                className="text-center cursor-pointer group"
                onClick={() => handleStatClick('resources')}
                onMouseEnter={() => setHoveredStat('resources')}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-white/80 text-lg">Community Resources</div>
              </div>
              
              <div 
                className="text-center cursor-pointer group"
                onClick={() => handleStatClick('events')}
                onMouseEnter={() => setHoveredStat('events')}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  15
                </div>
                <div className="text-white/80 text-lg">Service Categories</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  1,000+
                </div>
                <div className="text-white/80 text-lg">Families Helped</div>
              </div>
            </div>

            {/* Contact Info - No Glassmorphism */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(281) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@cypresshub.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cypress, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-20 md:hidden">
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 shadow-lg bg-white/20 text-white hover:bg-white/30"
          onClick={scrollToDirectory}
        >
          <Search className="w-6 h-6" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};