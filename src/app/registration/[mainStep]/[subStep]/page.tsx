"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import BasicInfoForm from "@/modules/authentication/pages/BasicInfoForm";
import BusinessRevenueForm from "@/modules/authentication/pages/BusinessRevenueForm";
import PersonalDetailsForm from "@/modules/authentication/pages/PersonalDetailsForm";
import { Button } from "@/components/ui/button";
import CrossCheckIcon from "@/svgs/CrossCheckIcon";
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
        <AlertDialogContent>
          <AlertDialogHeader className="flex justify-end">
            <CrossCheckIcon className="w-9 h-9 text-primary-black cursor-pointer" />
          </AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <AlertDialogFooter></AlertDialogFooter>
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
