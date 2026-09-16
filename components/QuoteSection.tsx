import { ArrowDownRight } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
export function QuoteSection() {
  return (
    <section id="quote" className="container quote-section">
      <div className="quote-heading">
        <span className="eyebrow">НАЧНЁМ С ВАШЕЙ ЗАДАЧИ</span>
        <div>
          <h2>Рассчитаем стоимость работ</h2>
          <p>Расскажите об объекте — подберём подходящее решение.</p>
        </div>
        <ArrowDownRight size={37} />
      </div>
      <QuoteForm />
    </section>
  );
}
