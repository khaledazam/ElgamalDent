'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Star, Award, Users, MapPin } from 'lucide-react'
import Image from 'next/image'

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const start = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress >= 1) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, started])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'مريض سعيد' },
  { icon: Award, value: 15, suffix: '+', label: 'سنة خبرة' },
  { icon: Star, value: 98, suffix: '%', label: 'نسبة رضا العملاء' },
  { icon: MapPin, value: 2, suffix: '', label: 'فرع متخصص' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#112240] to-[#0d2137]" />

        {/* Clinic name as decorative watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <div className="text-center opacity-[0.04]">
            <p className="text-white font-black leading-none" style={{ fontSize: 'clamp(60px, 12vw, 160px)', whiteSpace: 'nowrap' }}>
              عيادات الجمال
            </p>
            <p className="text-[#C9A84C] font-black leading-none" style={{ fontSize: 'clamp(30px, 6vw, 80px)', whiteSpace: 'nowrap' }}>
              لعلاج وتقويم الأسنان
            </p>
          </div>
        </div>

        {/* Animated geometric elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#C9A84C]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#C9A84C]/5 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/10 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C9A84C]/15 animate-spin-slow" style={{ animationDuration: '15s' }} />

        {/* Stars */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${(i * 13 + 7) % 100}%`,
              left: `${(i * 17 + 5) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.1,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i % 4) * 0.5}s`,
            }}
          />
        ))}

        {/* Gold dots pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>


      <motion.div className="relative z-10 w-full" style={{ opacity }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              >
                <Star size={14} className="text-[#E8CC7A] fill-[#E8CC7A]" />
                <span className="text-[#E8CC7A] text-sm font-semibold">أفضل عيادة أسنان في المنطقة</span>
                <Star size={14} className="text-[#E8CC7A] fill-[#E8CC7A]" />
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                ابتسامتك{' '}
                <span className="text-gradient-gold">تاجك</span>
                {' '}الأجمل
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6">
                عيادات الجمال لعلاج وتقويم الأسنان
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                مع <span className="text-[#E8CC7A] font-bold">دكتور إبراهيم جمال</span> — ماجستير أمراض الفم — نقدم لك أحدث تقنيات علاج وتجميل الأسنان بأيدي خبيرة تضمن لك النتائج المثالية
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-end">
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-gold text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone size={18} />
                  احجز الآن
                </motion.a>
                <motion.a
                  href="https://wa.me/201016503335?text=مرحباً، أريد حجز موعد"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={18} />
                  تواصل واتساب
                </motion.a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="glass rounded-2xl p-4 text-center"
                  >
                    <stat.icon size={20} className="text-[#E8CC7A] mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#C9A84C]/40 to-blue-500/20 blur-2xl scale-110" />
                
                {/* Doctor Photo Frame */}
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-[40px] overflow-hidden border-2 border-[#C9A84C]/30 shadow-2xl animate-float">
                  <Image
                    src="/doctor-real.jpg"
                    alt="دكتور إبراهيم جمال"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                    onError={(e) => {
                      // Fallback to gradient if image not found
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {/* Gradient overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
                  
                  {/* Doctor name badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-dark rounded-2xl p-3 text-center">
                      <p className="text-[#E8CC7A] font-black text-lg">د. إبراهيم جمال</p>
                      <p className="text-gray-300 text-xs">ماجستير أمراض الفم</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge — years */}
                <motion.div
                  className="absolute -top-4 -right-4 glass-dark rounded-2xl p-3 shadow-xl border border-[#C9A84C]/30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-center">
                    <p className="text-[#E8CC7A] font-black text-2xl">+15</p>
                    <p className="text-gray-300 text-xs">سنة خبرة</p>
                  </div>
                </motion.div>

                {/* Floating badge — rating */}
                <motion.div
                  className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-3 shadow-xl border border-blue-500/30"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-black text-lg">5.0</span>
                  </div>
                  <p className="text-gray-400 text-xs">تقييم المرضى</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-white/50 text-xs">اكتشف المزيد</p>
          <ChevronDown className="text-[#C9A84C]" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
