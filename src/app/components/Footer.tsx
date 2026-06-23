import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="mb-4">TeleCoop Philippines</h3>
            <p className="text-slate-300 mb-4">
              The first registered telecommunications service cooperative in the Philippines, dedicated to providing reliable and affordable internet services to communities nationwide through cooperative ownership and community empowerment.
            </p>
            <p className="text-slate-300">
              Supporting Barangay-based micro ICT service providers since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Membership Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Information</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+63 918-460-0900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>telecoop.ph@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rm 3 2F Klir-Con Building, Rocka Avenue, Rocka Village, Tabang, Plaridel, Bulacan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Telecommunications Service Cooperative (TeleCoop). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}