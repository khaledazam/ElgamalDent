'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Branches from '@/components/Branches'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#0A1628] via-[#112240] to-[#0d2137] flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8CC7A] flex items-center justify-center mx-auto mb-6 shadow-2xl"
        >
          <span className="text-white text-5xl font-black">ج</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white font-black text-2xl mb-2"
        >
          عيادات الجمال
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#C9A84C] font-semibold text-sm"
        >
          لعلاج وتقويم الأسنان
        </motion.p>

        {/* Loading bar */}
        <motion.div className="mt-10 w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8CC7A] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-xs mt-4"
        >
          ابتسامتك تاجك الأجمل ✨
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <BeforeAfter />
          <WhyChooseUs />
          <Testimonials />
          <Branches />
          <Contact />
          <Footer />
          <FloatingCTA />
        </motion.main>
      )}
    </>
  )
}
