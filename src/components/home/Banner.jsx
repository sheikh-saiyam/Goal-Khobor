export const revalidate = 0;
import dbConnect, { collections } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

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
          <Link href={`/news/${news._id}`} key={news._id} prefetch={true}>
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
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
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
        {banner_news.slice(1, 3).map((news) => (
          <Link href={`/news/${news._id}`} key={news._id} prefetch={true}>
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
  );
};

export default Banner;
