"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      correo: (form.elements.namedItem("correo") as HTMLInputElement).value,
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement).value,
      presupuesto: (form.elements.namedItem("presupuesto") as HTMLSelectElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start justify-center py-16 space-y-4">
        <div className="w-12 h-px bg-brand-green" />
        <h3 className="text-2xl font-heading font-black uppercase text-brand-white">
          Mensaje enviado
        </h3>
        <p className="text-brand-gray font-body leading-relaxed">
          Gracias por contactarnos. Un miembro de nuestro equipo se comunicará con usted a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
            Nombre *
          </label>
          <input
            name="nombre"
            type="text"
            required
            className="w-full bg-brand-dark border border-white/10 text-brand-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors placeholder:text-white/20"
            placeholder="Su nombre completo"
          />
        </div>
        <div>
          <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
            Teléfono
          </label>
          <input
            name="telefono"
            type="tel"
            className="w-full bg-brand-dark border border-white/10 text-brand-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors placeholder:text-white/20"
            placeholder="+506 0000 0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
          Correo electrónico *
        </label>
        <input
          name="correo"
          type="email"
          required
          className="w-full bg-brand-dark border border-white/10 text-brand-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors placeholder:text-white/20"
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div>
        <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
          Tipo de proyecto
        </label>
        <select
          name="tipo"
          className="w-full bg-brand-dark border border-white/10 text-brand-gray font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
        >
          <option value="">Seleccione una opción</option>
          <option>Arquitectura residencial</option>
          <option>Arquitectura comercial</option>
          <option>Ingeniería civil</option>
          <option>Construcción</option>
          <option>Consultoría</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
          Presupuesto estimado
        </label>
        <select
          name="presupuesto"
          className="w-full bg-brand-dark border border-white/10 text-brand-gray font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
        >
          <option value="">Seleccione un rango</option>
          <option>Menos de ₡30 millones</option>
          <option>₡30 – ₡40 millones</option>
          <option>₡40 – ₡50 millones</option>
          <option>₡50 – ₡70 millones</option>
          <option>₡70 – ₡100 millones</option>
          <option>Más de ₡100 millones</option>
        </select>
      </div>

      <div>
        <label className="block text-brand-gray text-xs font-heading font-semibold tracking-widest uppercase mb-2">
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          required
          rows={5}
          className="w-full bg-brand-dark border border-white/10 text-brand-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-green transition-colors resize-none placeholder:text-white/20"
          placeholder="Cuéntenos sobre su proyecto..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm font-body">
          Hubo un error al enviar. Por favor intente de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-brand-green text-white font-heading font-semibold text-sm tracking-widest uppercase hover:bg-brand-green-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
