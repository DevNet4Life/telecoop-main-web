import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  BarChart3,
  Wifi,
  UserCheck,
  MessageSquare,
  Globe,
  Shield
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useAuth } from './contexts/AuthContext';

interface AdminSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isCollapsed?: boolean;
}

export function AdminSidebar({ currentPage, onNavigate, isCollapsed = false }: AdminSidebarProps) {
  const { user, hasPermission } = useAuth();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      permission: 'view_dashboard',
      badge: null
    },
    {
      id: 'members',
      label: 'Members',
      icon: Users,
      permission: 'manage_members',
      badge: '47'
    },
    {
      id: 'inquiries',
      label: 'Inquiries',
      icon: FileText,
      permission: 'view_inquiries',
      badge: '12'
    },
    {
      id: 'admin-services',
      label: 'Services',
      icon: Wifi,
      permission: 'manage_services',
      badge: null
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: BarChart3,
      permission: 'view_reports',
      badge: null
    }
  ];

  const adminMenuItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      permission: 'system_settings',
      badge: null
    },
    {
      id: 'admins',
      label: 'Admin Users',
      icon: Shield,
      permission: 'manage_admins',
      badge: null
    }
  ];

  const publicMenuItems = [
    {
      id: 'public-site',
      label: 'View Public Site',
      icon: Globe,
      permission: null,
      badge: null,
      action: () => onNavigate('home')
    }
  ];

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
            <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-sm text-gray-500">TeleCoop Management</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {/* Main Menu */}
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Main Menu
            </p>
          )}
          {menuItems.map(renderMenuItem)}
        </div>

        {/* Admin Menu - Only for super admin */}
        {user?.role === 'super_admin' && (
          <div className="space-y-1 pt-4">
            {!isCollapsed && (
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Administration
              </p>
            )}
            {adminMenuItems.map(renderMenuItem)}
          </div>
        )}

        {/* Public Site Access */}
        <div className="space-y-1 pt-4">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Quick Access
            </p>
          )}
          {publicMenuItems.map(renderMenuItem)}
        </div>
      </nav>

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
                  {user.role.replace('_', ' ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}