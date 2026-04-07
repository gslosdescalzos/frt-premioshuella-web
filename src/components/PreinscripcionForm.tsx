import { getCategories, isAuthenticated, submitPreinscription, type CategoryDTO } from "@/lib/api";
import { categories, SCOUT_GROUPS } from "@/lib/categories";
import { supabase } from "@/lib/supabase";
import { useEffect, useMemo, useState } from "react";
import { AuthModal } from "./AuthModal";
import { ErrorModal } from "./ErrorModal";

const inputClasses =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-shadow focus:border-transparent focus:ring-2 focus:ring-huella-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white";

type FieldErrors = {
  isScoutGroup?: string;
  scoutGroup?: string;
  username?: string;
  surname?: string;
  categories?: string;
};

function getDisplayName(category: CategoryDTO): string {
  const frontendCategory = categories[category.name];
  return frontendCategory?.name ?? category.name;
}

export const PreinscripcionForm = () => {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isScoutGroup, setIsScoutGroup] = useState<boolean | null>(null);
  const [scoutGroup, setScoutGroup] = useState("");
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [availableCategories, setAvailableCategories] = useState<CategoryDTO[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    isAuthenticated().then(setLoggedIn);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(session !== null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoadingCategories(true);
      const result = await getCategories();

      if (result.error || !result.data) {
        setErrorMessage(result.error || "No se pudieron cargar las categorías");
        setErrorModalOpen(true);
        setIsLoadingCategories(false);
        return;
      }

      const orderMap = new Map(Object.keys(categories).map((slug, index) => [slug, index]));
      const sortedCategories = [...result.data].sort(
        (left, right) =>
          (orderMap.get(left.name) ?? Number.MAX_SAFE_INTEGER) -
          (orderMap.get(right.name) ?? Number.MAX_SAFE_INTEGER)
      );

      setAvailableCategories(sortedCategories);
      setIsLoadingCategories(false);
    };

    loadCategories();
  }, []);

  const allSelected = useMemo(() => {
    return availableCategories.length > 0 && selectedCategoryIds.length === availableCategories.length;
  }, [availableCategories.length, selectedCategoryIds.length]);

  const toggleCategory = (categoryId: number) => {
    setSelectedCategoryIds((current) => {
      if (current.includes(categoryId)) {
        return current.filter((id) => id !== categoryId);
      }

      return [...current, categoryId];
    });
    setFieldErrors((current) => ({ ...current, categories: undefined }));
  };

  const handleSelectAll = () => {
    setSelectedCategoryIds(
      allSelected ? [] : availableCategories.map((category) => category.id)
    );
    setFieldErrors((current) => ({ ...current, categories: undefined }));
  };

  const validateForm = () => {
    const nextErrors: FieldErrors = {};

    if (isScoutGroup === null) {
      nextErrors.isScoutGroup = "Debes indicar si participas como grupo scout o no";
    }

    if (isScoutGroup === true && !scoutGroup.trim()) {
      nextErrors.scoutGroup = "Debes seleccionar un grupo scout";
    }

    if (isScoutGroup === false && !username.trim()) {
      nextErrors.username = "Debes indicar tu nombre";
    }

    if (isScoutGroup === false && !surname.trim()) {
      nextErrors.surname = "Debes indicar tus apellidos";
    }

    if (selectedCategoryIds.length === 0) {
      nextErrors.categories = "Debes seleccionar al menos una categoría";
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorModalOpen(false);

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      username: isScoutGroup ? scoutGroup : username.trim(),
      surname: isScoutGroup ? null : surname.trim(),
      categories: [...selectedCategoryIds].sort((left, right) => left - right),
      is_scout_group: Boolean(isScoutGroup),
    };

    const result = await submitPreinscription(payload);

    if (result.error) {
      setErrorMessage(result.error);
      setErrorModalOpen(true);
      setIsSubmitting(false);
      return;
    }

    setSuccess(true);
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="py-16 text-center">
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
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
          ¡Preinscripción enviada!
        </h3>
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Hemos guardado tu interés y tus categorías. Gracias por ayudarnos a organizar mejor el evento.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-700"
        >
          Volver al inicio
        </a>
      </div>
    );
  }

  if (loggedIn === null || isLoadingCategories) {
    return (
      <div className="py-16 text-center">
        <p className="text-neutral-500 dark:text-neutral-400">Cargando...</p>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <>
        <div className="mx-auto max-w-sm py-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
            Inicia sesión para preinscribirte
          </h3>
          <p className="mb-8 text-neutral-600 dark:text-neutral-400">
            Necesitas una cuenta para completar la preinscripción al concurso.
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
          title="Inicia sesión para preinscribirte"
          description="Necesitas una cuenta para completar la preinscripción al concurso."
        />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
            ¿Participas como grupo scout?
          </h3>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => {
                setIsScoutGroup(true);
                setUsername("");
                setSurname("");
                setFieldErrors((current) => ({
                  ...current,
                  isScoutGroup: undefined,
                  username: undefined,
                  surname: undefined,
                }));
              }}
              className={`rounded-xl px-8 py-3 text-lg font-semibold transition-colors ${
                isScoutGroup === true
                  ? "bg-accent-600 text-white hover:bg-accent-700"
                  : "border-2 border-neutral-300 text-neutral-700 hover:border-accent-500 dark:border-neutral-600 dark:text-neutral-300"
              }`}
            >
              Sí
            </button>
            <button
              type="button"
              onClick={() => {
                setIsScoutGroup(false);
                setScoutGroup("");
                setFieldErrors((current) => ({
                  ...current,
                  isScoutGroup: undefined,
                  scoutGroup: undefined,
                }));
              }}
              className={`rounded-xl px-8 py-3 text-lg font-semibold transition-colors ${
                isScoutGroup === false
                  ? "bg-accent-600 text-white hover:bg-accent-700"
                  : "border-2 border-neutral-300 text-neutral-700 hover:border-accent-500 dark:border-neutral-600 dark:text-neutral-300"
              }`}
            >
              No
            </button>
          </div>
          {fieldErrors.isScoutGroup && (
            <p className="mt-2 text-sm text-red-500">{fieldErrors.isScoutGroup}</p>
          )}
        </div>

        {isScoutGroup === true && (
          <div>
            <label
              htmlFor="scout-group"
              className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Grupo Scout <span className="text-red-500">*</span>
            </label>
            <select
              id="scout-group"
              value={scoutGroup}
              onChange={(event) => {
                setScoutGroup(event.target.value);
                setFieldErrors((current) => ({ ...current, scoutGroup: undefined }));
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
        )}

        {isScoutGroup === false && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                  setFieldErrors((current) => ({ ...current, username: undefined }));
                }}
                className={`${inputClasses} ${fieldErrors.username ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {fieldErrors.username && (
                <p className="mt-1 text-sm text-red-500">{fieldErrors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Apellidos <span className="text-red-500">*</span>
              </label>
              <input
                id="surname"
                type="text"
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                  setFieldErrors((current) => ({ ...current, surname: undefined }));
                }}
                className={`${inputClasses} ${fieldErrors.surname ? "border-red-500 dark:border-red-500" : ""}`}
              />
              {fieldErrors.surname && (
                <p className="mt-1 text-sm text-red-500">{fieldErrors.surname}</p>
              )}
            </div>
          </div>
        )}

        <div>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Categorías de interés
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Puedes elegir varias categorías para indicarnos en cuáles te gustaría participar.
              </p>
            </div>

            <label className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                className="h-4 w-4 rounded border-neutral-300 text-huella-600 focus:ring-huella-500"
              />
              Seleccionar todas
            </label>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {availableCategories.map((category) => {
              const isSelected = selectedCategoryIds.includes(category.id);

              return (
                <label
                  key={category.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors ${
                    isSelected
                      ? "border-huella-500 bg-huella-50 dark:border-huella-400 dark:bg-huella-900/20"
                      : "border-neutral-200 bg-white hover:border-huella-300 dark:border-neutral-800 dark:bg-neutral-900"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCategory(category.id)}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-huella-600 focus:ring-huella-500"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {getDisplayName(category)}
                    </p>
                    {category.description && (
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {category.description}
                      </p>
                    )}
                  </div>
                </label>
              );
            })}
          </div>

          {fieldErrors.categories && (
            <p className="mt-2 text-sm text-red-500">{fieldErrors.categories}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-huella-600 px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:bg-huella-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Enviando..." : "Enviar preinscripción"}
          </button>
        </div>
      </form>

      <ErrorModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        message={errorMessage}
      />
    </>
  );
};