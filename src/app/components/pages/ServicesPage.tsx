import { Wifi, Zap, Shield, Headphones, Home, Building2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const plans = [
    {
      name: "TeleCooper Basic",
      speed: "25 Mbps",
      price: "₱899",
      period: "/month",
      features: [
        "Up to 25 Mbps download speed",
        "5 Mbps upload speed",
        "Unlimited data usage",
        "Basic technical support",
        "Community Wi-Fi access"
      ],
      popular: false
    },
    {
      name: "TeleCooper Plus",
      speed: "50 Mbps",
      price: "₱1,299",
      period: "/month",
      features: [
        "Up to 50 Mbps download speed",
        "10 Mbps upload speed",
        "Unlimited data usage",
        "Priority technical support",
        "Free router rental",
        "Community Wi-Fi access"
      ],
      popular: true
    },
    {
      name: "TeleCooper Pro",
      speed: "100 Mbps",
      price: "₱1,899",
      period: "/month",
      features: [
        "Up to 100 Mbps download speed",
        "20 Mbps upload speed",
        "Unlimited data usage",
        "24/7 priority support",
        "Free advanced router",
        "Static IP option",
        "Community Wi-Fi access"
      ],
      popular: false
    }
  ];

  const businessPlans = [
    {
      name: "Business Essential",
      speed: "100 Mbps",
      price: "₱2,999",
      period: "/month",
      features: [
        "Symmetrical 100 Mbps",
        "Static IP included",
        "99.9% uptime SLA",
        "Business-grade router",
        "Dedicated support line",
        "Priority restoration"
      ]
    },
    {
      name: "Business Advanced",
      speed: "200 Mbps",
      price: "₱4,999",
      period: "/month",
      features: [
        "Symmetrical 200 Mbps",
        "Multiple static IPs",
        "99.95% uptime SLA",
        "Enterprise router",
        "Dedicated account manager",
        "4-hour restoration SLA"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      name: "Network Security",
      description: "Advanced firewall and intrusion detection services to protect your network."
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      name: "Technical Support",
      description: "24/7 local technical support from experienced Filipino technicians."
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      name: "Community Wi-Fi",
      description: "Access to our growing network of community Wi-Fi hotspots."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      name: "Network Installation",
      description: "Professional installation and setup by certified technicians."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliable, affordable internet services designed for Filipino families and businesses. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Residential Plans */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="mb-4">
              <Home className="inline-block h-8 w-8 mr-2 text-primary" />
              Residential Plans
            </h2>
            <p className="text-muted-foreground">
              Perfect for families, students, and remote workers who need reliable internet at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl mt-4">
                    <span className="text-primary">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-xl text-muted-foreground">{plan.speed}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => onNavigate("membership")}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Plans */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="mb-4">
              <Building2 className="inline-block h-8 w-8 mr-2 text-primary" />
              Business Plans
            </h2>
            <p className="text-muted-foreground">
              Enterprise-grade solutions for businesses that require guaranteed uptime and dedicated support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessPlans.map((plan, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl mt-4">
                    <span className="text-primary">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-xl text-muted-foreground">{plan.speed}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => onNavigate("contact")}
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <div className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-center mb-8">Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="mb-4">Metro Manila</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quezon City</li>
                  <li>• Manila</li>
                  <li>• Makati</li>
                  <li>• Pasig</li>
                  <li>• Marikina</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Rizal Province</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Antipolo</li>
                  <li>• Cainta</li>
                  <li>• Taytay</li>
                  <li>• San Mateo</li>
                  <li>• Rodriguez</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Bulacan Province</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Malolos</li>
                  <li>• Meycauayan</li>
                  <li>• San Jose del Monte</li>
                  <li>• Marilao</li>
                  <li>• Bocaue</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Don't see your area listed? We're constantly expanding our network.
              </p>
              <Button onClick={() => onNavigate("contact")}>
                Check Service Availability
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="mb-4">Ready to Get Connected?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied TeleCoop members enjoying reliable, affordable internet service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("membership")}>
              Apply for Membership
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")}>
              Get More Information
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}