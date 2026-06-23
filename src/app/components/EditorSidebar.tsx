import { 
  LayoutDashboard, 
  FileText, 
  Edit3, 
  Newspaper,
  Image,
  Search,
  Navigation,
  Calendar,
  BarChart3,
  Settings,
  Globe,
  Eye,
  PlusCircle,
  LogOut
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useAuth } from './contexts/AuthContext';

interface EditorSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isCollapsed?: boolean;
}

export function EditorSidebar({ currentPage, onNavigate, isCollapsed = false }: EditorSidebarProps) {
  const { user, hasPermission, logout } = useAuth();

  const menuItems = [
    {
      id: 'editor-dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      permission: 'view_editor_dashboard',
      badge: null
    },
    {
      id: 'content-manager',
      label: 'Content Manager',
      icon: FileText,
      permission: 'manage_content',
      badge: null
    },
    {
      id: 'page-editor',
      label: 'Page Editor',
      icon: Edit3,
      permission: 'edit_pages',
      badge: null
    },
    {
      id: 'news-manager',
      label: 'News & Articles',
      icon: Newspaper,
      permission: 'manage_news',
      badge: '3'
    },
    {
      id: 'media-library',
      label: 'Media Library',
      icon: Image,
      permission: 'manage_media',
      badge: null
    },
    {
      id: 'seo-manager',
      label: 'SEO & Meta',
      icon: Search,
      permission: 'manage_seo',
      badge: null
    },
    {
      id: 'navigation-manager',
      label: 'Navigation',
      icon: Navigation,
      permission: 'manage_navigation',
      badge: null
    }
  ];

  const contentMenuItems = [
    {
      id: 'content-scheduler',
      label: 'Content Scheduler',
      icon: Calendar,
      permission: 'schedule_content',
      badge: '5'
    },
    {
      id: 'content-analytics',
      label: 'Content Analytics',
      icon: BarChart3,
      permission: 'view_content_analytics',
      badge: null
    }
  ];

  const quickActions = [
    {
      id: 'quick-new-post',
      label: 'New Article',
      icon: PlusCircle,
      permission: 'manage_news',
      action: () => onNavigate('news-manager?action=new')
    },
    {
      id: 'preview-site',
      label: 'Preview Site',
      icon: Eye,
      permission: null,
      action: () => onNavigate('home')
    },
    {
      id: 'public-site',
      label: 'View Live Site',
      icon: Globe,
      permission: null,
      action: () => onNavigate('home')
    }
  ];

  const handleLogout = () => {
    logout();
    onNavigate('login');
  };

  const renderMenuItem = (item: any) => {
    if (item.permission && !hasPermission(item.permission)) {
      return null;
    }

    const Icon = item.icon;
    const isActive = currentPage === item.id;

    return (
      <Button
        key={item.id}
        variant={isActive ? "secondary" : "ghost"}
        className={`w-full justify-start h-11 px-3 ${
          isActive 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
            : 'hover:bg-secondary'
        } ${isCollapsed ? 'px-2' : ''}`}
        onClick={() => item.action ? item.action() : onNavigate(item.id)}
      >
        <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
        {!isCollapsed && (
          <>
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge 
                variant={isActive ? "outline" : "secondary"} 
                className={`text-xs ${
                  isActive 
                    ? 'border-primary-foreground/20 text-primary-foreground' 
                    : ''
                }`}
              >
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Button>
    );
  };

  return (
    <aside className={`bg-white border-r border-gray-200 h-full flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Content Editor</h2>
            <p className="text-sm text-gray-500">TeleCoop CMS</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {/* Main Content Menu */}
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Content Management
            </p>
          )}
          {menuItems.map(renderMenuItem)}
        </div>

        {/* Content Tools */}
        <div className="space-y-1 pt-4">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Content Tools
            </p>
          )}
          {contentMenuItems.map(renderMenuItem)}
        </div>

        {/* Quick Actions */}
        <div className="space-y-1 pt-4">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Quick Actions
            </p>
          )}
          {quickActions.map(renderMenuItem)}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start h-11 px-3 text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
          {!isCollapsed && <span>Sign Out</span>}
        </Button>
      </div>

      {/* User Info */}
      {!isCollapsed && user && (
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  Content Editor
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}