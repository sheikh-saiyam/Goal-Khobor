import { BiTransfer } from "react-icons/bi";
import AddTransferNewsForm from "@/components/forms/AddTransferNewsForm";
import DashboardPageHeader from "../../components/Dashboards/Header/DashboardPageHeader";

const AddTransferNews = () => {
  return (
    <div>
            <DashboardPageHeader
        title="Add Transfer News"
        subtitle="Quickly add and publish the latest transfer news to keep your platform up to date."
        icon={BiTransfer}
      />
      <AddTransferNewsForm />
    </div>
  );
};

export default AddTransferNews;
