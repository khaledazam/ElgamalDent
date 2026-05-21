'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Heart, Stethoscope, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const qualifications = [
  { icon: GraduationCap, text: 'ماجستير أمراض الفم', color: 'from-[#C9A84C] to-[#E8CC7A]' },
  { icon: Award, text: 'مؤسس عيادات الجمال', color: 'from-blue-500 to-blue-400' },
  { icon: Stethoscope, text: 'خبرة أكثر من 15 عامًا', color: 'from-emerald-500 to-emerald-400' },
  { icon: Heart, text: 'أكثر من 5000 حالة ناجحة', color: 'from-rose-500 to-rose-400' },
]

const achievements = [
  'متخصص في تجميل الأسنان وابتسامة هوليود',
  'خبير في تقويم الأسنان للكبار والأطفال',
  'إتقان أحدث تقنيات زراعة الأسنان',
  'تدريب متقدم على وحدات الليزر الطبي',
  'عضو في الجمعية المصرية لطب الأسنان',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad bg-gradient-to-b from-[#EBF8FF] to-white dark:from-[#0A1628] dark:to-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 rounded-full text-sm font-bold mb-4">
            تعرف علينا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] dark:text-white mb-4">
            عن <span className="text-gradient-gold">الدكتور إبراهيم جمال</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Photo */}
            <div className="relative mx-auto w-72 h-80 md:w-96 md:h-[420px]">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/20 to-blue-500/10 rounded-[50px] blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#C9A84C]/30 to-[#E8CC7A]/10 rounded-[40px] border border-[#C9A84C]/20" />
              
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#C9A84C]/30">
                <Image
                  src="/doctor-real.jpg"
                  alt="دكتور إبراهيم جمال - عيادات الجمال"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Qualification Cards */}
            <div className="absolute -left-4 top-8 space-y-3">
              {qualifications.slice(0, 2).map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-2 glass-white dark:glass-dark rounded-2xl px-3 py-2 shadow-lg border border-white/50"
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${q.color}`}>
                    <q.icon size={14} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1628] dark:text-white whitespace-nowrap">{q.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-right"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#0A1628] dark:text-white mb-2">
              دكتور إبراهيم جمال
            </h3>
            <p className="text-[#C9A84C] font-bold text-lg mb-6">
              مؤسس عيادات الجمال لعلاج وتقويم الأسنان
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6">
              حامل درجة الماجستير في أمراض الفم، يؤمن الدكتور إبراهيم جمال بأن الابتسامة الجميلة هي بوابة الثقة بالنفس. بدأ رحلته الطبية قبل أكثر من 15 عامًا بهدف واضح: تقديم رعاية أسنان استثنائية تجمع بين العلم الحديث والرعاية الإنسانية.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-8">
              أسّس <span className="text-[#C9A84C] font-bold">عيادات الجمال</span> لتكون مركزًا متكاملاً يضم أحدث الأجهزة العالمية وفريقًا متخصصًا، مع الحفاظ على أعلى معايير التعقيم والسلامة الطبية.
            </p>

            {/* Qualifications List */}
            <div className="space-y-3 mb-8">
              {qualifications.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 justify-end"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">{q.text}</span>
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${q.color} shadow-lg flex-shrink-0`}>
                    <q.icon size={16} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-[#C9A84C]/5 to-blue-500/5 rounded-2xl p-5 border border-[#C9A84C]/10">
              <p className="font-bold text-[#0A1628] dark:text-white mb-3 text-right">التخصصات والمهارات:</p>
              <div className="space-y-2">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 justify-end">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{a}</span>
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-6 glass-dark rounded-2xl p-5 border border-[#C9A84C]/20 text-right">
              <p className="text-[#E8CC7A] font-bold mb-2">رسالتنا:</p>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "نؤمن بأن كل ابتسامة تستحق العناية والاهتمام. مهمتنا تقديم علاج استثنائي يمنحك الثقة والصحة معًا"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
