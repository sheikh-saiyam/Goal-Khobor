import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(req) {
  const session = await auth();
  const role = session?.user?.role;
  const path = req.nextUrl.pathname;

  // Define role-based routes
  const roleBasedRoutes = {
    user: ["/dashboard/view-news"],
    admin: ["/dashboard/manage-users"],
  };

  // !session, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect role-based-user from restricted routes
  const isUserTryingToAccessAdminRoutes =
    roleBasedRoutes.admin.some((route) => path.startsWith(route)) &&
    role !== "admin";
  const isAdminTryingToAccessUserRoutes =
    roleBasedRoutes.user.some((route) => path.startsWith(route)) &&
    role !== "user";

  if (isUserTryingToAccessAdminRoutes || isAdminTryingToAccessUserRoutes) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/dashboard/:path*"],
};
