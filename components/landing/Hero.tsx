"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowLeft, FiGlobe, FiPlayCircle } from "react-icons/fi";
import { FaAndroid, FaApple } from "react-icons/fa";
import { benefits } from "./data";
import { MotionReveal } from "./MotionReveal";

export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="hero section" id="home">
        <div className="container hero-grid" 
          style={{ backgroundColor: "white" }}
        >
          <MotionReveal className="hero-copy">
            <div className="eyebrow">اپلیکیشن مخصوص کافه‌ها و رستوران‌ها</div>
            <h1>
              تمام خرید کسب‌وکارت، <span>در یک اپ</span>
            </h1>
            <p>
              بارچی، دستیار خرید کافه‌ها و رستوران‌هاست. محصولات موردنیاز خود را
              پیدا کنید، پیشنهاد تأمین‌کنندگان را مقایسه کنید و خریدهای روزانه و
              دوره‌ای مجموعه را ساده‌تر مدیریت کنید.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                شروع استفاده از بارچی <FiArrowLeft />
              </a>
              <a className="button button-ghost" href="/how-it-works">
                ببین چطور کار می‌کند <FiPlayCircle />
              </a>
            </div>
            <div className="availability">
              <span>
                <FaAndroid /> اندروید
              </span>
              <span>
                <FaApple /> آیفون
              </span>
              <span>
                <FiGlobe /> نسخهٔ وب
              </span>
            </div>
          </MotionReveal>
          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: -20 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/images/landing/hero-phones.png"
              alt="اپلیکیشن بارچی روی سه تلفن همراه"
              width={1000}
              height={820}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </motion.div>
        </div>
      </section>
      <MotionReveal className="container benefit-strip">
        {benefits.map(({ icon: Icon, title, copy }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </MotionReveal>
    </>
  );
}
