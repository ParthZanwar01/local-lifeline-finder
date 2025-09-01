import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedResources } from "@/components/FeaturedResources";
import { Search, Users, Calendar, Plus, Heart, MapPin, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const quickActions = [
  {
    title: "Find Resources",
    description: "Search our comprehensive directory of community services and support programs",
    icon: Search,
    link: "/resources",
    color: "from-blue-500 to-cyan-500",
    badge: "50+ Resources"
  },
  {
    title: "News & Events",
    description: "Stay updated with local community news and upcoming events",
    icon: Calendar,
    link: "/news",
    color: "from-green-500 to-emerald-500",
    badge: "Latest Updates"
  },
  {
    title: "Submit Resource",
    description: "Help grow our community hub by adding new resources",
    icon: Plus,
    link: "/submit-resource",
    color: "from-purple-500 to-pink-500",
    badge: "Community Driven"
  },
  {
    title: "About Us",
    description: "Learn about our mission and the team behind the community hub",
    icon: Users,
    link: "/about",
    color: "from-orange-500 to-red-500",
    badge: "Our Story"
  }
];

const communityStats = [
  { number: "50+", label: "Community Resources", icon: Heart },
  { number: "1,000+", label: "Families Helped", icon: Users },
  { number: "15", label: "Service Categories", icon: BookOpen },
  { number: "24/7", label: "Always Available", icon: Star }
];

export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get Started
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose how you'd like to explore and contribute to the Cypress community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link key={index} to={action.link}>
                  <Card className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 shadow-soft">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{action.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {action.badge}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base leading-relaxed">
                        {action.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover some of the most important community resources available in Cypress
            </p>
            <Link to="/resources" className="inline-block mt-6">
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
                View All Resources
                <MapPin className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <FeaturedResources />
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Community Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our community resource hub is making a difference in Cypress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building a Stronger Cypress
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're looking for help or want to help others, we're here to connect you with the resources 
            and opportunities that make our community thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button variant="secondary" size="lg" className="group hover:scale-105 transition-transform">
                Explore Resources
                <Search className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/submit-resource">
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-primary">
                Submit a Resource
                <Plus className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
