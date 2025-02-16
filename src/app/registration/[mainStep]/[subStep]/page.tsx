"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import BasicInfoForm from "@/modules/authentication/pages/BasicInfoForm";
import BusinessRevenueForm from "@/modules/authentication/pages/BusinessRevenueForm";
import PersonalDetailsForm from "@/modules/authentication/pages/PersonalDetailsForm";
import { Button } from "@/components/ui/button";
import CrossCheckIcon from "@/svgs/CrossCheckIcon";
import OptCode from "@/modules/authentication/components/otp-code";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
  "personal-details": ({ onSubmitRef }) => (
    <PersonalDetailsForm onSubmitRef={onSubmitRef} />
  ),
};

const verificationSteps = [
  {
    id: 1,
    step: "Download  or sign in to the Nafath app",
  },
  {
    id: 2,
    step: "Tap 'Accept' when you receive the request",
  },
  {
    id: 3,
    step: "Select the number 23 in the Nafath app",
  },
  {
    id: 4,
    step: "Return to this page for completion",
  },
];

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
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent className="h-[90vh]">
          <AlertDialogHeader className="flex justify-end">
            <CrossCheckIcon className="w-9 h-9 text-primary-black cursor-pointer" />
          </AlertDialogHeader>
          <AlertDialogDescription className="">
            <AlertDialogTitle>Complete your ID Verification</AlertDialogTitle>
            <OptCode />
            <div>
              <h2>How to verify with nafaath?</h2>
              {verificationSteps?.map((step, ind) => (
                <p key={ind}>{step.step}</p>
              ))}
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <Button>Open Nafath App</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
