import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "@/svgs/Logo";
import { steps } from "./SideBarStepItem";
import SideBarStepItem from "./SideBarStepItem";
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-10">
        <Logo />
        <p className="text-functional-700 body-3-medium my-2">
          Application ID: #527891
        </p>
      </SidebarHeader>
      <SidebarContent>
        {steps.map((step) => (
          <SideBarStepItem key={step.id} step={step} />
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
