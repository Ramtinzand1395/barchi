import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://barchi.ir"),
  title: "بارچی | تأمین ساده‌تر، کسب‌وکار قوی‌تر",
  description:
    "خرید و تأمین محصولات کافه و رستوران، مقایسهٔ فروشندگان و مدیریت سفارش‌ها در یک اپ.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
