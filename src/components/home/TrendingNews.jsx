import Image from "next/image";
import Header from "../shared/Section/Header.jsx";
import Link from "next/link";

const TrendingNews = async () => {
  const response = await fetch("http://localhost:3000/api/news");
  const news = await response.json();
  const trending_news = news.slice(3);
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
                <h1 className="text-black tracking-wider text-lg font-semibold">
                  {news?.title}
                </h1>
                <div className="flex items-center gap-4 justify-end">
                  <h1 className="text-black tracking-wider text-sm font-medium">
                    {news?.publisher}
                  </h1>
                  <Image
                    src={news?.publisher_image}
                    alt={news?.publisher}
                    width={100}
                    height={100}
                    className="rounded-full object-cover w-10 h-10 border border-black"
                  />
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
