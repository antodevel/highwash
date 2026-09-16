import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) return { title: "Услуга не найдена" };
  return {
    title: `${s.name} в Москве`,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: {
      title: `${s.name} | Highwash`,
      description: s.description,
      url: `/services/${s.slug}/`,
    },
  };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const related = services
    .filter((s) => s.category === service.category && s.slug !== slug)
    .slice(0, 3);
  return (
    <>
      <main id="main">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link>
            <span>/</span>
            <Link href="/services/">Услуги</Link>
            <span>/</span>
            <span>{service.name}</span>
          </nav>
          <section className="service-hero">
            <div>
              <span className="eyebrow section-label">
                <i />
                {service.category.toUpperCase()}
              </span>
              <h1>
                {service.name}
                <span className="title-dot">.</span>
              </h1>
              <p>{service.description}</p>
              <span className="service-region">
                <MapPin size={16} />
                Москва и Московская область
              </span>
              <a className="button" href="#service-quote">
                Рассчитать стоимость <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="service-detail-image">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
          </section>
          <section className="service-info section">
            <div>
              <span className="eyebrow">ДЛЯ КАКИХ ОБЪЕКТОВ</span>
              <h2>
                Под задачи
                <br />
                вашего объекта.
              </h2>
              <div className="object-tags">
                {service.objects.map((o) => (
                  <span key={o}>{o}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">ОСОБЕННОСТИ РАБОТЫ</span>
              <ul>
                {service.features.map((f) => (
                  <li key={f}>
                    <Check size={19} />
                    {f}
                  </li>
                ))}
              </ul>
              <p>
                Укажите адрес, примерный объём и особенности доступа. Обсудим
                детали и подготовим предложение для вашего объекта.
              </p>
            </div>
          </section>
          <section id="service-quote" className="quote-section service-quote">
            <div className="quote-heading">
              <div>
                <h2>Рассчитать стоимость</h2>
                <p>{service.name}</p>
              </div>
            </div>
            <QuoteForm initialService={service.slug} />
          </section>
          <section className="section">
            <div className="section-top">
              <h2>Другие услуги</h2>
              <Link className="text-link" href="/services/">
                Полный каталог <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="services-grid">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
