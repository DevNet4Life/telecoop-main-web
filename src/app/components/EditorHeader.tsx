import { useState } from 'react';
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  Edit3,
  ChevronDown,
  Eye,
  Save,
  Globe
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { useAuth } from './contexts/AuthContext';

interface EditorHeaderProps {
  onToggleSidebar?: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function EditorHeader({ onToggleSidebar, currentPage, onNavigate }: EditorHeaderProps) {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const getPageTitle = (page: string) => {
    const titles: Record<string, string> = {
      'editor-dashboard': 'Content Dashboard',
      'content-manager': 'Content Manager',
      'page-editor': 'Page Editor',
      'news-manager': 'News & Articles',
      'media-library': 'Media Library',
      'seo-manager': 'SEO & Meta Tags',
      'navigation-manager': 'Navigation Manager',
      'content-scheduler': 'Content Scheduler',
      'content-analytics': 'Content Analytics'
    };
    return titles[page] || 'TeleCoop Editor';
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getPageActions = () => {
    const isEditablePage = ['page-editor', 'news-manager'].includes(currentPage);
    
    if (isEditablePage) {
      return (
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      );
    }
    
    return null;
  };

  const handleLogout = () => {
    logout();
    onNavigate('login');
  };

  const handleViewSite = () => {
    onNavigate('home');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {onToggleSidebar && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Edit3 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold hidden sm:block">
                TELEC<span className="text-primary">OO</span>P
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <h1 className="text-lg font-medium text-gray-900 hidden sm:block">
              {getPageTitle(currentPage)}
            </h1>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search content, pages, media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Page Actions */}
          {getPageActions()}

          {/* Quick Actions */}
          <Button variant="ghost" size="sm" title="View Live Site" onClick={handleViewSite}>
            <Globe className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
              2
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 h-auto p-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {user ? getUserInitials(user.name) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-green-100 text-green-800 border-green-200"
                  >
                    Content Editor
                  </Badge>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Editor Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}