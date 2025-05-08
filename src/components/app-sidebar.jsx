"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Home, Users, Newspaper, Search, Clock, ArrowLeftRight, Trophy } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const adminItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Add News", url: "/dashboard/add-news", icon: Newspaper },
  { title: "Manage News", url: "/dashboard/manage-news", icon: Search },
  { title: "Approve News", url: "/dashboard/approve-news", icon: Clock },
  { title: "Add Transfer News", url: "/dashboard/add-transfer-news", icon: ArrowLeftRight },
  { title: "Manage Transfer News", url: "/dashboard/manage-transfer-news", icon: Search },
  { title: "Add Power Rankings", url: "/dashboard/add-power-rankings", icon: Trophy },
  { title: "Manage Power Rankings", url: "/dashboard/manage-power-rankings", icon: Search },
  { title: "Manage Users", url: "/dashboard/manage-users", icon: Users },
];

export function  AppSidebar  ()  {
  const { state } = useSidebar();
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const pathname = usePathname();

  return (
    <ShadcnSidebar
      collapsible="icon"
      className={cn("bg-white rounded-md shadow-lg", state && "w-[60px]")}
    >
      <SidebarHeader className="py-4 px-4">
        <div className="flex items-center justify-between">
          {state ? (
            <Image
              width={50}
              height={50}
              src="https://i.ibb.co.com/fV684RGm/goal-khobor.png"
              alt="Goal Khobor logo"
              className="w-[50px] cursor-pointer mx-auto"
              onClick={() => setCollapsed(false)}
            />
          ) : (
            <>
              <Link href="/" prefetch={true}>
                <Image
                  width={100}
                  height={60}
                  src="https://i.ibb.co.com/fV684RGm/goal-khobor.png"
                  alt="Goal Khobor logo"
                  className="w-[100px] h-[60px] cursor-pointer"
                />
              </Link>
              <SidebarMenuButton
                size="sm"
                className="text-black"
                onClick={() => setCollapsed(true)}
              >
                <ChevronLeft className="h-6 w-6" />
              </SidebarMenuButton>
            </>
          )}
        </div>
        <Separator className="mt-4" />
      </SidebarHeader>

      <SidebarContent>
        {status === "loading" ? (
          <div className="mt-4 space-y-4 px-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-11 bg-gray-200 animate-pulse rounded",
                  state ? "w-10 mx-auto" : "w-full"
                )}
              />
            ))}
          </div>
        ) : (
          role === "admin" && (
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {adminItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "text-slate-700",
                          pathname === item.url && "bg-slate-100 underline underline-offset-2"
                        )}
                      >
                        <Link href={item.url}>
                          <item.icon className="h-5 w-5" />
                          <span className={cn(state && "hidden")}>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        )}
      </SidebarContent>

      <SidebarFooter>
        {state && (
          <SidebarMenuButton
            size="sm"
            className="text-black mx-auto"
            onClick={() => setCollapsed(false)}
          >
            <ChevronRight className="h-6 w-6" />
          </SidebarMenuButton>
        )}
      </SidebarFooter>
    </ShadcnSidebar>
  );
};
