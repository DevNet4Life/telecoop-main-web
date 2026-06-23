import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Red top accent */}
      <div className="h-1 bg-primary w-full" />

      {/* Decorative bg circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/5 pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-white/3 pointer-events-none" />

      <div className="container mx-auto px-4 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-700">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold text-white">TeleCoop</span>
              <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-semibold">Philippines</span>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Est. 2019 · Plaridel, Bulacan</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The first registered telecommunications service cooperative in the Philippines, dedicated to providing reliable and affordable internet services to communities nationwide.
            </p>
            <p className="text-slate-500 text-sm italic">
              Supporting Barangay-based micro ICT service providers since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Membership Application", "Service Areas", "Technical Support", "Community Programs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-slate-600 group-hover:bg-primary group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-400 text-sm">+63 918-460-0900</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-400 text-sm">telecoop.ph@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">Rm 3 2F Klir-Con Building, Rocka Avenue, Rocka Village, Tabang, Plaridel, Bulacan</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-sm">
          <p>&copy; 2025 Telecommunications Service Cooperative (TeleCoop). All rights reserved.</p>
          <p className="text-slate-600 text-xs uppercase tracking-widest">Plaridel, Bulacan · Philippines</p>
        </div>
      </div>
    </footer>
  );
}
