import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

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
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Support",
      details: [
        "+63 918-460-0900"
      ],
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      details: [
        "telecoop.ph@gmail.com"
      ],
      hours: "24/7 response within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Contact TeleCoop</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with the Philippines' first registered telecommunications service cooperative. We're here to support micro ICT service providers and communities nationwide.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="mb-1">{detail}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{info.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Office Hours */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                          <SelectTrigger>
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{schedule.day}</span>
                        <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm">
                      <strong>Community Support:</strong> For urgent community ICT issues or technical emergencies affecting multiple service providers, please call our main line at +63 918-460-0900.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-primary">{service.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-center mb-2">Service Areas</h2>
          <p className="text-center text-muted-foreground mb-8">
            Region III — Central Luzon
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Bulacan — HQ province */}
            <Card className="border-primary border-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Bulacan</CardTitle>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded-full">HQ Province</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {["Plaridel ★","Malolos","San Jose del Monte","Meycauayan","Marilao","Bocaue","Balagtas","Guiguinto","Calumpit","Hagonoy","Pulilan","Bustos","Baliuag","Angat","Norzagaray","Doña Remedios Trinidad","San Ildefonso","San Miguel","San Rafael","Santa Maria"].map(m => (
                    <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pampanga */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Pampanga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {["San Fernando","Angeles City","Mabalacat","Guagua","Macabebe","Masantol","Mexico","Porac","Santa Ana","Apalit","Candaba","Floridablanca","Lubao","Sasmuan","San Luis","San Simon","Sta. Rita","Sto. Tomas"].map(m => (
                    <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nueva Ecija */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Nueva Ecija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {["Cabanatuan","San Jose","Palayan","Gapan","Muñoz","Talavera","Guimba","Zaragoza","Aliaga","Bongabon","Cuyapo","Laur","Licab","Llanera","Lupao","Nampicuan","Peñaranda","Quezon","Rizal","San Isidro","San Leonardo","Santa Rosa","Sto. Domingo","Gabaldon"].map(m => (
                    <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tarlac */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Tarlac</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {["Tarlac City","Capas","Concepcion","Victoria","Bamban","Camiling","Gerona","La Paz","Mayantoc","Moncada","Paniqui","Pura","Ramos","San Clemente","San Jose","San Manuel","Santa Ignacia"].map(m => (
                    <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Zambales */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Zambales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {["Olongapo City","Subic","San Antonio","Iba","Castillejos","San Marcelino","San Narciso","Botolan","Cabangan","Masinloc","Palauig","Sta. Cruz","Candelaria"].map(m => (
                    <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Bataan + Aurora */}
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Bataan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {["Balanga","Mariveles","Orani","Hermosa","Abucay","Bagac","Dinalupihan","Limay","Morong","Orion","Pilar","Samal"].map(m => (
                      <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                        <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Aurora</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">Municipalities / Cities</p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {["Baler","Casiguran","Dingalan","Dipaculao","Maria Aurora","San Luis"].map(m => (
                      <li key={m} className="text-sm text-muted-foreground flex items-start gap-1">
                        <span className="text-primary mt-0.5 shrink-0">·</span>{m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>

          {/* Plaridel barangays */}
          <div className="mt-8">
            <Card className="bg-accent/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Plaridel, Bulacan — Barangays Served
                </CardTitle>
                <p className="text-sm text-muted-foreground">TeleCoop's home municipality · Rm 3 2F Klir-Con Building, Rocka Avenue, Rocka Village, Tabang</p>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1.5">
                  {["Agnaya","Bagong Silang","Banga I","Banga II","Bintog","Bulihan","Culianin","Dampol I","Dampol II-A","Dampol II-B","Document","Garlang","Linya","Lumbang","Malipampang","Mataas na Parang","Niugan","Parulan","Poblacion","Pulong Yantok","Rueda","San Jose","Santa Ines","Santo Cristo","Santo Niño","Tabang","Tulungatung","Wawa"].map(b => (
                    <li key={b} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary mt-0.5 shrink-0">·</span>{b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Media */}
        <section className="text-center">
          <h2 className="mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              YouTube
            </a>
          </div>
          <p className="text-muted-foreground mt-4">
            Stay updated with our community projects, cooperative activities, and support programs for micro ICT service providers.
          </p>
        </section>
      </div>
    </div>
  );
}