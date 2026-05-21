# عيادات الجمال — Landing Page

## الموقع
`D:\aljamal-clinic`

## تشغيل الموقع
```bash
cd D:\aljamal-clinic
npm run dev
```
ثم افتح http://localhost:3000

## هيكل الملفات
```
src/
├── app/
│   ├── layout.tsx       # Root layout, SEO, Cairo font, RTL
│   ├── page.tsx         # Main page with loading screen
│   └── globals.css      # Design system, animations, glassmorphism
└── components/
    ├── Navbar.tsx        # Sticky navbar + mobile drawer
    ├── Hero.tsx          # Hero section with counters
    ├── About.tsx         # Doctor profile
    ├── Services.tsx      # 7 services cards
    ├── BeforeAfter.tsx   # Interactive comparison slider
    ├── WhyChooseUs.tsx   # 6 features + CTA banner
    ├── Testimonials.tsx  # Auto-play carousel
    ├── Branches.tsx      # 2 branches + maps
    ├── Contact.tsx       # Form + phone cards
    ├── Footer.tsx        # Full footer
    └── FloatingCTA.tsx   # WhatsApp FAB
```

## إضافة صورة الدكتور الحقيقية
ضع صورة الدكتور في:
`D:\aljamal-clinic\public\doctor.jpg`
(يجب أن تكون بصيغة JPG أو PNG)

## أرقام التليفون
- 0504688277
- 01016503335

## الفروع
1. السنبلاوين — أرض الجمال — برج زوين
2. المنصورة — شارع سكة سندوب — برج الجوهري
