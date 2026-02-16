import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EmailAuthForm } from "./EmailAuthForm";

export const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Menú de usuario"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
          </svg>
        </button>
        {open &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            >
              <div
                className="w-full max-w-72 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-700 p-5"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate mb-4">
                  {user.email}
                </p>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full px-4 py-2 text-sm font-medium rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>,
            document.body,
          )}
        {open && (
          <div className="hidden sm:block absolute right-0 top-full mt-2 w-72 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-700 p-5 z-50">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate mb-4">
              {user.email}
            </p>
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-sm font-medium rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 text-sm font-medium rounded-xl bg-huella-600 text-white hover:bg-huella-700 transition-colors"
      >
        Iniciar sesión
      </button>
      {open && (
        <div className="fixed inset-0 z-40 sm:hidden" onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-72 sm:absolute sm:right-0 sm:top-full sm:left-auto sm:translate-x-0 sm:translate-y-0 sm:mt-2 sm:w-72 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-700 p-5 z-50">
          <EmailAuthForm compact onSuccess={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};
