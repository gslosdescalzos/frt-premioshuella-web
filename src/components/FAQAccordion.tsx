import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Quién puede participar en los Premios Huella?",
    answer:
      "Cualquier persona, empresa, organización o colectivo que tenga un proyecto o iniciativa con impacto positivo en el medio ambiente o la sociedad puede presentar su candidatura. No hay restricciones de edad, nacionalidad o sector.",
  },
  {
    question: "¿Cuál es el plazo de inscripción?",
    answer:
      "El plazo de inscripción se abrirá próximamente. Te recomendamos suscribirte a nuestra newsletter para estar al tanto de todas las fechas importantes y novedades del certamen.",
  },
  {
    question: "¿Cómo se seleccionan los ganadores?",
    answer:
      "Un jurado compuesto por expertos en sostenibilidad, innovación y medio ambiente evaluará cada candidatura según criterios de impacto, innovación, viabilidad y escalabilidad del proyecto.",
  },
  {
    question: "¿Tiene algún coste participar?",
    answer:
      "No, la participación en los Premios Huella es completamente gratuita. Queremos que cualquier iniciativa con impacto positivo pueda presentarse sin barreras económicas.",
  },
  {
    question: "¿Puedo presentar más de un proyecto?",
    answer:
      "Sí, puedes presentar varios proyectos siempre que cada uno se inscriba en la categoría correspondiente y cumpla con las bases de participación establecidas.",
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
