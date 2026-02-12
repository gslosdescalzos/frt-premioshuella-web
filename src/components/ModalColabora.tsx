import React, { useState } from "react";
import { ModalProvider, ModalBody, ModalContent } from "./ui/animated-modal";
import { submitColabora } from "@/lib/api";

interface ModalColaboraProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ModalColabora = ({ open, onOpenChange }: ModalColaboraProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    comentarios: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitColabora(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
      setFormData({ nombre: "", apellidos: "", email: "", telefono: "", comentarios: "" });
      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow";

  return (
    <ModalProvider open={open} onOpenChange={onOpenChange}>
      <ModalBody className="max-w-xl">
        <ModalContent>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Colabora
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Rellena el formulario y nos pondremos en contacto contigo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="colabora-nombre"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="colabora-nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="colabora-apellidos"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="colabora-apellidos"
                  required
                  value={formData.apellidos}
                  onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="colabora-email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="colabora-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="colabora-telefono"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="colabora-telefono"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="colabora-comentarios"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Comentarios
              </label>
              <textarea
                id="colabora-comentarios"
                rows={4}
                value={formData.comentarios}
                onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 rounded-xl bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white font-semibold transition-colors uppercase tracking-wider"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && (
              <p className="text-center text-huella-600 dark:text-huella-400 font-medium">
                ¡Formulario enviado correctamente!
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
