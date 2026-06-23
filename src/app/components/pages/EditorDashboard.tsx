import { 
  FileText, 
  Edit3, 
  Newspaper,
  Image,
  TrendingUp,
  Calendar,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  PlusCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useAuth } from '../contexts/AuthContext';

interface EditorDashboardProps {
  onNavigate: (page: string) => void;
}

export function EditorDashboard({ onNavigate }: EditorDashboardProps) {
  const { user, hasPermission } = useAuth();

  // Mock data - in production, this would come from your backend
  const contentStats = {
    totalPages: 15,
    totalArticles: 48,
    draftContent: 8,
    scheduledContent: 5,
    publishedThisMonth: 12,
    totalViews: 15420,
    averageEngagement: 67.3
  };

  const recentContent = [
    {
      id: '1',
      title: 'TeleCoop Service Updates for January 2025',
      type: 'news',
      status: 'published',
      author: 'Maria Editor',
      lastModified: '2025-01-19',
      views: 245
    },
    {
      id: '2',
      title: 'About TeleCoop - Company History',
      type: 'page',
      status: 'draft',
      author: 'Maria Editor',
      lastModified: '2025-01-18',
      views: 0
    },
    {
      id: '3',
      title: 'New Fiber Internet Plans Available',
      type: 'news',
      status: 'scheduled',
      author: 'Maria Editor',
      lastModified: '2025-01-17',
      views: 0
    }
  ];

  const quickActions = [
    {
      title: 'Create New Article',
      description: 'Write and publish news or announcements',
      icon: Newspaper,
      action: () => onNavigate('news-manager'),
      permission: 'manage_news'
    },
    {
      title: 'Edit Pages',
      description: 'Update website pages and content',
      icon: Edit3,
      action: () => onNavigate('page-editor'),
      permission: 'edit_pages'
    },
    {
      title: 'Manage Media',
      description: 'Upload and organize images and files',
      icon: Image,
      action: () => onNavigate('media-library'),
      permission: 'manage_media'
    },
    {
      title: 'Schedule Content',
      description: 'Plan and schedule future publications',
      icon: Calendar,
      action: () => onNavigate('content-scheduler'),
      permission: 'schedule_content'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'news':
        return <Newspaper className="h-4 w-4" />;
      case 'page':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user?.name?.split(' ')[0]}!
            </h1>
            <p className="text-green-100">
              Ready to create and manage amazing content for TeleCoop.
            </p>
          </div>
          <div className="text-right">
            <p className="text-green-100 text-sm">Today</p>
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
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contentStats.totalPages}</div>
            <p className="text-xs text-muted-foreground">
              Live website pages
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contentStats.totalArticles}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">+{contentStats.publishedThisMonth}</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Draft Content</CardTitle>
            <Edit3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contentStats.draftContent}</div>
            <p className="text-xs text-muted-foreground">
              Pending completion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contentStats.totalViews.toLocaleString()}</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">
                {contentStats.averageEngagement}% engagement
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common content management tasks</CardDescription>
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
                  </div>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Content */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Content</CardTitle>
              <CardDescription>Your latest content updates</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate('content-manager')}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContent.map((content) => (
                <div key={content.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {getTypeIcon(content.type)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{content.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {content.type} • {content.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Modified {content.lastModified}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(content.status)}>
                      {content.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {content.views} views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Calendar & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
            <CardDescription>Content scheduled for publication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-sm">New Service Announcement</p>
                  <p className="text-xs text-muted-foreground">Scheduled for Jan 22, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-sm">Monthly Newsletter</p>
                  <p className="text-xs text-muted-foreground">Scheduled for Jan 25, 2025</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => onNavigate('content-scheduler')}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Schedule New Content
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>This month's content metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Published Content</span>
                  <span>{contentStats.publishedThisMonth}/15</span>
                </div>
                <Progress value={(contentStats.publishedThisMonth / 15) * 100} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Engagement Rate</span>
                  <span>{contentStats.averageEngagement}%</span>
                </div>
                <Progress value={contentStats.averageEngagement} />
              </div>
              <Button variant="outline" className="w-full" onClick={() => onNavigate('content-analytics')}>
                <TrendingUp className="h-4 w-4 mr-2" />
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}