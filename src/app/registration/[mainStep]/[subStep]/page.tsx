"use client";

import { usePathname } from "next/navigation";
import React from "react";
import BasicInfoPage from "@/modules/authentication/pages/BasicInfoPage";

const SubStepForms: Record<string, React.FC> = {
  "basic-info": () => <BasicInfoPage />,
  "business-revenue": () => <div>Business Revenue Form</div>,
};

export default function SubStepPage() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const subStep = segments[3];

  const SubFormComponent = SubStepForms[subStep as string];

  if (!SubFormComponent) {
    return <div>404: Sub Step Not Found</div>;
  }

  return <SubFormComponent />;
}
