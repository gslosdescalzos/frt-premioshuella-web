export const LogoCloud = () => {
  return (
    <div className="flex flex-row items-center justify-center lg:justify-end gap-6 md:gap-8 mx-10">
      <div className="flex items-center gap-2 md:gap-3">
        <span className="text-sm font-medium text-neutral-400">Organiza</span>
        <img
          src="/images/logos/descalzos-blue.png"
          alt="Grupo Scout Los Descalzos Jerez"
          className="h-14 md:h-16 w-auto max-w-28 md:max-w-36 object-contain"
        />
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <span className="text-sm font-medium text-neutral-400">Colabora</span>
        <img
          src="/images/logos/logo-dele.png"
          alt="Scouts católicos asidonia jerez"
          className="h-14 md:h-16 w-auto max-w-28 md:max-w-36 object-contain"
        />
      </div>
    </div>
  );
};
