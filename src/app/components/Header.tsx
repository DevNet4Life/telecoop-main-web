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
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Red top accent line */}
      <div className="h-1 bg-primary w-full" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-[auto_1fr_auto] h-16 items-center gap-8">

          {/* Logo */}
          <div className="cursor-pointer flex-shrink-0" onClick={() => onNavigate("home")}>
            <img src={logo} alt="TeleCoop" className="h-9 w-auto" />
          </div>

          {/* Nav — centered */}
          <nav className="hidden lg:flex items-center justify-center gap-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 group ${
                  currentPage === item.id ? "text-primary" : "text-slate-500 hover:text-primary"
                }`}
              >
                {item.name}
                {/* Active underline */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-transform duration-200 origin-center ${
                  currentPage === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </button>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onNavigate("login")}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
            >
              <LogIn className="h-4 w-4" /> Login
            </button>
            <div className="w-px h-5 bg-slate-200" />
            <Button
              size="sm"
              onClick={() => onNavigate("member-inquiry")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-bold shadow shadow-primary/30"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-2">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }}
                className={`text-left py-3 border-b border-slate-50 text-sm font-semibold transition-colors ${
                  currentPage === item.id ? "text-primary" : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => { onNavigate("login"); setIsMobileMenuOpen(false); }}
              className="w-full border-primary text-primary hover:bg-primary hover:text-white gap-2"
            >
              <LogIn className="h-4 w-4" /> Member Login
            </Button>
            <Button
              onClick={() => { onNavigate("member-inquiry"); setIsMobileMenuOpen(false); }}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-bold"
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}