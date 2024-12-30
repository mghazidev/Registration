import * as React from "react";
import { TInputField } from "../input/TInputField";
import CheckIcon from "@/svgs/CheckIcon";
import RefreshIcon from "@/svgs/RefreshIcon";
import CrossCheckIcon from "@/svgs/CrossCheckIcon";
import WarningIcon from "@/svgs/WarningIcon";

interface VerificationInputFieldProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  verificationStatus: "verified" | "not_verified" | "loading" | "idle";
  disabled?: boolean;
  error?: boolean;
  onVerifyClick: () => void;
}

const VerificationInputField: React.FC<VerificationInputFieldProps> = ({
  id,
  placeholder,
  value,
  onChange,
  verificationStatus,
  disabled = false,
  error = false,
  onVerifyClick,
}) => {
  const getStatusIcon = () => {
    switch (verificationStatus) {
      case "verified":
        return <CheckIcon className="h-7 w-7 text-green-500" />;
      case "not_verified":
        return <CrossCheckIcon className="h-7 w-7 text-red-800" />;
      case "loading":
        return <RefreshIcon className="h-7 w-7 animate-spin text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    if (verificationStatus === "idle") {
      return null;
    }
    if (verificationStatus === "loading") {
      return (
        <span className="text-functional-100 body-3-medium">Loading...</span>
      );
    }
    return verificationStatus === "verified" ? (
      <span className="text-functional-100 body-3-medium">Verified</span>
    ) : (
      <span className="text-functional-100 body-3-medium">Not Verified</span>
    );
  };

  return (
    <div className="w-full space-y-2">
      <div className="relative flex items-center">
        <TInputField
          id={id}
          className={`flex-1 pr-22 focus-visible:ring-1 border-none ring-1 shadow-none ${
            error
              ? "ring-red-800 focus-visible:ring-red-800"
              : "ring-functional-500 focus-visible:ring-functional-500"
          }`}
          type="text"
          placeholder={placeholder || "Enter phone number"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />

        <div
          className={`absolute right-3 cursor-pointer flex items-center space-x-1 p-3 px-4 rounded-3xl ${
            verificationStatus === "verified"
              ? "bg-green-100"
              : verificationStatus === "not_verified"
              ? "bg-red-100"
              : verificationStatus === "loading"
              ? "bg-yellow-100"
              : ""
          }`}
          onClick={onVerifyClick}
        >
          {getStatusIcon()}
          {getStatusText()}
        </div>
      </div>

      {error && verificationStatus !== "idle" && (
        <div className="flex gap-2">
          <WarningIcon className="h-7 w-7 text-red-800" />
          <p className="text-red-800 body-3-regular mt-1">
            Please enter a valid phone number.
          </p>
        </div>
      )}
    </div>
  );
};

export { VerificationInputField };
