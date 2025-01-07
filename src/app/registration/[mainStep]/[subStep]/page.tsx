"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import BasicInfoForm from "@/modules/authentication/pages/BasicInfoForm";
import BusinessRevenueForm from "@/modules/authentication/pages/BusinessRevenueForm";
import { Button } from "@/components/ui/button";

const SubStepForms: Record<
  string,
  React.FC<{ onSubmitRef: React.RefObject<() => void> }>
> = {
  "basic-info": ({ onSubmitRef }) => (
    <BasicInfoForm onSubmitRef={onSubmitRef} />
  ),
  "business-revenue": ({ onSubmitRef }) => (
    <BusinessRevenueForm onSubmitRef={onSubmitRef} />
  ),
};

export default function SubStepPage() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/");
  const subStep = segments[3];

  const onSubmitRef = useRef<any>(null);

  const SubFormComponent = SubStepForms[subStep as string];

  if (!SubFormComponent) {
    return <div>404</div>;
  }

  return (
    <>
      <SubFormComponent onSubmitRef={onSubmitRef} />
      <div className="flex items-center gap-6 md:my-8 my-0 md:relative fixed bottom-0 left-0 w-full bg-primary-white md:p-0 p-6 pb-10 md:border-none border-t border-functional-500">
        <Button
          variant="outline"
          className="bg-primary-white  w-[40%] text-functional-100 body-2-medium font-bold"
          size="lg"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button
          variant="secondary"
          className="bg-brand-50 text-primary-white body-2-medium font-bold"
          size="lg"
          onClick={() => {
            if (onSubmitRef.current) onSubmitRef.current();
          }}
        >
          Continue
        </Button>
      </div>
    </>
  );
}
