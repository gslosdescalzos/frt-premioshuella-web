import { FocusCards } from "./ui/focus-cards";

const categories = [
  { title: "Foto scout", src: "https://images.unsplash.com/photo-1725759680739-d301ed52685b?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/foto-scout" },
  { title: "Videoclip musical original", src: "https://images.unsplash.com/photo-1600395450575-2d6988b92a02?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/videoclip-musical-original" },
  { title: "Deportista scout", src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/deportista-scout" },
  { title: "Construccion scout", src: "https://images.unsplash.com/photo-1738697216306-44f95e6c7746?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/construccion-scout" },
  { title: "Simbología scout", src: "https://images.unsplash.com/photo-1629117028594-8e3a330ec6cf?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/simbologia-scout" },
  { title: "Habilidades de pionerismo", src: "https://images.unsplash.com/photo-1743194461586-b561a50cac5e?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/habilidades-pionerismo" },
  { title: "Artista scout", src: "https://images.unsplash.com/photo-1698340311456-77454d0abdc7?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/artista-scout" },
  { title: "Emprendimiento joven", src: "https://images.unsplash.com/photo-1603347778445-0bdda67cc5fd?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/emprendimiento-joven" },
  { title: "Representación cultural jerezana", src: "https://images.unsplash.com/photo-1563453738689-d0ada745b7ab?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/categorias/representacion-cultural-jerezana" },
  { title: "Acción social", src: "images/volunteer.webp", link: "/categorias/accion-social" },
  { title: "Grupo del año", src: "images/group.webp", link: "/categorias/grupo-del-ano" },
  { title: "Scout del año", src: "images/scout.webp", link: "/categorias/scout-del-ano" },
];

export const CategoriasGrid = () => {
  return (
    <section id="categorias" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Categorías
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Descubre las diferentes categorías en las que puedes participar y dejar tu huella.
          </p>
        </div>

        <FocusCards cards={categories} />
      </div>
    </section>
  );
};
