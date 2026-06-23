import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { InteractiveMap } from "../InteractiveMap";

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

        {/* Interactive Map */}
        <section className="mb-16">
          <h2 className="text-center mb-8">Our Location &amp; Service Areas</h2>
          <Card>
            <CardContent className="p-6">
              <InteractiveMap />
              <div className="mt-4 text-center">
                <p className="text-muted-foreground mb-2">
                  <strong>TeleCoop Main Office:</strong> Rm 3 2F Klir-Con Building, Rocka Avenue, Rocka Village, Tabang, Plaridel, Bulacan
                </p>
                <p className="text-sm text-muted-foreground">
                  Click on the markers to view detailed information about our office and service areas.
                </p>
              </div>
            </CardContent>
          </Card>
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