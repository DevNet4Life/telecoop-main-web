import { 
  Users, 
  FileText, 
  TrendingUp, 
  Wifi,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useAuth } from '../contexts/AuthContext';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const { user, hasPermission } = useAuth();

  // Mock data - in production, this would come from your backend
  const stats = {
    totalMembers: 247,
    pendingInquiries: 12,
    activeServices: 3,
    monthlyRevenue: 425750,
    memberGrowth: 15.2,
    serviceUptime: 99.8
  };

  const recentInquiries = [
    {
      id: '1',
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      plan: 'Standard Plan',
      location: 'Quezon City, NCR',
      date: '2025-01-19',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Juan dela Cruz',
      email: 'juan.cruz@email.com',
      plan: 'Basic Plan',
      location: 'Marikina, NCR',
      date: '2025-01-19',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Ana Rodriguez',
      email: 'ana.rodriguez@email.com',
      plan: 'Premium Plan',
      location: 'Antipolo, Rizal',
      date: '2025-01-18',
      status: 'approved'
    }
  ];

  const quickActions = [
    {
      title: 'Review Inquiries',
      description: 'Process new member applications',
      icon: FileText,
      action: () => onNavigate('inquiries'),
      count: stats.pendingInquiries,
      permission: 'view_inquiries'
    },
    {
      title: 'Manage Members',
      description: 'View and update member information',
      icon: Users,
      action: () => onNavigate('members'),
      count: stats.totalMembers,
      permission: 'manage_members'
    },
    {
      title: 'Service Status',
      description: 'Monitor network and services',
      icon: Wifi,
      action: () => onNavigate('admin-services'),
      count: `${stats.serviceUptime}%`,
      permission: 'manage_services'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-red-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user?.name?.split(' ')[0]}!
            </h1>
            <p className="text-red-100">
              Here's what's happening with TeleCoop today.
            </p>
          </div>
          <div className="text-right">
            <p className="text-red-100 text-sm">Today</p>
            <p className="text-xl font-semibold">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMembers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">+{stats.memberGrowth}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Inquiries</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingInquiries}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Uptime</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.serviceUptime}%</div>
            <Progress value={stats.serviceUptime} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₱{stats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              January 2025
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => {
              if (action.permission && !hasPermission(action.permission)) {
                return null;
              }

              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={action.action}
                >
                  <div className="flex items-center space-x-3 w-full">
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="text-left flex-1">
                      <p className="font-medium text-sm">{action.title}</p>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                    <Badge variant="secondary">
                      {action.count}
                    </Badge>
                  </div>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Inquiries</CardTitle>
              <CardDescription>Latest member applications</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate('inquiries')}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium text-sm">
                        {inquiry.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{inquiry.name}</p>
                      <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                      <p className="text-xs text-muted-foreground">{inquiry.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(inquiry.status)}>
                      {inquiry.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{inquiry.plan}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>Current status of TeleCoop services and infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-sm">Network Services</p>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-sm">Member Portal</p>
                <p className="text-xs text-muted-foreground">Online and responsive</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium text-sm">Maintenance Window</p>
                <p className="text-xs text-muted-foreground">Scheduled for Sunday 2AM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}