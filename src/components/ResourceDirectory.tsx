import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Phone, Clock, Globe } from "lucide-react";
import { useResources } from "@/hooks/useResources";

const categories = [
  "All Categories",
  "Food Assistance",
  "Education", 
  "Senior Care",
  "Youth Services",
  "Health & Wellness",
  "Employment",
  "Housing",
];

export const ResourceDirectory = () => {
  const { resources, loading } = useResources();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredResources, setFilteredResources] = useState(resources);

  useEffect(() => {
    setFilteredResources(resources);
  }, [resources]);

  const handleSearch = (search: string, category: string) => {
    let filtered = resources;
    
    if (category !== "All Categories") {
      filtered = filtered.filter(resource => resource.category === category);
    }
    
    if (search) {
      filtered = filtered.filter(resource =>
        resource.name.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())))
      );
    }
    
    setFilteredResources(filtered);
  };

  const updateSearch = (newSearch: string) => {
    setSearchTerm(newSearch);
    handleSearch(newSearch, selectedCategory);
  };

  const updateCategory = (newCategory: string) => {
    setSelectedCategory(newCategory);
    handleSearch(searchTerm, newCategory);
  };

  return (
    <section id="resource-directory" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Community Resource Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the support and services you need. Search by category or use keywords to discover resources.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search resources, services, or keywords..."
                value={searchTerm}
                onChange={(e) => updateSearch(e.target.value)}
                className="pl-10 h-12 text-lg shadow-soft"
              />
            </div>
            <Button 
              variant="outline" 
              className="md:w-auto w-full h-12 shadow-soft"
            >
              <Filter className="w-5 h-5 mr-2" />
              Advanced Search
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => updateCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading resources...</p>
          </div>
        )}

        {/* Resource Cards */}
        {!loading && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
            <Card key={resource.id} className="shadow-card hover:shadow-feature transition-all duration-300 bg-gradient-card border-border">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{resource.name}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {resource.category}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-community-blue" />
                  <span className="text-sm">{resource.address}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2 text-community-green" />
                  <span className="text-sm">{resource.phone}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-community-orange" />
                  <span className="text-sm">{resource.hours}</span>
                </div>
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
                
                {resource.tags && resource.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            ))}
          </div>
        )}

        {!loading && filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};