import Image from "next/image";
import Header from "../shared/Section/Header";
import Link from "next/link";

const Features = async () => {
  // Get All Transfers --->
  const response = await fetch("http://localhost:3000/api/features");
  const features_news = await response.json();
  return (
    <div>
      <Header heading={"Features News"} />
      {/* Features News Container */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="w-full md:w-6/12">
          {features_news.slice(0, 1).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id}>
              <div>
                <div className="relative h-full overflow-hidden shadow-lg group">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={700}
                    height={700}
                    className="group-hover:scale-105 transition-transform duration-300"
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
        <div className="w-full md:w-6/12 flex flex-col gap-6">
          {features_news.slice(1).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id}>
              <div className="flex flex-col lg:flex-row items-center gap-4 border-2 hover:border-black duration-300">
                {/* Image Container */}
                <div className="lg:w-6/12">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={600}
                    height={200}
                    className="min-h-[200px] max-h-full w-full"
                  />
                </div>
                {/* Text Container */}
                <div className="w-full p-4">
                  <div>
                    <h3 className="text-lg font-medium text-[#444]">
                      {news.published_date}
                    </h3>
                    <h1 className="mt-2 text-2xl md:text-3xl font-medium tracking-wider">
                      {news.title}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
