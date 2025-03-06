import DateNewsCountChart from "../AdminHome/DateNewsCountChart";
import PublishersCountChart from "../AdminHome/PublishersCountChart";
import Statistics from "../AdminHome/Statistics";

const AdminHome = () => {
  return (
    <div>
      <div className="w-full">
        <Statistics />
      </div>
      <div className="mt-12 flex flex-col lg:flex-row gap-6 justify-center items-center w-full">
        <div className="w-full lg:w-1/2">
          <DateNewsCountChart />
        </div>
        <div className="w-full lg:w-1/2">
          <PublishersCountChart />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
