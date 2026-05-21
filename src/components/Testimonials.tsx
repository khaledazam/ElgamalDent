'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'أحمد محمود',
    location: 'المنصورة',
    rating: 5,
    review: 'تجربة رائعة جداً! الدكتور إبراهيم شخص متميز ومحترف للغاية. عملت تقويم أسنان وكانت النتيجة خيالية. العيادة نظيفة جداً والفريق ودود ومتعاون. بنصح كل الناس بيها.',
    service: 'تقويم الأسنان',
    avatar: 'أ',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'نور الهدى',
    location: 'السنبلاوين',
    rating: 5,
    review: 'عملت ابتسامة هوليود وماشفتش زيها في حياتي! النتيجة زادت توقعاتي بمراحل. الدكتور شرح لي كل خطوة بالتفصيل وكنت مرتاحة طول الوقت. شكراً جداً دكتور إبراهيم.',
    service: 'ابتسامة هوليود',
    avatar: 'ن',
    color: 'from-[#C9A84C] to-[#E8CC7A]',
  },
  {
    name: 'محمد السيد',
    location: 'المنصورة',
    rating: 5,
    review: 'زرعت ضرستين والحمد لله النتيجة ممتازة. الدكتور محترف جداً وبيشرح كل حاجة قبل ما يعملها. الأسعار كويسة ومعقولة مقارنة بالخدمة الممتازة اللي بتاخدها.',
    service: 'زراعة الأسنان',
    avatar: 'م',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'سارة عبدالله',
    location: 'السنبلاوين',
    rating: 5,
    review: 'من أفضل العيادات اللي زرتها. نظافة وتعقيم مثالي، والدكتور حاسس إنه بيهتم فعلاً بصحتي مش بس بالفلوس. عملت تبييض أسنان وطلعت نتيجة رائعة جداً.',
    service: 'تبييض الأسنان',
    avatar: 'س',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'عمر خالد',
    location: 'المنصورة',
    rating: 5,
    review: 'الدكتور إبراهيم إيده خفيفة جداً. عملت علاج جذور وما حسيتش بحاجة. المكان راقي وهادي والفريق محترم. هأبقى ارجع وهأنصح كل معارفي بالعيادة دي.',
    service: 'علاج الجذور',
    avatar: 'ع',
    color: 'from-rose-500 to-rose-600',
  },
  {
    name: 'فاطمة إبراهيم',
    location: 'السنبلاوين',
    rating: 5,
    review: 'تقويم بناتي عند دكتور إبراهيم وربنا يباركله. الدكتور بيتعامل مع الأطفال بطريقة جميلة جداً وبيحسسوا إنهم مش خايفين. النتائج أحسن من اللي تصورته.',
    service: 'تقويم الأسنان',
    avatar: 'ف',
    color: 'from-cyan-500 to-cyan-600',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  // Show 3 at a time on desktop
  const visibleIndices = [
    current % testimonials.length,
    (current + 1) % testimonials.length,
    (current + 2) % testimonials.length,
  ]

  return (
    <section id="testimonials" className="section-pad bg-gradient-to-b from-[#EBF8FF] to-white dark:from-[#0A1628] dark:to-[#112240] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            آراء مرضانا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>
          </h2>
          <div className="divider-gold" />
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-black text-[#0A1628] dark:text-white">5.0</span>
            <span className="text-gray-500">/ 5 — بناءً على +500 تقييم</span>
          </div>
        </motion.div>

        {/* Carousel — Desktop: 3 cards, Mobile: 1 card */}
        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((idx, pos) => {
                const t = testimonials[idx]
                return (
                  <motion.div
                    key={`${idx}-${pos}`}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 100 }}
                    transition={{ duration: 0.4, delay: pos * 0.1 }}
                    className="relative bg-white dark:bg-[#112240] rounded-3xl p-7 shadow-xl border border-gray-100 dark:border-gray-800 text-right"
                  >
                    {/* Quote icon */}
                    <Quote size={32} className="text-[#C9A84C]/30 absolute top-6 left-6" />
                    
                    {/* Stars */}
                    <div className="flex justify-end mb-3">
                      <StarRating rating={t.rating} />
                    </div>
                    
                    {/* Review */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      "{t.review}"
                    </p>

                    {/* Service tag */}
                    <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 rounded-full font-semibold mb-4">
                      {t.service}
                    </span>

                    {/* Author */}
                    <div className="flex items-center gap-3 justify-end border-t border-gray-100 dark:border-gray-800 pt-4">
                      <div className="text-right">
                        <p className="font-bold text-[#0A1628] dark:text-white text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.location}</p>
                      </div>
                      <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-lg`}>
                        {t.avatar}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Mobile: Single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white dark:bg-[#112240] rounded-3xl p-7 shadow-xl border border-gray-100 dark:border-gray-800 text-right"
              >
                <Quote size={32} className="text-[#C9A84C]/30 absolute top-6 left-6" />
                <div className="flex justify-end mb-3">
                  <StarRating rating={testimonials[current].rating} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  "{testimonials[current].review}"
                </p>
                <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 rounded-full font-semibold mb-4">
                  {testimonials[current].service}
                </span>
                <div className="flex items-center gap-3 justify-end border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="text-right">
                    <p className="font-bold text-[#0A1628] dark:text-white text-sm">{testimonials[current].name}</p>
                    <p className="text-gray-400 text-xs">{testimonials[current].location}</p>
                  </div>
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-black text-lg`}>
                    {testimonials[current].avatar}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#112240] shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] transition-all duration-300 text-gray-600 dark:text-gray-400"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-3 bg-[#C9A84C]' : 'w-3 h-3 bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#112240] shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] transition-all duration-300 text-gray-600 dark:text-gray-400"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
