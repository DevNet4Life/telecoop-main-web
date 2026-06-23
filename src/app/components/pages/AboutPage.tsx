import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community First",
      description: "Supporting Barangay-based micro ICT service providers and prioritizing community development in underserved areas."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "Open governance and transparent operations as the Philippines' first registered telecommunications service cooperative."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Service",
      description: "Providing reliable telecommunications services while addressing technical and legal challenges for micro ICT providers."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Social Responsibility",
      description: "Enhancing community development, economic growth, and education through improved telecommunications access."
    }
  ];

  const leadership = [
    {
      name: "Board of Directors",
      position: "Cooperative Leadership",
      background: "Elected representatives from member communities across the Philippines"
    },
    {
      name: "Technical Team",
      position: "ICT Specialists",
      background: "Experienced professionals supporting micro ICT service providers"
    },
    {
      name: "Community Liaisons",
      position: "Regional Coordinators",
      background: "Local representatives ensuring community needs are met"
    },
    {
      name: "Support Staff",
      position: "Operations Team",
      background: "Dedicated personnel managing day-to-day cooperative operations"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">About TeleCoop Philippines</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Philippines' first registered telecommunications service cooperative, founded on the principles of community empowerment and collaborative ICT development.
          </p>
        </div>

        {/* History Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TELECOOP began as an informal group on June 12, 2019, with a mission to support Barangay-based micro ICT service providers facing technical and legal challenges across several regions of the Philippines.
                </p>
                <p>
                  Recognizing the critical need for telecommunications services in underserved areas, our organization was driven by the goal to enhance community development, stimulate economic growth, and improve educational opportunities through better connectivity.
                </p>
                <p>
                  In 2021, we achieved a historic milestone by becoming the first registered telecommunications service cooperative in the Philippines, officially named the Telecommunications Service Cooperative (TeleCoop). Today, we continue to lead innovative projects that directly benefit our members and their communities.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-lg p-8">
              <h3 className="mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-primary">June 12, 2019</p>
                    <p className="text-sm text-muted-foreground">Founded as informal support group</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-primary">2020</p>
                    <p className="text-sm text-muted-foreground">Expanded support to multiple regions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-primary">2021</p>
                    <p className="text-sm text-muted-foreground">First registered telecom service cooperative</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-primary">2025</p>
                    <p className="text-sm text-muted-foreground">Leading community-focused projects nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-center mb-12">Our Mission &amp; Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Community Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhancing community development through improved telecommunications infrastructure and services in underserved areas.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Economic Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stimulating local economic growth by supporting micro ICT service providers and enabling digital entrepreneurship.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Educational Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improving educational opportunities through reliable internet connectivity and digital literacy programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-center mb-12">How TeleCoop Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">1</span>
                </div>
                <h3 className="mb-4">Cooperative Membership</h3>
                <p className="text-muted-foreground">
                  Members join the cooperative and participate in democratic decision-making processes for community benefit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">2</span>
                </div>
                <h3 className="mb-4">Community Support</h3>
                <p className="text-muted-foreground">
                  Supporting Barangay-based micro ICT service providers with technical assistance and legal guidance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">3</span>
                </div>
                <h3 className="mb-4">Sustainable Growth</h3>
                <p className="text-muted-foreground">
                  Reinvesting resources into community development, education, and telecommunications infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section>
          <h2 className="text-center mb-12">Our Organization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-primary">{leader.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{leader.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}