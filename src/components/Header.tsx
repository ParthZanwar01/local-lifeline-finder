import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">Use code VERDANT25 for 25% off your first order!</span>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">🌱</span>
          </div>
          <span className="text-2xl font-bold text-primary">Verdant</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#philosophy" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Philosophy
          </a>
          <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
            Menu
          </a>
          <a href="#sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
            Sustainability
          </a>
          <a href="#reference" className="text-muted-foreground hover:text-foreground transition-colors">
            Reference Page
          </a>
        </nav>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Order Now
        </Button>
      </div>
    </header>
  );
};