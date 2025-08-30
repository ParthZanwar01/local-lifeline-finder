import { Button } from "@/components/ui/button";

export const VerdantHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/5966435/pexels-photo-5966435.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🌱</span>
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fresh & Sustainable
          <br />
          <span className="text-primary">Vegetarian</span> Cuisine
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Farm-to-table ingredients, chef-crafted dishes, and a commitment 
          to sustainability in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg"
          >
            Our Philosophy
          </Button>
        </div>
      </div>
    </section>
  );
};