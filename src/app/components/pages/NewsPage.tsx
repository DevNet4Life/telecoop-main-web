import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowLeft, ChevronRight } from "lucide-react";

interface Article {
  id: number;
  category: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  featured?: boolean;
}

const INITIAL_ARTICLES: Article[] = [
  {
    id: 1,
    category: "COOPERATIVE NEWS",
    title: "TeleCoop Expands to 5 New Barangays in Rizal Province",
    date: "June 20, 2025",
    excerpt:
      "TeleCoop Philippines announces the expansion of its fiber network to five new barangays in Rizal Province, benefiting thousands of households.",
    content:
      "TeleCoop Philippines is proud to announce the expansion of its fiber network to five new barangays in Rizal Province. The expansion marks a significant step in the cooperative's mission to bring reliable, community-owned telecommunications to underserved areas across the archipelago.\n\nNew service areas include Barangay San Isidro in Antipolo, Barangay Dela Paz in Pasig, Barangay San Juan in Taytay, Barangay Santo Domingo in Cainta, and Barangay San Rafael in Rodriguez.\n\nThis expansion is expected to benefit thousands of households and small businesses that previously had limited access to broadband internet. Installation crews are already on the ground and expect to complete the rollout within the next 30 days.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "MAINTENANCE",
    title: "Scheduled Network Maintenance — Quezon City Area",
    date: "June 25, 2025",
    time: "2:00 AM – 6:00 AM",
    excerpt:
      "Routine network maintenance will be carried out in the Quezon City area. Members may experience brief service interruptions during the scheduled window.",
    content:
      "We will be performing routine network maintenance in the Quezon City area on June 25, 2025 from 2:00 AM to 6:00 AM.\n\nMembers may experience brief service interruptions during this period. Our technical team will be working to upgrade core network equipment to improve overall reliability and performance.\n\nWe apologize for any inconvenience and thank you for your patience and understanding.",
  },
  {
    id: 3,
    category: "EVENTS",
    title: "Annual General Assembly 2025 Set for July 15",
    date: "July 15, 2025",
    time: "9:00 AM – 4:00 PM",
    location: "TeleCoop Community Center, Quezon City",
    excerpt:
      "All members are invited to the Annual General Assembly. The agenda covers financial reports, network expansion updates, and the election of new board members.",
    content:
      "All members are cordially invited to attend the Annual General Assembly of TeleCoop Philippines on July 15, 2025 at the TeleCoop Community Center, Quezon City.\n\nThe assembly will run from 9:00 AM to 4:00 PM. The agenda includes presentation of financial reports, network expansion updates, election of new board members, and an open Q&A session for all members.\n\nLight refreshments will be provided. Members are encouraged to bring their membership ID and any questions or concerns they wish to raise during the open forum.",
  },
  {
    id: 4,
    category: "SERVICES",
    title: "New 200 Mbps Business Plan Now Available",
    date: "June 18, 2025",
    excerpt:
      "TeleCoop introduces its Business Advanced plan featuring 200 Mbps symmetrical speeds, multiple static IPs, and an enhanced SLA.",
    content:
      "TeleCoop Philippines is proud to introduce the Business Advanced plan, our most powerful offering for growing businesses and enterprises.\n\nThe plan features 200 Mbps symmetrical speeds, multiple static IP addresses, an enhanced service level agreement with guaranteed uptime, and priority technical support.\n\nThis plan is ideal for businesses that rely heavily on cloud services, video conferencing, and large file transfers. Contact our sales team at the TeleCoop main office or through the Member Inquiry form to learn more and sign up.",
  },
];

const serviceStatus = [
  { area: "Metro Manila", status: "operational" },
  { area: "Rizal Province", status: "operational" },
  { area: "Bulacan Province", status: "maintenance", note: "Until 6:00 AM" },
];

const events = [
  { title: "Member Orientation Session", date: "June 28, 2025", time: "10:00 AM – 12:00 PM", location: "TeleCoop Training Room" },
  { title: "Community Digital Literacy Workshop", date: "July 5, 2025", time: "2:00 PM – 5:00 PM", location: "Barangay Community Center" },
  { title: "Board Meeting", date: "July 10, 2025", time: "7:00 PM – 9:00 PM", location: "TeleCoop Main Office" },
];

export function NewsPage() {
  const [selected, setSelected] = useState<Article | null>(null);

  const featured = INITIAL_ARTICLES.find((a) => a.featured) ?? INITIAL_ARTICLES[0];
  const rest = INITIAL_ARTICLES.filter((a) => a.id !== featured.id);

  // ── Article detail view ──
  if (selected) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b-2 border-black">
          <div className="container mx-auto px-4 pt-8 pb-4 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Vol. VII · No. 24 · June 2025</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase leading-none mb-2" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>The TeleCoop</h1>
            <h2 className="text-3xl md:text-5xl font-black tracking-[0.15em] text-primary uppercase leading-none mb-4" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>Gazette</h2>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Gazette
          </button>

          <p className="text-xs font-black tracking-[0.25em] uppercase text-primary mb-3">{selected.category}</p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-black mb-4" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            {selected.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs italic text-muted-foreground border-y border-dashed border-slate-300 py-3 mb-6">
            <span>{selected.date}</span>
            {selected.time && <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{selected.time}</span>}
            {selected.location && <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{selected.location}</span>}
          </div>

          {selected.imageUrl && (
            <div className="mb-6 overflow-hidden border border-slate-200">
              <img src={selected.imageUrl} alt={selected.title} className="w-full h-64 object-cover grayscale" />
            </div>
          )}

          <div className="space-y-4">
            {selected.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-slate-700 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Main newspaper view ──
  return (
    <div className="min-h-screen bg-white">

      {/* Masthead */}
      <div className="border-b-2 border-black">
        <div className="container mx-auto px-4 pt-8 pb-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Vol. VII · No. 24 · June 2025</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase leading-none mb-2" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>The TeleCoop</h1>
          <h2 className="text-3xl md:text-5xl font-black tracking-[0.15em] text-primary uppercase leading-none mb-4" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>Gazette</h2>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Connecting Communities · Building Futures · Philippines' First Registered Telecommunications Cooperative
          </p>
        </div>

        {/* Scrolling ticker */}
        <div className="bg-black text-white overflow-hidden">
          <div className="flex items-center gap-8 py-2 w-max" style={{ animation: "ticker 18s linear infinite" }}>
            {[...serviceStatus, ...serviceStatus].map((s, i) => (
              <span key={i} className="flex items-center gap-2 text-xs whitespace-nowrap">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.status === "operational" ? "bg-green-400" : "bg-yellow-400"}`} />
                <span className="text-white/70">{s.area}:</span>
                <span className={s.status === "operational" ? "text-green-400 font-semibold" : "text-yellow-400 font-semibold"}>
                  {s.status === "operational" ? "Operational" : `Maintenance${s.note ? " · " + s.note : ""}`}
                </span>
                <span className="text-white/20 ml-4">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-black" />
          <span className="text-xs font-black tracking-[0.3em] uppercase px-2">Top Stories</span>
          <div className="h-px flex-1 bg-black" />
        </div>

        {/* Featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-black mb-8">
          <button
            onClick={() => setSelected(featured)}
            className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-black text-left group"
          >
            <div className="h-52 overflow-hidden">
              <img src={featured.imageUrl ?? "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80"} alt={featured.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="p-6">
              <p className="text-xs font-black tracking-[0.25em] uppercase text-primary mb-2">{featured.category}</p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight text-black mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                {featured.title}
              </h2>
              <p className="text-xs italic text-muted-foreground mb-4 border-b border-dashed border-slate-300 pb-3">{featured.date} — TeleCoop Philippines Newsroom</p>
              <p className="text-sm text-slate-700 leading-relaxed">{featured.excerpt}</p>
              <p className="flex items-center gap-1 text-xs font-bold text-primary mt-4">Read full story <ChevronRight className="h-3 w-3" /></p>
            </div>
          </button>

          {/* Events sidebar */}
          <div className="p-5">
            <p className="text-xs font-black tracking-[0.25em] uppercase border-b-2 border-black pb-2 mb-4">Upcoming Events</p>
            <div className="space-y-5">
              {events.map((event, i) => (
                <div key={i} className={i < events.length - 1 ? "pb-5 border-b border-dashed border-slate-300" : ""}>
                  <p className="font-bold text-sm text-black leading-snug mb-2" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>{event.title}</p>
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3 flex-shrink-0" />{event.date}</p>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3 w-3 flex-shrink-0" />{event.time}</p>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3 flex-shrink-0" />{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-black" />
          <span className="text-xs font-black tracking-[0.3em] uppercase px-2">Latest Announcements</span>
          <div className="h-px flex-1 bg-black" />
        </div>

        {/* Three-column articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border border-black mb-8">
          {rest.slice(0, 3).map((article) => (
            <button key={article.id} onClick={() => setSelected(article)} className="p-5 text-left group hover:bg-slate-50 transition-colors">
              <p className="text-xs font-black tracking-[0.25em] uppercase text-primary mb-2">{article.category}</p>
              <h3 className="font-black text-base leading-snug text-black mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                {article.title}
              </h3>
              <div className="border-t border-dashed border-slate-300 pt-2 mb-3">
                <p className="text-xs italic text-muted-foreground">
                  {article.date}
                  {article.time && <> · {article.time}</>}
                  {article.location && <> · {article.location}</>}
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{article.excerpt}</p>
              <p className="flex items-center gap-1 text-xs font-bold text-primary mt-3">Read more <ChevronRight className="h-3 w-3" /></p>
            </button>
          ))}
        </div>

        {/* Extra articles if more than 3 */}
        {rest.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border border-black border-t-0 mb-8">
            {rest.slice(3).map((article) => (
              <button key={article.id} onClick={() => setSelected(article)} className="p-5 text-left group hover:bg-slate-50 transition-colors">
                <p className="text-xs font-black tracking-[0.25em] uppercase text-primary mb-2">{article.category}</p>
                <h3 className="font-black text-base leading-snug text-black mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  {article.title}
                </h3>
                <div className="border-t border-dashed border-slate-300 pt-2 mb-3">
                  <p className="text-xs italic text-muted-foreground">{article.date}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{article.excerpt}</p>
                <p className="flex items-center gap-1 text-xs font-bold text-primary mt-3">Read more <ChevronRight className="h-3 w-3" /></p>
              </button>
            ))}
          </div>
        )}

        {/* Pull quote */}
        <div className="border-y-2 border-black py-6 text-center">
          <p className="text-xl md:text-2xl font-black italic text-black max-w-2xl mx-auto leading-snug" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            "Community-owned telecommunications can transform lives and create sustainable progress for generations to come."
          </p>
          <p className="text-xs tracking-widest uppercase text-primary mt-3">— TeleCoop Philippines</p>
        </div>

      </div>
    </div>
  );
}
