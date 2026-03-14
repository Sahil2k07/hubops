import LoadingState from "@/components/LoadingState";
import ServicesList from "@/components/ServicesList";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./services.css";

export const metadata: Metadata = {
  title: "Our Services | Acme Co.",
  description:
    "Explore the full range of professional services we offer — from strategy and design to engineering and support.",
  openGraph: {
    title: "Our Services | Acme Co.",
    description:
      "Professional services tailored to your needs. Browse our offerings and take the next step.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-wrapper">
        <header className="page-header">
          <span className="eyebrow">What we offer</span>
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Tailored solutions built for impact. Explore what we do and find the
            right fit for your goals.
          </p>
        </header>

        <main>
          <Suspense fallback={<LoadingState />}>
            <ServicesList />
          </Suspense>
        </main>
      </div>
    </>
  );
}
