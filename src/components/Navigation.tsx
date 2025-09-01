import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/auth/AuthModal";
import { Search, Menu, User, LogOut, Settings, Heart, MapPin, Calendar, Plus, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { user, profile, signOut } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600; // Approximate hero section height
      setIsScrolled(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to resource directory and trigger search
      const directory = document.getElementById('resource-directory');
      if (directory) {
        directory.scrollIntoView({ behavior: 'smooth' });
        // You can implement search functionality here
      }
    }
  };

  const getInitials = (name: string) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "moderator":
        return "bg-brand-teal/20 text-brand-teal";
      default:
        return "bg-brand-coral/20 text-brand-coral";
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500 ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-brand-teal to-brand-teal-dark' 
                    : 'bg-transparent'
                }`}>
                  <Heart className={`w-5 h-5 transition-colors duration-500 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <span className={`font-bold text-xl transition-colors duration-500 ${
                  isScrolled ? 'text-brand-gray-heading' : 'text-white'
                }`}>
                  Cypress Community Hub
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  isScrolled ? 'text-brand-gray-body hover:text-brand-teal' : 'text-white hover:text-white'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-teal' : 'bg-white'
                }`}></span>
              </Link>
              <Link 
                to="/resources" 
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  isScrolled ? 'text-brand-gray-body hover:text-brand-teal' : 'text-white hover:text-white'
                }`}
              >
                Resources
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-teal' : 'bg-white'
                }`}></span>
              </Link>
              <Link 
                to="/news" 
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  isScrolled ? 'text-brand-gray-body hover:text-brand-teal' : 'text-white hover:text-white'
                }`}
              >
                News & Events
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-teal' : 'bg-white'
                }`}></span>
              </Link>
              <Link 
                to="/submit-resource" 
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  isScrolled ? 'text-brand-gray-body hover:text-brand-teal' : 'text-white hover:text-white'
                }`}
              >
                Submit Resource
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-teal' : 'bg-white'
                }`}></span>
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-all duration-500 relative group ${
                  isScrolled ? 'text-brand-gray-body hover:text-brand-teal' : 'text-white hover:text-white'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-teal' : 'bg-white'
                }`}></span>
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-500 ${
                  isScrolled ? 'text-brand-gray-body' : 'text-white'
                }`} />
                <Input
                  placeholder="Search resources, events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-white/80 backdrop-blur-sm border-white/30 focus:bg-white focus:border-brand-teal/50 focus:ring-brand-teal/20' 
                      : 'bg-transparent border-white/40 text-white placeholder-white/90 focus:border-white/60 focus:ring-white/20'
                  }`}
                />
              </form>
            </div>

            {/* Right Side - Auth/User */}
            <div className="flex items-center space-x-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={`relative h-10 w-10 rounded-full transition-all duration-500 ${
                      isScrolled 
                        ? 'bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:border-white/50' 
                        : 'bg-transparent border border-white/40 hover:bg-white/20 hover:border-white/60'
                    }`}>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={profile?.avatar_url || ""} />
                        <AvatarFallback className="bg-brand-teal/20 text-brand-teal">{getInitials(profile?.full_name || "")}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-xl border border-white/30 shadow-xl" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium text-brand-gray-heading">{profile?.full_name || "User"}</p>
                        <p className="text-xs text-brand-gray-body">{profile?.email}</p>
                        <Badge className={`w-fit mt-1 ${getRoleColor(profile?.role || "user")}`}>
                          {profile?.role?.charAt(0).toUpperCase() + profile?.role?.slice(1) || "User"}
                        </Badge>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem className="hover:bg-brand-teal/10 focus:bg-brand-teal/10">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-brand-teal/10 focus:bg-brand-teal/10">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>My Resources</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-brand-teal/10 focus:bg-brand-teal/10">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>My Events</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-brand-teal/10 focus:bg-brand-teal/10">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem onClick={signOut} className="hover:bg-red-50 focus:bg-red-50 text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsAuthModalOpen(true)}
                    className={`transition-all duration-500 ${
                      isScrolled 
                        ? 'border-brand-teal/30 text-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal/50 bg-white/60 backdrop-blur-sm' 
                        : 'border-white/40 text-white hover:bg-white/20 hover:border-white/60 bg-transparent'
                    }`}
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => setIsAuthModalOpen(true)}
                    className={`transition-all duration-500 ${
                      isScrolled 
                        ? 'bg-brand-teal text-white hover:bg-brand-teal-dark shadow-lg hover:shadow-xl' 
                        : 'bg-transparent text-white hover:bg-white/20 border border-white/40 hover:border-white/60'
                    }`}
                  >
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className={`md:hidden transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:border-white/50' 
                      : 'bg-transparent border border-white/40 hover:bg-white/20 hover:border-white/60'
                  }`}>
                    <Menu className={`h-5 w-5 transition-colors duration-500 ${
                      isScrolled ? 'text-brand-gray-body' : 'text-white'
                    }`} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white/90 backdrop-blur-xl border-l border-white/30">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link to="/resources" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-brand-teal/10 transition-colors">
                      <MapPin className="w-5 h-5" />
                      <span>Resources</span>
                    </Link>
                    <Link to="/news" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-brand-teal/10 transition-colors">
                      <Calendar className="w-5 h-5" />
                      <span>News & Events</span>
                    </Link>
                    <Link to="/submit-resource" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 hover:border-red-200 text-red-600">
                      <Plus className="w-5 h-5" />
                      <span>Submit Resource</span>
                    </Link>
                    <Link to="/about" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-brand-teal/10 transition-colors">
                      <Users className="w-5 h-5" />
                      <span>About</span>
                    </Link>
                    
                    {user ? (
                      <>
                        <div className="border-t border-white/20 pt-4">
                          <div className="flex items-center space-x-3 p-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={profile?.avatar_url || ""} />
                              <AvatarFallback className="bg-brand-teal/20 text-brand-teal">{getInitials(profile?.full_name || "")}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium text-brand-gray-heading">{profile?.full_name || "User"}</p>
                              <p className="text-xs text-brand-gray-body">{profile?.email}</p>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" onClick={signOut} className="w-full border-white/30 hover:bg-red-50 hover:border-red-200 text-red-600">
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      <div className="border-t border-white/20 pt-4 space-y-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsAuthModalOpen(true)}
                          className="w-full border-brand-teal/30 text-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal/50 bg-white/60 backdrop-blur-sm"
                        >
                          Sign In
                        </Button>
                        <Button
                          onClick={() => setIsAuthModalOpen(true)}
                          className="w-full bg-brand-teal text-white hover:bg-brand-teal-dark shadow-lg"
                        >
                          Sign Up
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};
