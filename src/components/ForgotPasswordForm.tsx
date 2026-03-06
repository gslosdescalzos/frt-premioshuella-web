import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { ErrorModal } from "./ErrorModal";

const inputClasses =
  "w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow text-sm";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorModalOpen(false);
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password?email=${encodeURIComponent(email)}`,
      });
      if (error) throw error;
      setSent(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error inesperado";
      setErrorMessage(message);
      setErrorModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-huella-100 dark:bg-huella-900/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-huella-600 dark:text-huella-400">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <p className="text-sm font-medium text-huella-600 dark:text-huella-400 mb-2">
          Revisa tu correo electrónico
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Si existe una cuenta con ese email, recibirás un enlace para restablecer tu contraseña.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Introduce tu email y te enviaremos un enlace para restablecer tu contraseña.
      </p>

      <div>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>

      <ErrorModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        message={errorMessage}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2.5 text-sm font-medium rounded-xl bg-huella-600 text-white hover:bg-huella-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Enviando..." : "Enviar enlace"}
      </button>

      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
        <a
          href="/"
          className="text-huella-600 dark:text-huella-400 hover:underline font-medium"
        >
          Volver al inicio
        </a>
      </p>
    </form>
  );
};
