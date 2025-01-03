import React from "react";
import { Step } from "../types/types";
import { StepIcon } from "@/svgs/StepIcon";
import DiamondIcon from "@/svgs/DiamondIcon";
import Link from "next/link";

export const steps: Step[] = [
  {
    id: "1",
    name: "Get started",
    icon: <StepIcon stepId="1" activeStepId="1" stepNumber="1" />,
    route: "/registration/get-started",
    subSteps: [
      {
        id: "1-1",
        name: "Basic info",
        route: "/registration/get-started/basic-info",
        icon: <DiamondIcon className="w-7 h-7 text-brand-50" />,
      },
      {
        id: "1-2",
        name: "Business revenue",
        route: "/registration/get-started/business-revenue",
        icon: <DiamondIcon className="w-7 h-7 text-brand-50" />,
      },
    ],
  },
  {
    id: "2",
    name: "Add business details",
    icon: <StepIcon stepId="2" activeStepId="2" stepNumber="2" />,
    route: "/registration/add-business-details",
  },
  {
    id: "3",
    name: "Add bank details",
    icon: <StepIcon stepId="3" activeStepId="3" stepNumber="3" />,
    route: "/registration/add-bank-details",
  },
  {
    id: "4",
    name: "Add Extra",
    icon: <StepIcon stepId="4" activeStepId="4" stepNumber="4" />,
    route: "/registration/add-extra",
  },
  {
    id: "5",
    name: "Payment plans & Review",
    icon: <StepIcon stepId="5" activeStepId="5" stepNumber="5" />,
    route: "/registration/payment-plans-review",
  },
];

type SideBarStepItemProps = {
  step: Step;
};
const SideBarStepItem: React.FC<SideBarStepItemProps> = ({ step }) => {
  return (
    <div>
      <Link href={step.route}>
        <div className="flex items-center px-4 py-2 cursor-pointer ">
          <div className="flex items-center w-7 h-7 mr-2">{step.icon}</div>
          <div className="body-1-medium text-functional-100">{step.name}</div>
        </div>
      </Link>

      {step.subSteps && step.subSteps.length > 0 && (
        <div className=" mt-2">
          {step.subSteps.map((subStep) => (
            <Link key={subStep.id} href={subStep.route}>
              <div className="flex items-center px-4 py-2 cursor-pointer ">
                <div className="flex items-center w-7 h-7 mr-2">
                  {subStep.icon}
                </div>
                <div className="body-1-medium text-functional-100">
                  {subStep.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarStepItem;
