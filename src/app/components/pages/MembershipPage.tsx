import { CheckCircle, Users, DollarSign, FileText, Clock, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface MembershipPageProps {
  onNavigate: (page: string) => void;
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Affordable Rates",
      description: "Member-owned cooperative means no profit margins for external shareholders"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Democratic Ownership",
      description: "Every member has a voice in major decisions and cooperative governance"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Reliable Service",
      description: "Community-focused approach ensures consistent, quality internet service"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Local Support",
      description: "Technical support from local technicians who understand your community"
    }
  ];

  const requirements = [
    "Must be a Filipino citizen or permanent resident",
    "Must be at least 18 years old",
    "Must reside or operate a business in our service area",
    "Agreement to cooperative principles and bylaws",
    "Payment of membership fee and share capital",
    "Completion of member orientation program"
  ];

  const membershipTypes = [
    {
      type: "Individual Membership",
      fee: "₱2,000",
      shareCapital: "₱5,000",
      description: "For individual residents and small households",
      features: [
        "One voting right per member",
        "Access to all residential service plans",
        "Member dividend eligibility",
        "Participation in annual general assembly"
      ]
    },
    {
      type: "Business Membership",
      fee: "₱5,000",
      shareCapital: "₱15,000",
      description: "For businesses and commercial establishments",
      features: [
        "Enhanced voting rights",
        "Access to business service plans",
        "Priority technical support",
        "Business development assistance"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Express Interest",
      description: "Submit your member inquiry form to start the process"
    },
    {
      step: "2",
      title: "Document Review",
      description: "Our membership committee reviews your application and documents"
    },
    {
      step: "3",
      title: "Payment",
      description: "Pay membership fee and share capital contribution"
    },
    {
      step: "4",
      title: "Orientation",
      description: "Attend mandatory member orientation on cooperative principles"
    },
    {
      step: "5",
      title: "Service Activation",
      description: "Schedule installation and activation of your internet service"
    }
  ];

  const requiredDocuments = [
    "Valid government-issued ID (PhilSys ID, Passport, Driver's License)",
    "Proof of residence (utility bill, barangay certificate)",
    "For businesses: Business registration documents",
    "For OFWs: OFW ID or employment certificate",
    "Two (2) passport-size photos",
    "Completed membership application form"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Become a TeleCoop Member</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our growing cooperative and become part of a community-owned telecommunications network. Experience the benefits of member ownership and democratic governance.
          </p>
          {/* Featured CTA */}
          <div className="mt-8">
            <Button size="lg" onClick={() => onNavigate("member-inquiry")} className="bg-primary hover:bg-primary/90">
              Start Your Member Inquiry
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Complete our comprehensive inquiry form to begin your membership journey
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Types */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTypes.map((membership, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{membership.type}</CardTitle>
                  <div className="flex space-x-4 text-sm">
                    <Badge variant="outline">Fee: {membership.fee}</Badge>
                    <Badge variant="outline">Share: {membership.shareCapital}</Badge>
                  </div>
                  <p className="text-muted-foreground">{membership.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {membership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{document}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">{step.step}</span>
                  </div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-16">
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-primary" />
                <span>Processing Timeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl text-primary mb-2">3-5 days</div>
                  <p className="text-sm text-muted-foreground">Application review and approval</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-2">1-2 days</div>
                  <p className="text-sm text-muted-foreground">Member orientation scheduling</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-2">7-14 days</div>
                  <p className="text-sm text-muted-foreground">Service installation and activation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fees Breakdown */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Investment</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What Your Investment Covers</CardTitle>
                <p className="text-muted-foreground">
                  Your membership fee and share capital directly contribute to network infrastructure and community development.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Network infrastructure development</span>
                    <span className="text-primary">40%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Equipment and technology upgrades</span>
                    <span className="text-primary">30%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Community development programs</span>
                    <span className="text-primary">20%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Operational reserves</span>
                    <span className="text-primary">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="mb-4">Ready to Join TeleCoop?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming a member-owner of a community-focused telecommunications cooperative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("member-inquiry")}>
              Start Your Member Inquiry
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")}>
              Ask Questions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}