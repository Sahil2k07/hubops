import type { Service } from "@/services/ourServices";
import Link from "next/link";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className="service-card"
      aria-labelledby={`service-title-${service.id}`}
    >
      <div className="card-inner">
        <div className="card-number" aria-hidden="true">
          {String(service.id).padStart(2, "0")}
        </div>
        <h2 id={`service-title-${service.id}`} className="card-title">
          {service.title}
        </h2>
        <p className="card-description">{service.description}</p>
        <button disabled className="cta-btn">
          Learn More
          <span className="cta-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
