import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, MapPin, Phone, Clock, Globe, Star, Users, Heart, Map, List, GitCompare, Download, Share2, Bookmark, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useResources } from "@/hooks/useResources";
import { useAuth } from "@/hooks/useAuth";
import { Label } from "@/components/ui/label";

const categories = [
  "All Categories",
  "Healthcare",
  "Housing",
  "Education",
  "Food Assistance",
  "Mental Health",
  "Employment",
  "Senior Services",
  "Youth Programs",
  "Emergency Services",
  "Transportation",
  "Legal Services",
  "Community Centers",
  "Religious Organizations",
];

const serviceTypes = [
  "Free",
  "Low-cost",
  "Sliding scale",
  "Insurance accepted",
  "Medicaid/Medicare",
  "Veteran services",
  "Income-based",
  "Grant-funded"
];

const availabilityOptions = [
  "24/7",
  "Weekdays only",
  "Weekends",
  "After hours",
  "By appointment",
  "Seasonal",
  "Emergency only"
];

const accessibilityFeatures = [
  "Wheelchair Accessible",
  "Sign Language Interpreter",
  "Audio Description",
  "Large Print Materials",
  "Service Animal Friendly",
  "Accessible Parking",
  "Elevator Access",
  "Ramp Access",
  "Braille Materials",
  "Assistive Technology",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Vietnamese",
  "Chinese",
  "Korean",
  "Arabic",
  "Russian",
  "Other"
];

export const ResourceDirectory = () => {
  const { resources, loading } = useResources();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedAccessibility, setSelectedAccessibility] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [maxDistance, setMaxDistance] = useState([50]);
  const [zipCode, setZipCode] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "compare">("grid");
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [filteredResources, setFilteredResources] = useState(resources);

  useEffect(() => {
    setFilteredResources(resources);
  }, [resources]);

  const filteredAndSortedResources = useMemo(() => {
    let filtered = resources;
    
    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Service type filter
    if (selectedServiceTypes.length > 0) {
      filtered = filtered.filter(resource =>
        resource.cost && selectedServiceTypes.some(type => 
          resource.cost?.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    // Availability filter
    if (selectedAvailability.length > 0) {
      filtered = filtered.filter(resource =>
        resource.hours && selectedAvailability.some(availability => 
          resource.hours?.toLowerCase().includes(availability.toLowerCase())
        )
      );
    }

    // Accessibility filter
    if (selectedAccessibility.length > 0) {
      filtered = filtered.filter(resource =>
        resource.accessibility_features?.some(feature => 
          selectedAccessibility.includes(feature)
        )
      );
    }

    // Language filter
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter(resource =>
        resource.languages?.some(language => 
          selectedLanguages.includes(language)
        )
      );
    }

    // Sort results
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "recent":
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case "distance":
        // Implement distance sorting when coordinates are available
        break;
      default:
        // Relevance - keep original order for now
        break;
    }

    return filtered;
  }, [resources, searchTerm, selectedCategory, selectedServiceTypes, selectedAvailability, selectedAccessibility, selectedLanguages, sortBy]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleServiceType = (type: string) => {
    setSelectedServiceTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleAvailability = (availability: string) => {
    setSelectedAvailability(prev => 
      prev.includes(availability) 
        ? prev.filter(a => a !== availability)
        : [...prev, availability]
    );
  };

  const toggleAccessibilityFeature = (feature: string) => {
    setSelectedAccessibility(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const toggleComparison = (resourceId: string) => {
    setSelectedForComparison(prev => 
      prev.includes(resourceId)
        ? prev.filter(id => id !== resourceId)
        : prev.length < 3 
          ? [...prev, resourceId]
          : prev
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedServiceTypes([]);
    setSelectedAvailability([]);
    setSelectedAccessibility([]);
    setSelectedLanguages([]);
    setMaxDistance([50]);
    setZipCode("");
    setSortBy("relevance");
  };

  const getRatingStars = (rating: number | null) => {
    if (!rating) return null;
    
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

  const getServiceTypeBadge = (cost: string | null) => {
    if (!cost) return null;
    
    const costLower = cost.toLowerCase();
    if (costLower.includes('free')) return <Badge variant="secondary" className="bg-green-100 text-green-800">Free</Badge>;
    if (costLower.includes('low-cost') || costLower.includes('low cost')) return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Low-cost</Badge>;
    if (costLower.includes('sliding')) return <Badge variant="secondary" className="bg-purple-100 text-purple-800">Sliding Scale</Badge>;
    if (costLower.includes('insurance')) return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Insurance Accepted</Badge>;
    
    return <Badge variant="outline">{cost}</Badge>;
  };

  const getAvailabilityBadge = (hours: string | null) => {
    if (!hours) return null;
    
    const hoursLower = hours.toLowerCase();
    if (hoursLower.includes('24/7') || hoursLower.includes('24/7')) return <Badge variant="secondary" className="bg-red-100 text-red-800">24/7</Badge>;
    if (hoursLower.includes('emergency')) return <Badge variant="secondary" className="bg-red-100 text-red-800">Emergency</Badge>;
    if (hoursLower.includes('appointment')) return <Badge variant="secondary" className="bg-blue-100 text-blue-800">By Appointment</Badge>;
    
    return <Badge variant="outline">{hours}</Badge>;
  };

  const printResourceList = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Cypress Community Resources</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .resource { margin-bottom: 20px; padding: 15px; border: 1px solid #ccc; }
              .name { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
              .category { color: #666; margin-bottom: 5px; }
              .description { margin-bottom: 10px; }
              .contact { font-size: 14px; color: #333; }
            </style>
          </head>
          <body>
            <h1>Cypress Community Resources</h1>
            <p>Generated on: ${new Date().toLocaleDateString()}</p>
            ${filteredAndSortedResources.map(resource => `
              <div class="resource">
                <div class="name">${resource.name}</div>
                <div class="category">${resource.category}</div>
                <div class="description">${resource.description}</div>
                <div class="contact">
                  ${resource.address ? `Address: ${resource.address}<br>` : ''}
                  ${resource.phone ? `Phone: ${resource.phone}<br>` : ''}
                  ${resource.website ? `Website: ${resource.website}<br>` : ''}
                  ${resource.hours ? `Hours: ${resource.hours}` : ''}
                </div>
              </div>
            `).join('')}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const shareResourceList = () => {
    const shareData = {
      title: 'Cypress Community Resources',
      text: `Check out these ${filteredAndSortedResources.length} community resources in Cypress, TX!`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(`${shareData.title}: ${shareData.text} ${shareData.url}`);
      // Show toast notification
    }
  };

  return (
    <>
      <section id="resource-directory" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Cypress Community Resource Directory
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the support and services you need. Search by category, location, accessibility features, or use keywords to discover resources.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              {/* Search Bar */}
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search resources, services, or keywords..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 h-12 text-lg shadow-soft"
                />
              </div>

              {/* Category Filter */}
              <div>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="h-12 shadow-soft" data-category-filter>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 shadow-soft">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="recent">Recently Added</SelectItem>
                    <SelectItem value="distance">Nearest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-background rounded-lg p-6 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Advanced Filters
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                  <Button variant="outline" size="sm" onClick={printResourceList}>
                    <Download className="w-4 h-4 mr-2" />
                    Print List
                  </Button>
                  <Button variant="outline" size="sm" onClick={shareResourceList}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Service Types */}
                <div>
                  <h4 className="font-medium mb-3">Service Type</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {serviceTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={selectedServiceTypes.includes(type)}
                          onCheckedChange={() => toggleServiceType(type)}
                        />
                        <Label htmlFor={type} className="text-sm">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium mb-3">Availability</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {availabilityOptions.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={selectedAvailability.includes(option)}
                          onCheckedChange={() => toggleAvailability(option)}
                        />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accessibility Features */}
                <div>
                  <h4 className="font-medium mb-3">Accessibility</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {accessibilityFeatures.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedAccessibility.includes(feature)}
                          onCheckedChange={() => toggleAccessibilityFeature(feature)}
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-medium mb-3">Languages</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {languages.map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox
                          id={language}
                          checked={selectedLanguages.includes(language)}
                          onCheckedChange={() => toggleLanguage(language)}
                        />
                        <Label htmlFor={language} className="text-sm">{language}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-3">Location</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zipcode" className="text-sm">Zip Code</Label>
                    <Input
                      id="zipcode"
                      placeholder="Enter zip code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm">Maximum Distance</Label>
                    <div className="px-2 mt-1">
                      <Slider
                        value={maxDistance}
                        onValueChange={setMaxDistance}
                        max={100}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center text-sm text-muted-foreground mt-2">
                        Within {maxDistance[0]} miles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View Controls and Results Count */}
          <div className="max-w-7xl mx-auto mb-6">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredAndSortedResources.length} of {resources.length} resources
              </p>
              
              <div className="flex items-center gap-4">
                {/* Comparison Mode */}
                {selectedForComparison.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {selectedForComparison.length}/3 selected
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => setShowComparison(true)}
                      disabled={selectedForComparison.length < 2}
                    >
                      <GitCompare className="w-4 h-4 mr-2" />
                      Compare
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedForComparison([])}
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                )}
                
                {/* View Toggle */}
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <List className="w-4 h-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4 mr-2" />
                    List
                  </Button>
                  <Button
                    variant={viewMode === "compare" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("compare")}
                  >
                    <GitCompare className="w-4 h-4 mr-2" />
                    Compare
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading resources...</p>
            </div>
          )}

          {/* Resource Cards */}
          {!loading && viewMode === "grid" && (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedResources.map((resource) => (
                <Card key={resource.id} className="group shadow-card hover:shadow-feature transition-all duration-300 bg-gradient-card border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {resource.name}
                      </CardTitle>
                      <div className="flex gap-1">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {resource.category}
                        </Badge>
                        {getServiceTypeBadge(resource.cost)}
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Rating */}
                    {resource.rating && getRatingStars(resource.rating)}
                    
                    {/* Service Type and Availability */}
                    <div className="flex flex-wrap gap-2">
                      {getServiceTypeBadge(resource.cost)}
                      {getAvailabilityBadge(resource.hours)}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-2">
                      {resource.address && (
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-community-blue" />
                          <span className="text-sm">{resource.address}</span>
                        </div>
                      )}
                      {resource.phone && (
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="w-4 h-4 mr-2 text-community-green" />
                          <span className="text-sm">{resource.phone}</span>
                        </div>
                      )}
                      {resource.hours && (
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-community-orange" />
                          <span className="text-sm">{resource.hours}</span>
                        </div>
                      )}
                      {resource.website && (
                        <div className="flex items-center text-muted-foreground">
                          <Globe className="w-4 h-4 mr-2 text-community-purple" />
                          <a 
                            href={`https://${resource.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            {resource.website}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Additional Info */}
                    {resource.cost && (
                      <div className="text-sm">
                        <span className="font-medium">Cost: </span>
                        <span className="text-muted-foreground">{resource.cost}</span>
                      </div>
                    )}

                    {resource.eligibility_requirements && (
                      <div className="text-sm">
                        <span className="font-medium">Eligibility: </span>
                        <span className="text-muted-foreground">{resource.eligibility_requirements}</span>
                      </div>
                    )}

                    {/* Tags */}
                    {resource.tags && resource.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => toggleComparison(resource.id)}
                      >
                        {selectedForComparison.includes(resource.id) ? (
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        ) : (
                          <GitCompare className="w-4 h-4 mr-2" />
                        )}
                        {selectedForComparison.includes(resource.id) ? 'Selected' : 'Compare'}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* List View */}
          {!loading && viewMode === "list" && (
            <div className="max-w-7xl mx-auto space-y-4">
              {filteredAndSortedResources.map((resource) => (
                <Card key={resource.id} className="shadow-card hover:shadow-feature transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{resource.name}</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="secondary">{resource.category}</Badge>
                            {getServiceTypeBadge(resource.cost)}
                          </div>
                        </div>
                        <CardDescription className="text-base mb-3">
                          {resource.description}
                        </CardDescription>
                        {resource.rating && getRatingStars(resource.rating)}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-sm space-y-1">
                          {resource.address && (
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-community-blue" />
                              <span>{resource.address}</span>
                            </div>
                          )}
                          {resource.phone && (
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-2 text-community-green" />
                              <span>{resource.phone}</span>
                            </div>
                          )}
                          {resource.hours && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-community-orange" />
                              <span>{resource.hours}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            onClick={() => toggleComparison(resource.id)}
                          >
                            {selectedForComparison.includes(resource.id) ? 'Selected' : 'Compare'}
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Map View Placeholder */}
          {!loading && showMap && (
            <div className="max-w-7xl mx-auto">
              <div className="bg-muted rounded-lg p-12 text-center">
                <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Map View</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive map showing resource locations will be implemented here.
                </p>
                <Button variant="outline" onClick={() => setShowMap(false)}>
                  Switch to List View
                </Button>
              </div>
            </div>
          )}

          {!loading && filteredAndSortedResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No resources found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or selecting a different category.
              </p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Resource Comparison Modal */}
      <Dialog open={showComparison} onOpenChange={setShowComparison}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Resource Comparison</DialogTitle>
            <DialogDescription>
              Compare up to 3 resources side by side
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedForComparison.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedForComparison.map((resourceId) => {
                  const resource = resources.find(r => r.id === resourceId);
                  if (!resource) return null;
                  
                  return (
                    <Card key={resource.id} className="p-4">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge variant="secondary">{resource.category}</Badge>
                      </CardHeader>
                      <CardContent className="p-0 space-y-3">
                        <div className="text-sm">
                          <strong>Description:</strong> {resource.description}
                        </div>
                        {resource.address && (
                          <div className="text-sm">
                            <strong>Address:</strong> {resource.address}
                          </div>
                        )}
                        {resource.phone && (
                          <div className="text-sm">
                            <strong>Phone:</strong> {resource.phone}
                          </div>
                        )}
                        {resource.hours && (
                          <div className="text-sm">
                            <strong>Hours:</strong> {resource.hours}
                          </div>
                        )}
                        {resource.cost && (
                          <div className="text-sm">
                            <strong>Cost:</strong> {resource.cost}
                          </div>
                        )}
                        {resource.rating && (
                          <div className="text-sm">
                            <strong>Rating:</strong> {getRatingStars(resource.rating)}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};