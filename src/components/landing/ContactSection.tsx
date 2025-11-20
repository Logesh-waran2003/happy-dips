import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6">
              Get in <span className="text-strawberry">Touch</span>
            </h2>
            <p className="text-chocolate-light text-lg mb-8">
              Have a sweet craving or a bulk order request? We'd love to hear from you. Fill out the form or visit us at our Chennai store.
            </p>
            
            <div className="space-y-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-chocolate/5">
                  <h4 className="font-bold text-chocolate text-xl mb-2">Opening Hours</h4>
                  <p className="text-chocolate-light">Mon - Sun: 10:00 AM - 10:00 PM</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-chocolate/5">
                  <h4 className="font-bold text-chocolate text-xl mb-2">Bulk Orders</h4>
                  <p className="text-chocolate-light">For weddings and parties, please contact us at least 48 hours in advance.</p>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-chocolate/5"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-chocolate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-chocolate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-chocolate mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-chocolate/10 focus:border-strawberry focus:ring-1 focus:ring-strawberry outline-none transition-all"
                  placeholder="Tell us what you're craving..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-chocolate text-cream py-4 rounded-xl font-bold text-lg hover:bg-chocolate-light transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
