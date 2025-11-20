import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-chocolate text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-strawberry/30 rounded-3xl transform rotate-3" />
            <div className="relative bg-chocolate-light/50 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
               {/* Placeholder for About Image */}
               <div className="h-64 bg-gradient-to-br from-strawberry to-chocolate rounded-2xl flex items-center justify-center text-4xl">
                  🍰
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-strawberry font-medium tracking-wider uppercase mb-2 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Crafted with Love in <span className="text-strawberry">Chennai</span>
          </h2>
          <p className="text-cream/80 text-lg mb-6 leading-relaxed">
            Happy Dips started as a small passion project in the heart of Anna Nagar. We wanted to bring the authentic taste of premium Belgian chocolate and pair it with the freshest strawberries from the hills.
          </p>
          <p className="text-cream/80 text-lg mb-8 leading-relaxed">
            Today, we are Chennai's favorite destination for dessert lovers who seek something unique, beautiful, and absolutely delicious.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="bg-strawberry/20 p-3 rounded-full">
              <MapPin className="text-strawberry" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Visit Our Store</h4>
              <p className="text-cream/60">123 Dessert Avenue, Anna Nagar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
