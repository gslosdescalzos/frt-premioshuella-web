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
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#c62519" />
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#009aa8" />

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
              href="https://www.instagram.com/gslosdescalzos/"
              className="text-neutral-400 hover:text-huella-400 transition-colors shrink-0"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@scoutslosdescalzos7688"
              className="text-neutral-400 hover:text-huella-400 transition-colors shrink-0"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@gslosdescalzos"
              className="text-neutral-400 hover:text-huella-400 transition-colors shrink-0"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" shapeRendering="geometricPrecision">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </div>
  );
};
