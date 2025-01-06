"use client";

import { usePathname } from "next/navigation";
import React from "react";
import BasicInfoForm from "@/modules/authentication/pages/BasicInfoForm";
import BusinessRevenueForm from "@/modules/authentication/pages/BusinessRevenueForm";

const SubStepForms: Record<string, React.FC> = {
  "basic-info": () => <BasicInfoForm />,
  "business-revenue": () => <BusinessRevenueForm />,
};

export default function SubStepPage() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const subStep = segments[3];

  const SubFormComponent = SubStepForms[subStep as string];

  if (!SubFormComponent) {
    return <div>404</div>;
  }

  return <SubFormComponent />;
}
