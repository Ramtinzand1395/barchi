"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowLeft, FiCheck, FiChevronDown, FiClock, FiRepeat, FiShoppingCart } from "react-icons/fi";
import { businessFeatures, faqs, industries, steps, suppliers } from "./data";
import { MotionReveal } from "./MotionReveal";

export function ProblemSolution() {
  return (
    <section className="section problem-section" id="businesses">
      <div className="container problem-grid">
        <MotionReveal className="problem-photo">
          <Image src="/images/landing/cafe-owner.jpg" alt="مدیر کافه در حال مدیریت خریدها" fill sizes="(max-width: 820px) 100vw, 50vw" />
          <span className="message message-one">موجودی کدام محصول کم شده؟</span>
          <span className="message message-two">قیمت‌ها دوباره تغییر کرد...</span>
          <span className="message message-three">سفارش این هفته چی بود؟</span>
          <strong className="photo-label">قبل از بارچی</strong>
        </MotionReveal>
        <MotionReveal className="solution-card" delay={0.08}>
          <div className="solution-copy">
            <span className="mini-label">یک تجربهٔ ساده‌تر</span>
            <h2>خرید روزانه نباید وقت شما را بگیرد</h2>
            <p>با بارچی، همه‌چیز منظم، قابل مقایسه و در دسترس است.</p>
            <ul>{businessFeatures.map((item) => <li key={item}><FiCheck /> {item}</li>)}</ul>
            <a className="button button-primary" href="/how-it-works">با بارچی آشنا شوید <FiArrowLeft /></a>
          </div>
          <div className="barista-art"><Image src="/images/landing/barista-illustration.png" alt="تصویرسازی باریستای خوشحال" fill sizes="(max-width: 820px) 45vw, 24vw" /></div>
        </MotionReveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <MotionReveal className="section-heading"><span className="eyebrow">چگونه کار می‌کند؟</span><h2>از نیاز تا تأمین، در چند مرحلهٔ ساده</h2></MotionReveal>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, copy }, index) => (
            <MotionReveal className="step-card" delay={index * 0.06} key={title}>
              <span className="step-icon"><Icon /></span><span className="step-number">۰{index + 1}</span><h3>{title}</h3><p>{copy}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SupplierShowcase() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="section supplier-showcase">
      <div className="container showcase-card">
        <MotionReveal className="section-heading"><span className="eyebrow">انتخاب بهتر</span><h2>یک محصول، چند پیشنهاد؛ انتخاب با شما</h2><p>قیمت، شرایط و زمان ارسال تأمین‌کنندگان مختلف را کنار هم ببینید.</p></MotionReveal>
        <div className="offer-layout">
          <MotionReveal className="product-card">
            <Image src="/images/landing/coffee-bag.png" alt="بسته دانه قهوه عربیکا" width={700} height={900} sizes="160px" />
            <div><h3>دانه قهوه عربیکا</h3><p>۱ کیلوگرم · رست مدیوم</p><button type="button" className="text-button">مشاهدهٔ جزئیات</button></div>
          </MotionReveal>
          <div className="supplier-cards" role="listbox" aria-label="انتخاب تأمین‌کننده">
            {suppliers.map((supplier, index) => (
              <motion.button type="button" role="option" aria-selected={selected === index} className={`supplier-card ${selected === index ? "selected" : ""}`} key={supplier.name} onClick={() => setSelected(index)} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                <span className={`supplier-avatar ${supplier.tone}`}>{supplier.name.slice(0, 1)}</span>
                <span className="supplier-head"><strong>{supplier.name}</strong><small>★ {supplier.score}</small></span>
                <strong className="price">{supplier.price}</strong><small><FiClock /> {supplier.delivery}</small>
                <span className="add-button">{selected === index ? "انتخاب شد" : "افزودن به سبد"}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PurchaseShortcuts() {
  return (
    <section className="section shortcut-section">
      <div className="container shortcuts">
        <MotionReveal className="shortcut-card">
          <div><span className="shortcut-icon"><FiShoppingCart /></span><h2>خرید عمده دارید؟<br />درخواست قیمت ثبت کنید</h2><p>نیاز خود را بنویسید تا تأمین‌کنندگان پیشنهادهای خود را ارسال کنند.</p><a className="button button-primary" href="#download">ثبت درخواست قیمت</a></div>
          <div className="shortcut-phone"><Image src="/images/landing/hero-phones.png" alt="نمای درخواست قیمت در اپلیکیشن" fill sizes="280px" /></div>
        </MotionReveal>
        <MotionReveal className="shortcut-card" delay={0.08}>
          <div><span className="shortcut-icon"><FiRepeat /></span><h2>خریدهای تکراری را<br />از اول انجام ندهید</h2><p>فهرست خرید بسازید و در دفعات بعدی با یک کلیک سفارش دهید.</p><a className="button button-ghost" href="#download">مشاهدهٔ لیست خرید</a></div>
          <div className="shortcut-phone"><Image src="/images/landing/hero-phones.png" alt="نمای فهرست خرید در اپلیکیشن" fill sizes="280px" /></div>
        </MotionReveal>
      </div>
    </section>
  );
}

export function IndustriesAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <section className="section industries-section">
        <div className="container">
          <MotionReveal className="section-heading"><span className="eyebrow">مناسب برای</span><h2>برای کسب‌وکارهایی که خرید، بخشی از کار هر روزشان است</h2></MotionReveal>
          <div className="industries-grid">{industries.map(({ icon: Icon, label }, index) => <MotionReveal delay={index * 0.04} className="industry-card" key={label}><Icon /><span>{label}</span></MotionReveal>)}</div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-shell">
          <MotionReveal className="faq-intro"><span className="eyebrow">پاسخ روشن</span><h2>سؤالات متداول</h2><p>پاسخ به مهم‌ترین پرسش‌ها دربارهٔ بارچی</p><a className="button button-ghost" href="mailto:hello@barchi.ir">مشاهدهٔ همهٔ سؤالات</a></MotionReveal>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={item.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{item.q}</span><FiChevronDown /></button>
                <motion.div initial={false} animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}><p>{item.a}</p></motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
