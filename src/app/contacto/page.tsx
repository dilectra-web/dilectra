import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Dilectra — Arquitectura & Ingeniería",
  description: "Contáctenos para iniciar su proyecto. Dilectra — Arquitectura & Ingeniería, Costa Rica.",
};

const info = [
  {
    label: "Teléfono",
    value: "+506 8372 4840",
    href: "tel:+50683724840",
  },
  {
    label: "Ubicación",
    value: "Costa Rica",
    href: null,
  },
  {
    label: "Horario",
    value: "Lunes a Viernes: 8:00 am – 5:00 pm",
    href: null,
  },
];

export default function Contacto() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-black pt-28 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="topo-c" width="300" height="300" patternUnits="userSpaceOnUse">
                <ellipse cx="150" cy="150" rx="130" ry="90" fill="none" stroke="#53996f" strokeWidth="0.9" transform="rotate(15,150,150)" />
                <ellipse cx="150" cy="150" rx="90" ry="60" fill="none" stroke="#53996f" strokeWidth="0.9" transform="rotate(15,150,150)" />
                <ellipse cx="150" cy="150" rx="50" ry="33" fill="none" stroke="#53996f" strokeWidth="0.9" transform="rotate(15,150,150)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-c)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Hablemos
            </span>
            <h1 className="mt-3 text-5xl lg:text-7xl font-heading font-black uppercase text-brand-white leading-none">
              Contacto
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <AnimatedSection direction="left">
            <h2 className="text-2xl font-heading font-black uppercase text-brand-white mb-8">
              Iniciemos su proyecto
            </h2>
            <p className="text-brand-gray font-body leading-relaxed mb-10">
              Estamos listos para escuchar su visión y convertirla en realidad. Contáctenos y un miembro de nuestro equipo
              se comunicará con usted a la brevedad posible.
            </p>

            <div className="space-y-6">
              {info.map((item) => (
                <div key={item.label} className="border-l-2 border-brand-green pl-6">
                  <p className="text-brand-green text-xs font-heading font-semibold tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-brand-white font-body hover:text-brand-green transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brand-white font-body">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
