import React, { useState } from "react";
import { motion } from "motion/react";
import { submitContact } from "@/lib/api";
import { ErrorModal } from "./ErrorModal";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorModalOpen(false);
    setErrorMessage("");

    const result = await submitContact(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
      setErrorModalOpen(true);
    } else {
      setStatus("success");
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Contacto
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              ¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 rounded-xl bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white font-semibold transition-colors"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && (
              <p className="text-center text-huella-600 dark:text-huella-400 font-medium">
                Mensaje enviado correctamente.
              </p>
            )}
            <ErrorModal
              open={errorModalOpen}
              onOpenChange={setErrorModalOpen}
              message={errorMessage}
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};
