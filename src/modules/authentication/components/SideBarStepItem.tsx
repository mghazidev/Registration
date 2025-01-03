import React from "react";
import { Step } from "../types/types";
import { StepIcon } from "@/svgs/StepIcon";
import DiamondIcon from "@/svgs/DiamondIcon";

export const steps: Step[] = [
  {
    id: "1",
    name: "Get started",
    icon: <StepIcon stepId="1" activeStepId="1" stepNumber="1" />,
    route: "/get-started",
    subSteps: [
      {
        id: "1-1",
        name: "Basic info",
        route: "/get-started/basic-info",
        icon: <DiamondIcon className="w-7 h-7 text-brand-50" />,
      },
      {
        id: "1-2",
        name: "Business revenue",
        route: "/get-started/business-revenue",
        icon: <DiamondIcon className="w-7 h-7 text-brand-50" />,
      },
    ],
  },
  {
    id: "2",
    name: "Add business details",
    icon: <StepIcon stepId="2" activeStepId="2" stepNumber="2" />,
    route: "/add-business-details",
  },
  {
    id: "3",
    name: "Add bank details",
    icon: <StepIcon stepId="3" activeStepId="3" stepNumber="3" />,
    route: "/add-bank-details",
  },
  {
    id: "4",
    name: "Add Extra",
    icon: <StepIcon stepId="4" activeStepId="4" stepNumber="4" />,
    route: "/add-extra",
  },
  {
    id: "5",
    name: "Payment plans & Review",
    icon: <StepIcon stepId="5" activeStepId="5" stepNumber="5" />,
    route: "/payment-plans-review",
  },
];

type SideBarStepItemProps = {
  step: Step;
};
const SideBarStepItem: React.FC<SideBarStepItemProps> = ({ step }) => {
  return (
    <div className="flex items-center px-4 py-2  cursor-pointer">
      <div className="flex items-center w-7 h-7 mr-2">{step.icon}</div>
      <div className="body-1-medium text-functional-100">{step.name}</div>
    </div>
  );
};

export default SideBarStepItem;
