export interface Category {
  name: string;
  description: string;
  bases: string[];
}

export const OPEN_CATEGORY_SLUGS = [
  "emprendimiento-joven",
  "representacion-cultural-jerezana",
  "accion-social",
] as const;

export const SCOUT_GROUPS = [
  "Los Descalzos",
  "Mundo Nuevo",
  "Delaware",
  "Fatima",
  "San Jose",
  "La Salle",
  "Las Vinas",
  "El Pilar",
  "San Benito",
  "Juan Pablo II",
  "Virgen de la Candelaria",
  "San Jorge",
  "San Francisco",
  "El Carmen",
  "Santo Domingo Savio",
  "Altair",
  "Impeesa",
  "Prometeo",
  "Kenya",
] as const;

export function isOpenCategory(slug: string): boolean {
  return (OPEN_CATEGORY_SLUGS as readonly string[]).includes(slug);
}

export const categories: Record<string, Category> = {
  "foto-scout": {
    name: "Foto scout",
    description: "Categoría de fotografía scout.",
    bases: ["Bases por definir."],
  },
  "videoclip-musical-original": {
    name: "Videoclip musical original",
    description: "Categoría de videoclip musical original.",
    bases: ["Bases por definir."],
  },
  "deportista-scout": {
    name: "Deportista scout",
    description: "Categoría de deportista scout.",
    bases: ["Bases por definir."],
  },
  "construccion-scout": {
    name: "Construccion scout",
    description: "Categoría de construcción scout.",
    bases: ["Bases por definir."],
  },
  "simbologia-scout": {
    name: "Simbología scout",
    description: "Categoría de simbología scout.",
    bases: ["Bases por definir."],
  },
  "habilidades-pionerismo": {
    name: "Habilidades de pionerismo",
    description: "Categoría de habilidades de pionerismo.",
    bases: ["Bases por definir."],
  },
  "artista-scout": {
    name: "Artista scout",
    description: "Categoría de artista scout.",
    bases: ["Bases por definir."],
  },
  "emprendimiento-joven": {
    name: "Emprendimiento joven",
    description: "Categoría de emprendimiento joven.",
    bases: ["Bases por definir."],
  },
  "representacion-cultural-jerezana": {
    name: "Representación cultural jerezana",
    description: "Categoría de representación cultural jerezana.",
    bases: ["Bases por definir."],
  },
  "accion-social": {
    name: "Acción social",
    description: "Categoría de acción social.",
    bases: ["Bases por definir."],
  },
  "grupo-del-ano": {
    name: "Grupo del año",
    description: "Categoría grupo del año.",
    bases: ["Bases por definir."],
  },
  "scout-del-ano": {
    name: "Scout del año",
    description: "Categoría scout del año.",
    bases: ["Bases por definir."],
  },
  "innovacion-verde": {
    name: "Innovación Verde",
    description: "Proyectos que transforman la industria con soluciones sostenibles.",
    bases: [
      "El proyecto debe estar relacionado con innovación tecnológica aplicada a la sostenibilidad.",
      "Se valorará el impacto medioambiental medible del proyecto.",
      "El proyecto debe haberse implementado o estar en fase avanzada de desarrollo.",
      "Se admiten proyectos individuales o colectivos.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "economia-circular": {
    name: "Economía Circular",
    description: "Iniciativas que promueven la reutilización y reducción de residuos.",
    bases: [
      "El proyecto debe promover principios de economía circular: reducir, reutilizar, reciclar.",
      "Se valorará la capacidad de escalabilidad de la iniciativa.",
      "Debe presentarse evidencia del impacto positivo generado.",
      "Se admiten proyectos de cualquier sector económico.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "movilidad-sostenible": {
    name: "Movilidad Sostenible",
    description: "Alternativas de transporte que reducen la huella de carbono.",
    bases: [
      "El proyecto debe abordar la movilidad urbana o interurbana sostenible.",
      "Se valorarán soluciones innovadoras y viables.",
      "Debe demostrarse la reducción de emisiones de CO₂.",
      "Se admiten proyectos tecnológicos, de infraestructura o comunitarios.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "energias-renovables": {
    name: "Energías Renovables",
    description: "Proyectos que impulsan la transición energética limpia.",
    bases: [
      "El proyecto debe estar relacionado con energías renovables o eficiencia energética.",
      "Se valorará la innovación y el impacto en la comunidad.",
      "Debe presentarse un plan de viabilidad o resultados obtenidos.",
      "Se admiten proyectos a cualquier escala.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "biodiversidad": {
    name: "Biodiversidad",
    description: "Acciones para la conservación y restauración de ecosistemas.",
    bases: [
      "El proyecto debe contribuir a la conservación o restauración de la biodiversidad.",
      "Se valorará el impacto medible en ecosistemas locales o globales.",
      "Debe incluir un componente de sensibilización o educación ambiental.",
      "Se admiten proyectos de investigación, restauración o conservación.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "educacion-ambiental": {
    name: "Educación Ambiental",
    description: "Programas que fomentan la conciencia ecológica en la sociedad.",
    bases: [
      "El proyecto debe tener un enfoque educativo sobre medio ambiente y sostenibilidad.",
      "Se valorará el alcance y la participación generada.",
      "Debe demostrarse un cambio de comportamiento o concienciación.",
      "Se admiten proyectos formales e informales de educación.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "agricultura-sostenible": {
    name: "Agricultura Sostenible",
    description: "Prácticas agrícolas que respetan el medio ambiente.",
    bases: [
      "El proyecto debe promover prácticas agrícolas sostenibles y regenerativas.",
      "Se valorará la reducción del impacto ambiental de la actividad agrícola.",
      "Debe presentarse evidencia de resultados o un plan de implementación.",
      "Se admiten proyectos de agricultura, ganadería o agroalimentación.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "arquitectura-verde": {
    name: "Arquitectura Verde",
    description: "Construcciones eficientes y respetuosas con el entorno.",
    bases: [
      "El proyecto debe incorporar principios de arquitectura sostenible o bioclimática.",
      "Se valorará la eficiencia energética y el uso de materiales sostenibles.",
      "Debe presentarse documentación técnica del proyecto.",
      "Se admiten proyectos construidos o en fase de diseño avanzado.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
  "impacto-social": {
    name: "Impacto Social",
    description: "Proyectos que combinan sostenibilidad con justicia social.",
    bases: [
      "El proyecto debe generar un impacto social positivo vinculado a la sostenibilidad.",
      "Se valorará la inclusión de comunidades vulnerables o marginadas.",
      "Debe presentarse evidencia del beneficio social generado.",
      "Se admiten proyectos de cualquier ámbito que combinen lo social y lo ambiental.",
      "La inscripción debe realizarse dentro del plazo establecido.",
    ],
  },
};
