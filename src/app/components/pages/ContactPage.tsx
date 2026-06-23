import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText, Send } from "lucide-react";
import { PageHero } from "../PageHero";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

const provinces = [
  { name: "Bulacan", hq: true, municipalities: ["Plaridel ★","Malolos","San Jose del Monte","Meycauayan","Marilao","Bocaue","Balagtas","Guiguinto","Calumpit","Hagonoy","Pulilan","Bustos","Baliuag","Angat","Norzagaray","Doña Remedios Trinidad","San Ildefonso","San Miguel","San Rafael","Santa Maria"] },
  { name: "Pampanga", hq: false, municipalities: ["San Fernando","Angeles City","Mabalacat","Guagua","Macabebe","Masantol","Mexico","Porac","Santa Ana","Apalit","Candaba","Floridablanca","Lubao","Sasmuan","San Luis","San Simon","Sta. Rita","Sto. Tomas"] },
  { name: "Nueva Ecija", hq: false, municipalities: ["Cabanatuan","San Jose","Palayan","Gapan","Muñoz","Talavera","Guimba","Zaragoza","Aliaga","Bongabon","Cuyapo","Laur","Licab","Llanera","Lupao","Nampicuan","Peñaranda","Quezon","Rizal","San Isidro","San Leonardo","Santa Rosa","Sto. Domingo","Gabaldon"] },
  { name: "Tarlac", hq: false, municipalities: ["Tarlac City","Capas","Concepcion","Victoria","Bamban","Camiling","Gerona","La Paz","Mayantoc","Moncada","Paniqui","Pura","Ramos","San Clemente","San Jose","San Manuel","Santa Ignacia"] },
  { name: "Zambales", hq: false, municipalities: ["Olongapo City","Subic","San Antonio","Iba","Castillejos","San Marcelino","San Narciso","Botolan","Cabangan","Masinloc","Palauig","Sta. Cruz","Candelaria"] },
  { name: "Bataan", hq: false, municipalities: ["Balanga","Mariveles","Orani","Hermosa","Abucay","Bagac","Dinalupihan","Limay","Morong","Orion","Pilar","Samal"] },
  { name: "Aurora", hq: false, municipalities: ["Baler","Casiguran","Dingalan","Dipaculao","Maria Aurora","San Luis"] },
];

const plaridel = ["Agnaya","Bagong Silang","Banga I","Banga II","Bintog","Bulihan","Culianin","Dampol I","Dampol II-A","Dampol II-B","Document","Garlang","Linya","Lumbang","Malipampang","Mataas na Parang","Niugan","Parulan","Poblacion","Pulong Yantok","Rueda","San Jose","Santa Ines","Santo Cristo","Santo Niño","Tabang","Tulungatung","Wawa"];

function ServiceAreas() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  return (
    <section className="mb-16">
      <h2 className="text-center mb-2">Service Areas</h2>
      <p className="text-center text-muted-foreground text-sm italic mb-10">Region III — Central Luzon · {provinces.length} Provinces</p>

      <div className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
        {provinces.map(p => {
          const isOpen = openSet.has(p.name);
          return (
            <div key={p.name}>
              <button
                onClick={() => toggle(p.name)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className={`font-semibold text-sm ${isOpen ? "text-primary" : "text-slate-800"}`}>{p.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{p.municipalities.length} municipalities</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 py-4 bg-white border-t border-slate-50 flex flex-wrap gap-2">
                  {p.municipalities.map(m => (
                    <span key={m} className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                      m.includes("★")
                        ? "bg-primary text-white border-primary"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}>
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone Support",
      details: [
        "+63 918-460-0900"
      ],
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email Support",
      details: [
        "telecoop.ph@gmail.com"
      ],
      hours: "24/7 response within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Main Office",
      details: [
        "Rm 3 2F Klir-Con Building",
        "Rocka Avenue, Rocka Village",
        "Tabang, Plaridel, Bulacan"
      ],
      hours: "Mon-Fri: 8AM-5PM"
    }
  ];

  const supportServices = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Technical Support",
      description: "Get help with ICT services, network issues, and technical assistance for micro service providers.",
      contact: "Call: +63 918-460-0900"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Membership Support",
      description: "Information about cooperative membership, benefits, and community programs.",
      contact: "Email: telecoop.ph@gmail.com"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "General Inquiries",
      description: "Questions about our services, community projects, and partnership opportunities.",
      contact: "Call: +63 918-460-0900"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
    { day: "Holidays", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact TeleCoop"
        subtitle="Get in touch with the Philippines' first registered telecommunications service cooperative. We're here to support micro ICT service providers and communities nationwide."
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />
      <div className="container mx-auto px-4 py-10">

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Red accent bar */}
                <div className="h-1 w-full bg-primary" />

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{info.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-base mb-3">{info.title}</h3>

                  {/* Details */}
                  <div className="space-y-0.5 mb-3">
                    {info.details.map((detail, di) => (
                      <p key={di} className="text-sm font-medium text-slate-700">{detail}</p>
                    ))}
                  </div>

                  {/* Hours pill */}
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {info.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Office Hours */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="h-1 w-full bg-primary" />
                <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Send us a Message</h3>
                    <p className="text-xs text-muted-foreground">Fill out the form and we'll get back to you as soon as possible.</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="mb-1.5 block font-medium">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="border-slate-300 bg-slate-50 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-1.5 block font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="border-slate-300 bg-slate-50 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="mb-1.5 block font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="border-slate-300 bg-slate-50 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="mb-1.5 block font-medium">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                          <SelectTrigger className="border-slate-300 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="membership">Cooperative Membership</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="community">Community Programs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="mb-1.5 block font-medium">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                        className="border-slate-300 bg-slate-50 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-1.5 block font-medium">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="border-slate-300 bg-slate-50 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="h-1 w-full bg-primary" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">Office Hours</h3>
                </div>

                <div className="divide-y divide-slate-100">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3">
                      <span className="text-sm font-medium text-slate-700">{schedule.day}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        schedule.hours === "Closed"
                          ? "bg-slate-100 text-slate-500"
                          : schedule.hours === "By Appointment"
                          ? "bg-primary/10 text-primary"
                          : "bg-primary text-white"
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-primary">Community Support: </span>
                    For urgent ICT issues or technical emergencies, call our main line at <span className="font-semibold text-slate-900">+63 918-460-0900</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-1 w-full bg-primary" />
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white">{service.icon}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {service.contact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <ServiceAreas />
      </div>
    </div>
  );
}