import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Clock3,
} from "lucide-react";
export function Hero() {
  return (
    <section className="hero-cover">
      <div className="hero-cover-image">
        <Image
          src="/hero-facade.webp"
          alt="Иллюстрация: промышленный альпинист моет стеклянный фасад бизнес-центра"
          fill
          preload
          sizes="100vw"
        />
      </div>
      <div className="container hero-cover-layout">
        <div className="hero-cover-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            <MapPin size={13} /> МОСКВА И МОСКОВСКАЯ ОБЛАСТЬ
          </div>
          <h1>
            Чистота.
            <br />
            На любой
            <br />
            <span>высоте.</span>
          </h1>
          <p className="hero-description">
            Профессиональный клининг
            <br className="desktop-break" /> и промышленный альпинизм.
            <br />
            От мойки окон до обслуживания фасадов.
          </p>
          <div className="hero-buttons">
            <a className="button" href="#quote">
              Рассчитать стоимость <ArrowUpRight size={20} />
            </a>
            <a className="text-link" href="#services">
              Все услуги <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <ShieldCheck />
              Специалисты
              <br />с допусками
            </span>
            <span>
              <Clock3 />
              Работаем 24/7
              <br />в удобное время
            </span>
          </div>
        </div>
        <div className="hero-cover-caption">
          <span className="status-dot" />
          <span>
            HIGHWASH
            <br />
            <strong>Профессиональный подход к высоте</strong>
          </span>
          <ArrowUpRight size={23} />
        </div>
      </div>
      <div className="hero-bottom container">
        <span>КЛИНИНГ</span>
        <i />
        <span>ПРОМЫШЛЕННЫЙ АЛЬПИНИЗМ</span>
        <i />
        <span>ОБСЛУЖИВАНИЕ ЗДАНИЙ</span>
        <ArrowDown size={17} />
      </div>
    </section>
  );
}
