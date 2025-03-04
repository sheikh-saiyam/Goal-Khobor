import AllUserTable from "../../components/Tables/AllUserTable";

const ManageUsers = () => {
  return (
    <div>
      <div className="customTable overflow-y-auto p-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">
        <div className="w-full mx-auto p-6">
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
