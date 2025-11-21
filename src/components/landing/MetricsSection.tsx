import { motion } from 'framer-motion'
import { Store, Users, Star, Heart } from 'lucide-react'

const metrics = [
  {
    id: 1,
    label: 'Franchises',
    value: '7+',
    icon: Store,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    id: 2,
    label: 'Happy Customers',
    value: '5000+',
    icon: Users,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    id: 3,
    label: '5-Star Reviews',
    value: '4.9',
    icon: Star,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    id: 4,
    label: 'Chocolate Used',
    value: '1000kg+',
    icon: Heart,
    color: 'text-strawberry',
    bg: 'bg-strawberry/10',
  },
]

export function MetricsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${metric.bg} flex items-center justify-center`}
              >
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-chocolate mb-2">
                {metric.value}
              </h3>
              <p className="text-chocolate/60 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
