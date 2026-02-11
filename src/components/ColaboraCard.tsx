import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { MovingBorderButton } from "./ui/moving-border";

interface ColaboraCardProps {
  title: string;
  description: string;
  gradient: string;
  onColabora: () => void;
}

export const ColaboraCard = ({
  title,
  description,
  gradient,
  onColabora,
}: ColaboraCardProps) => {
  return (
    <WobbleCard containerClassName={`${gradient} min-h-[300px]`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-white/80 leading-relaxed mb-8">
            {description}
          </p>
        </div>
        <div>
          <MovingBorderButton
            onClick={onColabora}
            className="font-bold uppercase tracking-wider"
          >
            Colabora
          </MovingBorderButton>
        </div>
      </div>
    </WobbleCard>
  );
};
