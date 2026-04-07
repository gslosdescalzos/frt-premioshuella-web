import { isAuthenticated } from "@/lib/api";
import { motion } from "motion/react";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { MovingBorderButton } from "./ui/moving-border";

const description =
  "De cara a mejorar la organización del evento, queremos conocer si estás interesado en participar. Puedes preinscribirte ahora y ayudarnos a crear un evento más increíble.";

export const Preinscripcion = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  const handlePreinscription = async () => {
    setIsCheckingAuth(true);

    try {
      const loggedIn = await isAuthenticated();

      if (!loggedIn) {
        setAuthModalOpen(true);
        return;
      }

      window.location.href = "/preinscripcion";
    } finally {
      setIsCheckingAuth(false);
    }
  };

  return (
    <section id="preinscripcion" className="bg-white py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-huella-100 to-transparent blur-2xl dark:from-huella-900/30 dark:to-transparent" />
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem]">
              <img
                src="/images/participa.webp"
                alt="Preinscripción a Premios Huella"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:pl-4"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-huella-600 dark:text-huella-400">
              Antes de participar
            </p>
            <h2 className="mb-6 text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
              Preinscripción
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {description}
            </p>

            <MovingBorderButton
              onClick={handlePreinscription}
              disabled={isCheckingAuth}
              className="font-bold uppercase tracking-wider"
            >
              {isCheckingAuth ? "Comprobando..." : "Preinscribirme"}
            </MovingBorderButton>
          </motion.div>
        </div>
      </div>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        title="Inicia sesión para preinscribirte"
        description="Necesitas una cuenta para completar la preinscripción al concurso."
        onSuccess={() => {
          window.location.href = "/preinscripcion";
        }}
      />
    </section>
  );
};