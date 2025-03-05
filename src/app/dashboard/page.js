
import UserHome from "./components/Dashboards/UserHome";
import AdminHome from "./components/Dashboards/AdminHome";
import { auth } from "@/auth";

const Dashboard = async () => {
    // Get user role & session status
    const session = await auth();
    const role = session?.user?.role;
  return <div>
    {/* User Dashboard */}
    {role === "user" && <UserHome/>}
    {/* Admin Dashboard */}
    {role === "admin" && <AdminHome/>}
  </div>;
};

export default Dashboard;
