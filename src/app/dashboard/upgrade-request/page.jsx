import DashboardPageHeader from "../components/Dashboards/Header/DashboardPageHeader";
import { FaArrowUp } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RoleUpgradeRequest from "./RoleUpgradeRequest";
import { auth } from "@/auth";

const UpgradeRequest = async () => {
  const session  = await auth();
  const role = session?.user?.role || "";
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Role Upgrade</CardTitle>
          <CardDescription>
            Request an upgrade to Pro account for additional features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RoleUpgradeRequest currentRole={role} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UpgradeRequest;
