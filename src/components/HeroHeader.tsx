import { isAuthenticated } from "@/lib/api";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { LogoCloud } from "./LogoCloud";
import { MovingBorderButton } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect } from "./ui/typewritter-efect";

interface HeroHeaderProps {
  title?: string;
  showSocialIcons?: boolean;
}

const spotlightGradientFirst =
  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255,255,255,.18) 0, rgba(0,154,168,.08) 50%, transparent 80%)";
const spotlightGradientSecond =
  "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,.14) 0, rgba(0,154,168,.06) 80%, transparent 100%)";
const spotlightGradientThird =
  "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,.1) 0, rgba(0,154,168,.04) 80%, transparent 100%)";

export const HeroHeader = ({
  title = "Premios Huella",
  showSocialIcons = true,
}: HeroHeaderProps) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  const handlePreinscription = async () => {
    setIsCheckingAuth(true);

    try {
      const loggedIn = await isAuthenticated();

      if (!loggedIn) {
        setAuthModalOpen(true);
        return;
      }

      window.location.href = "/preinscripcion";
    } finally {
      setIsCheckingAuth(false);
    }
  };

  return (
    <div className="relative min-h-fit md:min-h-[80vh] flex flex-col items-center justify-start pt-8 sm:pt-12 md:justify-center md:pt-0 overflow-hidden bg-neutral-950 dark:bg-neutral-950">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mb-2 sm:mb-8 md:mb-24">
        <TypewriterEffect
          words={[
            { text: "Los", className: "text-huella-400" },
            { text: "Descalzos", className: "text-huella-400" },
            { text: "presentan", className: "text-huella-400" },
          ]}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-huella-400 max-w-2xl mx-auto mt-2 sm:mt-6"
          cursorClassName="bg-huella-400 h-3 sm:h-5 md:h-6"
        />
      </div>
      <div className="opacity-30 md:opacity-100">
        <Spotlight
          gradientFirst={spotlightGradientFirst}
          gradientSecond={spotlightGradientSecond}
          gradientThird={spotlightGradientThird}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <TextGenerateEffect
          words={title}
          className="text-[15vw] sm:text-[12vw] md:text-8xl lg:text-9xl font-black text-white leading-[0.9]"
        />

        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto">
          Las buenas acciones que{" "}
          <FlipWords
            words={["dejan marca", "cambian vidas", "hacen un mundo mejor", "construyen"]}
            className="text-huella-400 font-semibold"
          />
        </p>

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
              href="https://www.youtube.com/@gslosdescalzos"
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

      <div className="relative z-20 mt-10 flex justify-center pb-6 md:absolute md:bottom-6 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pb-0">
        <MovingBorderButton
          onClick={handlePreinscription}
          disabled={isCheckingAuth}
          className="font-bold uppercase tracking-wider"
        >
          {isCheckingAuth ? "Comprobando..." : "Preinscribirme"}
        </MovingBorderButton>
      </div>

      <div className="relative z-20 mt-6 flex justify-center pb-6 md:absolute md:bottom-0 md:right-0 md:mt-0 md:justify-end md:pr-6">
        <LogoCloud />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none" />

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        title="Inicia sesión para preinscribirte"
        description="Necesitas una cuenta para completar la preinscripción al concurso."
        onSuccess={() => {
          window.location.href = "/preinscripcion";
        }}
      />
    </div>
  );
};
