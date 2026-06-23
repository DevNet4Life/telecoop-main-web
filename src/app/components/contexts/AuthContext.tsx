import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'member' | 'super_admin' | 'editor';
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes - in production, this would come from a secure backend
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'admin@telecoop.ph': {
    password: 'admin123',
    user: {
      id: '1',
      email: 'admin@telecoop.ph',
      name: 'TeleCoop Administrator',
      role: 'admin',
      permissions: [
        'view_dashboard',
        'manage_members',
        'view_inquiries',
        'approve_members',
        'manage_services',
        'view_reports'
      ]
    }
  },
  'superadmin@telecoop.ph': {
    password: 'super123',
    user: {
      id: '2',
      email: 'superadmin@telecoop.ph',
      name: 'Super Administrator',
      role: 'super_admin',
      permissions: [
        'view_dashboard',
        'manage_members',
        'view_inquiries',
        'approve_members',
        'manage_services',
        'view_reports',
        'manage_admins',
        'system_settings'
      ]
    }
  },
  'member@telecoop.ph': {
    password: 'member123',
    user: {
      id: '3',
      email: 'member@telecoop.ph',
      name: 'John Doe',
      role: 'member',
      permissions: [
        'view_profile',
        'update_profile',
        'view_bills',
        'submit_tickets'
      ]
    }
  },
  'editor@telecoop.ph': {
    password: 'editor123',
    user: {
      id: '4',
      email: 'editor@telecoop.ph',
      name: 'Maria Editor',
      role: 'editor',
      permissions: [
        'view_editor_dashboard',
        'manage_content',
        'edit_pages',
        'manage_news',
        'manage_media',
        'manage_seo',
        'manage_navigation',
        'publish_content',
        'schedule_content',
        'view_content_analytics'
      ]
    }
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication on component mount
    const storedAuth = localStorage.getItem('telecoop_auth');
    if (storedAuth) {
      try {
        const { user } = JSON.parse(storedAuth);
        setUser(user);
      } catch (error) {
        console.error('Failed to parse stored auth:', error);
        localStorage.removeItem('telecoop_auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = MOCK_USERS[email.toLowerCase()];
    
    if (!mockUser || mockUser.password !== password) {
      setIsLoading(false);
      return { success: false, error: 'Invalid email or password' };
    }
    
    setUser(mockUser.user);
    localStorage.setItem('telecoop_auth', JSON.stringify({ user: mockUser.user }));
    setIsLoading(false);
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('telecoop_auth');
  };

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission) || false;
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}