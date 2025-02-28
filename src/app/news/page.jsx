export const revalidate = 0;
import ListNewsCard from "@/components/cards/ListNewsCard";
import NewsCard from "@/components/cards/NewsCard";
import Header from "@/components/Shared/Section/Header";
import { Button } from "@/components/ui/button";
import dbConnect, { collections } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "News - Goal Khobor",
};

const AllNews = async () => {
  // Get all news from db --->
  const newsCollection = await dbConnect(collections.newsCollection);
  const all_news = await newsCollection
    .find({ category: { $nin: ["features", "banner-news"] } })
    .sort({ published_date: -1 })
    .toArray();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      <Header heading={"Latest Football News"} />
      {/* News Container */}
      <div>
        {/* 1st news container */}
        <div className="flex flex-col md:flex-col lg:flex-row items-stretch gap-6">
          <div className="w-full md:w-full lg:w-7/12">
            {all_news.slice(0, 1).map((news) => (
              <Link href={`/news/${news._id}`} key={news._id}>
                <div className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="responsive"
                      width={700}
                      height={900}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full min-h-[100px]"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl font-semibold">
                        {news.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span className="font-bold">
                          {news.published_date.split("T")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full md:w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col gap-6">
            {all_news.slice(1, 3).map((news) => (
              <Link href={`/news/${news._id}`} key={news._id}>
                <div className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="responsive"
                      width={700}
                      height={900}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full lg:max-h-[250px]"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl sm:text-lg lg:text-xl font-semibold">
                        {news.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span className="font-bold">
                          {news.published_date.split("T")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* 2nd news container */}
        <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {all_news.slice(3, 12).map((news) => (
            <NewsCard key={news?._id} news={news} />
          ))}
        </div>
        {/* 3rd news container */}
        <div className="mt-12 flex flex-col md:flex-col-reverse lg:flex-row-reverse items-stretch gap-6">
          <div className="w-full md:w-full lg:w-7/12">
            {all_news.slice(12, 13).map((news) => (
              <Link href={`/news/${news._id}`} key={news._id}>
                <div className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="responsive"
                      width={700}
                      height={900}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full min-h-[100px]"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl font-semibold">
                        {news.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span className="font-bold">
                          {news.published_date.split("T")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full md:w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col gap-6">
            {all_news.slice(13, 15).map((news) => (
              <Link href={`/news/${news._id}`} key={news._id}>
                <div className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="responsive"
                      width={700}
                      height={900}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full lg:max-h-[250px]"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl sm:text-lg lg:text-xl font-semibold">
                        {news.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span className="font-bold">
                          {news.published_date.split("T")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* 4th news container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {all_news.slice(15).map((news) => (
            <ListNewsCard key={news?._id} news={news} />
          ))}
        </div>
      </div>
      {/* News Container */}
    </div>
  );
};

export default AllNews;
