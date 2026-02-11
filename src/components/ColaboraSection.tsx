import React, { useState } from "react";
import { ColaboraCard } from "./ColaboraCard";
import { ModalColabora } from "./ModalColabora";

export const ColaboraSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="colabora" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Colabora
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Forma parte de los Premios Huella como artista o con tu stand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ColaboraCard
            title="Artista"
            description="¿Eres artista y quieres contribuir con tu talento? Participa en los Premios Huella aportando tu creatividad y visión artística a favor de la sostenibilidad."
            gradient="bg-gradient-to-br from-huella-600 to-huella-800"
            onColabora={() => setModalOpen(true)}
          />
          <ColaboraCard
            title="Stand"
            description="¿Tienes una marca o proyecto sostenible? Monta tu stand en el evento de los Premios Huella y conecta con una audiencia comprometida con el medio ambiente."
            gradient="bg-gradient-to-br from-accent-600 to-accent-800"
            onColabora={() => setModalOpen(true)}
          />
        </div>
      </div>

      <ModalColabora open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};
