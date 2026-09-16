"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { categories, services, type Category } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
export function Catalog() {
  const [category, setCategory] = useState<Category>("Все услуги");
  const [search, setSearch] = useState("");
  const filtered = services.filter(
    (s) =>
      (category === "Все услуги" || s.category === category) &&
      `${s.name} ${s.description}`
        .toLocaleLowerCase("ru")
        .includes(search.trim().toLocaleLowerCase("ru")),
  );
  return (
    <>
      <div className="catalog-controls">
        <div
          className="category-tabs"
          role="group"
          aria-label="Направление услуг"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="catalog-search">
          <Search size={18} />
          <input
            aria-label="Найти услугу"
            placeholder="Найти услугу"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              type="button"
              aria-label="Очистить поиск"
              onClick={() => setSearch("")}
            >
              <X size={17} />
            </button>
          )}
        </label>
      </div>
      <p className="catalog-count" aria-live="polite">
        Найдено: {filtered.length}
      </p>
      <div className="services-grid">
        {filtered.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>Услуга не найдена</h2>
          <p>Попробуйте другой запрос или выберите все направления.</p>
          <button
            className="button"
            onClick={() => {
              setSearch("");
              setCategory("Все услуги");
            }}
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </>
  );
}
