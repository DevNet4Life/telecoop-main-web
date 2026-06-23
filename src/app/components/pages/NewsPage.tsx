import { Calendar, AlertTriangle, Megaphone, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { PageHero } from "../PageHero";

export function NewsPage() {
  const announcements = [
    {
      id: 1,
      type: "maintenance",
      title: "Scheduled Network Maintenance - Quezon City Area",
      date: "June 25, 2025",
      time: "2:00 AM - 6:00 AM",
      content: "We will be performing routine network maintenance in the Quezon City area. Users may experience brief service interruptions during this period. We apologize for any inconvenience.",
      priority: "high"
    },
    {
      id: 2,
      type: "news",
      title: "TeleCoop Expands to 5 New Barangays in Rizal Province",
      date: "June 20, 2025",
      content: "We're excited to announce the expansion of our fiber network to five new barangays in Rizal Province. New service areas include: Barangay San Isidro (Antipolo), Barangay Dela Paz (Pasig), Barangay San Juan (Taytay), Barangay Santo Domingo (Cainta), and Barangay San Rafael (Rodriguez).",
      priority: "medium"
    },
    {
      id: 3,
      type: "event",
      title: "Annual General Assembly 2025",
      date: "July 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "TeleCoop Community Center, Quezon City",
      content: "All members are invited to attend our Annual General Assembly. Topics include: Financial reports, network expansion updates, election of board members, and Q&A session. Light refreshments will be provided.",
      priority: "high"
    },
    {
      id: 4,
      type: "service",
      title: "New 200 Mbps Business Plan Now Available",
      date: "June 18, 2025",
      content: "Introducing our new Business Advanced plan with 200 Mbps symmetrical speeds, multiple static IPs, and enhanced SLA. Perfect for growing businesses and enterprises. Contact our sales team for more information.",
      priority: "low"
    }
  ];

  const upcomingEvents = [
    {
      title: "Member Orientation Session",
      date: "June 28, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "TeleCoop Training Room",
      description: "Monthly orientation for new members"
    },
    {
      title: "Community Digital Literacy Workshop",
      date: "July 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Barangay Community Center",
      description: "Free workshop on internet safety and digital skills"
    },
    {
      title: "Board Meeting",
      date: "July 10, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "TeleCoop Main Office",
      description: "Monthly board meeting (open to all members)"
    }
  ];

  const serviceStatus = [
    {
      area: "Metro Manila",
      status: "operational",
      lastUpdate: "June 22, 2025 - 3:45 PM"
    },
    {
      area: "Rizal Province",
      status: "operational",
      lastUpdate: "June 22, 2025 - 3:45 PM"
    },
    {
      area: "Bulacan Province",
      status: "maintenance",
      lastUpdate: "June 22, 2025 - 2:00 AM",
      note: "Scheduled maintenance until 6:00 AM"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "maintenance":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "news":
        return <Megaphone className="h-5 w-5 text-blue-500" />;
      case "event":
        return <Calendar className="h-5 w-5 text-green-500" />;
      case "service":
        return <Users className="h-5 w-5 text-purple-500" />;
      default:
        return <Megaphone className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-green-600";
      case "maintenance": return "text-orange-600";
      case "outage": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="News & Announcements"
        subtitle="Stay informed about service updates, network maintenance, community events, and important announcements from TeleCoop Philippines."
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
        position="center 40%"
      />
      <div className="container mx-auto px-4 py-10">

        {/* Service Status */}
        <section className="mb-16">
          <h2 className="mb-6">Network Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceStatus.map((status, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{status.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Status:</span>
                    <Badge variant={status.status === "operational" ? "default" : "destructive"}>
                      {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Last updated: {status.lastUpdate}
                  </p>
                  {status.note && (
                    <p className="text-xs text-orange-600 mt-2">{status.note}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Announcements */}
        <section className="mb-16">
          <h2 className="mb-6">Recent Announcements</h2>
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(announcement.type)}
                      <div>
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-muted-foreground">{announcement.date}</span>
                          {announcement.time && (
                            <span className="text-sm text-muted-foreground">{announcement.time}</span>
                          )}
                          {announcement.location && (
                            <span className="text-sm text-muted-foreground">📍 {announcement.location}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge variant={getPriorityColor(announcement.priority)}>
                      {announcement.priority.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>📅 {event.date}</p>
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
      </div>
      <div
        className="relative py-16 mb-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-white mb-2">Stay Updated</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter to receive important announcements and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/40 mt-2">
              We respect your privacy and will only send relevant updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}