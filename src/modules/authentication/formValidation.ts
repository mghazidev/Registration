import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const phoneSchema = z.object({
  phone: z.object({
    countryCode: z.string().min(1, "Country code is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
  }),
});

export const basicInfoSchema = z.object({
  country: z.string().min(1, "Country is required"),
  brand: z.string().min(1, "Brand is required"),
  email: z.string().email("Invalid email address"),
});

export const businessRevenueSchema = z.object({
  yearlyRevenue: z.string().min(1, "Please select a revenue option"),
});
