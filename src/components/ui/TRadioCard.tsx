import * as React from "react";
import { cn } from "@/lib/utils";
import { RadioButton } from "./TRadioButton";

interface RadioCardProps {
  id: string;
  label: string;
  description?: string;
  error?: boolean;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const RadioCard: React.FC<RadioCardProps> = ({
  id,
  label,
  description,
  error,
  value,
  checked,
  disabled = false,
  onChange,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border rounded-m p-4 px-6 gap-4 cursor-pointer my-5 bg-primary-white",
        checked
          ? "border-brand-50 "
          : error
          ? "border-red-800 "
          : "border-functional-500",
        disabled && "cursor-not-allowed opacity-50"
      )}
      onClick={() => !disabled && onChange(value)}
    >
      <div>
        <p
          className={cn(
            "body-1-medium ml-3",
            checked ? "text-functional-100" : "text-functional-500",
            error && "text-red-800"
          )}
        >
          {label}
        </p>
        {description && (
          <p className="body-3-regular ml-3 text-functional-500">
            {description}
          </p>
        )}
      </div>
      <div>
        <RadioButton
          id={`${id}-radio`}
          label=""
          checked={checked}
          disabled={disabled}
          error={error}
          className="peer-checked:ring-2 peer-checked:ring-brand-500"
          onChange={() => !disabled && onChange(value)}
        />
      </div>
    </div>
  );
};

export { RadioCard };
