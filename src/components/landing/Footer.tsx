import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-chocolate text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Social */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-strawberry">Happy Dips</h3>
          <p className="text-cream/80 max-w-xs">
            Crafting premium strawberry chocolates and desserts that bring joy to every bite.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-strawberry transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-strawberry transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-strawberry transition-colors"><Twitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-xl font-serif font-bold">Quick Links</h4>
          <ul className="space-y-3 text-cream/80">
            <li><a href="#" className="hover:text-strawberry transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-strawberry transition-colors">Our Menu</a></li>
            <li><a href="#about" className="hover:text-strawberry transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-strawberry transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xl font-serif font-bold">Visit Us</h4>
          <ul className="space-y-4 text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="text-strawberry shrink-0" />
              <span>123 Dessert Avenue, Anna Nagar,<br />Chennai, Tamil Nadu 600040</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-strawberry shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-strawberry shrink-0" />
              <span>hello@happydips.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-cream/10 text-center text-cream/60 text-sm">
        © {new Date().getFullYear()} Happy Dips. All rights reserved.
      </div>
    </footer>
  );
}
