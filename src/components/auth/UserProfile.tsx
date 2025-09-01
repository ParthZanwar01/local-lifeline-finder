import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { Edit, Save, X, User, Mail, Phone, MapPin, Calendar, Shield } from "lucide-react";

export const UserProfile = () => {
  const { profile, updateProfile, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editData, setEditData] = useState({
    full_name: profile?.full_name || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
    bio: profile?.bio || "",
  });

  const handleSave = async () => {
    setIsLoading(true);
    const result = await updateProfile(editData);
    
    if (result.success) {
      setIsEditing(false);
    }
    
    setIsLoading(false);
  };

  const handleCancel = () => {
    setEditData({
      full_name: profile?.full_name || "",
      phone: profile?.phone || "",
      address: profile?.address || "",
      bio: profile?.bio || "",
    });
    setIsEditing(false);
  };

  if (!profile) return null;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "moderator":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button variant="outline" onClick={signOut}>
          Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profile.avatar_url || ""} />
                <AvatarFallback className="text-2xl">
                  {getInitials(profile.full_name || profile.email)}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{profile.full_name || "User"}</CardTitle>
            <CardDescription>{profile.email}</CardDescription>
            <Badge className={`mt-2 ${getRoleColor(profile.role)}`}>
              <Shield className="w-3 h-3 mr-1" />
              {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Member since {new Date(profile.created_at).toLocaleDateString()}
              </div>
              {profile.last_login && (
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last login {new Date(profile.last_login).toLocaleDateString()}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences
                </CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm" disabled={isLoading}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="full_name"
                    value={editData.full_name}
                    onChange={(e) => setEditData(prev => ({ ...prev, full_name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                ) : (
                  <div className="flex items-center p-3 bg-muted rounded-md">
                    <User className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.full_name || "Not provided"}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center p-3 bg-muted rounded-md">
                  <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                  {profile.email}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={editData.phone}
                    onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <div className="flex items-center p-3 bg-muted rounded-md">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.phone || "Not provided"}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Input
                    id="address"
                    value={editData.address}
                    onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your address"
                  />
                ) : (
                  <div className="flex items-center p-3 bg-muted rounded-md">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    {profile.address || "Not provided"}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea
                  id="bio"
                  value={editData.bio}
                  onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell us about yourself..."
                  rows={3}
                />
              ) : (
                <div className="p-3 bg-muted rounded-md">
                  {profile.bio || "No bio provided"}
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Account Status</Label>
              <div className="flex items-center gap-2">
                <Badge variant={profile.is_verified ? "default" : "secondary"}>
                  {profile.is_verified ? "Verified" : "Unverified"}
                </Badge>
                {!profile.is_verified && (
                  <span className="text-sm text-muted-foreground">
                    Check your email to verify your account
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
