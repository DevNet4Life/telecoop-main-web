import { Wifi, Users, Shield, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HeroSlider } from "../HeroSlider";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community-Focused",
      description: "Supporting Barangay-based micro ICT service providers across the Philippines with technical and legal assistance."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Cooperative Model",
      description: "The first registered telecommunications service cooperative in the Philippines, owned and operated by the community."
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "ICT Development",
      description: "Enhancing telecommunications infrastructure and services in underserved areas nationwide."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Sustainable Growth",
      description: "Promoting economic growth, education, and community development through improved connectivity."
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider onNavigate={onNavigate} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Why TeleCoop
            </span>
            <h2 className="mb-4 text-3xl font-bold">Why Choose TeleCoop?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              We provide comprehensive support for micro ICT service providers while fostering community development and economic growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full" />
                <div className="mx-auto mb-5 w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-base mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {[
                {
                  icon: <Wifi className="h-6 w-6 text-primary" />,
                  label: "Founded",
                  description: "Established to bridge the connectivity gap in underserved Philippine communities.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  label: "Registered Cooperative",
                  description: "Officially recognized as the Philippines' first registered telecommunications service cooperative.",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  label: "Multi-Regional Coverage",
                  description: "Expanded support to Barangay-based ICT providers across multiple regions nationwide.",
                },
                {
                  icon: <Zap className="h-6 w-6 text-primary" />,
                  label: "Community Support",
                  description: "Round-the-clock technical, legal, and operational assistance for all cooperative members.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative z-10 mb-5">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {milestone.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-2 text-white">{milestone.label}</h3>
                  <p className="text-sm text-red-100 leading-relaxed max-w-[200px]">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Coverage — unified section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Top: mission text + images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

            {/* Left — mission text */}
            <div className="border-l-4 border-primary pl-8">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold mb-6 leading-snug">
                Built for Communities,<br />Powered by the People
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed text-sm">
                TELECOOP was established to address the critical need for telecommunications services in underserved areas of the Philippines. We support Barangay-based micro ICT service providers by offering technical assistance and legal guidance.
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed text-sm">
                Our cooperative model ensures that all initiatives focus on enhancing community development, stimulating economic growth, and improving educational opportunities through better connectivity and ICT infrastructure.
              </p>
              <Button onClick={() => onNavigate("about")} className="bg-primary hover:bg-primary/90 text-white">
                Read Our Full Story
              </Button>
            </div>

            {/* Right — story images */}
            <div className="grid grid-cols-2 gap-3 h-[380px]">
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                  alt="Community meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80"
                  alt="Network infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="ICT team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-100 mb-12" />

          {/* Bottom: coverage columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              {
                label: "Headquarters",
                region: "Central Luzon",
                detail: "Plaridel, Bulacan",
                description: "Our base of operations, serving communities across Central Luzon.",
              },
              {
                label: "Coverage",
                region: "Multi-Regional",
                detail: "Luzon · Visayas · Mindanao",
                description: "Expanding to Barangay-based ICT providers across the Philippine archipelago.",
              },
              {
                label: "Approach",
                region: "Barangay-Level",
                detail: "Grassroots · Community-First",
                description: "We work directly with local communities to address their connectivity needs.",
              },
            ].map((item, index) => (
              <div key={index} className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">{item.label}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.region}</h3>
                <p className="text-xs text-muted-foreground mb-3">{item.detail}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Join Our Community?</h2>
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            Become part of the Philippines' first registered telecommunications service cooperative. Together, we can strengthen ICT infrastructure and support community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("membership")}>
              Become a Member
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")}>
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}