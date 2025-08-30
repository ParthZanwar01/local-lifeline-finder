import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Send } from "lucide-react";
import { useResources } from "@/hooks/useResources";

const categories = [
  "Food Assistance",
  "Education", 
  "Senior Care",
  "Youth Services",
  "Health & Wellness",
  "Employment",
  "Housing",
  "Transportation",
  "Legal Services",
  "Mental Health",
  "Other"
];

export const AddResourceForm = () => {
  const { submitResource } = useResources();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    hours: "",
    contact_person: "",
    additional_info: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitResource(formData);

    if (result.success) {
      // Reset form
      setFormData({
        name: "",
        category: "",
        description: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        hours: "",
        contact_person: "",
        additional_info: ""
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="add-resource" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Add a Community Resource
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Know of a valuable community resource that's not listed? Help us expand our directory 
            by sharing information about services that make our community stronger.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-feature bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <Plus className="w-6 h-6 mr-3 text-community-green" />
                Resource Submission Form
              </CardTitle>
              <CardDescription className="text-base">
                Please provide as much detail as possible to help community members find and access this resource.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Resource Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g., Community Food Bank"
                      required
                      className="shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">
                      Category *
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="shadow-soft">
                        <SelectValue placeholder="Select a category" />
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe the services provided, who it serves, and any important details..."
                    rows={4}
                    required
                    className="shadow-soft resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Address
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="123 Main Street, City, State"
                      className="shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="shadow-soft"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="contact@resource.org"
                      className="shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium">
                      Website
                    </Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="www.resource.org"
                      className="shadow-soft"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="hours" className="text-sm font-medium">
                      Hours of Operation
                    </Label>
                    <Input
                      id="hours"
                      value={formData.hours}
                      onChange={(e) => handleInputChange("hours", e.target.value)}
                      placeholder="Mon-Fri 9AM-5PM"
                      className="shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson" className="text-sm font-medium">
                      Contact Person
                    </Label>
                    <Input
                      id="contactPerson"
                      value={formData.contact_person}
                      onChange={(e) => handleInputChange("contact_person", e.target.value)}
                      placeholder="Jane Doe, Program Director"
                      className="shadow-soft"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additional_info}
                    onChange={(e) => handleInputChange("additional_info", e.target.value)}
                    placeholder="Any additional details, requirements, or special programs..."
                    rows={3}
                    className="shadow-soft resize-none"
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All submissions will be reviewed by our team before being added to the directory. 
                    We may contact you for additional information or clarification.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting || !formData.name || !formData.category || !formData.description}
                  className="w-full text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Resource
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};