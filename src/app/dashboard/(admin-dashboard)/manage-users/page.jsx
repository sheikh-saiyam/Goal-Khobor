import DashboardPageHeader from "../../components/Dashboards/Header/DashboardPageHeader";
import AllUserTable from "../../components/Tables/AllUserTable";
import { FaUsers } from "react-icons/fa";

const ManageUsers = () => {
  return (
    <div>
      <DashboardPageHeader
  title="Manage Users" 
  subtitle={"View, edit, and manage users with ease. Monitor their activity, roles, and  permissions to keep your platform secure."}
  icon={FaUsers}
/>
      <div className="customTable overflow-y-auto mb-4 w-full flex items-center flex-col gap-5 justify-center">
        <div className="w-full mx-auto">
          <div className="customTable w-full border overflow-auto border-gray-200">
            <table className="w-full text-sm overflow-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-[5px]">Name</div>
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    UID
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <AllUserTable />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
