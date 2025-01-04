import { PhoneInputValue } from "./phoneInput";

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
