"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: FocusCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const cardContent = (
      <>
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-100 md:opacity-0"
          )}
        >
          <div className="text-sm md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </>
    );

    const className = cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-44 md:h-96 w-full transition-all duration-300 ease-out block",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      card.link && "cursor-pointer"
    );

    if (card.link) {
      return (
        <a
          href={card.link}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={className}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={className}
      >
        {cardContent}
      </div>
    );
  }
);

Card.displayName = "Card";

type FocusCard = {
  title: string;
  src: string;
  link?: string;
};

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
