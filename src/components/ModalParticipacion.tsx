import React from "react";
import { ModalProvider, ModalBody, ModalContent } from "./ui/animated-modal";

interface ModalParticipacionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryName: string;
  categorySlug: string;
  isScoutCategory: boolean;
}

export const ModalParticipacion = ({
  open,
  onOpenChange,
  categoryName,
  categorySlug,
  isScoutCategory,
}: ModalParticipacionProps) => {
  const isLoggedIn = false;

  const handleConfirm = () => {
    onOpenChange(false);
    window.location.href = `/categorias/${categorySlug}/participar`;
  };

  return (
    <ModalProvider open={open} onOpenChange={onOpenChange}>
      <ModalBody className="max-w-xl">
        <ModalContent>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            {categoryName}
          </h3>

          <div className="text-neutral-600 dark:text-neutral-400 mb-8 space-y-4">
            {isScoutCategory && (
              <p>
                La participación a esta categoría está limitada para grupos
                Scouts de MSC o de ASDE, en caso de no pertenecer a ningún
                grupo, indíquelo en el siguiente formulario.
              </p>
            )}
            {!isLoggedIn && (
              <p>Debes de registrarte en la página para poder participar.</p>
            )}
          </div>

          <button
            onClick={handleConfirm}
            className="w-full py-3 px-6 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold transition-colors uppercase tracking-wider"
          >
            Confirmar
          </button>
        </ModalContent>
      </ModalBody>
    </ModalProvider>
  );
};
