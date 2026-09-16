import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Logo />
            <p>
              Клининг и промышленный альпинизм
              <br />
              Москва и Московская область
            </p>
            <Link className="text-link" href="/#quote">
              Оставить заявку <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Highwash</span>
            <span>
              Концепт для портфолио
              <br />
              Контакты и реквизиты обезличены
            </span>
            <Link href="/privacy/">Обработка персональных данных</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
