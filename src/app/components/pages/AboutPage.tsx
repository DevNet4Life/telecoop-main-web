import { Users, Target, Award, Globe, TrendingUp, BookOpen, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PageHero } from "../PageHero";

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
      icon: <Globe className="h-8 w-8 text-primary" />,
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
    <div className="min-h-screen">
      <PageHero
        title="About TeleCoop Philippines"
        subtitle="The Philippines' first registered telecommunications service cooperative, founded on the principles of community empowerment and collaborative ICT development."
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
      />

      <div className="container mx-auto px-4 py-10">
        {/* History Section */}
        <section className="mb-16">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="mb-2">The Story of TELECOOP</h2>
            <p className="text-base italic text-muted-foreground max-w-2xl mx-auto">
              From a grassroots initiative to the Philippines' first registered telecommunications service cooperative.
            </p>
          </div>

          {/* Opening paragraph — lead text */}
          <div className="max-w-3xl mx-auto mb-8 border-l-4 border-primary pl-6">
            <p className="text-base text-foreground leading-relaxed">
              TELECOOP began as an informal group on <strong>June 12, 2019</strong>, founded by a collective of committed individuals who shared a common vision: to support Barangay-based micro ICT service providers across the Philippines. At the time, many small-scale providers were struggling to overcome significant technical, operational, regulatory, and legal challenges that limited their ability to grow and serve their communities effectively.
            </p>
          </div>

          {/* Body — two-column on large screens */}
          <div className="max-w-3xl mx-auto columns-1 md:columns-2 gap-8 text-muted-foreground text-sm leading-relaxed space-y-4 mb-10">
            <p>
              These service providers played a critical role in bringing internet and telecommunications access to underserved and remote areas—places often overlooked by larger commercial telecom companies due to geographical, financial, or logistical constraints. Despite their importance, many lacked access to technical expertise, sustainable business models, legal guidance, and collaborative support systems.
            </p>
            <p>
              Recognizing this gap, TELECOOP was established as a unifying platform where small ICT and telecommunications operators could collaborate, share knowledge, and strengthen their capabilities. What started as a grassroots initiative quickly evolved into a movement built on cooperation, innovation, and community empowerment.
            </p>
            <p>
              As the organization grew, so did its impact. TELECOOP became a trusted support network for its members by providing technical assistance, capacity-building programs, operational guidance, and advocacy support — helping them navigate industry challenges while building stronger and more resilient telecommunications services.
            </p>
            <p>
              In 2021, TELECOOP reached a historic milestone by becoming the <strong className="text-foreground">first registered telecommunications service cooperative in the Philippines</strong>, officially named the Telecommunications Service Cooperative (TeleCoop). This achievement represented more than just legal recognition — it symbolized the growing strength of cooperative-driven telecommunications in the country.
            </p>
            <p>
              Today, TELECOOP continues to lead innovative programs and projects designed to create lasting impact for its members and the communities they serve. Through cooperation, resilience, and shared purpose, TELECOOP continues to prove that community-driven telecommunications can transform lives and create sustainable progress for generations to come.
            </p>
          </div>

          {/* Pull quote */}
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <p className="text-lg font-semibold text-foreground leading-snug italic">
              "Reliable telecommunications and internet connectivity are no longer luxuries — they are essential services."
            </p>
          </div>

        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-center mb-3">Our Mission &amp; Vision</h2>
          <p className="text-center text-muted-foreground text-base italic mb-10 max-w-2xl mx-auto">
            Three pillars that guide everything TeleCoop does for Filipino communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Building2 className="h-6 w-6 text-white" />, num: "01", title: "Community Development", body: "Enhancing community development through improved telecommunications infrastructure and services in underserved areas." },
              { icon: <TrendingUp className="h-6 w-6 text-white" />, num: "02", title: "Economic Growth", body: "Stimulating local economic growth by supporting micro ICT service providers and enabling digital entrepreneurship." },
              { icon: <BookOpen className="h-6 w-6 text-white" />, num: "03", title: "Educational Access", body: "Improving educational opportunities through reliable internet connectivity and digital literacy programs." },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-1 bg-primary w-full" />
                <div className="p-6">
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-center mb-3">Our Values</h2>
          <p className="text-center text-muted-foreground text-base italic mb-10 max-w-xl mx-auto">
            The principles that define our cooperative's character and commitment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white">{value.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16 -mx-4">
          <div
            className="relative py-16 px-4"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-slate-900/85" />
            <div className="relative">
          <h2 className="text-center mb-12 text-white">How TeleCoop Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">1</span>
                </div>
                <h3 className="mb-4 text-white">Cooperative Membership</h3>
                <p className="text-white/70">
                  Members join the cooperative and participate in democratic decision-making processes for community benefit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">2</span>
                </div>
                <h3 className="mb-4 text-white">Community Support</h3>
                <p className="text-white/70">
                  Supporting Barangay-based micro ICT service providers with technical assistance and legal guidance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">3</span>
                </div>
                <h3 className="mb-4 text-white">Sustainable Growth</h3>
                <p className="text-white/70">
                  Reinvesting resources into community development, education, and telecommunications infrastructure.
                </p>
              </div>
            </div>
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
                  <p className="text-sm italic text-muted-foreground">{leader.position}</p>
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