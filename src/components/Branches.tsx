'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react'

const branches = [
  {
    id: 1,
    city: 'السنبلاوين',
    address: 'أرض الجمال — برج زوين',
    phone1: '0504688277',
    phone2: '01016503335',
    hours: 'السبت - الخميس: 9ص - 10م',
    mapUrl: 'https://maps.google.com/?q=السنبلاوين،+الدقهلية',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54860.25!2d31.55!3d30.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f800!2sSenbellawein!5e0!3m2!1sar!2seg!4v1',
    color: 'from-[#C9A84C] to-[#E8CC7A]',
    icon: '🏥',
    badge: 'الفرع الرئيسي',
  },
  {
    id: 2,
    city: 'المنصورة',
    address: 'شارع سكة سندوب — برج الجوهري',
    phone1: '0504688277',
    phone2: '01016503335',
    hours: 'السبت - الخميس: 10ص - 11م',
    mapUrl: 'https://maps.google.com/?q=المنصورة،+الدقهلية',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55000!2d31.38!3d31.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f800!2sMansura!5e0!3m2!1sar!2seg!4v1',
    color: 'from-blue-500 to-blue-600',
    icon: '🏢',
    badge: 'فرع المنصورة',
  },
]

export default function Branches() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="branches" className="section-pad bg-white dark:bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            فروعنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            نقاط <span className="text-gradient-gold">تواجدنا</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            عيادتان متكاملتان في خدمتك بمحافظة الدقهلية
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#112240] group"
            >
              {/* Map Placeholder */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#EBF8FF] to-blue-100 dark:from-[#0d2137] dark:to-[#112240]">
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`خريطة فرع ${branch.city}`}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
                {/* Map Overlay badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${branch.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                    {branch.badge}
                  </div>
                </div>
                {/* Navigate button */}
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-[#0A1628]/90 backdrop-blur-sm text-[#0A1628] dark:text-white text-xs font-bold px-3 py-2 rounded-full shadow hover:scale-105 transition-transform"
                >
                  <Navigation size={12} />
                  الاتجاهات
                </a>
              </div>

              {/* Branch Info */}
              <div className="p-7 text-right">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${branch.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {branch.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0A1628] dark:text-white font-black text-2xl">{branch.city}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${branch.color} bg-clip-text text-transparent`}>
                      {branch.badge}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-[#0A1628] dark:text-white text-sm">العنوان</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{branch.address}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#C9A84C]/10 flex-shrink-0">
                      <MapPin size={18} className="text-[#C9A84C]" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-[#0A1628] dark:text-white text-sm">أوقات العمل</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{branch.hours}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                      <Clock size={18} className="text-blue-500" />
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-[#0A1628] dark:text-white text-sm mb-1">أرقام التواصل</p>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${branch.phone1}`} className="text-blue-500 font-bold text-sm hover:text-[#C9A84C] transition-colors">
                          {branch.phone1}
                        </a>
                        <a href={`tel:${branch.phone2}`} className="text-blue-500 font-bold text-sm hover:text-[#C9A84C] transition-colors">
                          {branch.phone2}
                        </a>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex-shrink-0">
                      <Phone size={18} className="text-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={`tel:${branch.phone1}`}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r ${branch.color} text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
                  >
                    <Phone size={16} />
                    اتصل الآن
                  </a>
                  <a
                    href={`https://wa.me/20${branch.phone2.replace(/^0/, '')}?text=مرحباً، أريد حجز موعد في فرع ${branch.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={16} />
                    واتساب
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
