'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الدكتور', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'قبل وبعد', href: '#before-after' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'فروعنا', href: '#branches' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-white dark:glass-dark shadow-xl py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollTo('#hero')}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8CC7A] flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-black">ج</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">✦</span>
                </div>
              </div>
              <div>
                <p className={`font-black text-sm leading-tight ${scrolled ? 'text-[#0A1628] dark:text-white' : 'text-white'}`}>
                  عيادات الجمال
                </p>
                <p className={`text-[10px] font-medium ${scrolled ? 'text-[#C9A84C]' : 'text-[#E8CC7A]'}`}>
                  لعلاج وتقويم الأسنان
                </p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:text-[#C9A84C] ${
                    scrolled ? 'text-[#1a202c] dark:text-gray-200' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all ${
                  scrolled
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                    : 'glass text-white'
                }`}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Phone CTA */}
              <a
                href="tel:0504688277"
                className="hidden md:flex items-center gap-2 btn-gold text-sm py-2 px-4"
              >
                <Phone size={14} />
                اتصل بنا
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg ${
                  scrolled ? 'text-[#0A1628] dark:text-white' : 'text-white'
                }`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="fixed top-0 right-0 h-full w-80 z-40 glass-dark shadow-2xl"
          >
            <div className="flex flex-col pt-24 px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-right py-3 px-4 rounded-xl text-white font-semibold text-lg hover:bg-[#C9A84C]/20 hover:text-[#E8CC7A] transition-all border-b border-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:0504688277" className="btn-gold text-center justify-center">
                  <Phone size={16} />
                  0504688277
                </a>
                <a href="https://wa.me/201016503335" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-center justify-center">
                  واتساب
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
