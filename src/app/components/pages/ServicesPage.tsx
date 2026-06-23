import { Wifi, Zap, Shield, Headphones, Network, MonitorSmartphone, WifiHigh, ServerCrash, Users, FileCheck, PhoneCall, Radio } from "lucide-react";
import { Button } from "../ui/button";
import { PageHero } from "../PageHero";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const serviceCategories = [
  {
    icon: <Wifi className="h-6 w-6 text-white" />,
    title: "Internet Connectivity",
    subtitle: "Reliable broadband solutions for homes and communities across Region III",
    services: [
      {
        icon: <WifiHigh className="h-5 w-5 text-primary" />,
        name: "Residential Broadband",
        description: "High-speed home internet with consistent speeds for everyday use.",
      },
      {
        icon: <Network className="h-5 w-5 text-primary" />,
        name: "Community Wi-Fi",
        description: "Shared hotspot networks deployed at the Barangay level for community access.",
      },
      {
        icon: <Radio className="h-5 w-5 text-primary" />,
        name: "Wireless Backhaul",
        description: "Point-to-point wireless links connecting remote sites and relay towers.",
      },
    ],
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Network Security",
    subtitle: "Protecting your connection and infrastructure with enterprise-grade security",
    services: [
      {
        icon: <Shield className="h-5 w-5 text-primary" />,
        name: "Firewall & Filtering",
        description: "Advanced firewall rules and content filtering to block threats at the edge.",
      },
      {
        icon: <MonitorSmartphone className="h-5 w-5 text-primary" />,
        name: "Network Monitoring",
        description: "24/7 real-time monitoring to detect anomalies and prevent downtime.",
      },
      {
        icon: <ServerCrash className="h-5 w-5 text-primary" />,
        name: "Intrusion Detection",
        description: "Proactive detection and response to unauthorized access attempts.",
      },
    ],
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Network Installation",
    subtitle: "Professional setup and deployment by certified Filipino technicians",
    services: [
      {
        icon: <Zap className="h-5 w-5 text-primary" />,
        name: "Site Survey & Planning",
        description: "On-site assessment to design the optimal network layout for your location.",
      },
      {
        icon: <Network className="h-5 w-5 text-primary" />,
        name: "Equipment Installation",
        description: "Full hardware setup including routers, access points, and cabling.",
      },
      {
        icon: <MonitorSmartphone className="h-5 w-5 text-primary" />,
        name: "Configuration & Testing",
        description: "End-to-end configuration, load testing, and quality validation before handover.",
      },
    ],
  },
  {
    icon: <Headphones className="h-6 w-6 text-white" />,
    title: "Technical Support",
    subtitle: "Dedicated local support from technicians who know your community",
    services: [
      {
        icon: <PhoneCall className="h-5 w-5 text-primary" />,
        name: "24/7 Help Desk",
        description: "Round-the-clock phone and remote support for all connectivity issues.",
      },
      {
        icon: <Users className="h-5 w-5 text-primary" />,
        name: "On-site Technicians",
        description: "Local field technicians dispatched directly to your home or Barangay.",
      },
      {
        icon: <FileCheck className="h-5 w-5 text-primary" />,
        name: "Maintenance Contracts",
        description: "Scheduled preventive maintenance plans to keep your network running smoothly.",
      },
    ],
  },
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Services"
        subtitle="Reliable, community-focused telecommunications services designed to empower Filipino families, Barangays, and micro ICT providers."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
      />

      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-14 space-y-10">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              {/* Category header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{category.title}</h2>
                  <p className="text-muted-foreground text-sm">{category.subtitle}</p>
                </div>
              </div>

              {/* Sub-service cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.services.map((service, svcIndex) => (
                  <div
                    key={svcIndex}
                    className="group border border-slate-100 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View details <span aria-hidden>→</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="relative text-center container mx-auto px-4">
          <h2 className="mb-4 text-white">Ready to Get Connected?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied TeleCoop members enjoying reliable, affordable internet service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("membership")} className="bg-primary hover:bg-primary/90">
              Apply for Membership
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")} className="border-white text-white bg-transparent hover:bg-white/10">
              Get More Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
