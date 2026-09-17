import {
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiCoffee,
  FiGrid,
  FiPackage,
  FiRepeat,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";

export const benefits = [
  { icon: FiShield, title: "تأمین‌کنندگان معتبر", copy: "همکاری با فروشندگان حرفه‌ای" },
  { icon: FiPackage, title: "خرید مجدد هوشمند", copy: "اقلام پرتکرار همیشه در دسترس" },
  { icon: FiClock, title: "صرفه‌جویی در زمان", copy: "خرید سریع و بدون دردسر" },
  { icon: FiBarChart2, title: "مقایسهٔ تأمین‌کنندگان", copy: "انتخاب بهتر، قیمت شفاف‌تر" },
];

export const steps = [
  { icon: FiSearch, title: "محصول موردنیاز را پیدا کنید", copy: "جست‌وجو بین صدها محصول و دسته‌بندی" },
  { icon: FiUsers, title: "پیشنهادها را بررسی کنید", copy: "قیمت، زمان ارسال و فروشنده را مقایسه کنید" },
  { icon: FiShoppingBag, title: "سفارش خود را ثبت کنید", copy: "محصولات را انتخاب و سفارش را نهایی کنید" },
  { icon: FiRepeat, title: "سفارش‌ها را مدیریت کنید", copy: "وضعیت سفارش‌ها را از داشبورد دنبال کنید" },
  { icon: FiCheckCircle, title: "دغدغهٔ بعدی را فراموش کنید", copy: "خریدهای بعدی را سریع‌تر انجام دهید" },
];

export const suppliers = [
  { name: "آریا تأمین", score: "۴٫۹", delivery: "ارسال ۱ تا ۲ روز", price: "۴۹۸٬۰۰۰ تومان", tone: "blue" },
  { name: "کافه پلاس", score: "۴٫۶", delivery: "ارسال ۲ تا ۳ روز", price: "۵۲۰٬۰۰۰ تومان", tone: "cream" },
  { name: "بازرگانی قهوه ایران", score: "۴٫۸", delivery: "ارسال همان روز", price: "۵۰۵٬۰۰۰ تومان", tone: "sage" },
];

export const industries = [
  { icon: FiGrid, label: "سایر کسب‌وکارها" },
  { icon: FiShoppingBag, label: "قنادی و بیکری‌ها" },
  { icon: FiBriefcase, label: "کترینگ‌ها" },
  { icon: FiUsers, label: "هتل‌ها" },
  { icon: FiPackage, label: "فست‌فودها" },
  { icon: FiCoffee, label: "رستوران‌ها" },
  { icon: FiCoffee, label: "کافه‌ها" },
];

export const faqs = [
  { q: "بارچی چیست؟", a: "بارچی یک بازار تخصصی برای خرید روزانهٔ کافه‌ها، رستوران‌ها و کسب‌وکارهای غذایی است." },
  { q: "آیا قیمت محصولات به‌روز است؟", a: "بله، قیمت و موجودی توسط تأمین‌کنندگان به‌روزرسانی می‌شود و پیش از ثبت سفارش قابل مقایسه است." },
  { q: "چه محصولاتی در بارچی عرضه می‌شود؟", a: "از قهوه و مواد اولیه تا ظروف مصرفی، تجهیزات سبک و اقلام بسته‌بندی در دسترس است." },
  { q: "چگونه سفارش خود را پیگیری کنم؟", a: "تمام سفارش‌ها، وضعیت ارسال و سوابق خرید از داشبورد شما قابل مشاهده است." },
  { q: "هزینهٔ استفاده از بارچی چقدر است؟", a: "جست‌وجو و ثبت درخواست برای خریداران رایگان است و هزینهٔ سفارش پیش از پرداخت شفاف نمایش داده می‌شود." },
];

export const businessFeatures = [
  "محصولات را در یک جا ببینید",
  "پیشنهادها را مقایسه کنید",
  "سفارش خود را ثبت کنید",
  "وضعیت سفارش را پیگیری کنید",
  "همه‌چیز، سریع‌تر و بدون کاغذبازی",
];

export const supplierPerks = [
  "مدیریت محصولات",
  "ثبت قیمت و موجودی",
  "دریافت سفارش‌ها",
  "درخواست‌های فروش",
  "تسویه‌حساب شفاف",
  "گزارش‌های عملکرد",
];

export const navItems = [
  ["خانه", "#home"],
  ["برای کسب‌وکارها", "#businesses"],
  ["برای تأمین‌کنندگان", "#suppliers"],
  ["چگونه کار می‌کند؟", "/how-it-works"],
  ["دربارهٔ ما", "#about"],
] as const;
