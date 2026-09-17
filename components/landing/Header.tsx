"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BrandLogo } from "./BrandLogo";
import { navItems } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="بارچی، صفحه اصلی"><BrandLogo eager /></a>
        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {navItems.map(([label, href], index) => <a className={index === 0 ? "active" : ""} href={href} key={href}>{label}</a>)}
        </nav>
        <a className="button button-primary nav-cta" href="#download">شروع استفاده</a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="باز کردن منو" aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} aria-label="ناوبری موبایل">
            {navItems.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="button button-primary" href="#download" onClick={() => setOpen(false)}>شروع استفاده</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
