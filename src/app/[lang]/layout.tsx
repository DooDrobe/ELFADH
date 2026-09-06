import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getDictionary, Locale } from "@/dictionaries/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EL-FADH Bimbel | English Confidence for School & Beyond",
  description: "Bimbel Bahasa Inggris di Medan. From PR Help to Exam Ready. Join us for TOEFL, TOEIC, IELTS, and more.",
};

export async function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar dict={dict.nav} lang={lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
