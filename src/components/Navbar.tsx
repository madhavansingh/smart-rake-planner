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
    <nav className="bg-card/95 backdrop-blur-xl text-foreground shadow-premium-xl border-b border-secondary/20 sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Rake Mind Logo" 
              className="w-10 h-10 rounded-lg object-contain shadow-ai-glow group-hover:scale-110 transition-transform"
            />
            <div>
              <h1 className="text-xl font-montserrat font-bold text-gradient-gold">
                Smart Rake Planner
              </h1>
              <p className="text-xs text-secondary/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                AI-Powered Analytics
              </p>
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-secondary/20 to-cyan-500/20 text-secondary shadow-md border border-secondary/30'
                      : 'text-foreground/70 hover:bg-secondary/10 hover:text-secondary'
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
            className="text-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all"
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
