"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ActiveFilters({
  filters,
  onRemove,
}: {
  filters: Record<string, string>;
  onRemove: (key: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {Object.entries(filters)
        .filter(([, v]) => v)
        .map(([key, value]) => (
          <Badge
            key={key}
            variant="secondary"
            className="flex items-center gap-1 px-3 py-1 rounded-full"
          >
            {value}
            <button onClick={() => onRemove(key)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
    </div>
  );
}
