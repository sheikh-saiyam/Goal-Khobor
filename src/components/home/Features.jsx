import Header from "../shared/Section/Header";

const Features = async () => {
  // Get All Transfers --->
  const response = await fetch("http://localhost:3000/api/features");
  const features_news = await response.json();
  return (
    <div>
      <Header heading={"Features News"} />
    </div>
  );
};

export default Features;
