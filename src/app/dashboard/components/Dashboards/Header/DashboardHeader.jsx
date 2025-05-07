import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Moon, Sun, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "sonner";

const DashboardHeader = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const { data: session, status } = useSession();
  const username = session?.user?.name || "";
  const user = session?.user || {};

  const handleSignOut = async () => {
    toast.promise(signOut(), {
      loading: "Logging out...",
      success: "Logged out successfully!",
      error: "Logout failed. Please try again.",
      position: "top-right",
      duration: 5000,
      style: {
        marginTop: "-5px",
      },
    });
  };

  const getInitials = () => {
    if (!user?.name) return "GK";
    const nameParts = user.name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0].substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-background shadow py-6 border-b flex justify-between items-center">
      {/* Toggle Button for Mobile */}
      <div className="w-fit h-fit lg:hidden">
        <button
          className="lg:hidden mt-3 px-4 w-fit text-black"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <IoMdMenu size={30} />
        </button>
      </div>
      {/* Welcome Div */}
      <div className="hidden lg:flex ml-10">
        {status === "loading" ? (
          <div className="w-[250px] h-8 bg-[#e5eaf2] animate-pulse"></div>
        ) : (
          <h1 className="text-2xl font-semibold tracking-wide text-gray-700">
            Welcome!{" "}
            <Typewriter
              words={[username]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h1>
        )}
      </div>
      {/* Main container */}
      <div className="flex justify-end items-center gap-4 pr-4 md:pr-8">
        {/* ThemeController */}
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Notifications</span>
        </Button>
        {status === "loading" ? (
          <div className="w-8 h-8 animate-spin rounded-full border-dashed border-4 border-primary" />
        ) :
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative rounded-full h-10 w-10 p-0"
              >
                <Avatar>
                  <AvatarImage
                    src={user.image || "/placeholder.svg?height=40&width=40"}
                  />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-full">
              <div className="flex items-center justify-start gap-2 py-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.image || "/placeholder.svg?height=32&width=32"}
                  />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground w-40 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator className="border" />
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/profile"
                  className="cursor-pointer flex items-center"
                >
                  <User className="h-4 w-4" />
                  <span className="mt-0.5">View Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border" />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="cursor-pointer text-destructive focus:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      </div>
    </div>
  );
};

export default DashboardHeader;
