import { isOpenCategory } from "@/lib/categories";
import { useState } from "react";
import { ModalParticipacion } from "./ModalParticipacion";
import { MovingBorderButton } from "./ui/moving-border";

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
      <MovingBorderButton
        onClick={() => setModalOpen(true)}
        className="font-bold uppercase tracking-wider"
      >
        Participar
      </MovingBorderButton>

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
