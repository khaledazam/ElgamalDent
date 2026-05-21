'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smile, Sparkles, Zap, Droplets, Activity, Shield, Star } from 'lucide-react'

const services = [
  {
    icon: Star,
    title: 'ابتسامة هوليود',
    description: 'احصل على ابتسامة النجوم مع قشرة البورسلين فائقة الجودة — نتيجة مذهلة في وقت قياسي',
    color: 'from-[#C9A84C] to-[#E8CC7A]',
    bg: 'from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10',
    badge: 'الأكثر طلبًا',
    badgeColor: 'bg-[#C9A84C] text-white',
  },
  {
    icon: Smile,
    title: 'تقويم الأسنان',
    description: 'تقويم الأسنان للكبار والصغار بأحدث الأجهزة الشفافة والتقليدية لنتائج مثالية تدوم',
    color: 'from-blue-500 to-blue-400',
    bg: 'from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/10',
    badge: null,
    badgeColor: '',
  },
  {
    icon: Sparkles,
    title: 'تجميل الأسنان',
    description: 'تصحيح لون وشكل وحجم الأسنان بأحدث تقنيات التجميل لابتسامة تناسب شخصيتك',
    color: 'from-purple-500 to-purple-400',
    bg: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10',
    badge: null,
    badgeColor: '',
  },
  {
    icon: Zap,
    title: 'زراعة الأسنان',
    description: 'زراعة أسنان دائمة بتقنية الزرع الفوري — أسنان طبيعية المظهر تدوم مدى الحياة',
    color: 'from-emerald-500 to-emerald-400',
    bg: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/10',
    badge: 'تقنية حديثة',
    badgeColor: 'bg-emerald-500 text-white',
  },
  {
    icon: Droplets,
    title: 'تنظيف وتبييض',
    description: 'تنظيف احترافي عميق وتبييض آمن وفعال يجعل أسنانك تتألق بأكثر من 8 درجات',
    color: 'from-cyan-500 to-cyan-400',
    bg: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/10',
    badge: null,
    badgeColor: '',
  },
  {
    icon: Activity,
    title: 'علاج الجذور',
    description: 'إنقاذ أسنانك المصابة من الخلع بعلاج قناة الجذر المتقدم وبدون ألم',
    color: 'from-rose-500 to-rose-400',
    bg: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/10',
    badge: null,
    badgeColor: '',
  },
  {
    icon: Shield,
    title: 'حشو الأسنان',
    description: 'حشوات طبية عالية الجودة بألوان طبيعية تماثل لون أسنانك — متينة وجمالية',
    color: 'from-orange-500 to-orange-400',
    bg: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10',
    badge: null,
    badgeColor: '',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-pad bg-white dark:bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            خدماتنا الطبية
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            كل ما تحتاجه لـ <span className="text-gradient-gold">ابتسامة مثالية</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            نقدم مجموعة شاملة من خدمات طب الأسنان التجميلي والعلاجي بأحدث التقنيات وأيدي خبيرة
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative group rounded-3xl p-6 bg-gradient-to-br ${service.bg} border border-gray-100 dark:border-gray-800 card-hover cursor-pointer overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 left-4 text-xs font-bold px-2 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-[#0A1628] dark:text-white font-black text-lg mb-3 text-right group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#C9A84C] group-hover:to-[#E8CC7A] group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-right">
                {service.description}
              </p>

              {/* Arrow */}
              <div className={`mt-4 flex justify-end`}>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg`}>
                  <span className="text-white text-sm font-bold">←</span>
                </div>
              </div>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/201016503335?text=أريد الاستفسار عن الخدمات"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base mx-auto inline-flex"
          >
            <Sparkles size={18} />
            احجز استشارتك المجانية
          </a>
        </motion.div>
      </div>
    </section>
  )
}
