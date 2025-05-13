export const revalidate = 0;

import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { ShieldCheck, User, User2 } from "lucide-react";
import DashboardPageHeader from "./../components/Dashboards/Header/DashboardPageHeader";
import { ProfileForm } from "./ProfileForm";
import dbConnect from "@/lib/dbConnect";

const Profile = async () => {
  let photo = null;
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
          photo: 1,
        },
      }
    );
    photo = result?.photo || null;
    createdAt = result?.createdAt || null;
  }

  const getInitials = () => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

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
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="mt-6 flex flex-col items-center text-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={photo} alt={name} />
              <AvatarFallback className="text-xl">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
              {/* // <div className="flex justify-center mt-2">
              //   <Badge variant="secondary" className="capitalize">
              //     {role}
              //   </Badge>
              // </div> */}
            </div>
            <div className="w-full pt-4">
              <div className="flex justify-between text-sm py-2 items-center">
                <span className="text-muted-foreground">Role</span>
                <span className="flex items-center gap-1 font-mono text-xs bg-muted px-2 py-1 rounded">
                  {role === "admin" ? (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Admin
                    </>
                  ) : (
                    <>
                      <User2 className="w-4 h-4" />
                      User
                    </>
                  )}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">User ID</span>
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                  {id}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm py-2">
                <span className="text-muted-foreground">Joined At</span>
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
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
                  photo,
                  createdAt,
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
