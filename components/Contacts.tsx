import { MapPin, Send } from "lucide-react";
import { contacts } from "@/data/contacts";
import { QuoteForm } from "./QuoteForm";
export function Contacts() {
  return (
    <section id="contacts" className="contacts-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow section-label">
            <i />
            05 / НА СВЯЗИ
          </span>
          <h2>
            Поднимем
            <br />
            вашу задачу
            <br />
            <span>на новый уровень.</span>
          </h2>
          <p>
            Расскажите, что нужно сделать.
            <br />
            Обсудим объект и подготовим расчёт.
          </p>
          <span className="contact-email">{contacts.email}</span>
          <div className="contact-channels">
            <span
              className="demo-channel"
              aria-label="Telegram: демонстрационный контакт"
            >
              <Send size={18} />
              {contacts.telegram}
            </span>
          </div>
          <span className="contact-phone">{contacts.phone}</span>
          <div className="contact-location">
            <MapPin size={21} />
            <div>
              <strong>{contacts.region}</strong>
              <span>{contacts.address}</span>
            </div>
          </div>
        </div>
        <div className="contact-form-card">
          <h3>Обсудим ваш объект</h3>
          <p>Оставьте контакты и несколько деталей о работе.</p>
          <QuoteForm compact />
        </div>
      </div>
    </section>
  );
}
