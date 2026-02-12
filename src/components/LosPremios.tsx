import React from "react";
import { motion } from "motion/react";

export const LosPremios = () => {
  return (
    <section id="los-premios" className="py-24 bg-white dark:bg-neutral-950">
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
                src="/images/cartel.webp"
                alt="Cartel Premios Huella 2026"
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
              Los Premios
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                Los Premios Huella nacen con la vocación de reconocer y visibilizar aquellas
                iniciativas, proyectos y personas que están dejando una huella positiva en
                nuestro entorno.
              </p>
              <p>
                A través de diferentes categorías, buscamos premiar el compromiso con la
                sostenibilidad, la innovación social y el impacto medioambiental positivo.
              </p>
              <p>
                Creemos firmemente que cada acción cuenta y que juntos podemos construir un
                futuro más sostenible y consciente para las próximas generaciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
