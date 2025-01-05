"use client";
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/authentication/components/app-sidebar";
import { Button } from "@/components/ui/button";
import Header from "@/modules/authentication/components/Header";
import ChatButton from "@/modules/authentication/components/ChatButton";
import { steps } from "@/modules/authentication/components/SideBarStepItem";
import DiamondIcon from "@/svgs/DiamondIcon";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentStepId, setCurrentStepId] = useState("1");
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="relative bg-primary-white w-full ">
        <div className="md:p-8 p-6">
          <Header showLogoOnMobileOnly show={false} />
        </div>
        <SidebarTrigger className="md:hidden p-6 mb-4">
          <div className="w-full flex items-center justify-between bg-brand-100 p-3 rounded-2xl">
            <div className="flex items-center ">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  title={step.name}
                >
                  <DiamondIcon
                    className={`w-7 h-7 bg-transparent ${
                      step.id === currentStepId
                        ? "text-brand-50"
                        : "text-functional-500"
                    }`}
                  />
                  {step.id === currentStepId && (
                    <span className="body-3-medium text-functional-100 mt-0.5 leading-0">
                      {step.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="body-3-medium text-functional-500 whitespace-nowrap leading-0">
              See more
            </p>
          </div>
        </SidebarTrigger>

        <div className="lg:w-[440px] w-full lg:p-0 p-6 lg:ml-22 ml-0 w-full md:min-h-0 min-h-full">
          {children}

          <div className="flex items-center gap-6 md:my-8 my-0 md:relative fixed bottom-0 left-0 w-full bg-primary-white md:p-0 p-6 pb-10 md:border-none border-t border-functional-500">
            <Button
              variant="outline"
              className="bg-primary-white  w-[40%] text-functional-100 body-2-medium font-bold"
              size="lg"
            >
              Back
            </Button>
            <Button
              variant="secondary"
              className="bg-brand-50 text-primary-white body-2-medium font-bold"
              size="lg"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </div>

        <div className="fixed bottom-6   right-6 flex justify-end w-[130px] md:block hidden">
          <ChatButton />
        </div>
      </div>
    </SidebarProvider>
  );
}
