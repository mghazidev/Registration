import { useQuery } from "@tanstack/react-query";
import { fetchCountryCodes } from "@/services/countryCodes";
import { CountryCode } from "../types/phoneInput";

export const useCountryCodes = () => {
  const { data, isLoading, error } = useQuery<CountryCode[], Error>({
    queryKey: ["countryCodes"], // Unique key for the query
    queryFn: fetchCountryCodes, // Function to fetch data
    staleTime: Infinity, // Cache the data indefinitely
  });

  return {
    countryCodes: data || [],
    loading: isLoading,
    error: error?.message || null,
  };
};
