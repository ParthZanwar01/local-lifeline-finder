import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Users, MapPin } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Community Health Fair This Saturday",
    description: "Free health screenings, vaccinations, and wellness resources. All ages welcome!",
    date: "March 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center Main Hall",
    type: "Event",
    category: "Health",
  },
  {
    id: 2,
    title: "New After-School Program Registration Open",
    description: "Safe, educational after-school care for elementary students. Limited spots available.",
    date: "March 20, 2024",
    time: "Rolling Enrollment",
    location: "Youth Development Center",
    type: "Program",
    category: "Education",
  },
  {
    id: 3,
    title: "Food Pantry Volunteers Needed",
    description: "Help us serve our community! Flexible volunteer shifts available throughout the week.",
    date: "Ongoing",
    time: "Various Shifts",
    location: "Community Food Pantry",
    type: "Volunteer",
    category: "Community",
  },
  {
    id: 4,
    title: "Senior Technology Workshop Series",
    description: "Learn computer basics, internet safety, and how to connect with family online.",
    date: "March 25, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Learning Center",
    type: "Workshop",
    category: "Education",
  },
];

const upcomingEvents = [
  {
    title: "Community Garden Cleanup",
    date: "Mar 18",
    participants: "25+ volunteers",
  },
  {
    title: "Job Fair & Career Expo",
    date: "Mar 22",
    participants: "30+ employers",
  },
  {
    title: "Family Fun Day Festival",
    date: "Mar 28",
    participants: "All families",
  },
];

export const CommunityNews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Community News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with what's happening in our community. From upcoming events to new programs, 
            there's always something exciting going on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item, index) => (
              <Card key={item.id} className="shadow-card hover:shadow-feature transition-all duration-300 bg-gradient-card border-border animate-fade-in hover-lift"
                    style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'both'}}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${item.type === 'Event' ? 'bg-community-blue/10 text-community-blue' : ''}
                        ${item.type === 'Program' ? 'bg-community-green/10 text-community-green' : ''}
                        ${item.type === 'Volunteer' ? 'bg-community-orange/10 text-community-orange' : ''}
                        ${item.type === 'Workshop' ? 'bg-community-purple/10 text-community-purple' : ''}
                      `}
                    >
                      {item.type}
                    </Badge>
                    <Badge variant="outline">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-community-blue" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-community-green" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-community-orange" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="mt-4">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            {/* Quick Events */}
            <Card className="shadow-card bg-gradient-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-community-blue" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover-scale transition-all duration-200">
                    <div>
                      <div className="font-medium text-foreground text-sm">{event.title}</div>
                      <div className="text-xs text-muted-foreground">{event.participants}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-community-blue">{event.date}</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="shadow-card bg-gradient-accent border-border hover-lift">
              <CardHeader>
                <CardTitle className="text-lg text-accent-foreground flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-foreground">1,247</div>
                  <div className="text-sm text-accent-foreground/80">People Helped This Month</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-foreground">156</div>
                    <div className="text-xs text-accent-foreground/80">Volunteer Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-foreground">23</div>
                    <div className="text-xs text-accent-foreground/80">New Resources</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="shadow-card bg-gradient-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Stay Connected</CardTitle>
                <CardDescription>
                  Get the latest community news and updates delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="community" size="sm" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};