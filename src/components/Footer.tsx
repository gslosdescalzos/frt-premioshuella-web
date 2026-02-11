import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-huella-600 dark:text-huella-400 mb-4">
              Premios Huella
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Reconociendo la sostenibilidad y el impacto positivo en nuestra comunidad.
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
                href="#"
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
                href="#"
                className="text-neutral-500 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-huella-600 dark:hover:text-huella-400 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} Premios Huella. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
