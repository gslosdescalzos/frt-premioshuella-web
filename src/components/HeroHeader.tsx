import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface HeroHeaderProps {
  title?: string;
  subtitle?: string;
  showSocialIcons?: boolean;
}

export const HeroHeader = ({
  title = "Premios Huella",
  subtitle,
  showSocialIcons = true,
}: HeroHeaderProps) => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950 dark:bg-neutral-950">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#22c55e" />
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#f59e0b" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <TextGenerateEffect
          words={title}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white"
        />

        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {showSocialIcons && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-huella-400 transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-huella-400 transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-huella-400 transition-colors"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-huella-400 transition-colors"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </div>
  );
};
