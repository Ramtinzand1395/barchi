import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiCoffee,
  FiFileText,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiPackage,
  FiPhone,
  FiSearch,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiSend,
  FiTruck,
  FiZap,
} from "react-icons/fi";
import { BrandLogo } from "@/components/landing/BrandLogo";
import styles from "./how-it-works.module.css";

export const metadata: Metadata = {
  title: "بارچی چگونه کار می‌کند؟ | راهنمای خرید و تأمین کافه و رستوران",
  description:
    "در پنج مرحله ساده با نحوه ثبت‌نام، جست‌وجوی محصول، مقایسه تأمین‌کنندگان، ثبت و پیگیری سفارش و خرید مجدد در بارچی آشنا شوید.",
  keywords: [
    "تأمین کافه و رستوران",
    "خرید عمده کافه",
    "مقایسه تأمین کنندگان",
    "سفارش مواد اولیه رستوران",
    "بارچی",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "بارچی چگونه کار می‌کند؟",
    description:
      "از پیدا کردن محصول تا مقایسه فروشندگان و پیگیری سفارش؛ خرید حرفه‌ای کافه و رستوران در پنج مرحله.",
    url: "/how-it-works",
    siteName: "بارچی",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/images/landing/hero-phones.png",
        width: 1000,
        height: 824,
        alt: "نمای اپلیکیشن بارچی برای تأمین کافه و رستوران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بارچی چگونه کار می‌کند؟",
    description: "راهنمای پنج مرحله‌ای خرید و تأمین کافه و رستوران با بارچی",
    images: ["/images/landing/hero-phones.png"],
  },
};

const navigation = [
  ["برای کسب‌وکارها", "/#businesses"],
  ["برای تأمین‌کنندگان", "/#suppliers"],
  ["چگونه کار می‌کند؟", "/how-it-works"],
  ["قیمت‌ها", "/#download"],
  ["مقالات", "/#about"],
  ["درباره ما", "/#about"],
] as const;

const benefits = [
  { icon: FiZap, title: "سریع", text: "صرفه‌جویی در زمان" },
  { icon: FiFileText, title: "شفاف", text: "قیمت‌های به‌روز" },
  { icon: FiShield, title: "مطمئن", text: "تأمین‌کنندگان معتبر" },
  { icon: FiCheckCircle, title: "ساده", text: "بدون پیچیدگی زمانی" },
] as const;

const steps = [
  {
    number: "۱",
    title: "ثبت‌نام و راه‌اندازی",
    description:
      "در کمتر از یک دقیقه ثبت‌نام کنید و پروفایل کسب‌وکار خود را بسازید. سپس بر اساس نوع فعالیت، نیازهای خریدتان را مشخص کنید.",
    bullets: ["ثبت‌نام سریع با شماره موبایل", "پیشنهادهای متناسب با نوع کسب‌وکار", "دسترسی به تمام امکانات"],
    visual: "signup",
  },
  {
    number: "۲",
    title: "جست‌وجو و پیدا کردن محصول",
    description:
      "محصول مورد نیازتان را جست‌وجو کنید یا از میان دسته‌بندی‌های دقیق، سریع‌تر به گزینه مناسب برسید.",
    bullets: ["جست‌وجوی سریع و دقیق", "دسته‌بندی کامل محصولات", "فیلتر بر اساس قیمت و موقعیت"],
    visual: "search",
  },
  {
    number: "۳",
    title: "مقایسه تأمین‌کنندگان",
    description:
      "قیمت‌ها و شرایط تأمین‌کنندگان مختلف را در یک صفحه ببینید و با مقایسه شفاف، بهترین گزینه را انتخاب کنید.",
    bullets: ["نمایش قیمت و شرایط به‌صورت شفاف", "امتیازدهی و نظرات سایر کسب‌وکارها", "اطلاعات کامل تأمین‌کننده"],
    visual: "compare",
  },
  {
    number: "۴",
    title: "ثبت و پیگیری سفارش",
    description:
      "پس از انتخاب محصول، سفارش خود را ثبت کنید. وضعیت سفارش آنلاین قابل پیگیری است و از زمان آماده‌سازی تا تحویل همراه شما می‌ماند.",
    bullets: ["ثبت سفارش در چند کلیک", "پیگیری لحظه‌ای وضعیت", "دریافت اعلان در هر مرحله"],
    visual: "tracking",
  },
  {
    number: "۵",
    title: "خرید مجدد و مدیریت لیست",
    description:
      "محصولات پرتکرار خود را در لیست خرید ذخیره کنید و برای سفارش‌های بعدی، تنها با یک کلیک دوباره سفارش دهید.",
    bullets: ["ذخیره فهرست‌های خرید", "سفارش مجدد سریع", "مدیریت نیازهای دوره‌ای"],
    visual: "repeat",
  },
] as const;

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "چگونه با بارچی خرید و تأمین کافه یا رستوران را انجام دهیم؟",
  description:
    "راهنمای مرحله‌به‌مرحله استفاده از بارچی برای پیدا کردن محصول، مقایسه تأمین‌کنندگان و مدیریت سفارش.",
  totalTime: "PT5M",
  step: steps.map((step) => ({
    "@type": "HowToStep",
    position: Number(step.number.replace("۱", "1").replace("۲", "2").replace("۳", "3").replace("۴", "4").replace("۵", "5")),
    name: step.title,
    text: step.description,
    url: `https://barchi.ir/how-it-works#step-${step.number}`,
  })),
};

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link className={styles.brand} href="/" aria-label="بارچی، صفحه اصلی">
            <BrandLogo eager />
          </Link>

          <nav className={styles.desktopNav} aria-label="ناوبری اصلی">
            {navigation.map(([label, href]) => (
              <Link
                className={href === "/how-it-works" ? styles.activeLink : undefined}
                href={href}
                key={href + label}
                aria-current={href === "/how-it-works" ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link className={styles.primaryButton} href="/#download">
            شروع استفاده <FiArrowLeft aria-hidden="true" />
          </Link>

          <details className={styles.mobileMenu}>
            <summary aria-label="باز کردن منو"><FiMenu aria-hidden="true" /></summary>
            <nav aria-label="ناوبری موبایل">
              {navigation.map(([label, href]) => <Link href={href} key={href + label}>{label}</Link>)}
              <Link className={styles.mobileCta} href="/#download">شروع استفاده</Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="how-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>راهنمای شروع بارچی</p>
              <h1 id="how-title">بارچی چگونه <span>کار می‌کند؟</span></h1>
              <p className={styles.heroLead}>
                در چند مرحله ساده، مواد اولیه و ملزومات کافه یا رستوران خود را از تأمین‌کنندگان معتبر پیدا، مقایسه و سفارش دهید.
              </p>
              <div className={styles.benefits} aria-label="مزایای استفاده از بارچی">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <article key={title}>
                    <span><Icon aria-hidden="true" /></span>
                    <div><strong>{title}</strong><small>{text}</small></div>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="نمای اپلیکیشن و محصولات بارچی">
              <Image
                className={styles.heroPhones}
                src="/images/landing/hero-phones.png"
                alt="سه نمای اپلیکیشن بارچی شامل جست‌وجو، تأمین‌کنندگان و سبد سفارش"
                width={1000}
                height={824}
                sizes="(max-width: 760px) 92vw, 48vw"
                priority
              />
              <Image
                className={styles.heroBag}
                src="/images/landing/coffee-bag.png"
                alt="بسته قهوه از محصولات قابل سفارش در بارچی"
                width={700}
                height={900}
                sizes="(max-width: 760px) 26vw, 170px"
              />
              <p className={styles.heroNote}>از جست‌وجو تا تحویل،<br />ساده‌تر از همیشه</p>
            </div>
          </div>
        </section>

        <section className={styles.stepsSection} aria-labelledby="steps-title">
          <div className={styles.container}>
            <div className={styles.srOnly}>
              <span>قدم‌به‌قدم با بارچی</span>
              <h2 id="steps-title">از ثبت‌نام تا خرید مجدد در پنج مرحله</h2>
              <p>هر آنچه برای یک خرید حرفه‌ای نیاز دارید، در یک مسیر روشن و کوتاه کنار هم قرار گرفته است.</p>
            </div>

            <ol className={styles.stepsList}>
              {steps.map((step) => (
                <li className={styles.stepCard} id={`step-${step.number}`} key={step.number}>
                  <article className={styles.stepCopy}>
                    <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                    <ul>
                      {step.bullets.map((bullet) => <li key={bullet}><FiCheck aria-hidden="true" />{bullet}</li>)}
                    </ul>
                  </article>
                  <StepVisual type={step.visual} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={`${styles.container} ${styles.ctaCard}`}>
            <div className={styles.ctaImage}>
              <Image
                src="/images/landing/cafe-owner.jpg"
                alt="مدیر کافه در حال مدیریت خریدهای روزانه"
                fill
                sizes="(max-width: 760px) 100vw, 34vw"
              />
            </div>
            <div className={styles.ctaCopy}>
              <span>شروع یک خرید حرفه‌ای</span>
              <h2 id="cta-title">آماده‌اید ساده‌تر خرید کنید؟</h2>
              <p>همین حالا به جمع کافه‌ها و رستوران‌های حرفه‌ای بپیوندید.</p>
              <div className={styles.ctaActions}>
                <Link className={styles.lightButton} href="/#download">شروع استفاده <FiArrowLeft aria-hidden="true" /></Link>
                <a className={styles.outlineButton} href="tel:+982100000000"><FiPhone aria-hidden="true" /> تماس با ما</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerTop}`}>
          <div className={styles.footerBrand}>
            <Link href="/" aria-label="بارچی، صفحه اصلی"><BrandLogo /></Link>
            <p>دستیار هوشمند خرید کافه و رستوران</p>
          </div>
          <nav className={styles.footerNav} aria-label="پیوندهای پایین صفحه">
            <Link href="/#businesses">برای کسب‌وکارها</Link>
            <Link href="/#suppliers">برای تأمین‌کنندگان</Link>
            <Link href="/#download">قیمت‌ها</Link>
            <Link href="/how-it-works">چگونه کار می‌کند؟</Link>
            <Link href="/#about">مقالات</Link>
            <Link href="/#about">درباره ما</Link>
          </nav>
          <div className={styles.socials} aria-label="شبکه‌های اجتماعی بارچی">
            <a href="#" aria-label="لینکدین بارچی"><FiLinkedin /></a>
            <a href="#" aria-label="اینستاگرام بارچی"><FiInstagram /></a>
            <a href="#" aria-label="تلگرام بارچی"><FiSend /></a>
          </div>
        </div>
        <div className={`${styles.container} ${styles.footerBottom}`}>
          <span>© ۱۴۰۵ بارچی. همه حقوق محفوظ است.</span>
          <span>حریم خصوصی</span>
          <span>قوانین و مقررات</span>
        </div>
      </footer>
    </div>
  );
}

function StepVisual({ type }: { type: (typeof steps)[number]["visual"] }) {
  if (type === "signup") {
    return (
      <div className={`${styles.stepVisual} ${styles.signupVisual}`} aria-label="نمونه فرم ثبت‌نام بارچی">
        <div className={styles.phoneMockup}>
          <BrandLogo />
          <strong>به بارچی خوش آمدید</strong>
          <small>برای شروع، شماره موبایل خود را وارد کنید</small>
          <div className={styles.fakeInput}>۰۹۱۲ ۱۲۳ ۴۵۶۷</div>
          <div className={styles.fakeButton}>ورود و ثبت‌نام</div>
        </div>
        <p>شروعی ساده<br />برای خریدهای حرفه‌ای</p>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className={`${styles.stepVisual} ${styles.searchVisual}`} aria-label="نمونه جست‌وجوی محصول در بارچی">
        <div className={styles.searchBar}><FiSearch aria-hidden="true" /><span>جست‌وجوی محصول یا برند...</span></div>
        <div className={styles.categories}>
          <div><FiCoffee /><span>قهوه</span></div>
          <div><FiPackage /><span>لبنیات</span></div>
          <div><FiShoppingCart /><span>نان و شیرینی</span></div>
          <div><FiClipboard /><span>بسته‌بندی</span></div>
        </div>
      </div>
    );
  }

  if (type === "compare") {
    return (
      <div className={`${styles.stepVisual} ${styles.compareVisual}`} aria-label="نمونه مقایسه تأمین‌کنندگان">
        {[
          ["قهوه‌چی", "۵۹۰٬۰۰۰", "۴٫۷"],
          ["کافه پلاس", "۶۱۰٬۰۰۰", "۴٫۶"],
          ["قهوه اسپرسو", "۵۸۰٬۰۰۰", "۴٫۸"],
        ].map(([name, price, score]) => (
          <article key={name}>
            <Image src="/images/landing/coffee-bag.png" alt="بسته قهوه یک کیلوگرمی" width={700} height={900} sizes="92px" />
            <strong>{name}</strong>
            <small>یک کیلوگرم</small>
            <span><b>{price}</b> تومان</span>
            <span className={styles.score}><FiStar /> {score}</span>
            <button type="button">افزودن به سبد</button>
          </article>
        ))}
      </div>
    );
  }

  if (type === "tracking") {
    return (
      <div className={`${styles.stepVisual} ${styles.trackingVisual}`} aria-label="نمونه پیگیری سفارش در بارچی">
        <div className={styles.timeline}>
          <span className={styles.done}><FiCheckCircle /><small>ثبت سفارش</small></span>
          <span className={styles.done}><FiPackage /><small>در حال آماده‌سازی</small></span>
          <span><FiTruck /><small>ارسال شده</small></span>
          <span><FiCheck /><small>تحویل شده</small></span>
        </div>
        <div className={styles.orderCard}>
          <Image src="/images/landing/coffee-bag.png" alt="قهوه موجود در سفارش" width={700} height={900} sizes="58px" />
          <div><strong>قهوه اسپرسو</strong><small>۲ کیلوگرم</small></div>
          <dl><div><dt>شماره سفارش</dt><dd>#BR-۱۲۵۴</dd></div><div><dt>تاریخ سفارش</dt><dd>۱۷ شهریور ۱۴۰۵</dd></div></dl>
          <button type="button">مشاهده جزئیات</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.stepVisual} ${styles.repeatVisual}`} aria-label="نمونه مدیریت لیست خرید ماهانه">
      <div className={styles.repeatPhoto}>
        <Image src="/images/landing/cafe-owner.jpg" alt="مدیر کافه در حال بررسی لیست خرید" fill sizes="300px" />
      </div>
      <div className={styles.shoppingList}>
        <strong>لیست خرید ماهانه</strong>
        {[["قهوه اسپرسو", "۲"], ["شیر کم‌چرب", "۱۰"], ["لیوان کاغذی", "۵۰"]].map(([name, count]) => (
          <div key={name}><FiCheckCircle /><span>{name}</span><small>− &nbsp; {count} &nbsp; +</small></div>
        ))}
        <button type="button"><FiShoppingCart /> افزودن همه به سبد</button>
      </div>
    </div>
  );
}
