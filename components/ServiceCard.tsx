import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Link className="service-card" href={`/services/${service.slug}/`}>
      <div className="service-image">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
        />
        <span className="service-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="card-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="service-body">
        <span className="service-category">{service.category}</span>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <span className="card-more">
          Подробнее <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
