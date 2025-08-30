import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Heart, GraduationCap } from "lucide-react";
import communityCenter from "@/assets/community-center.jpg";
import foodPantry from "@/assets/food-pantry.jpg";
import educationCenter from "@/assets/education-center.jpg";

const featuredResources = [
  {
    id: 1,
    name: "Community Food Pantry",
    category: "Food Assistance",
    description: "Our flagship food assistance program has served over 5,000 families this year. We provide fresh groceries, hot meals, and nutrition education to anyone in need.",
    image: foodPantry,
    icon: Heart,
    stats: "5,000+ families served",
    impact: "No one should go hungry in our community",
    color: "text-community-green",
  },
  {
    id: 2,
    name: "Learning & Literacy Center", 
    category: "Education",
    description: "Empowering learners of all ages with free educational resources, from basic literacy to advanced computer skills. Over 200 students enrolled this semester.",
    image: educationCenter,
    icon: GraduationCap,
    stats: "200+ active students",
    impact: "Education opens doors to opportunity",
    color: "text-community-blue",
  },
  {
    id: 3,
    name: "Community Wellness Center",
    category: "Health & Wellness", 
    description: "Comprehensive health services including mental health support, wellness programs, and preventive care. Building healthier communities together.",
    image: communityCenter,
    icon: Users,
    stats: "1,000+ wellness visits",
    impact: "Healthy communities thrive together",
    color: "text-community-purple",
  },
];

export const FeaturedResources = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Spotlight on Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These outstanding community resources are making a real difference in the lives of our neighbors. 
            Learn more about their programs and how you can get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="group shadow-card hover:shadow-feature transition-all duration-500 bg-gradient-card border-border overflow-hidden animate-fade-in hover-lift"
                    style={{animationDelay: `${index * 0.2}s`, animationFillMode: 'both'}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {resource.category}
                    </Badge>
                  </div>
                  <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm ${resource.color} animate-float`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {resource.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {resource.stats}
                      </div>
                      <div className={`text-sm font-medium ${resource.color}`}>
                        Featured Resource
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "{resource.impact}"
                    </blockquote>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="community" 
            size="lg"
            onClick={() => document.getElementById('resource-directory')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore All Resources
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};