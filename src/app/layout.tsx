import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "عيادات الجمال | دكتور إبراهيم جمال - تقويم وتجميل الأسنان",
  description: "عيادات الجمال لعلاج وتقويم الأسنان - دكتور إبراهيم جمال، ماجستير أمراض الفم. خدمات تقويم الأسنان، ابتسامة هوليود، زراعة الأسنان، وتجميل الأسنان في السنبلاوين والمنصورة.",
  keywords: "عيادة أسنان, تقويم أسنان, تجميل أسنان, زراعة أسنان, ابتسامة هوليود, السنبلاوين, المنصورة, دكتور إبراهيم جمال",
  authors: [{ name: "دكتور إبراهيم جمال" }],
  openGraph: {
    title: "عيادات الجمال | دكتور إبراهيم جمال",
    description: "احصل على ابتسامتك المثالية مع دكتور إبراهيم جمال - خبرة أكثر من 15 عامًا في تجميل وتقويم الأسنان",
    type: "website",
    locale: "ar_EG",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${cairo.variable} font-[family-name:var(--font-cairo)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
