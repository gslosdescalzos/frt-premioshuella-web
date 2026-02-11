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
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-huella-200 to-huella-400 dark:from-huella-800 dark:to-huella-600 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🌿</div>
                <p className="text-white font-bold text-2xl">CARTEL</p>
                <p className="text-white/80 text-sm mt-2">Premios Huella 2026</p>
              </div>
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
