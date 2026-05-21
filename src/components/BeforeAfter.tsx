'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'تقويم الأسنان',
    description: 'تصحيح الاعوجاج واستعادة الانتظام الكامل للأسنان',
    before: '/before-after-braces.png',
    after: '/before-after-braces.png',
    duration: '18 شهر',
    procedure: 'Orthodontics',
    color: 'from-blue-500 to-blue-400',
  },
  {
    id: 2,
    title: 'ابتسامة هوليود',
    description: 'تحول ساحر بقشرة البورسلين الفاخرة في جلستين فقط',
    before: '/before-after-hollywood.png',
    after: '/before-after-hollywood.png',
    duration: 'جلستان',
    procedure: 'Hollywood Smile',
    color: 'from-[#C9A84C] to-[#E8CC7A]',
  },
  {
    id: 3,
    title: 'تبييض الأسنان',
    description: 'إشراقة بيضاء ناصعة في جلسة واحدة بتقنية الليزر',
    before: '/before-after-1.png',
    after: '/before-after-2.png',
    duration: 'جلسة واحدة',
    procedure: 'Whitening',
    color: 'from-emerald-500 to-emerald-400',
  },
]

function CompareCard({ case: c }: { case: typeof cases[0] }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 5), 95))
  }

  return (
    <div
      className="rounded-3xl overflow-hidden bg-white dark:bg-[#112240] shadow-2xl border border-gray-100 dark:border-gray-800 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setIsDragging(false) }}
    >
      {/* Image area */}
      <div
        ref={containerRef}
        className="relative h-72 cursor-col-resize overflow-hidden select-none"
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Full image (right half = after) */}
        <div className="absolute inset-0">
          <Image src={c.before} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>

        {/* Left clip = before side with slight dim */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <Image src={c.before} alt="قبل" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover brightness-75 saturate-50" />
          {/* Before label */}
          <div className="absolute top-4 right-3 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
            قبل العلاج
          </div>
        </div>

        {/* After label (right side) */}
        <div className="absolute top-4 left-3 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
          بعد العلاج ✨
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute inset-0 w-0.5 bg-white shadow-2xl left-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#C9A84C]">
            <div className="flex gap-0.5">
              <ChevronLeft size={11} className="text-[#C9A84C]" />
              <ChevronRight size={11} className="text-[#C9A84C]" />
            </div>
          </div>
        </div>

        {/* Drag hint */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-70'}`}>
          ← اسحب للمقارنة →
        </div>

        {/* Gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Case Info */}
      <div className="p-5 text-right">
        <div className="flex items-center justify-between mb-1">
          <span className={`text-xs bg-gradient-to-r ${c.color} text-white px-3 py-1 rounded-full font-bold shadow-sm`}>
            {c.procedure}
          </span>
          <h3 className="font-black text-[#0A1628] dark:text-white text-lg">{c.title}</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{c.description}</p>
        <div className="flex items-center gap-2 justify-end mt-3">
          <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full font-semibold">
            ⏱ المدة: {c.duration}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section id="before-after" className="section-pad bg-gradient-to-b from-[#0A1628] to-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#C9A84C]/20 text-[#E8CC7A] px-4 py-2 rounded-full text-sm font-bold mb-4">
            حالات حقيقية
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            قبل و <span className="text-gradient-gold">بعد العلاج</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-gray-400 mt-4">
            اسحب شريط المقارنة لترى التحول المذهل بنفسك
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <CompareCard case={c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          * جميع النتائج حقيقية لمرضانا الكرام — النتائج تختلف من شخص لآخر
        </motion.p>
      </div>
    </section>
  )
}
