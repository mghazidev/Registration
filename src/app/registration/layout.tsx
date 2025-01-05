import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/authentication/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/modules/authentication/components/Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className=" bg-primary-white w-full ">
        <div className="md:p-8 p-6">
          <Header showLogoOnMobileOnly show={false} />
        </div>
        <div className="lg:w-[440px] w-full lg:p-0 p-6 lg:ml-22 ml-0 w-full md:min-h-0 min-h-full">
          {children}
          <div className="flex items-center gap-6 md:my-8 my-0 md:relative fixed bottom-0 left-0 w-full bg-primary-white md:p-0 p-6 ">
            <Button
              variant="outline"
              className="bg-primary-white w-[40%] text-functional-100 body-2-medium font-bold"
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
      </div>
    </SidebarProvider>
  );
}
