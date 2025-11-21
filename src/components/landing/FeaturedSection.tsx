import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'

export function FeaturedSection() {
  return (
    <section className="py-20 bg-cream text-chocolate relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-strawberry font-medium tracking-wider uppercase mb-2 block">
            As Seen In
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Making Headlines
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Article Feature */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-chocolate/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Award className="text-strawberry w-10 h-10" />
              <div>
                <h3 className="font-bold text-xl">The New Indian Express</h3>
                <p className="text-chocolate/60 text-sm">April 24, 2024</p>
              </div>
            </div>

            <h4 className="text-2xl font-serif font-bold mb-4">
              "Of desserts, dreams, and dedication"
            </h4>
            <p className="text-chocolate/70 mb-6 leading-relaxed">
              Featured for our unique approach to desserts and our journey in
              bringing premium chocolate experiences to Chennai.
            </p>

            <a
              href="https://www.newindianexpress.com/cities/chennai/2024/Apr/24/of-desserts-dreams-and-dedication"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-strawberry font-medium hover:text-strawberry/80 transition-colors"
            >
              Read Full Article <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Team Feature */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-strawberry/10 rounded-3xl transform -rotate-3" />
            <div className="relative bg-chocolate text-cream p-8 rounded-3xl overflow-hidden">
              {/* Team Image */}
              <div className="aspect-video bg-chocolate-light rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group">
                <img
                  src="/happyDips.avif"
                  alt="Happy Dips Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>

              <p className="font-serif text-lg italic text-center leading-relaxed">
                "Hemanth Raj, Sanjay Prakash, Dinesh and Shubhang of Happy Dips"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
