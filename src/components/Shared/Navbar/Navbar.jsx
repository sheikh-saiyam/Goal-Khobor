"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRightLeft,
  BarChart3,
  Home,
  LogIn,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import MobileNavbar from "./MobileNavbar";
import TopNavbar from "./TopNavbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;

  const [showTop, setShowTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (
    path.includes("/login") ||
    path.includes("/register") ||
    path.includes("/dashboard")
  ) {
    return <></>;
  }

  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="w-4 h-4 mr-0.5 -mt-[1.8px]" />,
    },
    {
      href: "/news",
      label: "All News",
      icon: <Newspaper className="w-4 h-4 mr-0.5 -mt-[1.8px]" />,
    },
    {
      href: "/transfers",
      label: "Transfer News",
      icon: <ArrowRightLeft className="w-4 h-4 mr-0.5 -mt-[1.8px]" />,
    },
    {
      href: "/rankings",
      label: "Power Rankings",
      icon: <BarChart3 className="w-4 h-4 mr-0.5 -mt-[1.8px]" />,
    },
  ];

  const handleSignOut = async () => {
    toast.promise(signOut(), {
      loading: "Logging out...",
      success: "Logged out successfully!",
      error: "Logout failed. Please try again.",
      position: "top-right",
      duration: 5000,
      style: {
        marginTop: "-10px",
      },
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
    <nav className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl pb-[160px]">
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        {/* Top Navbar */}
        <div
          className={`transition-all duration-500 ease-in-out ${showTop
            ? 'max-h-20 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-full'
            } overflow-hidden`}
        >
          <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
            <TopNavbar />
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-11/12 md:w-10/12 mx-auto max-w-screen-2xl py-4 flex items-center justify-between border-b border-border ${!showTop && "drop-shadow"}`}>
          <Link href={"/"} className="hover:scale-105 transition-transform">
            <Image
              src={"https://i.ibb.co.com/fV684RGm/goal-khobor.png"}
              alt="Goal Khobor"
              className="w-30 h-12"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-4 font-medium text-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-1.5 py-0.5 transition-colors flex items-center gap-1 ${path === link.href
                  ? "text-foreground font-semibold border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.icon} {link.label}
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
                      href="/dashboard"
                      className="cursor-pointer flex items-center"
                    >
                      <User className="h-4 w-4" />
                      <span className="mt-0.5">Dashboard</span>
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
          <MobileNavbar
            user={user}
            navLinks={navLinks}
            path={path}
            getInitials={getInitials}
            handleSignOut={handleSignOut}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
