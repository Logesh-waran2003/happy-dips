import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-strawberry/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-chocolate/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-strawberry font-medium tracking-wider uppercase mb-4"
          >
            Premium Desserts in Chennai
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-chocolate mb-6 leading-tight">
            Indulge in <br />
            <span className="text-gradient">Sweet Perfection</span>
          </h1>
          <p className="text-lg text-chocolate-light mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Discover the finest strawberry chocolates, artisanal brownies, and handcrafted desserts that melt in your mouth. Welcome to Happy Dips.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-strawberry text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 shadow-lg shadow-strawberry/30 hover:shadow-strawberry/50 transition-all"
            >
              Order Now <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium text-lg text-chocolate border-2 border-chocolate/10 hover:border-chocolate/30 hover:bg-chocolate/5 transition-all"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <div className="relative h-[500px] flex items-center justify-center">
           {/* Placeholder for 3D/Image element - In a real app, this would be a high-res image or 3D model */}
           <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-chocolate to-chocolate-light rounded-[2rem] rotate-3 shadow-2xl flex items-center justify-center"
           >
              <div className="absolute inset-2 border-2 border-white/20 rounded-[1.8rem]" />
              <span className="text-cream font-serif text-4xl text-center p-8">
                Signature<br/>Strawberry<br/>Dip
              </span>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-strawberry rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                New!
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
