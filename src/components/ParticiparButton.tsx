import { cn } from "@/lib/utils";
import { IconCalendarEvent } from "@tabler/icons-react";

interface ParticiparButtonProps {
  categoryName: string;
  categorySlug: string;
}

export const ParticiparButton = ({}: ParticiparButtonProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border border-huella-200 bg-huella-50 px-6 py-4",
        "text-huella-800 dark:border-huella-800 dark:bg-huella-950 dark:text-huella-200"
      )}
    >
      <IconCalendarEvent className="h-6 w-6 shrink-0" stroke={1.5} />
      <span className="font-medium">
        Las participaciones se abrirán el 23 de febrero
      </span>
    </div>
  );
};
