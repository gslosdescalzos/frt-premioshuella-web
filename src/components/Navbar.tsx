import React, { useState } from "react";
import { FloatingNavbar } from "./ui/floating-navbar";
import { ThemeToggle } from "./ThemeToggle";
import { ModalNewsletter } from "./ModalNewsletter";

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
          <a href="/" className="text-xl font-bold text-huella-600 dark:text-huella-400">
            Premios Huella
          </a>
        }
        rightElement={<ThemeToggle />}
      />
      <ModalNewsletter open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </>
  );
};
