import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Strawberry Bliss',
    description: 'Fresh strawberries dipped in premium Belgian chocolate.',
    price: '₹299',
    color: 'bg-strawberry-light/20',
    textColor: 'text-strawberry',
  },
  {
    id: 2,
    name: 'Fudgy Brownie',
    description: 'Rich, gooey chocolate brownies topped with sea salt.',
    price: '₹199',
    color: 'bg-chocolate-light/20',
    textColor: 'text-chocolate',
  },
  {
    id: 3,
    name: 'Choco Pops',
    description: 'Bite-sized cake pops coated in white and dark chocolate.',
    price: '₹149',
    color: 'bg-gold/20',
    textColor: 'text-chocolate-light',
  },
];

export function ProductShowcase() {
  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Our Sweet <span className="text-strawberry">Creations</span>
          </h2>
          <p className="text-chocolate-light max-w-2xl mx-auto">
            Handcrafted with love and the finest ingredients. Every bite is a celebration of flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl p-8 ${product.color} relative group cursor-pointer`}
            >
              <div className="h-48 mb-6 bg-white/50 rounded-2xl flex items-center justify-center">
                {/* Placeholder for Product Image */}
                <span className="text-4xl">🍫</span>
              </div>
              <h3 className={`text-2xl font-serif font-bold mb-2 ${product.textColor}`}>
                {product.name}
              </h3>
              <p className="text-chocolate/70 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-chocolate">{product.price}</span>
                <button className="bg-white text-chocolate px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
