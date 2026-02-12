import { useState } from "react";
import { ModalNewsletter } from "./ModalNewsletter";
import { ThemeToggle } from "./ThemeToggle";
import { FloatingNavbar } from "./ui/floating-navbar";

export const Navbar = () => {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  const navItems = [
    { name: "Los premios", link: "/#los-premios" },
    { name: "Categorías", link: "/#categorias" },
    { name: "Colabora", link: "/#colabora" },
    { name: "FAQ", link: "/faq" },
    {
      name: "Newsletter",
      link: "#",
      onClick: () => setNewsletterOpen(true),
    },
  ];

  return (
    <>
      <FloatingNavbar
        navItems={navItems}
        logo={
          <a href="/" className="flex items-center">
            <img
              src="/images/logos/logo-white.png"
              alt="Premios Huella"
              className="h-10 w-auto block dark:hidden"
            />
            <img
              src="/images/logos/logo-blue.png"
              alt="Premios Huella"
              className="h-10 w-auto hidden dark:block"
            />
          </a>
        }
        rightElement={<ThemeToggle />}
      />
      <ModalNewsletter open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </>
  );
};
