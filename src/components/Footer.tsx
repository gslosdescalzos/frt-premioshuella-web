import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-huella-600 dark:text-huella-400 mb-4">
              Premios Huella
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              De scouts, para scout, valorando el esfuerzo incansable para dejar este mundo mejor de como lo encontramos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#los-premios"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                >
                  Los Premios
                </a>
              </li>
              <li>
                <a
                  href="/#categorias"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                >
                  Categorías
                </a>
              </li>
              <li>
                <a
                  href="/#colabora"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                >
                  Colabora
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gslosdescalzos/"
                className="text-neutral-500 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@scoutslosdescalzos7688"
                className="text-neutral-500 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@gslosdescalzos"
                className="text-neutral-500 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} Grupo Scout San Juan Bautista de Los Descalzos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
