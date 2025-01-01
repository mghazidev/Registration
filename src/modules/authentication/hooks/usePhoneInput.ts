import { useState, useCallback, useEffect, useMemo } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useCountryCodes } from "@/modules/authentication/hooks/useCountryCodes";

export const usePhoneInput = (
  value: { phoneNumber: string; countryCode: string },
  onChange: (value: any) => void
) => {
  const { countryCodes, loading, error } = useCountryCodes();
  const [selectedCountry, setSelectedCountry] = useState(
    value.countryCode || "+966"
  );
  const [validationError, setValidationError] = useState("");

  const sortedCountryCodes = useMemo(() => {
    return countryCodes.slice().sort((a, b) => {
      const countryCodeA = parseInt(a.code.replace(/\D/g, ""), 10);
      const countryCodeB = parseInt(b.code.replace(/\D/g, ""), 10);
      return countryCodeA - countryCodeB;
    });
  }, [countryCodes]);

  useEffect(() => {
    if (countryCodes.length > 0) {
      setSelectedCountry(value.countryCode || countryCodes[0].code);
    }
  }, [countryCodes, value.countryCode]);

  const handleCountryChange = useCallback(
    (code: string) => {
      setSelectedCountry(code);
      onChange({ ...value, countryCode: code });
      setValidationError("");
    },
    [onChange, value]
  );

  const validatePhoneNumber = useCallback(
    (phoneNumber: string, spellingCode: any) => {
      try {
        const parsedNumber = parsePhoneNumberFromString(
          phoneNumber,
          spellingCode
        );
        return parsedNumber?.isValid() || false;
      } catch {
        return false;
      }
    },
    []
  );

  const handlePhoneNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPhoneNumber = e.target.value;
      const country = countryCodes.find((c) => c.code === selectedCountry);
      const spellingCode = country?.spellingCode || "";
      if (/[^0-9]/.test(newPhoneNumber)) {
        return;
      }
      if (newPhoneNumber === "") {
        setValidationError("");
      } else if (!validatePhoneNumber(newPhoneNumber, spellingCode)) {
        setValidationError("Please enter a correct phone number format.");
      } else {
        setValidationError("");
      }

      onChange({ ...value, phoneNumber: newPhoneNumber });
    },
    [onChange, value, selectedCountry, validatePhoneNumber, countryCodes]
  );

  return {
    countryCodes: sortedCountryCodes,
    selectedCountry,
    validationError,
    handleCountryChange,
    handlePhoneNumberChange,
    error,
  };
};
