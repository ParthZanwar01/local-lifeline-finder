import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🌾",
    title: "Farm to Table",
    description: "We source our ingredients directly from local organic farms, ensuring freshness and supporting our community."
  },
  {
    icon: "👨‍🍳",
    title: "Artisanal Preparation", 
    description: "Our chefs combine traditional techniques with innovative approaches to bring out the best flavors in plant-based ingredients."
  },
  {
    icon: "🥬",
    title: "100% Vegetarian",
    description: "Every dish on our menu is completely vegetarian, crafted with creativity and passion for plant-based cuisine."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Verdant
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of thoughtfully prepared vegetarian cuisine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-feature transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};