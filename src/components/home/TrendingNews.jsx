import Header from "../Shared/Section/Header";
import dbConnect, { collections } from "@/lib/dbConnect";
import NewsCard from "../cards/NewsCard";

const TrendingNews = async () => {
  // Get all trending_news from db --->
  const newsCollection = await dbConnect(collections.newsCollection);
  const trending_news = await newsCollection
    .find()
    .sort({ views: -1 })
    .limit(6)
    .toArray();

  return (
    <div>
      {/* Section Header */}
      <Header heading={"Trending News"} />
      {/* Trending News */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trending_news?.map((news) => (
          <NewsCard key={news?._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
