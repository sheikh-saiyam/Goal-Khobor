import Image from "next/image";
import Link from "next/link";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import MainContainer from "./../../../components/container/MainContainer";
import { Button } from "../../../components/ui/button";
import AdvertisementsCard from "@/components/cards/AdvertisementsCard";
import dbConnect, { collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const NewsDetails = async ({ params }) => {
  const newsCollection = await dbConnect(collections.newsCollection);
  // Get latest-news from db --->
  const latest_news = await newsCollection
    .find()
    .sort({ published_date: 1 })
    .limit(6)
    .toArray();
  // Get news_details from db --->
  const { _id } = await params;
  const news_details = await newsCollection.findOne({ _id: new ObjectId(_id) });

  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6">
        {/* News Details Container */}
        <div className="w-full md:w-8/12 lg:w-9/12">
          <div>
            <Image
              src={news_details.image}
              alt={news_details.title}
              width={1000}
              height={400}
              className="max-h-[400px] w-full"
            />
          </div>
          <div className="mt-6">
            {/* Title & Description */}
            <h1 className="text-black tracking-wider text-2xl md:text-2xl lg:text-4xl font-semibold">
              {news_details.title}
            </h1>
            <h3 className="mt-4 text-[#444] tracking-wider text-xl whitespace-pre-line pr-4">
              {news_details.description}
            </h3>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <h3 className="text-[#444] tracking-wider font-semibold text-xl">
                Tags:
              </h3>
              {news_details.tags.map((tag, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="text-[#444] tracking-wider font-semibold"
                >
                  #{tag}
                </Button>
              ))}
            </div>
            {/* Publisher Info And Like & Dislike */}
            <div className="mt-4">
              {/* Like & Dislike */}
              <div className="mb-4 pb-4 border-b flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <button>
                    <AiOutlineLike
                      className="text-[#000]"
                      size={35}
                      color="#444"
                    />
                  </button>
                  <h1 className="font-bold text-[#444] tracking-wide mt-1">
                    {news_details.likes}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <button>
                    <AiOutlineDislike
                      className="text-[#000]"
                      size={35}
                      color="#444"
                    />
                  </button>
                  <h1 className="font-bold text-[#444] tracking-wide mt-1">
                    28
                  </h1>
                </div>
              </div>
              {/* Publisher Info */}
              <div className="mt-4 flex items-center gap-2">
                <div>
                  <Image
                    src={news_details.publisher_image}
                    alt={news_details.publisher}
                    width={100}
                    height={100}
                    className="w-24 p-1 h-14 rounded border border-black"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[#444] tracking-wide">
                    {news_details.publisher}
                  </h1>
                  <h2 className="mt-[2px] text-sm font-medium tracking-wide text-[#444]">
                    {news_details.published_date.split("T")[0]}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ads & Latest News Container */}
        <div className="w-full md:w-4/12 lg:w-3/12 h-fit">
          {/* Latest News */}
          <div className="border rounded px-4">
            <h1 className="text-black tracking-wider text-2xl mt-3 font-bold">
              LATEST NEWS
            </h1>
            <div className="relative mt-3 w-full">
              {latest_news?.map((news, index) => (
                <div key={index} className="pb-3 mb-4 border-b">
                  <Link
                    href={`/news/${news._id}`}
                    className="whitespace-pre-line hover:underline duration-300 cursor-pointer underline-offset-2"
                  >
                    {news.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Ads */}
          <AdvertisementsCard />
        </div>
      </div>
    </MainContainer>
  );
};

export default NewsDetails;
