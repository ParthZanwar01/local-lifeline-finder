-- Create resources table for community resource directory
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  hours TEXT,
  contact_person TEXT,
  additional_info TEXT,
  tags TEXT[],
  is_approved BOOLEAN DEFAULT false,
  submitted_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Create policies for resources access
CREATE POLICY "Anyone can view approved resources"
ON public.resources
FOR SELECT
USING (is_approved = true);

CREATE POLICY "Anyone can submit new resources"
ON public.resources
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_resources_updated_at
    BEFORE UPDATE ON public.resources
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.resources (name, category, description, address, phone, website, hours, tags, is_approved) VALUES
('Community Food Pantry', 'Food Assistance', 'Free groceries and meals for families in need. No questions asked, just come as you are.', '123 Main Street, Community Center', '(555) 123-4567', 'www.communityfoodpantry.org', 'Mon-Fri 9AM-5PM, Sat 10AM-2PM', ARRAY['food', 'emergency', 'free'], true),
('Learning & Literacy Center', 'Education', 'Free tutoring, GED preparation, and computer classes for all ages.', '456 Education Blvd', '(555) 234-5678', 'www.learningcenter.org', 'Mon-Thu 10AM-8PM, Fri-Sat 10AM-4PM', ARRAY['education', 'tutoring', 'computer', 'GED'], true),
('Senior Support Services', 'Senior Care', 'Meal delivery, transportation, and wellness checks for seniors 65+.', '789 Elder Way', '(555) 345-6789', 'www.seniorsupport.org', '24/7 Emergency Line', ARRAY['seniors', 'meals', 'transportation', 'wellness'], true),
('Youth Development Program', 'Youth Services', 'After-school programs, mentorship, and summer camps for ages 5-18.', '321 Youth Center Dr', '(555) 456-7890', 'www.youthdev.org', 'Mon-Fri 3PM-8PM, Summer Daily 8AM-6PM', ARRAY['youth', 'mentorship', 'camps', 'after-school'], true),
('Mental Health Support Group', 'Health & Wellness', 'Free counseling services and support groups for mental health and substance abuse.', '654 Wellness Ave', '(555) 567-8901', 'www.mentalhealthsupport.org', 'Mon-Fri 9AM-6PM, Crisis Line 24/7', ARRAY['mental health', 'counseling', 'support groups', 'crisis'], true),
('Job Training & Placement', 'Employment', 'Career counseling, job training programs, and placement assistance.', '987 Career Path', '(555) 678-9012', 'www.jobtraining.org', 'Mon-Fri 8AM-5PM', ARRAY['employment', 'job training', 'career', 'placement'], true),
('Housing Assistance Program', 'Housing', 'Emergency housing, rental assistance, and homeless prevention services.', '147 Housing Way', '(555) 789-0123', 'www.housinghelp.org', 'Mon-Fri 8AM-4PM, Emergency 24/7', ARRAY['housing', 'rental assistance', 'homeless', 'emergency'], true),
('Community Health Clinic', 'Health & Wellness', 'Low-cost medical care, vaccinations, and health screenings.', '258 Health St', '(555) 890-1234', 'www.communityclinic.org', 'Mon-Fri 7AM-7PM, Sat 8AM-4PM', ARRAY['healthcare', 'medical', 'vaccinations', 'low-cost'], true);