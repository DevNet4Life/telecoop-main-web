import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/2b239bc1530ecd7847a77bdf31e9bbbadc6aaf23.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Membership", id: "membership" },
    { name: "Contact Us", id: "contact" },
    { name: "News", id: "news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img src={logo} alt="TeleCoop" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors hover:text-primary ${
                  currentPage === item.id
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate("login")}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Member Login
            </Button>
            <Button 
              onClick={() => onNavigate("member-inquiry")}
              className="bg-primary hover:bg-primary/90"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left transition-colors hover:text-primary ${
                    currentPage === item.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* Mobile Action Buttons */}
              <div className="space-y-2 mt-4">
                <Button 
                  variant="outline"
                  onClick={() => {
                    onNavigate("login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Member Login
                </Button>
                <Button 
                  onClick={() => {
                    onNavigate("member-inquiry");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}