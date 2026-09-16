import Image from "next/image";
import { MapPin, Ruler, Camera, ArrowUpRight } from "lucide-react";
const details = [
  [
    "Где нужны работы",
    "Укажите адрес и расскажите, что нужно очистить, восстановить или установить.",
    MapPin,
  ],
  [
    "Объём и высота",
    "Добавьте примерную площадь или размеры и высоту проведения работ, если они известны.",
    Ruler,
  ],
  [
    "Фото и удобное время",
    "Для оценки задачи обычно нужны фотографии объекта и пожелания по времени.",
    Camera,
  ],
] as const;
export function Objects() {
  return (
    <section className="objects container">
      <div className="objects-photo">
        <Image
          src="/images/services/moika-okon.webp"
          alt="Мойка сложного архитектурного остекления — иллюстрация"
          fill
          sizes="(max-width: 700px) 100vw, 40vw"
        />
        <div>
          <span className="eyebrow">ДЛЯ ВАШЕГО БИЗНЕСА</span>
          <h2>
            Чистота, которая
            <br />
            работает на вас.
          </h2>
        </div>
      </div>
      <div className="objects-content">
        <span className="eyebrow">ОТ ЗАДАЧИ К РАСЧЁТУ</span>
        <h3>
          Расскажите о задаче.
          <br />
          Мы разберёмся в деталях.
        </h3>
        <div className="project-details">
          {details.map(([name, description, Icon]) => (
            <div key={name}>
              <Icon size={21} />
              <div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="text-link" href="#quote">
          Обсудить задачу <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
