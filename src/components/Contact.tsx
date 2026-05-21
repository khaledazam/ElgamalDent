'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, MessageCircle, Send, CheckCircle, User, Smartphone, ChevronDown } from 'lucide-react'

const services = [
  'تقويم الأسنان',
  'ابتسامة هوليود',
  'زراعة الأسنان',
  'تجميل الأسنان',
  'تبييض الأسنان',
  'علاج الجذور',
  'حشو الأسنان',
  'استشارة طبية',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    // Create WhatsApp message with form data
    const msg = `مرحباً دكتور إبراهيم،\n\nأريد حجز موعد:\n• الاسم: ${form.name}\n• الهاتف: ${form.phone}\n• الخدمة المطلوبة: ${form.service}\n• ملاحظات: ${form.message}`
    window.open(`https://wa.me/201016503335?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="section-pad bg-gradient-to-b from-[#EBF8FF] to-white dark:from-[#112240] dark:to-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 rounded-full text-sm font-bold mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            احجز <span className="text-gradient-gold">موعدك الآن</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            تواصل معنا وسنرد عليك في أقل من ساعة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-right"
          >
            <div>
              <h3 className="text-2xl font-black text-[#0A1628] dark:text-white mb-2">
                هل لديك سؤال؟
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                فريقنا جاهز للإجابة على جميع استفساراتك والمساعدة في حجز موعدك
              </p>
            </div>

            {/* Phone Cards */}
            <div className="space-y-4">
              {[
                { number: '0504688277', label: 'الرقم الأساسي', icon: Phone, color: 'from-[#C9A84C] to-[#E8CC7A]' },
                { number: '01016503335', label: 'واتساب وهاتف', icon: MessageCircle, color: 'from-[#25D366] to-[#128C7E]' },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={i === 1 ? `https://wa.me/20${contact.number.replace(/^0/, '')}` : `tel:${contact.number}`}
                  target={i === 1 ? '_blank' : undefined}
                  rel={i === 1 ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 justify-end p-5 bg-white dark:bg-[#112240] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <div className="text-right">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{contact.label}</p>
                    <p className="font-black text-[#0A1628] dark:text-white text-xl group-hover:text-[#C9A84C] transition-colors" dir="ltr">
                      {contact.number}
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <contact.icon size={24} className="text-white" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Direct */}
            <motion.a
              href="https://wa.me/201016503335?text=مرحباً، أريد حجز موعد في عيادات الجمال"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="btn-whatsapp w-full justify-center text-base"
            >
              <MessageCircle size={20} />
              تواصل عبر واتساب مباشرة
            </motion.a>

            {/* Working hours reminder */}
            <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-5 text-right">
              <p className="text-[#C9A84C] font-bold mb-2">⏰ مواعيد العمل</p>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <p>السبت — الخميس: ٩ صباحًا - ١١ مساءً</p>
                <p>الجمعة: مغلق</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#112240] rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-[#0A1628] dark:text-white mb-3">
                  تم إرسال طلبك!
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  سيتم تحويلك إلى واتساب لتأكيد موعدك. سنتواصل معك قريبًا!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }) }}
                  className="mt-6 btn-gold mx-auto"
                >
                  حجز موعد آخر
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#112240] rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800 space-y-5"
              >
                <h3 className="text-xl font-black text-[#0A1628] dark:text-white text-right mb-6">
                  نموذج الحجز
                </h3>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="الاسم الكامل *"
                    dir="rtl"
                    className="w-full px-5 py-4 pr-14 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0d2137] text-[#0A1628] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all text-right"
                  />
                  <User size={18} className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="رقم الهاتف *"
                    dir="rtl"
                    className="w-full px-5 py-4 pr-14 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0d2137] text-[#0A1628] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all text-right"
                  />
                  <Smartphone size={18} className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Service Select */}
                <div className="relative">
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    dir="rtl"
                    className="w-full px-5 py-4 pr-14 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0d2137] text-[#0A1628] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all appearance-none text-right cursor-pointer"
                  >
                    <option value="">اختر الخدمة المطلوبة *</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="ملاحظات إضافية (اختياري)"
                    dir="rtl"
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0d2137] text-[#0A1628] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 focus:border-[#C9A84C] transition-all resize-none text-right"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      إرسال الطلب عبر واتساب
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  * سيتم تحويلك إلى واتساب لتأكيد الحجز
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
