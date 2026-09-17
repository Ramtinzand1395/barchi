"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiArrowLeft, FiCheck, FiMail, FiPhone } from "react-icons/fi";
import { BrandLogo } from "./BrandLogo";
import { supplierPerks } from "./data";
import { MotionReveal } from "./MotionReveal";

export function SupplierCTA() {
  return (
    <section className="section" id="suppliers">
      <MotionReveal className="container supplier-cta">
        <div className="dashboard-frame"><Image src="/images/landing/supplier-dashboard.png" alt="داشبورد مدیریت فروشندگان بارچی" fill sizes="(max-width: 820px) 100vw, 52vw" /></div>
        <div className="supplier-cta-copy"><span className="eyebrow eyebrow-dark">برای تأمین‌کنندگان</span><h2>محصولات خود را به کسب‌وکارهای بیشتر معرفی کنید</h2><p>به جمع تأمین‌کنندگان بارچی بپیوندید و سفارش‌های کافه‌ها و رستوران‌ها را از یک پنل حرفه‌ای مدیریت کنید.</p><div className="supplier-cta-actions"><a className="button button-light" href="mailto:suppliers@barchi.ir">ثبت‌نام تأمین‌کننده</a><a className="button button-dark-ghost" href="#about">آشنایی با شرایط همکاری</a></div></div>
        <div className="supplier-perks">{supplierPerks.map((perk) => <span key={perk}><FiCheck /> {perk}</span>)}</div>
      </MotionReveal>
    </section>
  );
}

export function DownloadCTA() {
  return (
    <section className="section download-section" id="download">
      <MotionReveal className="container download-card">
        <Image src="/images/landing/download-phones.png" alt="اپلیکیشن بارچی برای موبایل" fill sizes="100vw" />
        <div className="download-copy"><h2>همین حالا بارچی را نصب کنید</h2><p>خرید و تأمین کافه و رستوران خود را ساده‌تر مدیریت کنید.</p><div className="store-buttons"><a href="#home" aria-label="دانلود از گوگل پلی"><FaGooglePlay /><span><small>دریافت از</small>Google Play</span></a><a href="#home" aria-label="دانلود از اپ استور"><FaApple /><span><small>دریافت از</small>App Store</span></a></div></div>
      </MotionReveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-grid">
        <div className="footer-brand"><a className="brand" href="#home" aria-label="بارچی، صفحهٔ اصلی"><BrandLogo /></a><p>راه ساده‌تر برای خرید حرفه‌ای کافه‌ها و رستوران‌ها.</p><div className="social-links"><a href="#home" aria-label="اینستاگرام"><FaInstagram /></a><a href="#home" aria-label="لینکدین"><FaLinkedinIn /></a><a href="#home" aria-label="تلگرام"><FaTelegramPlane /></a></div></div>
        <FooterColumn title="محصول" links={["امکانات", "چگونه کار می‌کند؟", "سؤالات متداول"]} /><FooterColumn title="کسب‌وکارها" links={["برای کافه‌ها", "برای رستوران‌ها", "سایر کسب‌وکارها"]} /><FooterColumn title="تأمین‌کنندگان" links={["ثبت‌نام تأمین‌کننده", "شرایط همکاری", "پنل فروشندگان"]} />
        <div className="footer-column"><h3>ارتباط با ما</h3><a href="tel:+982100000000"><FiPhone /> ۰۲۱-۰۰۰۰۰۰۰۰</a><a href="mailto:hello@barchi.ir"><FiMail /> hello@barchi.ir</a><a href="#home">قوانین و حریم خصوصی <FiArrowLeft /></a></div>
      </div>
      <div className="container footer-bottom"><span>© ۱۴۰۵ بارچی. همهٔ حقوق محفوظ است.</span><span>ساخته‌شده برای کسب‌وکارهای مهمان‌نواز ایران</span></div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div className="footer-column"><h3>{title}</h3>{links.map((link) => <a href={link === "چگونه کار می‌کند؟" ? "/how-it-works" : "#home"} key={link}>{link}</a>)}</div>;
}
