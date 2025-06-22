import React from "react";
import { cn } from "@/lib/utils";

export function GameButton({
  label,
  icon: Icon,
  color,
  onClick,
}: {
  label: string;
  icon: React.ElementType;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center rounded-xl py-6 px-2 font-semibold text-lg shadow-lg hover:scale-105 transition w-full h-32",
        color
      )}
      onClick={onClick}
      data-testid={`game-btn-${label.toLowerCase().replace(/ /g, "-")}`}
    >
      <Icon className="w-8 h-8 mb-2" />
      {label}
    </button>
  );
}
