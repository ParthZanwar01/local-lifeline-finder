import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Target, Award, Globe, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const missionValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe every person deserves access to the resources they need to thrive. Our approach is rooted in empathy and understanding.",
    color: "text-community-red"
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "We're committed to making information easily accessible to all community members, regardless of their background or circumstances.",
    color: "text-community-blue"
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster connections between neighbors, organizations, and resources to build a stronger, more supportive Cypress community.",
    color: "text-community-green"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We maintain the highest standards of accuracy and reliability in all the information we provide to our community.",
    color: "text-community-purple"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our platform to better serve the evolving needs of our growing Cypress community.",
    color: "text-community-orange"
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description: "We celebrate the diversity of our community and ensure our resources are accessible to people of all backgrounds and abilities.",
    color: "text-community-yellow"
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "Sarah has over 15 years of experience in community development and nonprofit management. She's passionate about connecting Cypress residents with the resources they need.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Michael Chen",
    role: "Program Director",
    bio: "Michael brings expertise in community health and education programs. He oversees our resource verification and community outreach initiatives.",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Community Outreach Coordinator",
    bio: "Emily works directly with local organizations and community members to ensure our resource directory stays current and comprehensive.",
    image: "/placeholder.svg"
  },
  {
    name: "David Thompson",
    role: "Technology Director",
    bio: "David leads our digital platform development, ensuring the website is accessible, user-friendly, and meets the needs of our diverse community.",
    image: "/placeholder.svg"
  }
];

const impactStats = [
  { number: "50+", label: "Community Resources Listed", description: "Comprehensive directory of local services and support programs" },
  { number: "1,000+", label: "Families Helped", description: "Direct impact on Cypress residents through resource connections" },
  { number: "15", label: "Service Categories", description: "Covering all major areas of community need" },
  { number: "24/7", label: "Always Available", description: "Round-the-clock access to community resource information" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-community-blue/10 via-community-purple/10 to-community-green/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Cypress Community Resource Hub
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to strengthen the Cypress community by connecting neighbors with essential resources, 
            support services, and opportunities to help each other thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Cypress Community Resource Hub exists to bridge the gap between community needs and available resources. 
                We believe that when neighbors have easy access to the support they need, our entire community becomes stronger, 
                more resilient, and more connected.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for food assistance, healthcare services, educational programs, or ways to give back 
                to your community, we're here to help you find what you need and connect with the organizations that can help.
              </p>
              <Button size="lg" className="group hover:scale-105 transition-transform">
                Explore Our Resources
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-community-blue/20 to-community-purple/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Cypress where every resident has easy access to the resources they need to thrive, 
                  where community organizations can effectively reach those they serve, and where neighbors 
                  feel connected and supported by their community.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-community-green/20 to-community-orange/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Core Belief</h4>
                <p className="text-sm text-muted-foreground">
                  Information is power, and shared information creates community power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our Cypress community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-feature transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-${value.color.replace('text-', '')}/20 to-${value.color.replace('text-', '')}/10 flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since our launch, we've been making a real difference in the lives of Cypress residents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated professionals committed to serving the Cypress community and connecting neighbors with resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-feature transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-community-blue/20 to-community-purple/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-community-blue" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple three-step process makes it easy to find the resources you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-community-blue/20 text-community-blue text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Search & Discover</h3>
              <p className="text-muted-foreground">
                Use our comprehensive search and filter system to find resources that match your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-community-green/20 text-community-green text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Contact</h3>
              <p className="text-muted-foreground">
                Get detailed information about each resource, including contact details, hours, and eligibility requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-community-purple/20 text-community-purple text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Help & Give Back</h3>
              <p className="text-muted-foreground">
                Access the services you need and discover ways to volunteer or support other community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-community-blue to-community-purple">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building a Stronger Cypress
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're looking for help or want to help others, we're here to connect you with the resources 
            and opportunities that make our community thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group hover:scale-105 transition-transform">
              Explore Resources
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-community-blue">
              Submit a Resource
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
