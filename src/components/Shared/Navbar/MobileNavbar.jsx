"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Facebook,
  Instagram,
  Linkedin,
  LogIn,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = ({ user, navLinks, path, getInitials, handleSignOut }) => {
  return (
    <div className="flex xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Menu">
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
                    src={user.image || "/placeholder.svg?height=40&width=40"}
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

            <Separator className="border my-4" />

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
                      variant={path === "/dashboard" ? "secondary" : "ghost"}
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

            <Separator className="border my-4" />

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
  );
};

export default MobileNavbar;
