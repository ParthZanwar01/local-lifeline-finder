import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Resource {
  id: string;
  name: string;
  category: string;
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  contact_person?: string;
  additional_info?: string;
  tags?: string[];
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}

export const useResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchResources = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResources(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch resources';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitResource = async (resourceData: Omit<Resource, 'id' | 'is_approved' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await supabase
        .from('resources')
        .insert({
          ...resourceData,
          is_approved: false // Requires admin approval
        });

      if (error) throw error;

      toast({
        title: "Resource Submitted Successfully!",
        description: "Thank you for helping grow our community resource hub. Your submission will be reviewed and added to our directory.",
      });

      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit resource';
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return { success: false, error: errorMessage };
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return {
    resources,
    loading,
    error,
    fetchResources,
    submitResource
  };
};