import { getCategoryByName, isAuthenticated, submitParticipation } from "@/lib/api";
import { SCOUT_GROUPS } from "@/lib/categories";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { AuthModal } from "./AuthModal";
import { ErrorModal } from "./ErrorModal";
import { FileUpload } from "./ui/file-upload";
import { StatefulButton } from "./ui/stateful-button";

interface ParticipationFormProps {
  categoryName: string;
}

const inputClasses =
  "w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow";

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) return false;
  if (digits.length === 9 && !/^[6789]/.test(digits)) return false;
  return true;
}

export const ParticipationForm = ({ categoryName }: ParticipationFormProps) => {
  const [isScout, setIsScout] = useState<boolean | null>(null);
  const [scoutGroup, setScoutGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participantSurname, setParticipantSurname] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    phone?: string;
    description?: string;
    files?: string;
    scoutGroup?: string;
  }>({});
  const [success, setSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    isAuthenticated().then(setLoggedIn);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(session !== null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async () => {
    setErrorModalOpen(false);
    setFieldErrors({});

    if (!isValidPhone(phone)) {
      setFieldErrors((e) => ({
        ...e,
        phone: "Introduce un teléfono válido (9 dígitos, ej. 612345678)",
      }));
      throw new Error("Invalid phone");
    }

    if (!description.trim()) {
      setFieldErrors((e) => ({
        ...e,
        description: "La descripción es obligatoria",
      }));
      throw new Error("Description required");
    }

    if (files.length === 0) {
      setFieldErrors((e) => ({
        ...e,
        files: "Debes subir al menos un archivo",
      }));
      throw new Error("Files required");
    }

    if (isScout && !scoutGroup.trim()) {
      setFieldErrors((e) => ({
        ...e,
        scoutGroup: "Debes seleccionar un grupo Scout",
      }));
      throw new Error("Scout group required");
    }

    const categoryResult = await getCategoryByName(categoryName);
    if (categoryResult.error || !categoryResult.data?.length) {
      setErrorMessage(categoryResult.error || "No se encontró la categoría");
      setErrorModalOpen(true);
      throw new Error("Category not found");
    }

    const categoryId = categoryResult.data[0].id;

    const formData: Record<string, string> = {
      is_scout: String(isScout),
      phone,
      comments: description,
    };

    if (isScout) {
      formData.scout_group = scoutGroup;
    } else {
      formData.participant_name = participantName;
      formData.participant_surname = participantSurname;
    }

    setUploadProgress(0);
    try {
      const result = await submitParticipation(categoryId, formData, files, (p) =>
        setUploadProgress(p)
      );

      if (result.error) {
        setErrorMessage(
          result.error.includes("401")
            ? "Tu sesión ha expirado. Inicia sesión de nuevo para participar."
            : result.error
        );
        setErrorModalOpen(true);
        throw new Error(result.error);
      }

      setSuccess(true);
    } finally {
      setUploadProgress(null);
    }
  };

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-huella-100 dark:bg-huella-900/50">
          <svg
            className="h-10 w-10 text-huella-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          ¡Participación enviada!
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Tu participación ha sido registrada correctamente.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold uppercase tracking-wider bg-accent-600 hover:bg-accent-700 transition-colors"
        >
          Volver a categorías
        </a>
      </div>
    );
  }

  if (loggedIn === null) {
    return (
      <div className="text-center py-16">
        <p className="text-neutral-500 dark:text-neutral-400">Cargando...</p>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <>
        <div className="max-w-sm mx-auto py-16 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Inicia sesión para participar
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Necesitas una cuenta para enviar tu participación.
          </p>
          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-huella-600 px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-huella-700"
          >
            Iniciar sesión
          </button>
        </div>

        <AuthModal
          open={authModalOpen}
          onOpenChange={setAuthModalOpen}
          title="Inicia sesión para participar"
          description="Necesitas una cuenta para enviar tu participación."
        />
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {isScout === null ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            ¿Perteneces a un grupo Scout?
          </h3>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setIsScout(true)}
              className="px-12 py-4 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold transition-colors text-lg"
            >
              Sí
            </button>
            <button
              onClick={() => setIsScout(false)}
              className="px-12 py-4 rounded-xl border-2 border-neutral-300 dark:border-neutral-600 hover:border-accent-500 text-neutral-700 dark:text-neutral-300 font-semibold transition-colors text-lg"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {isScout ? "Formulario Scout" : "Formulario participante"}
            </span>
            <button
              type="button"
              onClick={() => setIsScout(null)}
              className="text-sm text-accent-600 hover:text-accent-700 font-medium"
            >
              Cambiar
            </button>
          </div>

          {isScout ? (
            <div>
              <label
                htmlFor="scout-group"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Grupo Scout <span className="text-red-500">*</span>
              </label>
              <select
                id="scout-group"
                required
                value={scoutGroup}
                onChange={(e) => {
                  setScoutGroup(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, scoutGroup: undefined }));
                }}
                className={`${inputClasses} ${fieldErrors.scoutGroup ? "border-red-500 dark:border-red-500" : ""}`}
              >
                <option value="">Selecciona tu grupo</option>
                {SCOUT_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              {fieldErrors.scoutGroup && (
                <p className="mt-1 text-sm text-red-500">{fieldErrors.scoutGroup}</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="participant-name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="participant-name"
                  required
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="participant-surname"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="participant-surname"
                  required
                  value={participantSurname}
                  onChange={(e) => setParticipantSurname(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setFieldErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className={`${inputClasses} ${fieldErrors.phone ? "border-red-500 dark:border-red-500" : ""}`}
              placeholder="612345678"
            />
            {fieldErrors.phone && (
              <p className="mt-1 text-sm text-red-500">{fieldErrors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Descripción de la participación <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              rows={5}
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setFieldErrors((prev) => ({ ...prev, description: undefined }));
              }}
              className={`${inputClasses} resize-none ${fieldErrors.description ? "border-red-500 dark:border-red-500" : ""}`}
            />
            {fieldErrors.description && (
              <p className="mt-1 text-sm text-red-500">{fieldErrors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Archivos <span className="text-red-500">*</span>
            </label>
            <FileUpload
              onChange={(newFiles) => {
                setFiles(newFiles);
                if (newFiles.length > 0) {
                  setFieldErrors((prev) => ({ ...prev, files: undefined }));
                }
              }}
            />
            {fieldErrors.files && (
              <p className="mt-1 text-sm text-red-500">{fieldErrors.files}</p>
            )}
          </div>

          <ErrorModal
            open={errorModalOpen}
            onOpenChange={setErrorModalOpen}
            message={errorMessage}
          />

          {uploadProgress !== null && (
            <div className="space-y-2">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Subiendo archivos... {Math.round(uploadProgress)}%
              </p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div
                  className="h-full rounded-full bg-huella-500 transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          <div className="pt-4">
            <StatefulButton
              type="submit"
              onClick={handleSubmit}
              className="w-full"
            >
              Enviar participación
            </StatefulButton>
          </div>
        </form>
      )}
    </div>
  );
};
