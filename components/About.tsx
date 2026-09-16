import { ArrowUpRight } from "lucide-react";
export function About() {
  return (
    <section id="about" className="section container about">
      <div>
        <span className="eyebrow section-label">
          <i />
          03 / О КОМПАНИИ
        </span>
        <h2>
          Highwash.
          <br />
          Забота о здании
          <br />
          на всех уровнях.
        </h2>
      </div>
      <div className="about-copy">
        <p className="large-copy">
          Мы занимаемся высотной мойкой и обслуживанием фасадов, окон, рекламных
          конструкций и сложных архитектурных элементов.
        </p>
        <p>
          Работаем с коммерческими и административными объектами в Москве и
          Московской области. Объединяем профессиональный клининг и промышленный
          альпинизм, чтобы решать задачи на разной высоте.
        </p>
        <a className="text-link" href="#contacts">
          Обсудить ваш объект <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
