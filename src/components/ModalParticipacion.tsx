import React from "react";
import { isAuthenticated } from "@/lib/api";
import { AuthModal } from "./AuthModal";
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
  const [authModalOpen, setAuthModalOpen] = React.useState(false);

  const destination = `/categorias/${categorySlug}/participar`;

  const handleConfirm = async () => {
    const loggedIn = await isAuthenticated();

    if (!loggedIn) {
      onOpenChange(false);
      setAuthModalOpen(true);
      return;
    }

    onOpenChange(false);
    window.location.href = destination;
  };

  return (
    <>
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
                  Scouts de MSC o de ASDE. Si no perteneces a ningún grupo,
                  indícalo en el siguiente formulario.
                </p>
              )}
              <p>
                Si todavía no has iniciado sesión, te pediremos acceso antes de
                continuar con el formulario.
              </p>
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

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        title="Inicia sesión para participar"
        description="Necesitas una cuenta para enviar una participación en esta categoría."
        onSuccess={() => {
          window.location.href = destination;
        }}
      />
    </>
  );
};
