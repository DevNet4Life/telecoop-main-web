import { Wifi, Users, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { HeroSlider } from "../HeroSlider";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Users className="h-7 w-7 text-white" />,
      iconBg: "bg-primary",
      title: "Community-Focused",
      description: "Supporting Barangay-based micro ICT service providers across the Philippines with technical and legal assistance.",
    },
    {
      icon: <Shield className="h-7 w-7 text-white" />,
      iconBg: "bg-primary",
      title: "Cooperative Model",
      description: "The first registered telecommunications service cooperative in the Philippines, owned and operated by the community.",
    },
    {
      icon: <Wifi className="h-7 w-7 text-white" />,
      iconBg: "bg-primary",
      title: "ICT Development",
      description: "Enhancing telecommunications infrastructure and services in underserved areas nationwide.",
    },
    {
      icon: <Zap className="h-7 w-7 text-white" />,
      iconBg: "bg-primary",
      title: "Sustainable Growth",
      description: "Promoting economic growth, education, and community development through improved connectivity.",
    },
  ];

  const stats = [
    { value: "2019", label: "Year Founded" },
    { value: "7", label: "Provinces Served" },
    { value: "150+", label: "Barangays Reached" },
    { value: "24/7", label: "Technical Support" },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Slider */}
      <HeroSlider onNavigate={onNavigate} />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
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
                className="group bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`mx-auto mb-5 w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-base mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section
        className="relative py-14"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-6 py-2">
                <p className="text-4xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-slate-300 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-white">Key Milestones</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {[
                { icon: <Wifi className="h-6 w-6 text-primary" />, label: "Founded", description: "Established to bridge the connectivity gap in underserved Philippine communities." },
                { icon: <Shield className="h-6 w-6 text-primary" />, label: "Registered Cooperative", description: "Officially recognized as the Philippines' first registered telecom service cooperative." },
                { icon: <Users className="h-6 w-6 text-primary" />, label: "Multi-Regional Coverage", description: "Expanded support to Barangay-based ICT providers across multiple regions nationwide." },
                { icon: <Zap className="h-6 w-6 text-primary" />, label: "Community Support", description: "Round-the-clock technical, legal, and operational assistance for all cooperative members." },
              ].map((milestone, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative z-10 mb-5">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {milestone.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-2 text-white">{milestone.label}</h3>
                  <p className="text-sm text-red-100 leading-relaxed max-w-[200px]">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

            {/* Left — mission text */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
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
              <Button onClick={() => onNavigate("about")} className="bg-primary hover:bg-primary/90 text-white gap-2">
                Read Our Full Story <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Right — images */}
            <div className="grid grid-cols-2 gap-3 h-[380px]">
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" alt="Community meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80" alt="Network infrastructure" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="ICT team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Coverage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Headquarters", region: "Central Luzon", detail: "Plaridel, Bulacan", description: "Our base of operations, serving communities across Central Luzon.", color: "bg-primary/5 border-primary/20", accent: "text-primary" },
              { label: "Coverage", region: "Multi-Regional", detail: "Luzon · Visayas · Mindanao", description: "Expanding to Barangay-based ICT providers across the Philippine archipelago.", color: "bg-foreground/5 border-foreground/10", accent: "text-foreground" },
              { label: "Approach", region: "Barangay-Level", detail: "Grassroots · Community-First", description: "We work directly with local communities to address their connectivity needs.", color: "bg-primary/5 border-primary/20", accent: "text-primary" },
            ].map((item, index) => (
              <div key={index} className={`rounded-2xl border p-6 ${item.color}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${item.accent}`}>{item.label}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.region}</h3>
                <p className="text-xs text-muted-foreground mb-3">{item.detail}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/88 to-primary/60" />
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Join the Movement
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="mb-10 text-slate-400 max-w-2xl mx-auto">
            Become part of the Philippines' first registered telecommunications service cooperative. Together, we can strengthen ICT infrastructure and support community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("membership")} className="bg-primary hover:bg-primary/90 text-white gap-2">
              Become a Member <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")} className="border-white/30 text-white bg-transparent hover:bg-white/10">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
