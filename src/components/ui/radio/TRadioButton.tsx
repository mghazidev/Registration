import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <label
          htmlFor={props.id}
          className={cn("group cursor-pointer flex items-center gap-4 my-2")}
        >
          <input
            ref={ref}
            type="radio"
            id={props.id}
            className={cn("peer hidden", className)}
            {...props}
          />
          <span
            className={cn(
              "inline-block h-7 w-7 rounded-max ring-1 ring-functional-500",
              "peer-checked:border-white peer-checked:border-[7px] peer-checked:bg-brand-50 peer-checked:ring-brand-50",
              error && "ring-red-800"
            )}
          />
          <span
            className={cn(
              "body-1-medium text-functional-500",
              "peer-disabled:cursor-not-allowed peer-checked:text-functional-100 peer-disabled:opacity-50",
              error && "text-red-800"
            )}
          >
            {label}
          </span>
        </label>
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";

export { RadioButton };
