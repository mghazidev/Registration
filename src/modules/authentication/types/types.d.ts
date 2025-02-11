import { PhoneInputValue } from "./phoneInput";
import {
  basicInfoSchema,
  businessRevenueSchema,
  personalDetailsSchema,
} from "../formValidation";

export type FormProps = {
  email?: string;
  phone: PhoneInputValue;
};

export type SubStep = {
  id: string;
  name: string;
  route: string;
  icon?: any;
};

export type Step = {
  id: string;
  name: string;
  route: string;
  subSteps?: SubStep[];
};

type SideBarStepItemProps = {
  step: Step;
  activeStepId: string;
  completedStepIds: any;
};

export type BasicInfoFormValues = z.inder<typeof basicInfoSchema.BasicInfo>;

export type BusinessRevenueFormValues = z.infer<typeof businessRevenueSchema>;
export type PersonalDetailsFormValues = z.infer<typeof personalDetailsSchema>;
