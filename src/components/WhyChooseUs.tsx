'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Users, Shield, DollarSign, CheckCircle2, HeartPulse } from 'lucide-react'

const reasons = [
  {
    icon: Cpu,
    title: 'أحدث الأجهزة',
    description: 'نمتلك أحدث تقنيات الطب الحديث من أجهزة تصوير ثلاثي الأبعاد وليزر متطور وأنظمة CAD/CAM',
    color: 'from-blue-500 to-blue-600',
    stat: '+20',
    statLabel: 'جهاز حديث',
  },

  {
    icon: Shield,
    title: 'تعقيم كامل',
    description: 'بروتوكول تعقيم متكامل يفوق المعايير الدولية لضمان سلامتك في كل زيارة',
    color: 'from-emerald-500 to-emerald-600',
    stat: '100%',
    statLabel: 'معدل التعقيم',
  },
  {
    icon: DollarSign,
    title: 'أسعار مناسبة',
    description: 'جودة عالمية بأسعار في متناول الجميع مع خطط تقسيط مرنة تناسب جميع الميزانيات',
    color: 'from-rose-500 to-rose-600',
    stat: '0٪',
    statLabel: 'فوائد للتقسيط',
  },
  {
    icon: CheckCircle2,
    title: 'نتائج مضمونة',
    description: 'نضمن نتائج علاجاتنا بضمان خطي معتمد — رضاك الكامل أو نُعيد العلاج مجانًا',
    color: 'from-violet-500 to-violet-600',
    stat: '98٪',
    statLabel: 'رضا المرضى',
  },
  {
    icon: HeartPulse,
    title: 'رعاية متواصلة',
    description: 'متابعة دورية مجانية ودعم على مدار الساعة لضمان صحة أسنانك على المدى الطويل',
    color: 'from-cyan-500 to-cyan-600',
    stat: '24/7',
    statLabel: 'دعم فوري',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="section-pad bg-gradient-to-b from-white to-[#EBF8FF] dark:from-[#112240] dark:to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            لماذا نحن؟
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            ما يميّز <span className="text-gradient-gold">عيادات الجمال</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            نحن لسنا مجرد عيادة — نحن شركاء نجاحك نحو ابتسامة أجمل وصحة أفضل
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl bg-white dark:bg-[#112240] p-8 shadow-lg hover:shadow-2xl card-hover border border-gray-100 dark:border-gray-800 overflow-hidden text-right"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />

              {/* Stat Badge */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${reason.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon size={24} className="text-white" />
                </div>
                {/* Stat */}
                <div className="text-right">
                  <p className={`text-3xl font-black bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                    {reason.stat}
                  </p>
                  <p className="text-gray-400 text-xs">{reason.statLabel}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[#0A1628] dark:text-white font-black text-xl mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.description}</p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 right-0 w-2 h-full bg-gradient-to-b ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#0A1628] via-[#112240] to-[#0A1628] p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              جاهز لتغيير ابتسامتك؟
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              احجز استشارتك المجانية الآن واكتشف كيف يمكننا تحويل ابتسامتك إلى تحفة فنية
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0504688277" className="btn-gold text-base">
                📞 0504688277
              </a>
              <a
                href="https://wa.me/201016503335?text=أريد حجز استشارة مجانية"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                💬 واتساب
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
