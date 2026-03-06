import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { ErrorModal } from "./ErrorModal";

const inputClasses =
  "w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow text-sm";

const SUCCESS_REDIRECT_DELAY_MS = 1500;

export const UpdatePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const emailParam = new URLSearchParams(window.location.search).get("email")?.trim() ?? "";

    if (!emailParam) {
      window.location.replace("/");
      return;
    }

    setEmail(emailParam);
  }, []);

  useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      window.location.replace("/");
    }, SUCCESS_REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [successMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorModalOpen(false);

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      setErrorModalOpen(true);
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setSuccessMessage("Contraseña actualizada correctamente");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error inesperado";
      setErrorMessage(message);
      setErrorModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  if (!email) {
    return null;
  }

  if (successMessage) {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
          {successMessage}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Redirigiendo al inicio...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Introduce tu nueva contraseña para {email}.
      </p>

      <div>
        <input
          type="password"
          required
          minLength={6}
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <input
          type="password"
          required
          minLength={6}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        {loading ? "Actualizando..." : "Actualizar contraseña"}
      </button>
    </form>
  );
};
