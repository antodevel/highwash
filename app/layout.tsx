import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { siteUrl } from "@/data/site";
export const metadata: Metadata = {
  title: {
    default: "Highwash — клининг и высотные работы в Москве",
    template: "%s | Highwash",
  },
  description:
    "Мойка окон и фасадов, промышленный альпинизм, клининг и обслуживание зданий в Москве и Московской области. Рассчитайте стоимость работ Highwash.",
  icons: { icon: "/favicon.svg?v=2" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Highwash",
    title: "Highwash — клининг и высотные работы",
    description:
      "Профессиональный клининг и промышленный альпинизм в Москве и Московской области.",
  },
};
metadata.metadataBase = new URL(siteUrl);
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Highwash — концепт для портфолио",
  url: siteUrl,
  description:
    "Демонстрационный сайт клининга и высотных работ. Контакты вымышлены.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main">
          К содержимому
        </a>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
