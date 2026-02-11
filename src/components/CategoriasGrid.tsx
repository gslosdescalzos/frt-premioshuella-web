import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const categories = [
  {
    title: "Innovación Verde",
    description: "Proyectos que transforman la industria con soluciones sostenibles.",
    link: "/categorias/innovacion-verde",
  },
  {
    title: "Economía Circular",
    description: "Iniciativas que promueven la reutilización y reducción de residuos.",
    link: "/categorias/economia-circular",
  },
  {
    title: "Movilidad Sostenible",
    description: "Alternativas de transporte que reducen la huella de carbono.",
    link: "/categorias/movilidad-sostenible",
  },
  {
    title: "Energías Renovables",
    description: "Proyectos que impulsan la transición energética limpia.",
    link: "/categorias/energias-renovables",
  },
  {
    title: "Biodiversidad",
    description: "Acciones para la conservación y restauración de ecosistemas.",
    link: "/categorias/biodiversidad",
  },
  {
    title: "Educación Ambiental",
    description: "Programas que fomentan la conciencia ecológica en la sociedad.",
    link: "/categorias/educacion-ambiental",
  },
  {
    title: "Agricultura Sostenible",
    description: "Prácticas agrícolas que respetan el medio ambiente.",
    link: "/categorias/agricultura-sostenible",
  },
  {
    title: "Arquitectura Verde",
    description: "Construcciones eficientes y respetuosas con el entorno.",
    link: "/categorias/arquitectura-verde",
  },
  {
    title: "Impacto Social",
    description: "Proyectos que combinan sostenibilidad con justicia social.",
    link: "/categorias/impacto-social",
  },
];

export const CategoriasGrid = () => {
  return (
    <section id="categorias" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Categorías
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Descubre las diferentes categorías en las que puedes participar y dejar tu huella.
          </p>
        </div>

        <HoverEffect items={categories} />
      </div>
    </section>
  );
};
