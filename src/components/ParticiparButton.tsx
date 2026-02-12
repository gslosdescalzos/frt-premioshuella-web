import React, { useState } from "react";
import { ModalParticipacion } from "./ModalParticipacion";
import { isOpenCategory } from "@/lib/categories";

interface ParticiparButtonProps {
  categoryName: string;
  categorySlug: string;
}

export const ParticiparButton = ({
  categoryName,
  categorySlug,
}: ParticiparButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isScoutCategory = !isOpenCategory(categorySlug);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold uppercase tracking-wider bg-accent-600 hover:bg-accent-700 transition-colors"
      >
        Participar
      </button>

      <ModalParticipacion
        open={modalOpen}
        onOpenChange={setModalOpen}
        categoryName={categoryName}
        categorySlug={categorySlug}
        isScoutCategory={isScoutCategory}
      />
    </>
  );
};
