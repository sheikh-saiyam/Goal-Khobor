"use client";
import { NavUser } from "@/components/nav-user";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  Clock,
  Home,
  Newspaper,
  Search,
  Trophy,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Add News", url: "/dashboard/add-news", icon: Newspaper },
  { title: "Manage News", url: "/dashboard/manage-news", icon: Search },
  { title: "Approve News", url: "/dashboard/approve-news", icon: Clock },
  {
    title: "Add Transfer News",
    url: "/dashboard/add-transfer-news",
    icon: ArrowLeftRight,
  },
  {
    title: "Manage Transfer News",
    url: "/dashboard/manage-transfer-news",
    icon: Search,
  },
  {
    title: "Add Power Rankings",
    url: "/dashboard/add-power-rankings",
    icon: Trophy,
  },
  {
    title: "Manage  Rankings",
    url: "/dashboard/manage-power-rankings",
    icon: Search,
  },
  { title: "Manage Users", url: "/dashboard/manage-users", icon: Users },
];

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "All News", url: "/all-news", icon: Newspaper },
  {
    title: "Transfers",
    url: "/dashboard/transfers",
    icon: ArrowLeftRight,
  },
  { title: "Rankings", url: "/rankings", icon: Trophy },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const pathname = usePathname();

  return (
    <ShadcnSidebar
      collapsible="icon"
      className={cn("bg-white rounded-md shadow-lg")}
    >
      <SidebarHeader className="py-4">
        <div className="flex items-center justify-between">
          {state ? (
            <Image
              src="https://i.ibb.co/fV684RGm/goal-khobor.png"
              alt="Goal Khobor logo"
              width={100}
              height={50}
              className={`mx-auto cursor-pointer transition-all duration-300`}
              priority
            />
          ) : (
            <></>
          )}
        </div>
        <Separator className="mt-2" />
      </SidebarHeader>

      <SidebarContent>
        {role === "admin" && (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "text-slate-700",
                        pathname === item.url && "bg-slate-100"
                      )}
                    >
                      <Link href={item.url} prefetch={true}>
                        <item.icon className="h-5 w-5" />
                        <span className={cn(!state && "hidden")}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarSeparator className="mt-6" />
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                <SidebarGroupLabel>Main Pages</SidebarGroupLabel>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "text-slate-700",
                        pathname === item.url && "bg-slate-100"
                      )}
                    >
                      <Link href={item.url} prefetch={true}>
                        <item.icon className="h-5 w-5" />
                        <span className={cn(!state && "hidden")}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </ShadcnSidebar>
  );
}
