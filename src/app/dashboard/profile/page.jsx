import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import DashboardPageHeader from "./../components/Dashboards/Header/DashboardPageHeader";
import dbConnect from "@/lib/dbConnect";
import { ProfileForm } from "./ProfileForm";

const Profile = async () => {
  let createdAt = null;
  const session = await auth();
  const { email, name, id, role } = session?.user || {};

  if (email) {
    const usersCollection = await dbConnect("users");
    const result = await usersCollection.findOne(
      { email },
      {
        projection: {
          _id: 0,
          createdAt: 1,
        },
      }
    );
    createdAt = result?.createdAt || null;
  }

  const getInitials = () => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div>
      <DashboardPageHeader
        title={"Profile"}
        subtitle={"Manage your personal information and account settings"}
        icon={User}
      />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1 h-fit">
          <CardHeader className="pb-3">
            <CardTitle>Profile Summary</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="mt-8 flex flex-col items-center text-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt={name}
              />
              <AvatarFallback className="text-xl">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
              <div className="flex justify-center mt-2">
                <Badge variant="secondary" className="capitalize">
                  {role}
                </Badge>
              </div>
            </div>
            <div className="w-full pt-4">
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">User ID</span>
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                  {id}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">Joined</span>
                <span>
               
                  {createdAt
                    ? new Date(createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "N/A"}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">Last active</span>
                <span>
                  {new Date().toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }) || "N/A"}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Reset Password
            </Button>
          </CardFooter>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Update Form */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your profile information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm
                user={{
                  name,
                  email,
                  id,
                  role,
                  createdAt,
                }}
              />
            </CardContent>
          </Card>

          {/* Role Upgrade Request */}
          <Card>
            <CardHeader>
              <CardTitle>Role Upgrade</CardTitle>
              <CardDescription>
                Request an upgrade to Pro account for additional features
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <RoleUpgradeRequest currentRole={role} /> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
