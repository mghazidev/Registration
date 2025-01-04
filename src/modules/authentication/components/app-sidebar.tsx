import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "@/svgs/Logo";
import { steps } from "./SideBarStepItem";
import SideBarStepItem from "./SideBarStepItem";
export function AppSidebar() {
  const activeStepId = "/registration/get-started/business-revenue";
  const completedStepIds = ["1", "1-1"];
  return (
    <Sidebar>
      <SidebarHeader className="p-10">
        <Logo />
        <p className="text-functional-700 body-3-medium my-2">
          Application ID: #527891
        </p>
      </SidebarHeader>
      <SidebarContent className="px-9">
        {steps.map((step) => (
          <SideBarStepItem
            key={step.id}
            step={step}
            activeStepId={activeStepId}
            completedStepIds={completedStepIds}
          />
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
