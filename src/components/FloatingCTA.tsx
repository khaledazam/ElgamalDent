'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, X, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [showScroll, setShowScroll] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white dark:bg-[#112240] shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] transition-all duration-300"
            title="للأعلى"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable quick actions */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3"
          >
            {/* Phone */}
            <motion.a
              href="tel:0504688277"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-[#112240] shadow-xl rounded-full pr-4 pl-2 py-2 border border-gray-100 dark:border-gray-800 hover:border-blue-400 transition-all group"
            >
              <span className="text-[#0A1628] dark:text-white font-semibold text-sm group-hover:text-blue-500 transition-colors">
                اتصل الآن
              </span>
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-white" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/201016503335?text=مرحباً، أريد حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-2 bg-white dark:bg-[#112240] shadow-xl rounded-full pr-4 pl-2 py-2 border border-gray-100 dark:border-gray-800 hover:border-emerald-400 transition-all group"
            >
              <span className="text-[#0A1628] dark:text-white font-semibold text-sm group-hover:text-emerald-500 transition-colors">
                واتساب
              </span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl flex items-center justify-center animate-pulse-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: expanded ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {expanded ? (
          <X size={26} className="text-white" />
        ) : (
          <MessageCircle size={26} className="text-white" />
        )}
        
        {/* Pulse rings */}
        {!expanded && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
          </>
        )}
      </motion.button>
    </div>
  )
}
