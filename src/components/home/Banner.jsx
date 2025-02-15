import Image from "next/image";
import Link from "next/link";

const Banner = async () => {
  const response = await fetch("http://localhost:3000/api/news");
  const news = await response.json();
  const latest_news = news.slice(0, 3);
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-7/12 lg:w-9/12">
        {latest_news.slice(0, 1).map((news) => (
          <div key={news?._id} className="border cursor-pointer duration-300">
            <Link href={`/news/${news?._id}`} prefetch={true}>
              <div>
                <Image
                  className="w-full h-[350px]"
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
      <div className="hidden w-full md:w-5/12 lg:w-3/12 md:flex lg:flex gap-6 flex-col">
        {latest_news.slice(1).map((news) => (
          <div key={news?._id} className="border cursor-pointer duration-300">
            <Link href={`/news/${news?._id}`}>
              <div>
                <Image
                  className="w-full h-[110px]"
                  src={news?.image}
                  alt={news?.title}
                  width={1000}
                  height={170}
                />
              </div>
              <div className="p-4">
                <h1 className="text-black tracking-wider text-lg font-semibold">
                  {news?.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
