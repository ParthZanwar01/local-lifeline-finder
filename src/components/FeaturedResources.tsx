import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Users, Heart, GraduationCap, MapPin, Phone, Globe, Clock, Star, Share2, Bookmark } from "lucide-react";
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
    address: "123 Main Street, Cypress, TX 77433",
    phone: "(555) 123-4567",
    website: "www.cypressfoodpantry.org",
    hours: "Mon-Fri 9AM-5PM, Sat 10AM-2PM",
    rating: 4.8,
    reviewCount: 127,
    services: [
      "Fresh groceries distribution",
      "Hot meal programs",
      "Nutrition education",
      "Emergency food assistance",
      "Holiday meal programs"
    ],
    eligibility: "Open to all Cypress residents in need",
    contact: "Sarah Johnson, Director"
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
    address: "456 Education Drive, Cypress, TX 77433",
    phone: "(555) 234-5678",
    website: "www.cypresslearning.org",
    hours: "Mon-Thu 8AM-8PM, Fri 8AM-6PM, Sat 9AM-3PM",
    rating: 4.9,
    reviewCount: 89,
    services: [
      "Adult literacy programs",
      "Computer skills training",
      "ESL classes",
      "GED preparation",
      "Job readiness training",
      "Children's reading programs"
    ],
    eligibility: "All ages welcome, some programs have age restrictions",
    contact: "Dr. Michael Chen, Education Director"
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
    address: "789 Wellness Way, Cypress, TX 77433",
    phone: "(555) 345-6789",
    website: "www.cypresswellness.org",
    hours: "Mon-Fri 7AM-7PM, Sat 8AM-4PM",
    rating: 4.7,
    reviewCount: 156,
    services: [
      "Mental health counseling",
      "Physical therapy",
      "Nutrition counseling",
      "Fitness classes",
      "Preventive screenings",
      "Support groups"
    ],
    eligibility: "Cypress residents, sliding scale fees available",
    contact: "Dr. Emily Rodriguez, Medical Director"
  },
];

export const FeaturedResources = () => {
  const [selectedResource, setSelectedResource] = useState<typeof featuredResources[0] | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleResourceClick = (resource: typeof featuredResources[0]) => {
    setSelectedResource(resource);
  };

  const handleShare = (resource: typeof featuredResources[0]) => {
    if (navigator.share) {
      navigator.share({
        title: resource.name,
        text: resource.description,
        url: window.location.href
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${resource.name} - ${resource.description}`);
    }
  };

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-current" 
                : i < rating 
                  ? "text-yellow-400" 
                  : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Spotlight on Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These outstanding community resources are making a real difference in the lives of our Cypress neighbors. 
              Learn more about their programs and how you can get involved.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card 
                  key={resource.id} 
                  className={`group shadow-card hover:shadow-feature transition-all duration-500 bg-gradient-card border-border overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                    hoveredCard === resource.id ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(resource.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleResourceClick(resource)}
                >
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
                    <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm ${resource.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(resource);
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
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
                      {/* Rating */}
                      {getRatingStars(resource.rating)}
                      
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResourceClick(resource);
                        }}
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
              className="group hover:scale-105 transition-transform duration-300"
            >
              Explore All Resources
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Detail Modal */}
      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedResource && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedResource.name}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedResource.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image and Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img 
                      src={selectedResource.image} 
                      alt={selectedResource.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge variant="secondary" className="absolute top-4 left-4">
                      {selectedResource.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {getRatingStars(selectedResource.rating)}
                      <span className="text-sm text-muted-foreground">
                        ({selectedResource.reviewCount} reviews)
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-community-blue" />
                        <span>{selectedResource.address}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-community-green" />
                        <span>{selectedResource.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Globe className="w-4 h-4 mr-2 text-community-purple" />
                        <a 
                          href={`https://${selectedResource.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {selectedResource.website}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-community-orange" />
                        <span>{selectedResource.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Services Offered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedResource.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                    <p className="text-sm text-muted-foreground">{selectedResource.eligibility}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Person</h3>
                    <p className="text-sm text-muted-foreground">{selectedResource.contact}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};