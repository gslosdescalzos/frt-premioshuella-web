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
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              <p>
                A raíz del <b>35 aniversario del grupo scout Los Descalzos</b>, nos motiva la idea
                de crear unos premios que valoren todo el trabajo que se hace día a día con la
                juventud de Jerez. Así nace un evento que reconoce el esfuerzo de los
                responsables y, sobre todo, de los niños y niñas que componen este movimiento.
              </p>
              <p>
                <b>Los Premios Huella</b> son unos premios creados por y para los scouts, pero sin olvidar el gran
                impacto que tenemos en la sociedad a través de la acción, la educación y la vida en pequeños grupos,
                buscando situar al movimiento scout como parte fundamental de la juventud jerezana, haciendose visible
                a través de las categorías abiertas a todos los jóvenes.
              </p>
              <p>
                Unos buenos premios necesitan una buena gala, un espacio donde podremos encontrar jóvenes emprendedores,
                artistas, deportistas, comercios locales y grupos scouts. No te lo puedes perder, los finalistas sólo podrán
                ser votados durante la gala. <b>Contacta con nosotros para comprar tus entradas.</b> 
              </p>
              <p>
                Anota bien la fecha y la hora, nos veremos desde por la mañana <b>desde las 12:00 con los stands y barra abierta</b>. A partir de las <b>17:30 empezaremos con la alfombra roja</b>. A las <b>18:30 ya estaremos todos sentados para no perdernos ni un minuto de la gala de premios</b>. La hora de cierre la pones tú
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://maps.app.goo.gl/WRbEr3F26JD1EGnp9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-huella-400/50 dark:hover:border-huella-400/50 hover:bg-huella-50/30 dark:hover:bg-huella-950/30 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-huella-500/10 dark:bg-huella-500/20 flex items-center justify-center group-hover:bg-huella-500/20 dark:group-hover:bg-huella-500/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-huella-500">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white group-hover:text-huella-600 dark:group-hover:text-huella-400 transition-colors">
                    Sociedad Jerezana del Vino
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Plz. Silos, 7
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 ml-auto text-neutral-400 group-hover:text-huella-500 group-hover:translate-x-0.5 transition-all" aria-hidden>
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Premios+Huella+2026&dates=20260620T100000Z/20260620T220000Z&location=Sociedad+Jerezana+del+Vino%2C+Plz.+Silos+7%2C+Jerez&details=Gala+de+los+Premios+Huella+2026+organizada+por+el+Grupo+Scout+Los+Descalzos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-accent-400/50 dark:hover:border-accent-400/50 hover:bg-accent-50/30 dark:hover:bg-accent-950/30 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent-500/10 dark:bg-accent-500/15 flex items-center justify-center group-hover:bg-accent-500/20 dark:group-hover:bg-accent-500/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-500">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    20 de junio de 2026
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    12:00 stands - 17:30h alfombra roja - 18:30h gala de premios
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 ml-auto text-neutral-400 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all" aria-hidden>
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
