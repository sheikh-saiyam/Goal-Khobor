import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Shared/Section/Header";
import dbConnect, { collections } from "@/lib/dbConnect";
import FeaturesNewsCard from "../cards/FeaturesNewsCard";

const Features = async () => {
  // Get features news from db --->
  const newsCollection = await dbConnect(collections.newsCollection);
  const features_news = await newsCollection
    .find({ category: "features" })
    .limit(6)
    .toArray();

  return (
    <div>
      <Header heading={"Features News"} />
      {/* 1st Features News Container */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(0, 1).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id} prefetch={true}>
              <div className="h-full">
                <div className="relative h-full overflow-hidden shadow-lg group">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="responsive"
                    width={700}
                    height={900}
                    className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full min-h-[400px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-xl font-semibold">
                      {news.title}
                    </h2>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                      <span>{news.published_date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
          {features_news.slice(1, 3).map((news) => (
            <FeaturesNewsCard news={news} />
          ))}
        </div>
      </div>
      {/* 2nd Features News Container */}
      <div className="mt-6 flex flex-col-reverse md:flex-row-reverse items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(3, 4).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id} prefetch={true}>
              <div className="h-full">
                <div className="relative h-full overflow-hidden shadow-lg group">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="responsive"
                    width={700}
                    height={900}
                    className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full min-h-[400px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-xl font-semibold">
                      {news.title}
                    </h2>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                      <span>{news.published_date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
          {features_news.slice(4).map((news) => (
            <FeaturesNewsCard news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
