import { motion } from "motion/react";
import { MovingBorderButton } from "./ui/moving-border";

export const Participacion = () => {
  return (
    <section id="participacion" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/images/participa.webp"
                alt="Participa y deja tu huella"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Participación
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              <p>
                Participar en los Premios Huella es sencillo. Solo necesitas tener un
                proyecto o iniciativa que esté generando un impacto positivo en el medio
                ambiente o la sociedad.
              </p>
              <p>
                Selecciona la categoría que mejor represente tu proyecto, completa el
                formulario de inscripción y comparte tu historia con nosotros. Nuestro
                jurado evaluará cada candidatura con criterios de innovación, impacto y
                viabilidad.
              </p>
            </div>
            <MovingBorderButton as="a" href="#categorias" className="font-bold uppercase tracking-wider">
              Participar
            </MovingBorderButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
