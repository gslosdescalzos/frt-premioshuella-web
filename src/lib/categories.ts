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
  "En caso de añadir contenido audivisual, el participante deberá de ceder los derechos de la pieza audiovisual al grupo scout Los Descalzos. Además, las piezas entregadas deberán ser originales, hechas por uno mismo y sin ayuda de la inteligencia artificial.",
  "Los vídeos deben de tener una duración máxima de 2 minutos, excepto en casos puntuales. (Revisar bases de la categoría)",
  "La participación será por grupos scouts, en caso de no pertenecer a ningún grupo, se podrá enviar de manera individual especificándolo en el formulario. Para algunas categorías se podrá participar de manera individual.",
  "Serán descalificadas cualquier participación que no esté de acuerdo con los valores scout, tal como violencia, incitación al odio, faltas de respeto, etc.",
  "Las participaciones sólo serán validas si son enviadas en tiempo y forma",
  "En caso de haber participación de menores esta deberá de venir acompañada por una autorización del tutor legal.",
  "Cada grupo podrá enviar una sola candidatura por categoría, en caso de no pertenecer a ningún grupo se podrá enviar de manera individual. En caso de presentar más de una candidatura por grupo se avisará al grupo para corregirlo. En caso de que el grupo no participe en los premios, los niños y niñas del grupo podrán hacerlo de manera libre.",
];

export const participationSummary = {
  p1: "La participación es por grupos scouts o de manera individual si no perteneces a ningún grupo (indícalo en el formulario). Cada grupo puede enviar una sola candidatura por categoría. Las piezas deben ser originales, sin ayuda de inteligencia artificial. Los vídeos tienen una duración máxima de 2 minutos salvo excepciones. Serán descalificadas las propuestas que no respeten los valores scout.",
  p2: "Las participaciones solo son válidas si se envían en tiempo y forma. Los menores deben ir acompañados de una autorización del tutor legal. El contenido audiovisual requiere la cesión de derechos al grupo scout Los Descalzos.",
} as const;

export const categories: Record<string, Category> = {
  "foto-scout": {
    name: "Foto scout",
    description: "Categoría de fotografía scout.",
    bases: [
      "Foto relacionada con el escultismo.",
      "Puede haber sido realizada en cualquier año, siempre que siga las reglas del concurso.",
      "Se debe de adjuntar breve descripción y título.",
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
      "Demostración de mejores técnicas de progresión en montaña.",
      "Demostración de mayores conocimientos de montañismo.",
      "Se deberá de adjuntar un vídeo explicativo donde se puedan ver las diferentes técnicas.",
    ],
  },
  "artista-scout": {
    name: "Artista scout",
    description: "Categoría de artista scout.",
    bases: [
      "Podrá ser un vídeo o una foto original donde se aprecie una habilidad artística del concursante.",
      "Ejemplos: un vídeo bailando, cantando, tocando la guitarra, manualidades, espectáculo de magia, una foto de un cuadro…",
    ],
  },
  "emprendimiento-joven": {
    name: "Emprendimiento joven",
    description: "Categoría de emprendimiento joven.",
    bases: [
      "Debe de tener menos de 30 años.",
      "Se deberá de entregar un vídeo, estilo 'elevator speech', como presentación del proyecto con los puntos clave.",
    ],
  },
  "representacion-cultural-jerezana": {
    name: "Representación cultural jerezana",
    description: "Categoría de representación cultural jerezana.",
    bases: [
      "El participante debe de tener menos de 30 años.",
      "Debe de estar enfocada en la cultura jerezana, arte, gastronomía, flamenco, poesía, literatura, fotografía…",
      "El formato podrá ser de cualquier tipo, vídeo, fotografía, documento…",
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
      "Se deberá de presentar una memoria, un vídeo y una infografía con los puntos claves realizados durante el año.",
      "Se deberá de adjuntar una foto del grupo para adjuntar en la página.",
    ],
  },
  "scout-del-ano": {
    name: "Scout del año",
    description: "Categoría scout del año.",
    bases: [
      "Se deberá de presentar una memoria, un vídeo y una infografía con los puntos claves realizados durante el año.",
      "Se deberá de adjuntar una foto del scout para adjuntar en la página.",
    ],
  },
};
