import React from "react";
import { Step } from "../types/types";
import DiamondIcon from "@/svgs/DiamondIcon";
import Link from "next/link";
import { SideBarStepItemProps } from "../types/types";
import { cn } from "@/lib/utils";

export const steps: Step[] = [
  {
    id: "1",
    name: "Get started",
    route: "/registration/get-started",
    subSteps: [
      {
        id: "1-1",
        name: "Basic info",
        route: "/registration/get-started/basic-info",
      },
      {
        id: "1-2",
        name: "Business revenue",
        route: "/registration/get-started/business-revenue",
      },
    ],
  },
  {
    id: "2",
    name: "Add business details",
    route: "/registration/add-business-details",
  },
  {
    id: "3",
    name: "Add bank details",
    route: "/registration/add-bank-details",
  },
  {
    id: "4",
    name: "Add Extra",
    route: "/registration/add-extra",
  },
  {
    id: "5",
    name: "Payment plans & Review",
    route: "/registration/payment-plans-review",
  },
];

const SideBarStepItem: React.FC<SideBarStepItemProps> = ({
  step,
  activeStepId,
  completedStepIds = [],
}) => {
  const isActive = step.id === activeStepId;
  const isCompleted = completedStepIds.includes(step.id);
  return (
    <div>
      <Link href={step.route}>
        <div className="flex items-center px-4 py-4 cursor-pointer ">
          <div
            className={cn(
              "flex items-center justify-center w-7 h-7 mr-4 rounded-max border border-brand-50",
              isActive || isCompleted ? "bg-brand-50" : "bg-transparent"
            )}
          >
            <span
              className={cn(
                "body-3-medium leading-none mt-0.5",

                isActive || isCompleted ? "text-primary-white" : "text-brand-50"
              )}
            >
              {step.id}
            </span>
          </div>
          <span
            className={cn(
              "body-1-medium ",
              isActive
                ? "text-brand-50"
                : isCompleted
                ? "text-functional-100"
                : "text-functional-700"
            )}
          >
            {step.name}
          </span>
        </div>
      </Link>
      {step.subSteps && step.subSteps.length > 0 && (
        <div>
          {step.subSteps.map((subStep) => {
            const isSubStepActive = subStep.route === activeStepId;
            const isSubStepCompleted = completedStepIds.includes(subStep.id);

            return (
              <Link key={subStep.id} href={subStep.route}>
                <div className="flex items-center px-4 py-3 cursor-pointer">
                  <DiamondIcon className="w-7 h-7 text-brand-50 mr-7" />
                  <span
                    className={cn(
                      "body-1-medium",
                      isSubStepActive
                        ? "text-brand-50"
                        : isSubStepCompleted
                        ? "text-functional-100"
                        : "text-functional-700"
                    )}
                  >
                    {subStep.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBarStepItem;
