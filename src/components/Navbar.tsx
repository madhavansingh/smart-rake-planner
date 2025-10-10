import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  FileText,
  Warehouse,
  BarChart3,
  User,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "@/context/theme";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/rakes", label: "Rake Plans", icon: Package },
    { path: "/orders", label: "Orders", icon: FileText },
    { path: "/stockyards", label: "Stockyards", icon: Warehouse },
    { path: "/reports", label: "Reports", icon: BarChart3 },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-contain shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold">Smart Rake Planner</h1>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                AI-Powered Analytics
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[hsl(var(--secondary))]/20 text-[hsl(var(--secondary))]"
                      : "hover:bg-[hsl(var(--muted))]/50 hover:text-[hsl(var(--secondary))]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Button onClick={toggleTheme} variant="ghost">
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Button
              onClick={handleLogout}
              variant="ghost"
              className="hidden md:flex hover:text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[hsl(var(--foreground))]"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[hsl(var(--secondary))]/20 text-[hsl(var(--secondary))]"
                      : "hover:bg-[hsl(var(--muted))]/50 hover:text-[hsl(var(--secondary))]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="flex items-center justify-center text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]/10"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
