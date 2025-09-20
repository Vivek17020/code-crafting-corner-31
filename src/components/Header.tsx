import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const categories = [
    "Home", "Business", "Education", "General", 
    "Politics", "Science", "Sports", "Technology", "World"
  ];

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
              TB
            </div>
            <h1 className="text-xl font-bold text-primary">TheBulletinBriefs</h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Enable Notifications
            </Button>
            <Button size="sm">
              Go Premium
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>

        {/* Category Navigation */}
        <nav className="py-2">
          <div className="flex space-x-6 overflow-x-auto">
            {categories.map((category, index) => (
              <Button 
                key={category}
                variant={index === 0 ? "default" : "ghost"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;