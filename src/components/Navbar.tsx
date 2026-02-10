import { User, LogOut } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'contact' | 'careers' | 'apply' | 'login') => void;
  isLoggedIn: boolean;
  onLogout?: () => void;
}

export function Navbar({ onNavigate, isLoggedIn, onLogout }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => onNavigate('home')}
          >
            Pro Technology
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {['Privacy', 'Terms', 'Contact', 'Careers'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase() as any)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm font-medium text-slate-900 dark:text-white">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="hidden sm:inline">Account</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (onLogout) onLogout();
                    else onNavigate('home');
                  }}
                  className="text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => onNavigate('login')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}