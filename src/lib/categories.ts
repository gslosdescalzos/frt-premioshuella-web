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

export const participationRules: string[] = [
  "Dentro de todas estas categorías se deberá facilitar siempre los derechos de la pieza audiovisual (foto o vídeo) y de las personas que aparezcan en ella. Además, las piezas entregadas deberán ser originales, hechas por uno mismo y sin ayuda de la inteligencia artificial.",
  "Vídeos de no más de 2 minutos, excepto en casos puntuales. (Revisar reglas de la categoría)",
  "Se podrá participar de manera colectiva, es decir como grupo scout, o como persona física.",
  "Serán descalificadas cualquier participación que no esté de acuerdo con los valores scout, tal como violencia, incitación al odio, faltas de respeto, etc.",
  "Se deberán de entregar las participaciones en tiempo y forma.",
  "En caso de haber participación de menores esta deberá de venir acompañada por una autorización del tutor legal.",
  "Cada grupo podrá enviar una sola candidatura por categoría, en caso de no pertenecer a ningún grupo se podrá enviar de manera individual. En caso de presentar más de una candidatura por grupo se avisará al grupo para corregirlo. En caso de que el grupo no participe en los premios, los niños y niñas del grupo podrán hacerlo de manera libre.",
];

export const categories: Record<string, Category> = {
  "foto-scout": {
    name: "Foto scout",
    description: "Categoría de fotografía scout.",
    bases: [
      "Foto relacionada con el escultismo.",
      "Puede haber sido realizada en cualquier año, siempre que siga las reglas del concurso.",
      "Breve descripción y título.",
    ],
  },
  "videoclip-musical-original": {
    name: "Videoclip musical original",
    description: "Categoría de videoclip musical original.",
    bases: [
      "La letra de la canción deberá de ser original.",
      "Podrá ser creada específicamente para el concurso o creada previamente.",
      "La duración deberá de ser al menos de un minuto.",
      "Deberá de ir acompañada junto a la letra.",
      "Se deberá de entregar un clip aparte de la versión original de unos 15 segundos. En caso de ser finalistas será el vídeo que se presentará durante la gala.",
    ],
  },
  "deportista-scout": {
    name: "Deportista scout",
    description: "Categoría de deportista scout.",
    bases: [
      "Se deberá de presentar una demostración en formato vídeo donde se pueda ver claramente el deporte que se practica y a la persona realizándolo.",
      "Cualquier deporte será válido, desde fútbol, artes marciales, gimnasia rítmica, patinaje, malabares, etc.",
      "Adjuntar una pequeña descripción e historia del recorrido.",
    ],
  },
  "construccion-scout": {
    name: "Construccion scout",
    description: "Categoría de construcción scout.",
    bases: [
      "No se podrán usar materiales de construcción como tornillos, ladrillos o similar, todos los materiales deberán de poder encontrarse en el medio o reciclados. Exceptuando la cuerda o elementos decorativos.",
      "Las uniones entre materiales deberán de ser realizadas a mano, mediante encastres o nudos.",
      "Se deberá de entregar una serie de fotos del proceso, incluyendo el resultado final.",
      "Se deberá de acompañar de una breve descripción de la construcción, del proceso y de los materiales y técnicas usadas.",
    ],
  },
  "simbologia-scout": {
    name: "Simbología scout",
    description: "Categoría de simbología scout.",
    bases: [
      "Deberá de entregarse una foto detalle actual y una foto usándola en grupo, podrá ir acompañada de entre 1 y 3 fotos antiguas. Además, se deberá de aportar la explicación e historia de la simbología en cuestión.",
      "Ejemplos: Libro de oro, bandera hecha a mano por los responsables, manta con camisetas de un responsable antiguo que se lleva a los campamentos…",
      "La tradición deberá de tener al menos una antigüedad mínima de 3 años, adjuntando prueba de ello.",
      "Deberá de entregarse una descripción de la tradición así como alguna prueba gráfica donde se pueda ver claramente.",
    ],
  },
  "habilidades-pionerismo": {
    name: "Habilidades de pionerismo",
    description: "Categoría de habilidades de pionerismo.",
    bases: [
      "Demostración de mejores habilidades de supervivencia en entornos naturales.",
      "Mejores técnicas de progresión en montaña.",
      "Mayores conocimientos de montañismo.",
      "Se deberá de adjuntar un vídeo explicativo donde se puedan ver las diferentes técnicas.",
    ],
  },
  "artista-scout": {
    name: "Artista scout",
    description: "Categoría de artista scout.",
    bases: [
      "Podrá ser un vídeo o una foto original donde se aprecie una habilidad artística del concursante, como por ejemplo, un vídeo bailando, cantando, tocando la guitarra, manualidades, espectáculo de magia, una foto de un cuadro…",
    ],
  },
  "emprendimiento-joven": {
    name: "Emprendimiento joven",
    description: "Categoría de emprendimiento joven.",
    bases: [
      "Debe de tener menos de 30 años.",
      "Elevator speech de 1 minuto de presentación del proyecto con los puntos clave.",
    ],
  },
  "representacion-cultural-jerezana": {
    name: "Representación cultural jerezana",
    description: "Categoría de representación cultural jerezana.",
    bases: [
      "Debe de estar enfocada en la cultura jerezana, arte, gastronomía, flamenco, poesía, literatura, fotografía…",
      "El formato podrá ser de cualquier tipo, vídeo, fotografía, documento…",
      "El participante debe de tener menos de 30 años.",
    ],
  },
  "accion-social": {
    name: "Acción social",
    description: "Categoría de acción social abierta al público.",
    bases: [
      "Mejor proyecto de especial relevancia e impacto público (ayuda en la DANA, Greenteam…) o acción social individual continuada (Voluntario en Cáritas, comedor del salvador).",
      "Deberá de haber sido realizada durante el año 2025 o 2026.",
    ],
  },
  "grupo-del-ano": {
    name: "Grupo del año",
    description: "Categoría grupo del año.",
    bases: [
      "Presentar una memoria con los puntos claves realizados durante el año.",
      "Vídeo.",
      "Infografía.",
      "Memoria (proyectos realizados durante el año).",
      "En esta categoría el público tiene el 50% de los votos, el resto, será decidido por un jurado seleccionado.",
      "Añadir foto de grupo para adjuntar en la página.",
    ],
  },
  "scout-del-ano": {
    name: "Scout del año",
    description: "Categoría scout del año.",
    bases: [
      "Presentar una memoria con los puntos claves realizados durante el año.",
      "Vídeo.",
      "Infografía.",
      "Memoria (proyectos realizados durante el año).",
      "En esta categoría el público tiene el 50% de los votos, el resto, será decidido por un jurado seleccionado.",
      "Adjuntar foto del scout para adjuntar en la página.",
    ],
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
