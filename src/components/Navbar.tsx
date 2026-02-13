import { useState } from "react";
import { ModalNewsletter } from "./ModalNewsletter";
import {
  ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./ui/resizable-navbar";

export const Navbar = () => {
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "LOS PREMIOS", link: "/#los-premios" },
    { name: "CATEGORÍAS", link: "/#categorias" },
    { name: "COLABORA", link: "/#colabora" },
    { name: "FAQ", link: "/faq" },
    {
      name: "NEWSLETTER",
      link: "#",
      onClick: () => {
        setNewsletterOpen(true);
        setMobileMenuOpen(false);
      },
    },
  ];

  const logo = (
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
  );

  return (
    <>
      <ResizableNavbar className="top-0">
        <NavBody>
          <div className="relative z-20 mr-12 flex items-center">{logo}</div>
          <NavItems items={navItems} />
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            {logo}
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-neutral-600 dark:text-neutral-300 hover:text-huella-600 dark:hover:text-huella-400"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
      <ModalNewsletter open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </>
  );
};
