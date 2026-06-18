import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Nosotros | Dilectra — Arquitectura & Ingeniería",
  description: "Conoce la historia, misión y valores de Dilectra, empresa líder en arquitectura, ingeniería y construcción en Costa Rica.",
};

const values = [
  {
    title: "Excelencia",
    description: "Cada proyecto es una oportunidad para superar expectativas y entregar resultados de la más alta calidad.",
  },
  {
    title: "Integridad",
    description: "Actuamos con transparencia y honestidad en cada etapa del proceso, construyendo relaciones de confianza duraderas.",
  },
  {
    title: "Innovación",
    description: "Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones más eficientes y sostenibles.",
  },
  {
    title: "Compromiso",
    description: "Cumplimos con los plazos y presupuestos acordados, respetando el tiempo e inversión de nuestros clientes.",
  },
];

export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-black pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="topo-nos" width="400" height="400" patternUnits="userSpaceOnUse">
                <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#53996f" strokeWidth="0.6" transform="rotate(-10,200,200)" />
                <ellipse cx="200" cy="200" rx="130" ry="85" fill="none" stroke="#53996f" strokeWidth="0.6" transform="rotate(-10,200,200)" />
                <ellipse cx="200" cy="200" rx="80" ry="52" fill="none" stroke="#53996f" strokeWidth="0.6" transform="rotate(-10,200,200)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-nos)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Quiénes somos
            </span>
            <h1 className="mt-3 text-5xl lg:text-7xl font-heading font-black uppercase text-brand-white leading-none">
              Nosotros
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-brand-black py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Nuestra historia
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-heading font-black uppercase text-brand-white leading-tight">
              Más de una década construyendo Costa Rica
            </h2>
            <p className="mt-6 text-brand-gray leading-relaxed font-body">
              Dilectra nació con la visión de transformar el sector de la construcción en la región Caribe de Costa Rica,
              ofreciendo servicios de arquitectura, ingeniería y construcción bajo los más altos estándares de calidad.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed font-body">
              Con sede en Guápiles, hemos crecido hasta convertirnos en un referente regional, participando en proyectos
              residenciales, comerciales, industriales e institucionales en todo el país.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed font-body">
              Nuestro equipo de profesionales altamente calificados trabaja con pasión y dedicación para hacer realidad
              la visión de cada cliente, entregando proyectos que perduran en el tiempo.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative aspect-4/3 bg-brand-dark border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                  <path d="M10 190 L100 20 L190 190 Z" fill="none" stroke="#53996f" strokeWidth="1" />
                  <path d="M40 190 L40 120 L160 120 L160 190" fill="none" stroke="#53996f" strokeWidth="1" />
                  <path d="M75 190 L75 145 L125 145 L125 190" fill="none" stroke="#53996f" strokeWidth="1" />
                  <line x1="10" y1="190" x2="190" y2="190" stroke="#53996f" strokeWidth="1" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-brand-green text-xs font-heading font-semibold tracking-widest uppercase mb-2">
                  Fundada en Guápiles
                </p>
                <p className="text-brand-white text-2xl font-heading font-black uppercase">
                  Costa Rica
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="bg-brand-dark py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          <AnimatedSection delay={0} direction="up">
            <div className="bg-brand-dark p-12 h-full">
              <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">01</span>
              <h3 className="mt-4 text-2xl font-heading font-black uppercase text-brand-white">Misión</h3>
              <p className="mt-4 text-brand-gray leading-relaxed font-body">
                Brindar soluciones integrales de arquitectura e ingeniería para viviendas residenciales, ofreciendo
                proyectos llave en mano que combinan diseño, calidad y confianza. Nuestro compromiso es acompañar al
                cliente desde la idea inicial hasta la entrega final, garantizando transparencia, seguridad y excelencia
                en cada detalle.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} direction="up">
            <div className="bg-brand-dark p-12 h-full border-l border-white/5">
              <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">02</span>
              <h3 className="mt-4 text-2xl font-heading font-black uppercase text-brand-white">Visión</h3>
              <p className="mt-4 text-brand-gray leading-relaxed font-body">
                Consolidarnos como la empresa líder en Costa Rica en construcción residencial de alto nivel, reconocida
                por transformar ideas en hogares únicos y funcionales. Aspiramos a que Dilectra sea sinónimo de
                innovación, excelencia y transparencia, generando experiencias que superen las expectativas de cada
                cliente.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-brand-black py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Lo que nos define
            </span>
            <h2 className="mt-3 text-4xl font-heading font-black uppercase text-brand-white">
              Nuestros Valores
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-brand-black p-8 h-full group hover:bg-brand-dark transition-colors duration-300">
                  <div className="w-8 h-px bg-brand-green mb-6 group-hover:w-16 transition-all duration-500" />
                  <h3 className="text-lg font-heading font-bold uppercase text-brand-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed font-body">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
