"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const StepsConfig: Record<
  string,
  { subSteps?: string[]; hasMainForm: boolean }
> = {
  "get-started": {
    subSteps: ["basic-info", "business-revenue"],
    hasMainForm: false,
  },
  "add-business-details": { hasMainForm: true },
  "add-bank-details": { hasMainForm: true },
  "add-extra": { hasMainForm: true },
  "payment-plans-review": { hasMainForm: true },
};

const MainStepForms: Record<string, React.FC> = {
  "add-business-details": () => <div>Add Business Details Form</div>,
  "add-bank-details": () => <div>Add Bank Details Form</div>,
  "add-extra": () => <div>Add Extra Details Form</div>,
  "payment-plans-review": () => <div>Payment Plans Review Form</div>,
};

export default function MainStepPage() {
  const pathname = usePathname();
  const router = useRouter();
  const mainStep = pathname.split("/")[2];
  const stepConfig = StepsConfig[mainStep];

  React.useEffect(() => {
    if (!stepConfig) {
      return;
    }

    if (stepConfig.subSteps && !stepConfig.hasMainForm) {
      const firstSubStep = stepConfig.subSteps[0];
      router.replace(`/registration/${mainStep}/${firstSubStep}`);
    }
  }, [mainStep, stepConfig, router]);

  if (!stepConfig) {
    return <div>404</div>;
  }

  if (!stepConfig.hasMainForm) {
    return null;
  }

  const FormComponent = MainStepForms[mainStep];

  return <FormComponent />;
}
