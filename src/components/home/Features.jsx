import Header from "@/components/Shared/Section/Header";
import dbConnect, { collections } from "@/lib/dbConnect";
import FeaturesNewsCard from "../cards/FeaturesNewsCard";
import ImageFeaturesNewsCard from "../cards/ImageFeaturesNewsCard";

const Features = async () => {
  // Get features news from db --->
  const newsCollection = await dbConnect(collections.newsCollection);
  const features_news = await newsCollection
    .find({ category: "features" })
    .limit(6)
    .toArray();

  return (
    <div>
      <Header heading={"Featured News"} />
      {/* 1st Features News Container */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(0, 1).map((news) => (
            <ImageFeaturesNewsCard key={news._id} news={news} />
          ))}
        </div>
        <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
          {features_news.slice(1, 3).map((news) => (
            <FeaturesNewsCard key={news._id} news={news} />
          ))}
        </div>
      </div>
      {/* 2nd Features News Container */}
      <div className="mt-6 flex flex-col-reverse md:flex-row-reverse items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(3, 4).map((news) => (
            <ImageFeaturesNewsCard key={news._id} news={news} />
          ))}
        </div>
        <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
          {features_news.slice(4).map((news) => (
            <FeaturesNewsCard key={news._id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
