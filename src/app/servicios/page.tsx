import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Servicios | Dilectra — Arquitectura & Ingeniería",
  description: "Servicios profesionales de Arquitectura, Ingeniería Civil, Construcción y Consultoría en Costa Rica.",
};

const services = [
  {
    num: "01",
    title: "Arquitectura",
    description:
      "Desarrollamos proyectos arquitectónicos que combinan funcionalidad, estética y sostenibilidad. Desde el diseño conceptual hasta los planos de construcción, acompañamos cada etapa del proceso creativo.",
    items: [
      "Diseño arquitectónico residencial",
      "Diseño de espacios comerciales e institucionales",
      "Renderizados 3D y visualización arquitectónica",
      "Permisos municipales y CFIA",
    ],
  },
  {
    num: "02",
    title: "Ingeniería Civil",
    description:
      "Ofrecemos soluciones de ingeniería estructural y civil que garantizan la seguridad, durabilidad y eficiencia de cada obra. Trabajamos bajo normativas nacionales e internacionales vigentes.",
    items: [
      "Diseño estructural de edificaciones",
      "Cálculo sísmico y análisis de cargas",
      "Diseño de fundaciones y cimentaciones",
      "Planos constructivos y memorias de cálculo",
      "Revisión y corrección de diseños existentes",
      "Dirección de obra y supervisión técnica",
    ],
  },
   {
    num: "03",
    title: "Eléctricos",
    description:
      "Diseño e instalación de sistemas eléctricos residenciales y comerciales con cumplimiento de normativas del ICE y del CFIA.",
    items: [
      "Diseño de sistemas eléctricos",
      "Instalaciones eléctricas residenciales, comerciales e industriales",
      "Planos electricos y memorias de cálculo",
      "Dirección de obra eléctrica",
      "Inspecciones y certificaciones eléctricas",
    ],
  },

  {
    num: "04",
    title: "Consultoría",
    description:
      "Brindamos asesoría técnica especializada para inversores, desarrolladores y propietarios que necesitan orientación experta en la toma de decisiones relacionadas con sus proyectos.",
    items: [
      "Administración de obra",
      "Estudios de viabilidad constructiva",
      "Supervisión técnica independiente",
      "Gestión de trámites y permisos",
      "Asesoría en normativa de construcción",
    ],
  },

    {
    num: "05",
    title: "Construcción",
    description:
      "Ejecutamos proyectos de construcción con los más altos estándares de calidad, gestionando eficientemente los recursos humanos, materiales y tiempos para entregar resultados excepcionales.",
    items: [
      "Construcción residencial y comercial",
      "Administración y supervisión de obras",
      "Presupuestos y cronogramas de trabajo",
      "Control de calidad en ejecución",
      "Remodelaciones y ampliaciones",
    ],
  },
 
];

export default function Servicios() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-black pt-28 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="g" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Lo que hacemos
            </span>
            <h1 className="mt-3 text-5xl lg:text-7xl font-heading font-black uppercase text-brand-white leading-none">
              Servicios
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-black py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-px">
          {services.map((service, i) => (
            <AnimatedSection key={service.num} delay={i * 0.05}>
              <div className="group border-t border-white/10 py-14 grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-8 hover:border-brand-green/30 transition-colors duration-300">
                <div>
                  <span className="text-brand-green text-sm font-heading font-semibold tracking-widest">
                    {service.num}
                  </span>
                  <h2 className="mt-2 text-2xl font-heading font-black uppercase text-brand-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-brand-gray leading-relaxed font-body lg:pr-8">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-gray text-sm font-body">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-heading font-black uppercase text-brand-white">
              ¿Listo para iniciar su proyecto?
            </h2>
            <p className="mt-4 text-brand-gray font-body">
              Contáctenos y reciba una consulta gratuita con nuestro equipo de especialistas.
            </p>
            <Link
              href="/contacto"
              className="inline-block mt-8 px-10 py-4 bg-brand-green text-white font-heading font-semibold text-sm tracking-widest uppercase hover:bg-brand-green-dark transition-colors duration-200"
            >
              Solicitar Consulta
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
