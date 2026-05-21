'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

// Custom social icons (not available in this lucide-react version)
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const quickLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الدكتور', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'قبل وبعد', href: '#before-after' },
  { label: 'آراء المرضى', href: '#testimonials' },
  { label: 'فروعنا', href: '#branches' },
  { label: 'تواصل معنا', href: '#contact' },
]

const services = [
  'ابتسامة هوليود',
  'تقويم الأسنان',
  'زراعة الأسنان',
  'تجميل الأسنان',
  'تبييض الأسنان',
  'علاج الجذور',
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="text-right">
            {/* Logo */}
            <div className="flex items-center gap-3 justify-end mb-6">
              <div>
                <p className="font-black text-lg text-white leading-tight">عيادات الجمال</p>
                <p className="text-[#C9A84C] text-xs font-medium">لعلاج وتقويم الأسنان</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8CC7A] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-black">ج</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              عيادات الجمال لعلاج وتقويم الأسنان — نقدم أفضل خدمات طب الأسنان بأيدي متخصصة وبأعلى معايير الجودة والتعقيم
            </p>
            {/* Social */}
            <div className="flex gap-3 justify-end">
              {[
                { icon: FacebookIcon, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: InstagramIcon, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                { icon: YoutubeIcon, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="font-black text-white mb-5 text-lg">
              روابط سريعة
              <div className="w-8 h-0.5 bg-[#C9A84C] mt-2 mr-auto" />
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-[#E8CC7A] transition-colors text-sm flex items-center gap-2 justify-end w-full group"
                  >
                    {link.label}
                    <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">←</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-right">
            <h4 className="font-black text-white mb-5 text-lg">
              خدماتنا
              <div className="w-8 h-0.5 bg-[#C9A84C] mt-2 mr-auto" />
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-gray-400 hover:text-[#E8CC7A] transition-colors text-sm flex items-center gap-2 justify-end w-full group"
                  >
                    {s}
                    <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">←</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="font-black text-white mb-5 text-lg">
              تواصل معنا
              <div className="w-8 h-0.5 bg-[#C9A84C] mt-2 mr-auto" />
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: '0504688277',
                  href: 'tel:0504688277',
                  color: 'text-[#C9A84C]',
                },
                {
                  icon: MessageCircle,
                  text: '01016503335',
                  href: 'https://wa.me/201016503335',
                  color: 'text-emerald-400',
                },
                {
                  icon: MapPin,
                  text: 'السنبلاوين — المنصورة',
                  href: '#branches',
                  color: 'text-blue-400',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 justify-end text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="text-sm group-hover:text-white transition-colors">{item.text}</span>
                  <item.icon size={16} className={`flex-shrink-0 ${item.color}`} />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201016503335?text=مرحباً، أريد حجز موعد"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-whatsapp text-sm w-full justify-center inline-flex"
            >
              <MessageCircle size={16} />
              احجز عبر واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} عيادات الجمال لعلاج وتقويم الأسنان. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-600 text-xs">
              د. إبراهيم جمال — ماجستير أمراض الفم
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
