import { supabase } from "@/lib/supabase";
import { useEffect, useRef } from "react";
import { EmailAuthForm } from "./EmailAuthForm";
import { ModalBody, ModalContent, ModalProvider } from "./ui/animated-modal";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  onSuccess?: () => void;
}

export const AuthModal = ({
  open,
  onOpenChange,
  title = "Inicia sesión",
  description = "Necesitas una cuenta para continuar.",
  onSuccess,
}: AuthModalProps) => {
  const handledSuccessRef = useRef(false);

  const handleSuccess = () => {
    if (handledSuccessRef.current) return;
    handledSuccessRef.current = true;
    onOpenChange(false);
    onSuccess?.();
  };

  useEffect(() => {
    if (!open) {
      handledSuccessRef.current = false;
    }
  }, [open]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (open && session) {
        handleSuccess();
      }
    });

    return () => subscription.unsubscribe();
  }, [open]);

  return (
    <ModalProvider open={open} onOpenChange={onOpenChange}>
      <ModalBody className="max-w-md">
        <ModalContent>
          <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
            {title}
          </h3>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <EmailAuthForm onSuccess={handleSuccess} />
        </ModalContent>
      </ModalBody>
    </ModalProvider>
  );
};