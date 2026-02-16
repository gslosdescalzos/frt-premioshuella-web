import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Quién puede participar en los Premios Huella?",
    answer:
      "Cualquier persona o grupo scout tanto de ASDE como de MSC pueden participar en todas las categorías, exceptuando aquellas que estén limitadas para scouts. ¡Revisa las categorías abiertas al público!",
  },
  {
    question: "¿Cuál es el plazo de inscripción?",
    answer:
      "Puedes inscribirte desde ya, las inscripciones se cerrará un mes antes del evento. Ahí procederemos a abrir las votaciones, y dos semanas después anunciaremos los finalistas.  ",
  },
  {
    question: "¿Cómo se seleccionan los ganadores?",
    answer:
      "Una vez cerradas las participaciones, procederemos a abrir las votaciones, en las cuales puede participar cualquier persona. Dos semanas después, para los finalista, los mostraremos en la web, ¡pero las votaciones serán durante la gala!",
  },
  {
    question: "¿Tiene algún coste participar?",
    answer:
      "No, la participación en los Premios Huella es completamente gratuita. Queremos que cualquier iniciativa con impacto positivo pueda presentarse sin barreras económicas.",
  },
  {
    question: "¿Puedo presentar más de un proyecto?",
    answer:
      "Sí, puedes participar en todas las categorías que quieras, pero sólo una vez por categoría.",
  },
  {
    question: "¿Cuándo y dónde serán los premios?",
    answer:
      "Los premios serán entregados el 20 de junio de 2026 en la Sociedad Jerezana del Vino, Plz. Silos, 7. ¡No te lo pierdas!",
  },
  {
    question: "¿Tiene algún coste el acceso a la gala?",
    answer:
      "Sí, las entradas para la gala serán de 7€ por persona, pero estas incluyen dos consumiciones gratuitas, para que disfrutes de la mejor manera posible.",
  },
  {
    question: "¿Puedo ir a ver los stands y consumir en la barra sin tener entrada?",
    answer:
      "Sí, queremos fomentar el comercio local y la posibilidad de encontrarse a gente y compartir momentos, por lo que la entrada al recinto será gratuita. Aunque... ¿te vas a perder lo que tenemos preparado para tí?",
  },
  {
    question: "¿A que hora empieza el evento?",
    answer:
      "Desde por la mañana (hora por confirmar) tendremos stands de diferentes emprendedores y comerciantes locales, pudiendo comer y beber lo que quieras. A partir de las 17:30 empezaremos con la alfombra roja. A las 18:30 ya estaremos todos sentados para no perdernos ni un minuto de la gala de premios. La hora de cierre la pones tú",
  },
  {
    question: "¿Cómo puedo comprar las entradas?",
    answer:
      "Podrás comprarlas todos los sábados en la Parroquia San Juan Bautista de Los Descalzos, en Calle Medina S/N a las 14:00. También podrás pedirselas a alguien que conozcas del grupo de Los Descalzos o comprarlas cuando nuestros RRPPs ¡vayan a tu grupo!",
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              "w-full flex items-center justify-between p-6 text-left transition-colors",
              "bg-white dark:bg-neutral-900",
              "hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            )}
          >
            <span className="font-semibold text-neutral-900 dark:text-white pr-4">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-neutral-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-300 leading-relaxed bg-white dark:bg-neutral-900">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
