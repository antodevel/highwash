import Link from "next/link";
import { Footer } from "@/components/Footer";
export const metadata = {
  title: "Демонстрационная форма и данные",
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <>
      <main id="main" className="container legal-page">
        <nav className="breadcrumbs">
          <Link href="/">Главная</Link>
          <span>/</span>
          <span>Персональные данные</span>
        </nav>
        <h1>
          Демонстрационная форма
          <br />и данные
        </h1>
        <p className="legal-notice">
          Это концепт сайта для портфолио. Контакты вымышлены, реквизиты
          реальной компании удалены.
        </p>
        <h2>Как работает форма</h2>
        <p>
          Имя, телефон, выбранная услуга и комментарий проверяются только в
          вашем браузере. Форма не отправляет эти сведения и не записывает их в
          браузерное хранилище. Для проверки используйте вымышленные данные.
        </p>
        <h2>Контакты на сайте</h2>
        <p>
          Телефон, email и Telegram показаны как демонстрационные заглушки. Они
          не предназначены для связи с реальной компанией.
        </p>
      </main>
      <Footer />
    </>
  );
}
