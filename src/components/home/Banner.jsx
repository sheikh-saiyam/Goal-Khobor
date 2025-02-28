export const revalidate = 0;
import dbConnect, { collections } from "@/lib/dbConnect";
import LongImageNewsCard from "../cards/ImageNewsCards/LongImageNewsCard";
import ShortImageNewsCard from "../cards/ImageNewsCards/ShortImageNewsCard";

const Banner = async () => {
  // Get all banner_news from db --->
  const newsCollection = await dbConnect(collections.newsCollection);
  const banner_news = await newsCollection
    .find({ category: "banner-news" })
    .sort({ published_date: -1 })
    .limit(3)
    .toArray();

  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-stretch gap-6">
      <div className="w-full md:w-full lg:w-7/12">
        {banner_news.slice(0, 1).map((news) => (
          <LongImageNewsCard key={news._id} news={news} />
        ))}
      </div>
      <div className="w-full md:w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col gap-6">
        {banner_news.slice(1, 3).map((news) => (
          <ShortImageNewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
