"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  LogOut,
  Menu,
  User,
  Home,
  Newspaper,
  ArrowRightLeft,
  BarChart3,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;

  if (
    path.includes("/login") ||
    path.includes("/register") ||
    path.includes("/dashboard")
  ) {
    return <></>;
  }

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
    {
      href: "/news",
      label: "All News",
      icon: <Newspaper className="w-4 h-4 mr-2" />,
    },
    {
      href: "/transfers",
      label: "Transfer News",
      icon: <ArrowRightLeft className="w-4 h-4 mr-2" />,
    },
    {
      href: "/rankings",
      label: "Power Rankings",
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
    },
  ];

  const handleSignOut = async () => {
    toast.promise(signOut(), {
      loading: "Logging out...",
      success: "Logged out successfully!",
      error: "Logout failed. Please try again.",
      position: "top-right",
      duration: 5000,
    });
  };

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (!user?.name) return "GK";
    const nameParts = user.name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0].substring(0, 2).toUpperCase();
  };

  return (
    <nav className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Navbar */}
      <div className="py-4 flex items-center justify-between border-b border-border">
        <Link href={"/"} className="hover:scale-105 transition-transform">
          <Image
            src={"https://i.ibb.co.com/fV684RGm/goal-khobor.png"}
            alt="Goal Khobor"
            className="w-32 h-14"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6 font-medium text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-1 py-2 transition-colors ${
                path === link.href
                  ? "text-foreground font-semibold border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Authentication Section */}
          {status === "loading" ? (
            <div className="w-8 h-8 animate-spin rounded-full border-dashed border-4 border-primary" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
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
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.image || "/placeholder.svg?height=32&width=32"}
                    />
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard"
                    className="cursor-pointer flex items-center"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="default" className="flex items-center gap-1">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="py-4">
                <div className="flex justify-center mb-6">
                  <Image
                    src={"https://i.ibb.co.com/fV684RGm/goal-khobor.png"}
                    alt="Goal Khobor"
                    className="w-32 h-16"
                    width={100}
                    height={50}
                  />
                </div>

                {user && (
                  <div className="flex items-center space-x-4 mb-6 px-2">
                    <Avatar>
                      <AvatarImage
                        src={
                          user.image || "/placeholder.svg?height=40&width=40"
                        }
                      />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[240px]">
                        {user.email}
                      </p>
                    </div>
                  </div>
                )}

                <Separator className="my-4" />

                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant={path === link.href ? "secondary" : "ghost"}
                        className="w-full justify-start"
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    </Link>
                  ))}

                  {user ? (
                    <>
                      <Link href="/dashboard">
                        <Button
                          variant={
                            path === "/dashboard" ? "secondary" : "ghost"
                          }
                          className="w-full justify-start"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-destructive hover:text-destructive"
                        onClick={handleSignOut}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link href="/login">
                      <Button
                        variant="default"
                        className="w-full justify-start mt-4"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-center gap-4 mt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
