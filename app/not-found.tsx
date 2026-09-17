import Image from "next/image";
import Link from "next/link";
import {
  FiDownload,
  FiGrid,
  FiHome,
  FiMenu,
  FiPhone,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BrandLogo } from "@/components/landing/BrandLogo";
import { BackButton } from "@/components/not-found/BackButton";

const navItems = [
  ["خانه", "/#home"],
  ["امکانات", "/#how-it-works"],
  ["برای کسب‌وکارها", "/#businesses"],
  ["برای تأمین‌کنندگان", "/#suppliers"],
  ["چگونه کار می‌کند؟", "/#how-it-works"],
  ["درباره ما", "/#about"],
  ["تماس با ما", "/#about"],
] as const;

const suggestions = [
  { label: "برای کسب‌وکارها", href: "/#businesses", icon: FiShoppingBag },
  { label: "برای تأمین‌کنندگان", href: "/#suppliers", icon: FiTruck },
  { label: "امکانات", href: "/#how-it-works", icon: FiGrid },
  { label: "تماس با ما", href: "/#about", icon: FiPhone },
] as const;

const footerColumns = [
  {
    title: "قوانین",
    links: [
      ["حریم خصوصی", "/#about"],
      ["شرایط استفاده", "/#about"],
      ["قوانین و مقررات", "/#about"],
    ],
  },
  {
    title: "درباره بارچی",
    links: [
      ["درباره ما", "/#about"],
      ["وبلاگ", "/#about"],
      ["تماس با ما", "/#about"],
    ],
  },
  {
    title: "برای تأمین‌کنندگان",
    links: [
      ["ثبت‌نام", "/#suppliers"],
      ["راهنمای همکاری", "/#suppliers"],
      ["سؤالات متداول", "/#suppliers"],
    ],
  },
  {
    title: "برای کسب‌وکارها",
    links: [
      ["مزایا", "/#businesses"],
      ["داستان‌ها", "/#businesses"],
      ["راهنمای شروع", "/#how-it-works"],
    ],
  },
  {
    title: "محصول",
    links: [
      ["امکانات", "/#how-it-works"],
      ["دسته‌بندی‌ها", "/#businesses"],
      ["سؤالات متداول", "/#about"],
    ],
  },
] as const;

export default function NotFound() {
  return (
    <main className="not-found-page">
      <header className="nf-header">
        <div className="nf-shell nf-header-inner">
          <Link className="nf-logo" href="/" aria-label="بارچی، صفحه اصلی">
            <BrandLogo eager />
          </Link>

          <nav className="nf-desktop-nav" aria-label="ناوبری اصلی">
            {navItems.map(([label, href]) => (
              <Link href={href} key={`${label}-${href}`}>
                {label}
              </Link>
            ))}
          </nav>

          <Link className="nf-start-button" href="/#download">
            <FiDownload aria-hidden="true" />
            شروع استفاده
          </Link>

          <details className="nf-mobile-menu">
            <summary aria-label="باز کردن منو">
              <FiMenu aria-hidden="true" />
            </summary>
            <nav aria-label="ناوبری موبایل">
              {navItems.map(([label, href]) => (
                <Link href={href} key={`mobile-${label}-${href}`}>
                  {label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <section className="nf-hero" aria-labelledby="not-found-title">
        <div className="nf-scene" aria-hidden="true">
          <Image
            src="/images/404/cafe-scene.png"
            alt=""
            fill
            priority
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>

        <div className="nf-content">
          <div className="nf-code" aria-label="خطای ۴۰۴">
            <span>4</span>
            <span className="nf-cup-wrap">
              <Image
                src="/images/404/coffee-cup-top.png"
                alt="فنجان قهوه از نمای بالا"
                width={190}
                height={190}
                priority
              />
            </span>
            <span>4</span>
          </div>

          <h1 id="not-found-title">صفحه مورد نظر پیدا نشد!</h1>
          <p className="nf-lead">
            به نظر می‌رسد این صفحه از منوی ما خارج شده یا اصلاً وجود نداشته.
            <br />
            اما نگران نباشید، هنوز چیزهای خوب زیادی برای کشف کردن هست :)
          </p>

          <div className="nf-actions">
            <Link className="nf-action nf-action-primary" href="/">
              <FiHome aria-hidden="true" />
              بازگشت به صفحه اصلی
            </Link>
            <BackButton />
          </div>

          <p className="nf-suggestion-title">شاید دنبال این‌ها هستید:</p>
          <nav className="nf-suggestions" aria-label="پیشنهادهای جایگزین">
            {suggestions.map(({ label, href, icon: Icon }) => (
              <Link href={href} key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <footer className="nf-footer">
        <div className="nf-shell nf-footer-grid">
          {footerColumns.map((column) => (
            <div className="nf-footer-column" key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          ))}

          <div className="nf-footer-brand">
            <Link href="/" aria-label="بارچی، صفحه اصلی">
              <BrandLogo />
            </Link>
            <div className="nf-socials" aria-label="شبکه‌های اجتماعی">
              <a href="#" aria-label="اینستاگرام">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="#" aria-label="لینکدین">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href="#" aria-label="تلگرام">
                <FaTelegramPlane aria-hidden="true" />
              </a>
              <a href="tel:+982100000000" aria-label="تماس با پشتیبانی">
                <FiPhone aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="nf-shell nf-footer-bottom">
          <p>
            با هم، آینده بهتری برای کسب‌وکارهای غذایی می‌سازیم.
            <span aria-hidden="true">●</span>
          </p>
          <p>© ۲۰۲۶ بارچی. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </main>
  );
}
