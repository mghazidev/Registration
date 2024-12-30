import React from "react";

export const usePhoneNumberFormat = (initialValue: string) => {
  const [formattedNumber, setFormattedNumber] = React.useState(initialValue);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, ""); // Extract only numbers
    let formatted = "+966"; // Start with country code

    if (digits.length > 1) {
      formatted += ` ${digits.slice(1, 4)}`; // Add first group
    }
    if (digits.length > 4) {
      formatted += ` ${digits.slice(4, 7)}`; // Add second group
    }
    if (digits.length > 7) {
      formatted += `-${digits.slice(7, 9)}`; // Add third group
    }

    setFormattedNumber(formatted);
  };

  return {
    formattedNumber,
    formatPhoneNumber,
  };
};
