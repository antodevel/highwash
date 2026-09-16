import Image from "next/image";
import { ShieldCheck, MoveUpRight, Clock3 } from "lucide-react";
export function Advantages() {
  return (
    <section id="advantages" className="advantages section">
      <div className="container">
        <div className="section-top">
          <div>
            <span className="eyebrow section-label">
              <i />
              02 / ПОЧЕМУ HIGHWASH
            </span>
            <h2>
              Сложная работа.
              <br />
              <span className="muted-light">Спокойствие за результат.</span>
            </h2>
          </div>
          <p className="dark-intro">
            Высота требует внимания к деталям.
            <br />
            Доверяйте её подготовленным специалистам.
          </p>
        </div>
        <div className="advantages-grid">
          <div className="advantage-photo">
            <Image
              src="/images/services/montazhnye-raboty-na-vysote.webp"
              alt="Монтаж на высоте — иллюстрация"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />
            <span>ПРОФЕССИОНАЛЬНЫЙ ПОДХОД К ОБЪЕКТУ</span>
          </div>
          <div className="advantages-list">
            <article>
              <span className="advantage-icon">
                <ShieldCheck />
              </span>
              <div>
                <span className="small-index">01</span>
                <h3>Подготовленные специалисты</h3>
                <p>
                  Промальпинисты с действующими удостоверениями. Работаем со
                  страховкой, соблюдаем нормы охраны труда и заключаем договор.
                </p>
              </div>
            </article>
            <article>
              <span className="advantage-icon">
                <MoveUpRight />
              </span>
              <div>
                <span className="small-index">02</span>
                <h3>Любая высота</h3>
                <p>
                  От двух этажей до небоскрёбов. Обслуживаем фасады, окна и
                  сложные архитектурные элементы.
                </p>
              </div>
            </article>
            <article>
              <span className="advantage-icon">
                <Clock3 />
              </span>
              <div>
                <span className="small-index">03</span>
                <h3>В вашем ритме. 24/7</h3>
                <p>
                  Согласуем удобное время — в том числе ночью и в выходные, с
                  учётом графика работы объекта.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
