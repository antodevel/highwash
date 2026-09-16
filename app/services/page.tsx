import type { Metadata } from "next";
import Link from "next/link";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
export const metadata: Metadata = {
  title: "Все услуги",
  description:
    "Полный каталог Highwash: клининг, высотные работы, фасады, остекление и ремонт кровли в Москве и Московской области.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Каталог услуг Highwash",
    description: "Клининг, высотные работы, фасады, остекление и кровля.",
    url: "/services/",
  },
};
export default function ServicesPage() {
  return (
    <>
      <main id="main" className="container catalog-page">
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span>/</span>
          <span>Услуги</span>
        </nav>
        <span className="eyebrow section-label">
          <i />
          КАТАЛОГ HIGHWASH
        </span>
        <h1>
          Решение для
          <br />
          каждой задачи<span className="title-dot">.</span>
        </h1>
        <p className="page-intro">
          {services.length} услуг: от мойки окон до комплексного обслуживания
          зданий.
        </p>
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
