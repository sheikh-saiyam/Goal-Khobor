import MainContainer from "@/components/container/MainContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NewsDetails = async ({ params }) => {
  const { _id } = await params;
  const new_details_response = await fetch(
    `http://localhost:3000/api/news/${_id}`
  );
  const news_details = await new_details_response.json();

  const news_response = await fetch("http://localhost:3000/api/news");
  const latest_news = await news_response.json();
  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6">
        {/* News Details Container */}
        <div className="w-full md:7/12 lg:w-9/12">
          <div>
            <Image
              src={news_details.image}
              alt={news_details.title}
              width={1000}
              height={400}
            />
          </div>
          <div className="mt-6">
            <h1 className="text-black tracking-wider text-2xl md:text-3xl lg:text-4xl font-semibold">
              {news_details.title}
            </h1>
            <h3 className="mt-4 text-[#444] tracking-wider text-xl">
              {news_details.description}
            </h3>
            <div className="mt-4 flex items-center gap-4">
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
          </div>
        </div>
        {/* Ads & Others Container */}
        <div className="w-full md:5/12 lg:w-3/12 border border-black rounded h-fit p-4">
          <h1 className="text-black tracking-wider text-2xl font-semibold">
            View Latest News
          </h1>
          <div className="relative mt-3 pl-2 w-full">
            {latest_news?.map((news, index) => (
              <div key={index} className="mb-4 border-b-2 border-black">
                <Link
                  href={`/news/${news._id}`}
                  className="underline whitespace-pre-line"
                >
                  {news.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default NewsDetails;
