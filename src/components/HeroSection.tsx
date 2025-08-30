import { Button } from "@/components/ui/button";
import { Search, Heart, Users } from "lucide-react";
import heroImage from "@/assets/community-hero.jpg";

export const HeroSection = () => {
  const scrollToDirectory = () => {
    document.getElementById('resource-directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Community members helping each other" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-community-blue/90 via-community-blue/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left animate-fade-in">
        <div className="max-w-3xl animate-scale-in"
             style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Community
            <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2">
              Resource Hub
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Connecting neighbors with essential services, support programs, and community resources. 
            Together, we build stronger communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToDirectory}
              className="text-lg"
            >
              <Search className="w-5 h-5" />
              Explore Resources
            </Button>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => document.getElementById('add-resource')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg"
            >
              <Heart className="w-5 h-5" />
              Add a Resource
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white animate-fade-in"
               style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            <div className="text-center lg:text-left hover-lift">
              <div className="text-3xl font-bold text-accent-glow">50+</div>
              <div className="text-white/80">Community Resources</div>
            </div>
            <div className="text-center lg:text-left hover-lift">
              <div className="text-3xl font-bold text-accent-glow">15</div>
              <div className="text-white/80">Service Categories</div>
            </div>
            <div className="text-center lg:text-left hover-lift">
              <div className="text-3xl font-bold text-accent-glow">
                <Users className="w-8 h-8 inline mr-2" />
                1000+
              </div>
              <div className="text-white/80">Families Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};