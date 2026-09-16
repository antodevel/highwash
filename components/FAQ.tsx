import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
export function FAQ() {
  return (
    <section id="faq" className="section container faq-section">
      <div>
        <span className="eyebrow section-label">
          <i />
          04 / ВОПРОСЫ И ОТВЕТЫ
        </span>
        <h2>
          Всё, что важно
          <br />
          до начала работ.
        </h2>
        <p>
          Не нашли свой вопрос?
          <br />
          <a className="underlined" href="#contacts">
            Напишите нам
          </a>{" "}
          — обсудим детали.
        </p>
      </div>
      <div className="faq-list">
        {faq.map((item, i) => (
          <details key={item.q} name="faq">
            <summary>
              <span className="faq-number">0{i + 1}</span>
              <h3>{item.q}</h3>
              <Plus size={19} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
