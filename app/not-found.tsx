import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container empty-state">
      <span className="eyebrow">404 / СТРАНИЦА НЕ НАЙДЕНА</span>
      <h1>Здесь пока пусто.</h1>
      <p>Выберите услугу в каталоге или вернитесь на главную.</p>
      <Link href="/services/" className="button">
        Открыть каталог
      </Link>
    </main>
  );
}
