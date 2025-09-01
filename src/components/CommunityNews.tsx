import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, ArrowRight, Users, MapPin, Phone, Mail, Share2, Bookmark, Plus, Minus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const newsItems = [
  {
    id: 1,
    title: "Community Health Fair This Saturday",
    description: "Free health screenings, vaccinations, and wellness resources. All ages welcome! Join us for a day of health education and community wellness.",
    date: "March 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Cypress Community Center Main Hall",
    address: "123 Community Drive, Cypress, TX 77433",
    type: "Event",
    category: "Health",
    maxParticipants: 200,
    currentParticipants: 156,
    registrationRequired: true,
    contactPhone: "(555) 123-4567",
    contactEmail: "healthfair@cypresscommunity.org",
    details: [
      "Free blood pressure screenings",
      "Flu shots available",
      "Nutrition counseling",
      "Fitness demonstrations",
      "Children's health activities",
      "Mental health resources"
    ],
    isRecurring: false
  },
  {
    id: 2,
    title: "New After-School Program Registration Open",
    description: "Safe, educational after-school care for elementary students. Limited spots available. STEM activities, homework help, and creative arts included.",
    date: "March 20, 2024",
    time: "Rolling Enrollment",
    location: "Cypress Youth Development Center",
    address: "456 Youth Way, Cypress, TX 77433",
    type: "Program",
    category: "Education",
    maxParticipants: 50,
    currentParticipants: 32,
    registrationRequired: true,
    contactPhone: "(555) 234-5678",
    contactEmail: "youth@cypresscommunity.org",
    details: [
      "Homework assistance",
      "STEM activities",
      "Creative arts & crafts",
      "Physical activities",
      "Social skills development",
      "Healthy snacks provided"
    ],
    isRecurring: true
  },
  {
    id: 3,
    title: "Food Pantry Volunteers Needed",
    description: "Help us serve our Cypress community! Flexible volunteer shifts available throughout the week. Make a difference in someone's life.",
    date: "Ongoing",
    time: "Various Shifts",
    location: "Cypress Community Food Pantry",
    address: "789 Food Drive, Cypress, TX 77433",
    type: "Volunteer",
    category: "Community",
    maxParticipants: null,
    currentParticipants: 45,
    registrationRequired: false,
    contactPhone: "(555) 345-6789",
    contactEmail: "volunteer@cypressfoodpantry.org",
    details: [
      "Food sorting and packaging",
      "Client assistance",
      "Delivery drivers needed",
      "Administrative support",
      "Special event volunteers",
      "Training provided"
    ],
    isRecurring: true
  },
  {
    id: 4,
    title: "Senior Technology Workshop Series",
    description: "Learn computer basics, internet safety, and how to connect with family online. Perfect for seniors new to technology.",
    date: "March 25, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Cypress Learning Center",
    address: "321 Learning Lane, Cypress, TX 77433",
    type: "Workshop",
    category: "Education",
    maxParticipants: 25,
    currentParticipants: 18,
    registrationRequired: true,
    contactPhone: "(555) 456-7890",
    contactEmail: "seniors@cypresslearning.org",
    details: [
      "Computer basics",
      "Internet safety",
      "Social media",
      "Video calling",
      "Online shopping",
      "Device troubleshooting"
    ],
    isRecurring: true
  },
];

const upcomingEvents = [
  {
    title: "Community Garden Cleanup",
    date: "Mar 18",
    participants: "25+ volunteers",
    location: "Cypress Community Garden",
    time: "9:00 AM - 12:00 PM"
  },
  {
    title: "Job Fair & Career Expo",
    date: "Mar 22",
    participants: "30+ employers",
    location: "Cypress Convention Center",
    time: "10:00 AM - 4:00 PM"
  },
  {
    title: "Family Fun Day Festival",
    date: "Mar 28",
    participants: "All families",
    location: "Cypress Town Square",
    time: "11:00 AM - 6:00 PM"
  },
];

export const CommunityNews = () => {
  const { user } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState<typeof newsItems[0] | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    eventId: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const handleEventClick = (event: typeof newsItems[0]) => {
    setSelectedEvent(event);
  };

  const handleRegister = (event: typeof newsItems[0]) => {
    if (!user) {
      // Trigger auth modal if not logged in
      const authButton = document.querySelector('[data-auth-trigger]') as HTMLButtonElement;
      if (authButton) authButton.click();
      return;
    }
    
    setRegistrationData(prev => ({ ...prev, eventId: event.id.toString() }));
    setShowRegistration(true);
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit the registration to your backend
    console.log('Registration submitted:', registrationData);
    
    // Reset form and close modal
    setRegistrationData({ name: "", email: "", phone: "", notes: "", eventId: "" });
    setShowRegistration(false);
    
    // Show success message
    alert('Registration submitted successfully!');
  };

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit the newsletter signup to your backend
    console.log('Newsletter signup:', newsletterEmail);
    
    // Reset form and show success message
    setNewsletterEmail("");
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleShare = (event: typeof newsItems[0]) => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${event.title} - ${event.description}`);
    }
  };

  const getEventStatus = (event: typeof newsItems[0]) => {
    if (!event.maxParticipants) return "Open";
    if (event.currentParticipants >= event.maxParticipants) return "Full";
    if (event.currentParticipants >= event.maxParticipants * 0.8) return "Limited";
    return "Open";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Full": return "bg-red-100 text-red-800";
      case "Limited": return "bg-yellow-100 text-yellow-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <>
      <section id="community-news" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Cypress Community News & Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with what's happening in Cypress. From upcoming events to new programs, 
              there's always something exciting going on in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Section */}
            <div className="lg:col-span-2 space-y-6">
              {newsItems.map((item) => {
                const status = getEventStatus(item);
                return (
                  <Card 
                    key={item.id} 
                    className={`shadow-card hover:shadow-feature transition-all duration-300 bg-gradient-card border-border cursor-pointer transform hover:-translate-y-1 ${
                      hoveredEvent === item.id ? 'ring-2 ring-primary ring-opacity-50' : ''
                    }`}
                    onMouseEnter={() => setHoveredEvent(item.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                    onClick={() => handleEventClick(item)}
                  >
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
                        {item.maxParticipants && (
                          <Badge className={getStatusColor(status)}>
                            {status}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
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
                        
                        {item.maxParticipants && (
                          <div className="flex items-center text-muted-foreground">
                            <Users className="w-4 h-4 mr-2 text-community-purple" />
                            <span className="text-sm">
                              {item.currentParticipants}/{item.maxParticipants} participants
                            </span>
                          </div>
                        )}
                        
                        <div className="flex gap-2 pt-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEventClick(item);
                            }}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          
                          {item.registrationRequired && (
                            <Button 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRegister(item);
                              }}
                              disabled={status === "Full"}
                            >
                              {status === "Full" ? "Full" : "Register"}
                            </Button>
                          )}
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(item);
                            }}
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Events */}
              <Card className="shadow-card bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-community-blue" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer group"
                      onClick={() => {
                        // Scroll to events section
                        document.getElementById('community-news')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div>
                        <div className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                          {event.title}
                        </div>
                        <div className="text-xs text-muted-foreground">{event.participants}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-community-blue">{event.date}</div>
                      </div>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      document.getElementById('community-news')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card className="shadow-card bg-gradient-accent border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-accent-foreground flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Cypress Community Impact
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
              <Card className="shadow-card bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Stay Connected</CardTitle>
                  <CardDescription>
                    Get the latest Cypress community news and updates delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSignup} className="space-y-3">
                    <div>
                      <Label htmlFor="newsletter-email" className="sr-only">Email</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" variant="community" size="sm" className="w-full">
                      Subscribe to Newsletter
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedEvent.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-community-blue" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-community-green" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-community-orange" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-muted-foreground">{selectedEvent.address}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {selectedEvent.maxParticipants && (
                      <div>
                        <h4 className="font-medium mb-2">Registration Status</h4>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(getEventStatus(selectedEvent))}>
                            {getEventStatus(selectedEvent)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {selectedEvent.currentParticipants}/{selectedEvent.maxParticipants} participants
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-community-green" />
                          <span>{selectedEvent.contactPhone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-community-blue" />
                          <span>{selectedEvent.contactEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Event Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedEvent.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {selectedEvent.registrationRequired && (
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        setSelectedEvent(null);
                        handleRegister(selectedEvent);
                      }}
                      disabled={getEventStatus(selectedEvent) === "Full"}
                    >
                      {getEventStatus(selectedEvent) === "Full" ? "Event Full" : "Register Now"}
                    </Button>
                  )}
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

      {/* Registration Modal */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Event Registration</DialogTitle>
            <DialogDescription>
              Please provide your information to register for this event.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRegistrationSubmit} className="space-y-4">
            <div>
              <Label htmlFor="reg-name">Full Name</Label>
              <Input
                id="reg-name"
                value={registrationData.name}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="reg-email">Email</Label>
              <Input
                id="reg-email"
                type="email"
                value={registrationData.email}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="reg-phone">Phone</Label>
              <Input
                id="reg-phone"
                value={registrationData.phone}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="reg-notes">Additional Notes</Label>
              <Textarea
                id="reg-notes"
                value={registrationData.notes}
                onChange={(e) => setRegistrationData(prev => ({ ...prev, notes: e.target.value }))}
                rows={3}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Submit Registration
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowRegistration(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};