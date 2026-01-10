import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  required,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      required={required}
      placeholder={placeholder}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent",
        "h-7 px-2 py-0.5 text-xs shadow-xs outline-none transition-[color,box-shadow]",
        "file:inline-flex file:h-5 file:border-0 file:bg-transparent file:text-[11px] file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[1.5px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}


export { Input };

