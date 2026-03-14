import type { Service } from "@/services/ourServices";
import ErrorState from "./ErrorState";
import ServiceCard from "./ServicesCard";
import getServices from "@/services/ourServices";

async function ServicesList() {
  let services: Service[];

  try {
    services = await getServices();
  } catch {
    return <ErrorState />;
  }

  if (!services.length) {
    return (
      <p className="empty-notice" role="status">
        No services available at the moment. Check back soon.
      </p>
    );
  }

  return (
    <section className="services-grid" aria-label="Available services">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
}

export default ServicesList;
