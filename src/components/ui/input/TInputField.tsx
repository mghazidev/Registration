import * as React from "react";

import { cn } from "@/lib/utils";

const TInputField = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full font-customFustat text-body-1-medium h-11 rounded-m border border-functional-500 bg-transparent px-5 py-6 text-functional-1000 shadow-sm transition-colors placeholder:text-functional-500 focus-visible:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1000 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TInputField.displayName = "TInputField";

export { TInputField };
