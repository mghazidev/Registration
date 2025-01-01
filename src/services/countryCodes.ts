import { CountryCode } from "@/modules/authentication/types/phoneInput";
export const fetchCountryCodes = async (): Promise<CountryCode[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) {
    throw new Error("Failed to fetch country codes");
  }

  const data = await response.json();

  return data
    .filter((country: any) => country.idd?.root && country.idd?.suffixes)
    .map((country: any, index: number) => ({
      key: index,
      code: country.idd.root + (country.idd.suffixes[0] || ""),
      flag: country.flags.svg,
      spellingCode: country.cca2,
    }));
};
