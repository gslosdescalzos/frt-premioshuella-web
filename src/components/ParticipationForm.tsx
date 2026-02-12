import React, { useState } from "react";
import { FileUpload } from "./ui/file-upload";
import { StatefulButton } from "./ui/stateful-button";
import { getCategoryByName, submitParticipation } from "@/lib/api";
import { SCOUT_GROUPS } from "@/lib/categories";

interface ParticipationFormProps {
  categoryName: string;
}

const inputClasses =
  "w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-huella-500 focus:border-transparent outline-none transition-shadow";

export const ParticipationForm = ({ categoryName }: ParticipationFormProps) => {
  const [isScout, setIsScout] = useState<boolean | null>(null);
  const [scoutGroup, setScoutGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participantSurname, setParticipantSurname] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setError("");

    const categoryResult = await getCategoryByName(categoryName);
    if (categoryResult.error || !categoryResult.data?.length) {
      setError(categoryResult.error || "No se encontró la categoría");
      throw new Error("Category not found");
    }

    const categoryId = categoryResult.data[0].id;

    const formData: Record<string, string> = {
      user_id: "1",
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

    const result = await submitParticipation(categoryId, formData, files);

    if (result.error) {
      if (result.error.includes("401")) {
        setError(
          "Debes iniciar sesión para participar. La autenticación estará disponible próximamente."
        );
      } else {
        setError(result.error);
      }
      throw new Error(result.error);
    }

    setSuccess(true);
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
          href="/categorias"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold uppercase tracking-wider bg-accent-600 hover:bg-accent-700 transition-colors"
        >
          Volver a categorías
        </a>
      </div>
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
                Grupo Scout
              </label>
              <select
                id="scout-group"
                required
                value={scoutGroup}
                onChange={(e) => setScoutGroup(e.target.value)}
                className={inputClasses}
              >
                <option value="">Selecciona tu grupo</option>
                {SCOUT_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
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
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              rows={5}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Archivos
            </label>
            <FileUpload onChange={setFiles} />
          </div>

          {error && (
            <p className="text-center text-red-500 font-medium">{error}</p>
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
