import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/authentication/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="min-h-screen bg-primary-white w-full">
        <p className="body-2-medium bg-primary-white p-10 text-functional-700 text-right">
          Home
        </p>
        <div className="w-[418px] ml-22">{children}</div>
      </div>
    </SidebarProvider>
  );
}
