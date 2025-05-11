import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="fixed z-50 flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-[12px] bg-[#e2ebee] mb-0" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-3 lg:px-6 pt-16 pb-12 w-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
