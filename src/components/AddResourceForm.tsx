import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Send, Upload, X, MapPin, Clock, DollarSign, Users, Shield } from "lucide-react";
import { useResources } from "@/hooks/useResources";
import { useAuth } from "@/hooks/useAuth";

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
  "Emergency Services",
  "Community Centers",
  "Religious Organizations",
  "Other"
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
  "Italian",
  "Portuguese",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Russian",
  "Other"
];

export const AddResourceForm = () => {
  const { submitResource } = useResources();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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
    additional_info: "",
    cost: "",
    eligibility_requirements: "",
    emergency_contact: "",
    accessibility_features: [] as string[],
    languages: [] as string[],
    tags: [] as string[],
    image_url: "",
  });

  const [newTag, setNewTag] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      // Handle not logged in
      return;
    }

    setIsSubmitting(true);

    const result = await submitResource({
      ...formData,
      submitted_by: user.id,
    });

    if (result.success) {
      // Reset form and go back to step 1
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
        additional_info: "",
        cost: "",
        eligibility_requirements: "",
        emergency_contact: "",
        accessibility_features: [],
        languages: [],
        tags: [],
        image_url: "",
      });
      setCurrentStep(1);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
  };

  const toggleAccessibilityFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      accessibility_features: prev.accessibility_features.includes(feature)
        ? prev.accessibility_features.filter(f => f !== feature)
        : [...prev.accessibility_features, feature]
    }));
  };

  const toggleLanguage = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.name && formData.category && formData.description;
      case 2:
        return formData.address || formData.phone || formData.email || formData.website;
      case 3:
        return true; // Optional step
      default:
        return false;
    }
  };

  if (!user) {
    return (
      <section id="add-resource" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-feature bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Sign In Required
                </CardTitle>
                <CardDescription>
                  You need to be signed in to add community resources.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg">
                  Sign In to Continue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-feature bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <Plus className="w-6 h-6 mr-3 text-community-green" />
                Resource Submission Form
              </CardTitle>
              <CardDescription className="text-base">
                Please provide as much detail as possible to help community members find and access this resource.
              </CardDescription>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-between mt-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        currentStep > step ? "bg-primary" : "bg-muted"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="tags" className="text-sm font-medium">
                        Tags
                      </Label>
                      <div className="flex gap-2 mb-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag..."
                          className="flex-1"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <Button type="button" onClick={addTag} variant="outline" size="sm">
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact & Location */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-sm font-medium flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
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
                        <Label htmlFor="hours" className="text-sm font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
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
                  </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="cost" className="text-sm font-medium flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Cost
                        </Label>
                        <Input
                          id="cost"
                          value={formData.cost}
                          onChange={(e) => handleInputChange("cost", e.target.value)}
                          placeholder="Free, $10, Sliding scale"
                          className="shadow-soft"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact" className="text-sm font-medium">
                          Emergency Contact
                        </Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergency_contact}
                          onChange={(e) => handleInputChange("emergency_contact", e.target.value)}
                          placeholder="24/7 hotline number"
                          className="shadow-soft"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eligibilityRequirements" className="text-sm font-medium">
                        Eligibility Requirements
                      </Label>
                      <Textarea
                        id="eligibilityRequirements"
                        value={formData.eligibility_requirements}
                        onChange={(e) => handleInputChange("eligibility_requirements", e.target.value)}
                        placeholder="Age restrictions, income requirements, residency requirements..."
                        rows={3}
                        className="shadow-soft resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Accessibility Features
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {accessibilityFeatures.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.accessibility_features.includes(feature)}
                              onCheckedChange={() => toggleAccessibilityFeature(feature)}
                            />
                            <Label htmlFor={feature} className="text-sm">{feature}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Languages Available
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {languages.map((language) => (
                          <div key={language} className="flex items-center space-x-2">
                            <Checkbox
                              id={language}
                              checked={formData.languages.includes(language)}
                              onCheckedChange={() => toggleLanguage(language)}
                            />
                            <Label htmlFor={language} className="text-sm">{language}</Label>
                          </div>
                        ))}
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
                        placeholder="Any additional details, special programs, or notes..."
                        rows={3}
                        className="shadow-soft resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  
                  {currentStep < 3 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!isStepValid(currentStep)}
                      className="ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      disabled={isSubmitting || !isStepValid(currentStep)}
                      className="ml-auto text-lg"
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
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All submissions will be reviewed by our team before being added to the directory. 
                    We may contact you for additional information or clarification.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};