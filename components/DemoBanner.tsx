"use client";

import { useEffect, useRef, useState } from "react";
import "./demo-banner.css";

type DemoBannerProps = {
  href?: string;
  children?: React.ReactNode;
  linkLabel?: string;
};

export function DemoBanner({
  href = "https://antodev.vercel.app/",
  children = (
    <>
      Демонстрационный сайт разработан в мастерской <strong>antodev</strong>
    </>
  ),
  linkLabel = "Перейти на сайт разработчика",
}: DemoBannerProps) {
  const [visible, setVisible] = useState(true);
  const banner = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.dataset.demoBanner = visible
      ? "visible"
      : "hidden";

    const element = banner.current;
    const measure = () => {
      if (element)
        document.documentElement.style.setProperty(
          "--demo-banner-height",
          `${element.getBoundingClientRect().height}px`,
        );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.demoBanner;
      document.documentElement.style.removeProperty("--demo-banner-height");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <aside
      ref={banner}
      className="demo-banner"
      aria-label="Информация о разработчике"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkLabel}
      >
        {children}
      </a>

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Закрыть панель"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </aside>
  );
}
