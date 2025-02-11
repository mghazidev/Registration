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

export const personalDetailsSchema = z.object({
  isSignatory: z.enum(["yes", "no"], {
    message: "Please select Yes or No",
  }),
  nationalId: z.string().max(10, "National ID must be at least 10 characters"),
  legalSignatoryName: z.string().min(1, "Legal signatory name is required"),
  expiryDate: z
    .string()
    .min(1, "Expiry date is required")
    .regex(
      /^(0[1-9]|1[0-2])\/([0-2][1-9]|3[01])\/\d{4}$/,
      "Expiry date must be in the format MM/DD/YYYY"
    ),
  country: z.string().min(1, "Country of registration is required"),
});
