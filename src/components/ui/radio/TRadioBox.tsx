import * as React from "react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const RadioButton = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        ref={ref}
        className={cn(
          "h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <Circle className="h-3.5 w-3.5 fill-primary" />
      <span className="text-sm">{props["aria-label"]}</span>
    </label>
  );
});

RadioButton.displayName = "RadioButton";

export { RadioButton };
