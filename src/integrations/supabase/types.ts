export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'admin' | 'moderator'
          phone: string | null
          address: string | null
          bio: string | null
          created_at: string
          updated_at: string
          last_login: string | null
          is_verified: boolean
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'moderator'
          phone?: string | null
          address?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
          is_verified?: boolean
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'admin' | 'moderator'
          phone?: string | null
          address?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
          is_verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      resources: {
        Row: {
          id: string
          name: string
          category: string
          description: string
          address: string | null
          phone: string | null
          email: string | null
          website: string | null
          hours: string | null
          contact_person: string | null
          additional_info: string | null
          tags: string[] | null
          is_approved: boolean
          is_featured: boolean
          rating: number | null
          review_count: number
          created_at: string
          updated_at: string
          submitted_by: string | null
          approved_by: string | null
          approved_at: string | null
          image_url: string | null
          coordinates: { lat: number; lng: number } | null
          accessibility_features: string[] | null
          languages: string[] | null
          eligibility_requirements: string | null
          cost: string | null
          emergency_contact: string | null
        }
        Insert: {
          id?: string
          name: string
          category: string
          description: string
          address?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          hours?: string | null
          contact_person?: string | null
          additional_info?: string | null
          tags?: string[] | null
          is_approved?: boolean
          is_featured?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
          submitted_by?: string | null
          approved_by?: string | null
          approved_at?: string | null
          image_url?: string | null
          coordinates?: { lat: number; lng: number } | null
          accessibility_features?: string[] | null
          languages?: string[] | null
          eligibility_requirements?: string | null
          cost?: string | null
          emergency_contact?: string | null
        }
        Update: {
          id?: string
          name?: string
          category?: string
          description?: string
          address?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          hours?: string | null
          contact_person?: string | null
          additional_info?: string | null
          tags?: string[] | null
          is_approved?: boolean
          is_featured?: boolean
          rating?: number | null
          review_count?: number
          created_at?: string
          updated_at?: string
          submitted_by?: string | null
          approved_by?: string | null
          approved_at?: string | null
          image_url?: string | null
          coordinates?: { lat: number; lng: number } | null
          accessibility_features?: string[] | null
          languages?: string[] | null
          eligibility_requirements?: string | null
          cost?: string | null
          emergency_contact?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resources_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resources_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          start_date: string
          end_date: string
          start_time: string | null
          end_time: string | null
          location: string
          address: string | null
          coordinates: { lat: number; lng: number } | null
          category: string
          type: 'event' | 'program' | 'workshop' | 'volunteer' | 'meeting'
          is_recurring: boolean
          recurrence_pattern: string | null
          max_participants: number | null
          current_participants: number
          registration_required: boolean
          registration_deadline: string | null
          cost: string | null
          contact_email: string | null
          contact_phone: string | null
          website: string | null
          image_url: string | null
          tags: string[] | null
          is_approved: boolean
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          start_date: string
          end_date: string
          start_time?: string | null
          end_time?: string | null
          location: string
          address?: string | null
          coordinates?: { lat: number; lng: number } | null
          category: string
          type?: 'event' | 'program' | 'workshop' | 'volunteer' | 'meeting'
          is_recurring?: boolean
          recurrence_pattern?: string | null
          max_participants?: number | null
          current_participants?: number
          registration_required?: boolean
          registration_deadline?: string | null
          cost?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          website?: string | null
          image_url?: string | null
          tags?: string[] | null
          is_approved?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          start_date?: string
          end_date?: string
          start_time?: string | null
          end_time?: string | null
          location?: string
          address?: string | null
          coordinates?: { lat: number; lng: number } | null
          category?: string
          type?: 'event' | 'program' | 'workshop' | 'volunteer' | 'meeting'
          is_recurring?: boolean
          recurrence_pattern?: string | null
          max_participants?: number | null
          current_participants?: number
          registration_required?: boolean
          registration_deadline?: string | null
          cost?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          website?: string | null
          image_url?: string | null
          tags?: string[] | null
          is_approved?: boolean
          created_by?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      resource_reviews: {
        Row: {
          id: string
          resource_id: string
          user_id: string
          rating: number
          review_text: string | null
          is_verified_visit: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          resource_id: string
          user_id: string
          rating: number
          review_text?: string | null
          is_verified_visit?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          resource_id?: string
          user_id?: string
          rating?: number
          review_text?: string | null
          is_verified_visit?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resource_reviews_resource_id_fkey"
            columns: ["resource_id"]
            isOneToOne: false
            referencedRelation: "resources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resource_reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      event_registrations: {
        Row: {
          id: string
          event_id: string
          user_id: string
          registration_date: string
          status: 'registered' | 'attended' | 'cancelled' | 'waitlist'
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          user_id: string
          registration_date?: string
          status?: 'registered' | 'attended' | 'cancelled' | 'waitlist'
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          user_id?: string
          registration_date?: string
          status?: 'registered' | 'attended' | 'cancelled' | 'waitlist'
          notes?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          icon: string | null
          color: string | null
          parent_id: string | null
          is_active: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      newsletters: {
        Row: {
          id: string
          email: string
          is_active: boolean
          preferences: Json | null
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          id?: string
          email: string
          is_active?: boolean
          preferences?: Json | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          is_active?: boolean
          preferences?: Json | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
