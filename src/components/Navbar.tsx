import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FileText, Warehouse, BarChart3, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/rakes', label: 'Rake Plans', icon: Package },
    { path: '/orders', label: 'Orders', icon: FileText },
    { path: '/stockyards', label: 'Stockyards', icon: Warehouse },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-premium-lg border-b border-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-ai-glow group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-montserrat font-bold text-gradient-gold">
                Smart Rake Planner
              </h1>
              <p className="text-xs text-primary-foreground/70">AI-Powered Logistics</p>
            </div>
          </Link>

          {/* Navigation Links */}
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
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="text-primary-foreground hover:bg-destructive hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
