import React from "react";

type StepIconProps = {
  stepId: string;
  activeStepId: string;
  stepNumber: string;
};

export function StepIcon({ stepId, activeStepId, stepNumber }: StepIconProps) {
  const isActive = stepId === activeStepId;
  const circleColor = isActive ? "#4CAF50" : "#E0E0E0";
  const textColor = isActive ? "#fff" : "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="rounded-full"
    >
      <circle cx="20" cy="20" r="18" fill={circleColor} />
      <text
        x="20"
        y="22"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill={textColor}
      >
        {stepNumber}
      </text>
    </svg>
  );
}
