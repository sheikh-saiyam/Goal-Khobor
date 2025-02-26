import Image from "next/image";


import Link from "next/link";
import Header from '@/components/Shared/Section/Header';



const Features = async () => {
  // Get All Transfers --->
  const response = await fetch("http://localhost:3000/api/features");
  const features_news = await response.json();
  return (
    <div>
      <Header heading={"Features News"} />
      {/* 1st Features News Container */}
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(0, 1).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id}>
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
            <Link href={`/news/${news._id}`} key={news._id}>
              <div className="flex flex-col lg:flex-row items-center gap-2 border-2 hover:border-black duration-300">
                {/* Image Container */}
                <div className="lg:w-6/12">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={600}
                    height={200}
                    className="h-full min-h-[200px] w-full"
                  />
                </div>
                {/* Text Container */}
                <div className="w-full p-2">
                  <div>
                    <h3 className="text-lg font-medium text-[#444]">
                      {news.published_date}
                    </h3>
                    <h1 className="mt-2 text-2xl font-medium tracking-wider">
                      {news.title}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* 2nd Features News Container */}
      <div className="mt-6 flex flex-col-reverse md:flex-row-reverse items-stretch gap-6">
        <div className="w-full md:w-7/12 lg:w-6/12">
          {features_news.slice(3, 4).map((news) => (
            <Link href={`/news/${news._id}`} key={news._id}>
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
            <Link href={`/news/${news._id}`} key={news._id}>
              <div className="flex flex-col lg:flex-row items-center gap-2 border-2 hover:border-black duration-300">
                {/* Image Container */}
                <div className="lg:w-6/12">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={600}
                    height={200}
                    className="h-full min-h-[200px] w-full"
                  />
                </div>
                {/* Text Container */}
                <div className="w-full p-2">
                  <div>
                    <h3 className="text-lg font-medium text-[#444]">
                      {news.published_date}
                    </h3>
                    <h1 className="mt-2 text-2xl font-medium tracking-wider">
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
