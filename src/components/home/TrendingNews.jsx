import Image from "next/image";
import Header from "../Shared/Section/Header";
import { GrView } from "react-icons/gr";
import Link from "next/link";
import dbConnect, { collections } from "@/lib/dbConnect";

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
          <div
            key={news?._id}
            className="border hover:scale-105 cursor-pointer duration-300"
          >
            <Link href={`/news/${news?._id}`}>
              <div>
                <Image
                  className="w-full h-[200px]"
                  src={news?.image}
                  alt={news?.title}
                  width={1000}
                  height={150}
                />
              </div>
              <div className="p-4">
                <h3>{news.published_date.split("T")[0]}</h3>
                <h1 className="mt-1 text-black tracking-wider text-lg font-semibold">
                  {news?.title}
                </h1>
                <div className="mt-2 flex items-center gap-4 justify-end">
                  <h1 className="text-black mt-[2px] tracking-wider text-sm font-medium">
                    {news?.publisher}
                  </h1>
                  <strong>||</strong>
                  <h1 className="flex items-center gap-2 font-medium">
                    <GrView size={20} />
                    <span className="mt-[1px]">{news?.views}</span>
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
