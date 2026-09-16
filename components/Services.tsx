import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredServices, services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
export function Services() {
  return (
    <section id="services" className="section container">
      <div className="section-top services-heading">
        <span className="eyebrow section-label">
          <i />
          01 / НАШИ УСЛУГИ
        </span>
        <h2>
          На высоте.
          <br />И в каждой детали.
        </h2>
        <div className="section-intro">
          <p>
            Моем, восстанавливаем и обслуживаем здания.
            <br />
            От отдельной задачи до комплексных работ.
          </p>
          <Link className="text-link" href="/services/">
            Полный каталог <span className="count-pill">{services.length}</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="services-grid featured-grid">
        {featuredServices.slice(0, 6).map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
      <Link className="catalog-link" href="/services/">
        <span>Ещё больше решений для вашего объекта</span>
        <strong>
          Все {services.length} услуг <ArrowUpRight size={18} />
        </strong>
      </Link>
    </section>
  );
}
