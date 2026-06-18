import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

const TopoBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="topo" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
        <path
          d="M300,300 C380,230 460,180 520,160 C580,140 640,150 680,180 C720,210 730,260 700,310 C670,360 610,390 540,400 C470,410 400,390 340,360 C280,330 240,290 230,250 C220,210 250,170 300,160 C350,150 420,160 460,190 C500,220 510,260 490,300 C470,340 430,370 380,380 C330,390 280,370 250,340 C220,310 220,270 240,240 C260,210 300,200 340,210 C380,220 400,250 390,280 C380,310 350,330 320,325"
          fill="none" stroke="#53996f" strokeWidth="0.6"
        />
        <path
          d="M100,100 C160,50 240,30 300,50 C360,70 390,120 380,180 C370,240 320,280 260,290 C200,300 140,270 110,230 C80,190 90,140 120,110 C150,80 200,80 240,100 C280,120 290,160 270,190 C250,220 210,230 180,215"
          fill="none" stroke="#53996f" strokeWidth="0.6"
        />
        <path
          d="M400,50 C440,20 490,10 530,25 C570,40 590,80 570,120 C550,160 500,180 460,170 C420,160 400,130 410,100"
          fill="none" stroke="#53996f" strokeWidth="0.6"
        />
        <path
          d="M0,450 C40,400 100,380 150,390 C200,400 220,440 200,480 C180,520 130,530 80,510 C30,490 0,460 0,450"
          fill="none" stroke="#53996f" strokeWidth="0.6"
        />
        <line x1="0" y1="600" x2="600" y2="0" stroke="#ffffff" strokeWidth="0.12" />
        <line x1="0" y1="300" x2="600" y2="300" stroke="#ffffff" strokeWidth="0.08" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);

const services = [
  {
    title: "Arquitectura",
    description:
      "Diseño arquitectónico funcional y estético, adaptado a las necesidades de cada cliente y al entorno del proyecto.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M5 35 L20 8 L35 35 Z" stroke="#53996f" strokeWidth="1.5" />
        <path d="M12 35 L12 22 L28 22 L28 35" stroke="#53996f" strokeWidth="1.5" />
        <path d="M17 35 L17 27 L23 27 L23 35" stroke="#53996f" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Ingeniería",
    description:
      "Soluciones de ingeniería civil, estructural, eléctrica y mecánica con rigor técnico y cumplimiento de normativas nacionales e internacionales.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="18" width="28" height="3" stroke="#53996f" strokeWidth="1.5" />
        <path d="M10 18 L10 8 M30 18 L30 8" stroke="#53996f" strokeWidth="1.5" />
        <path d="M10 8 L30 8" stroke="#53996f" strokeWidth="1.5" />
        <path d="M10 21 L6 35 M30 21 L34 35" stroke="#53996f" strokeWidth="1.5" />
        <path d="M6 35 L34 35" stroke="#53996f" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Construcción",
    description:
      "Ejecución de proyectos con los más altos estándares de calidad, puntualidad y gestión eficiente de recursos.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="22" width="28" height="12" stroke="#53996f" strokeWidth="1.5" />
        <rect x="10" y="12" width="20" height="10" stroke="#53996f" strokeWidth="1.5" />
        <rect x="14" y="6" width="12" height="6" stroke="#53996f" strokeWidth="1.5" />
        <path d="M14 26 L14 34 M20 26 L20 34 M26 26 L26 34" stroke="#53996f" strokeWidth="1" />
      </svg>
    ),
  },
];

const featuredProjects = [
  {
    id: "WR",
    title: "Oreamuno",
    category: "Construcción",
    location: "Oreamuno, Cartago",
    photos: [
      "/projects/WR/DSC06394.jpg",
      "/projects/WR/DSC06349.jpg",
      "/projects/WR/DSC06400.jpg",
      "/projects/WR/DSC06404.jpg",
      "/projects/WR/DSC07981.jpg",
      "/projects/WR/DSC08019.jpg",
      "/projects/WR/DSC08025.jpg",
    ],
  },
  {
    id: "KR",
    title: "Bosque La Hoja",
    location: "Bosque La Hoja",
    area: "110 m²",
    category: "Arquitectura",
    photos: [
      "/projects/KR/PLANTA%20DE%20DIST%20ARQ%20(1).png",
      "/projects/KR/FOTO%20(3).png",
      "/projects/KR/FOTO%20(6).png",
      "/projects/KR/FOTO%20(10).png",
      "/projects/KR/FOTO%20(17).png",
      "/projects/KR/FOTO%20(19).png",

    ],
  },
  {
    id: "IM",
    title: "Guápiles — Vistas del Volcán",
    category: "Arquitectura",
    location: "Guápiles, Limón",
    photos: [
            "/projects/IM/DSC07651.jpg",
      "/projects/IM/DSC06763.jpg",
      "/projects/IM/DSC06772.jpg",
      "/projects/IM/DSC06780.jpg",

      "/projects/IM/DSC06836.jpg",
      "/projects/IM/DSC06839.jpg",
    ],
  },
];

const stats = [
  { value: 5, suffix: "", label: "Años de experiencia" },
  { value: 25, suffix: "+", label: "Proyectos completados" },
  { value: 2500, suffix: "", label: "Metros cuadrados construidos" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        <TopoBackground />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-brand-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          <AnimatedSection delay={0.1}>
            <span className="inline-block text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase mb-8">
              Arquitectura & Ingeniería — Costa Rica
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="font-heading font-black uppercase leading-[0.9] tracking-tight">
              <span className="block text-[1.75rem] sm:text-5xl lg:text-[clamp(3rem,8vw,7rem)] text-brand-white">DISEÑAMOS.</span>
              <span className="block text-[1.75rem] sm:text-5xl lg:text-[clamp(3rem,8vw,7rem)] text-brand-green">CONSTRUIMOS.</span>
              <span className="block text-[1.75rem] sm:text-5xl lg:text-[clamp(3rem,8vw,7rem)] text-brand-white">TRANSFORMAMOS.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="mt-10 text-brand-gray text-lg lg:text-xl leading-relaxed max-w-xl font-body">
              Soluciones integrales en ingeniería, arquitectura y construcción.
              Llevamos sus proyectos del concepto a la realidad con precisión y excelencia.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.55}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/proyectos"
                className="inline-block px-8 py-4 bg-brand-green text-white font-heading font-semibold text-sm tracking-widest uppercase hover:bg-brand-green-dark transition-colors duration-200"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/contacto"
                className="inline-block px-8 py-4 border border-white/30 text-white font-heading font-semibold text-sm tracking-widest uppercase hover:border-brand-green hover:text-brand-green transition-colors duration-200"
              >
                Contáctenos
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs font-heading tracking-widest uppercase text-brand-gray">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-brand-gray to-transparent" />
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="bg-brand-black py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Lo que hacemos
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-heading font-black uppercase text-brand-white leading-tight">
              Nuestros Servicios
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="group bg-brand-black p-10 h-full border border-transparent hover:border-brand-green/30 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-heading font-bold uppercase text-brand-white mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed font-body">
                    {service.description}
                  </p>
                  <div className="mt-8 h-px bg-brand-green/0 group-hover:bg-brand-green w-8 group-hover:w-16 transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-right">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-brand-green text-sm font-heading font-semibold tracking-widest uppercase hover:gap-4 transition-all duration-200"
              >
                Ver todos los servicios <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section className="bg-brand-dark py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Portafolio
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-heading font-black uppercase text-brand-white leading-tight">
              Proyectos Destacados
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <div className="bg-brand-dark">
                  <ProjectCarousel photos={project.photos} />
                  <div className="px-4 py-4 border-t border-white/5">
                    <span className="text-brand-green text-[10px] font-heading font-semibold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-sm font-heading font-bold uppercase text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-brand-gray text-[11px] font-body tracking-wide">
                      {project.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-right">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-brand-green text-sm font-heading font-semibold tracking-widest uppercase hover:gap-4 transition-all duration-200"
              >
                Ver más proyectos <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative bg-brand-black py-28 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Trayectoria
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-heading font-black uppercase text-brand-white leading-tight">
              Nuestra Experiencia
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.15}>
                <div className="border-l-2 border-brand-green pl-8">
                  <div className="text-6xl lg:text-7xl font-heading font-black text-brand-white leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-brand-gray text-sm font-body tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative bg-brand-dark py-28 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <TopoBackground />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-6xl font-heading font-black uppercase text-brand-white leading-tight">
              ¡SOMOS SU{" "}
              <span className="text-brand-green">MEJOR ALIADO</span>{" "}
              PARA SU PROYECTO!
            </h2>
            <p className="mt-6 text-brand-gray text-lg font-body leading-relaxed max-w-xl mx-auto">
              Contáctenos hoy y conversemos sobre cómo podemos llevar su visión a la realidad.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-block px-10 py-4 bg-brand-green text-white font-heading font-semibold text-sm tracking-widest uppercase hover:bg-brand-green-dark transition-colors duration-200"
              >
                Iniciar Proyecto
              </Link>
              <a
                href="tel:+50686635179"
                className="inline-block px-10 py-4 border border-white/20 text-brand-gray font-heading font-semibold text-sm tracking-widest uppercase hover:border-brand-green hover:text-brand-green transition-colors duration-200"
              >
                +506 8663 5179
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
