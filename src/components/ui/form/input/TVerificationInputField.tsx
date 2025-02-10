import * as React from "react";
import { Input } from "./input";
import CheckIcon from "@/svgs/CheckIcon";
import RefreshIcon from "@/svgs/RefreshIcon";
import CrossCheckIcon from "@/svgs/CrossCheckIcon";

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
        return <RefreshIcon className="h-7 w-7 animate-spin text-yellow-300" />;
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
    <div className="w-full space-y-4">
      <div className="relative ">
        <Input
          id={id}
          error={error}
          errorMessage="Please enter a valid phone number."
          className="flex-1 pr-22 "
          type="text"
          placeholder={placeholder || "Enter phone number"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />

        <div
          className={`absolute right-4 top-3 flex items-center cursor-pointer flex space-x-1 p-3 px-4 rounded-3xl ${
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
    </div>
  );
};

export { VerificationInputField };
