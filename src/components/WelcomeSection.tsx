import { Card, CardContent } from "@/components/ui/card";

export const WelcomeSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Welcome to Verdant
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where sustainable ingredients meet culinary artistry
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/5966435/pexels-photo-5966435.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
              alt="Chef preparing vegetarian dish"
              className="rounded-lg shadow-card w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                A Fresh Approach to Vegetarian Dining
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Verdant, we believe that vegetarian cuisine can be both nourishing and exciting. 
                Our approach combines traditional techniques with innovative flavors to create dishes 
                that celebrate the natural bounty of local, seasonal produce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every ingredient has a story – from the organic vegetables grown at family farms 
                just outside the city to the artisanal cheeses crafted by local food artisans. 
                We're passionate about bringing these stories to your table.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🚜</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Farm Fresh</h4>
                  <p className="text-sm text-muted-foreground">
                    Ingredients sourced directly from local organic farms within a 50-mile radius.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🍃</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Seasonal Menu</h4>
                  <p className="text-sm text-muted-foreground">
                    Our menu changes with the seasons to showcase the best produce at its peak flavor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};