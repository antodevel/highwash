"use client";
import { NavigationLink as Link } from "./NavigationLink";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { contacts } from "@/data/contacts";
const links = [
  ["Главная", "/"],
  ["Услуги", "/#services"],
  ["О компании", "/#about"],
  ["Почему мы", "/#advantages"],
  ["FAQ", "/#faq"],
  ["Контакты", "/#contacts"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Главная навигация">
          {links.map(([name, url]) => (
            <Link href={url} key={name}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div
            className="header-phone"
            aria-label="Демонстрационный номер телефона"
          >
            <Phone size={17} />
            <span>
              <small>Связаться с нами</small>
              {contacts.phone}
            </span>
          </div>
          <Link className="button button-small" href="/#quote">
            Рассчитать стоимость <ArrowUpRight size={17} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Мобильная навигация"
        >
          {links.map(([name, url]) => (
            <Link key={name} href={url} onClick={() => setOpen(false)}>
              {name}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <Link
            href="/#quote"
            className="button"
            onClick={() => setOpen(false)}
          >
            Рассчитать стоимость
          </Link>
        </nav>
      )}
    </header>
  );
}
