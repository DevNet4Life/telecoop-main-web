import { CheckCircle, Users, DollarSign, FileText, Clock, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PageHero } from "../PageHero";

interface MembershipPageProps {
  onNavigate: (page: string) => void;
}

const investmentItems = [
  { label: "Network Infrastructure Development", pct: 40 },
  { label: "Equipment & Technology Upgrades", pct: 30 },
  { label: "Community Development Programs", pct: 20 },
  { label: "Operational Reserves", pct: 10 },
];

function useCountUp(target: number, active: boolean, duration = 1000, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, delay]);
  return count;
}

function CountUpStat({ target, label, active, delay }: { target: number; label: string; active: boolean; delay: number }) {
  const count = useCountUp(target, active, 900, delay);
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-primary leading-none mb-1">{count}%</p>
      <p className="text-xs text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
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
    <div className="min-h-screen">
      <PageHero
        title="Become a TeleCoop Member"
        subtitle="Join our growing cooperative and become part of a community-owned telecommunications network. Experience the benefits of member ownership and democratic governance."
        imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
        position="center top"
      />
      <div className="container mx-auto px-4 py-10">
        {/* Featured CTA */}
        <div className="text-center mb-12">
          <Button size="lg" onClick={() => onNavigate("member-inquiry")} className="bg-primary hover:bg-primary/90">
            Start Your Member Inquiry
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Complete our comprehensive inquiry form to begin your membership journey
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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

        {/* Requirements Section */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Membership Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Eligibility Requirements</h3>
                  <p className="text-xs text-muted-foreground">{requirements.length} criteria to qualify</p>
                </div>
              </div>
              <div className="bg-white divide-y divide-slate-100">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3 px-6 py-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Required Documents</h3>
                  <p className="text-xs text-muted-foreground">{requiredDocuments.length} documents to prepare</p>
                </div>
              </div>
              <div className="bg-white divide-y divide-slate-100">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start gap-3 px-6 py-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{document}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-center mb-10">Application Process</h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Step bubble */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300 text-xl font-bold">
                      {step.step}
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <div className="md:hidden absolute top-1/2 -right-6 w-4 h-0.5 bg-primary/40" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm w-full group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">Step {step.step}</span>
                    <h3 className="font-bold text-sm text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
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
          <h2 className="text-center mb-2">Membership Investment</h2>
          <p className="text-center text-muted-foreground text-sm italic mb-10 max-w-xl mx-auto">
            Your membership fee and share capital directly contribute to network infrastructure and community development.
          </p>

          {/* Summary numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {investmentItems.map((item, i) => (
              <CountUpStat key={i} target={item.pct} label={item.label} active={animated} delay={i * 150} />
            ))}
          </div>

          {/* Animated bars — no outer box */}
          <div ref={chartRef} className="max-w-3xl mx-auto space-y-5">
            {investmentItems.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-bold text-primary">{item.pct}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{
                      width: animated ? `${item.pct}%` : "0%",
                      opacity: 0.4 + item.pct / 80,
                      transition: `width 900ms cubic-bezier(0.4,0,0.2,1) ${i * 150}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <div
        className="relative py-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative text-center container mx-auto px-4">
          <h2 className="mb-4 text-white">Ready to Join TeleCoop?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming a member-owner of a community-focused telecommunications cooperative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("member-inquiry")} className="bg-white text-primary hover:bg-white/90">
              Start Your Member Inquiry
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("contact")} className="border-white text-white bg-transparent hover:bg-white/10">
              Ask Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}