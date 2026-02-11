import React, { useState } from "react";
import { ModalProvider, ModalBody, ModalContent } from "./ui/animated-modal";
import { subscribeNewsletter } from "@/lib/api";

interface ModalNewsletterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ModalNewsletter = ({ open, onOpenChange }: ModalNewsletterProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await subscribeNewsletter({ email });

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
      setEmail("");
      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    }
  };

  return (
    <ModalProvider open={open} onOpenChange={onOpenChange}>
      <ModalBody>
        <ModalContent>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Newsletter
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Suscríbete para recibir las últimas novedades de los Premios Huella.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="newsletter-email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="newsletter-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 rounded-xl bg-huella-600 hover:bg-huella-700 disabled:bg-huella-400 text-white font-semibold transition-colors uppercase tracking-wider"
            >
              {status === "loading" ? "Enviando..." : "Subscribirme"}
            </button>

            {status === "success" && (
              <p className="text-center text-huella-600 dark:text-huella-400 font-medium">
                ¡Suscripción realizada con éxito!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500 font-medium">{errorMessage}</p>
            )}
          </form>
        </ModalContent>
      </ModalBody>
    </ModalProvider>
  );
};
