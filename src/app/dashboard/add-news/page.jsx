import AddNewsForm from "@/components/forms/AddNewsForm";
import DashboardPageHeader from "../components/Dashboards/Header/DashboardPageHeader";
import { IoNewspaperSharp } from "react-icons/io5";

const AddNewsPage = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Add News"
        subtitle="Quickly add and publish the latest news to keep your platform up to date."
        icon={IoNewspaperSharp}
      />
      <AddNewsForm />
    </div>
  );
};

export default AddNewsPage;
