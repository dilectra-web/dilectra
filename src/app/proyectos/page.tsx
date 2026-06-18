import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

export const metadata: Metadata = {
  title: "Proyectos | Dilectra — Arquitectura & Ingeniería",
  description: "Portafolio de proyectos de Dilectra en arquitectura, ingeniería y construcción en Costa Rica.",
};

const projects = [
  {
    id: "WR",
    title: "Oreamuno",
    location: "Oreamuno, Cartago",
    area: "120 m²",
    category: "Ingeniería y Construcción",
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
    id: "IM",
    title: "Guápiles — Vistas del Volcán",
    location: "Guápiles, Limón",
    area: "75 m²",
    category: "Ingeniería y Construcción",
    photos: [
      "/projects/IM/DSC07651.jpg",
      "/projects/IM/DSC06763.jpg",
      "/projects/IM/DSC06772.jpg",
      "/projects/IM/DSC06780.jpg",
      "/projects/IM/DSC06836.jpg",
      "/projects/IM/DSC06839.jpg",
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
    id: "ST",
    title: "Guápiles",
    location: "Guápiles, Limón",
    area: "55 m²",
    category: "Construcción",
    photos: [
      "/projects/ST/DSC06706.jpg",
      "/projects/ST/DSC06690.jpg",
      "/projects/ST/DSC06697.jpg",
      "/projects/ST/DSC06699.jpg",
      "/projects/ST/DSC06752-HDR.jpg",
    ],
  },
  {
    id: "FR",
    title: "Faldas del Volcán Turrialba",
    location: "Turrialba, Cartago",
    area: "75 m²",
    category: "Arquitectura",
    photos: [
      "/projects/FR/FOTO%20(1).jpg",
      "/projects/FR/FOTO%20(4).jpg",
      "/projects/FR/FOTO%20(6).jpg",
      "/projects/FR/FOTO%20(7).jpg",
    ],
  },
];

export default function Proyectos() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-brand-black pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="topo-proy" width="500" height="500" patternUnits="userSpaceOnUse">
                <path
                  d="M250,250 C320,190 400,160 460,170 C520,180 550,220 530,270 C510,320 450,350 380,350 C310,350 250,320 220,280 C190,240 210,190 250,170 C290,150 350,160 380,190 C410,220 410,260 380,285 C350,310 310,310 285,290"
                  fill="none" stroke="#53996f" strokeWidth="0.5"
                />
                <path
                  d="M50,100 C110,50 200,40 260,70 C320,100 340,160 310,210 C280,260 210,280 150,260 C90,240 60,190 70,140"
                  fill="none" stroke="#53996f" strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-proy)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-brand-green text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Portafolio
            </span>
            <h1 className="mt-3 text-5xl lg:text-7xl font-heading font-black uppercase text-brand-white leading-none">
              Proyectos
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-brand-black px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <div className="bg-brand-dark">
                <ProjectCarousel photos={project.photos} />
                <div className="px-6 py-5 border-t border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-brand-green text-[10px] font-heading font-semibold tracking-widest uppercase">
                      {project.category} · {project.id}
                    </span>
                    <span className="text-brand-gray text-xs font-body">{project.area}</span>
                  </div>
                  <h2 className="text-lg font-heading font-bold uppercase text-brand-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-brand-gray text-xs font-body tracking-wide">{project.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
