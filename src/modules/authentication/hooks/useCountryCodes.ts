import { useQuery } from "@tanstack/react-query";
import { fetchCountryCodes } from "@/services/countryCodes";
import { CountryCode } from "../types/phoneInput";

export const useCountryCodes = () => {
  const { data, isLoading, error } = useQuery<CountryCode[], Error>({
    queryKey: ["countryCodes"],
    queryFn: fetchCountryCodes,
    staleTime: Infinity,
  });

  return {
    countryCodes: data || [],
    loading: isLoading,
    error: error?.message || null,
  };
};
