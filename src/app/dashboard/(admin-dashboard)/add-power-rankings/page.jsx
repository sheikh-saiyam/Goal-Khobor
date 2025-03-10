import AddPowerRankingForm from "@/components/forms/AddPowerRankingForm";
import DashboardPageHeader from "../../components/Dashboards/Header/DashboardPageHeader";
import { PiRankingFill } from "react-icons/pi";

const AddPowerRankings = () => {

  
  return (
      <div>
         <DashboardPageHeader
           title="Add Power Rankings"
           subtitle="Quickly add and publish the latest power rankings to keep your platform up to date."
           icon={PiRankingFill}
         />
         <AddPowerRankingForm />
       </div>
  );
};

export default AddPowerRankings;
