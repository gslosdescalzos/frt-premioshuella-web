import { ModalProvider, ModalBody, ModalContent } from "./ui/animated-modal";

interface ErrorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
}

export const ErrorModal = ({
  open,
  onOpenChange,
  message,
}: ErrorModalProps) => {
  return (
    <ModalProvider open={open} onOpenChange={onOpenChange}>
      <ModalBody className="max-w-xl">
        <ModalContent>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Error
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            {message}
          </p>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="w-full py-3 px-6 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold transition-colors uppercase tracking-wider"
          >
            Aceptar
          </button>
        </ModalContent>
      </ModalBody>
    </ModalProvider>
  );
};
