export const revalidate = 0;
import LongImageNewsCard from "@/components/cards/ImageNewsCards/LongImageNewsCard";
import ShortImageNewsCard from "@/components/cards/ImageNewsCards/ShortImageNewsCard";
import TransferNewsCard from "@/components/cards/TransferNewsCard";
import Header from "@/components/Shared/Section/Header";
import dbConnect, { collections } from "@/lib/dbConnect";

export const metadata = {
  title: "Transfer News - Goal Khobor",
};

const TransferNewsPage = async () => {
  // Get all transfer_news
  const transfersCollection = await dbConnect(collections.transfersCollection);
  const transfer_news = await transfersCollection
    .find()
    .sort({ published_date: -1 })
    .toArray();

  // Serialize MongoDB documents to plain objects
  const serializedNews = transfer_news.map((news) => ({
    _id: news._id.toString(),
    title: news.title,
    image: news.image,
    description: news.description,
    source: news.source,
    source_image: news.source_image,
    published_date: news.published_date,
    tags: news.tags,
    views: news.views,
    likes: news.likes,
  }));

  return (
    <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      <Header heading={"Latest Transfer News"} />
      {/* News Container */}
      <div>
        {/* 1st news container */}
        <div className="flex flex-col md:flex-col lg:flex-row items-stretch gap-6">
          <div className="w-full md:w-full lg:w-7/12">
            {serializedNews?.slice(0, 1).map((news) => (
              <LongImageNewsCard key={news._id} news={news} />
            ))}
          </div>
          <div className="w-full md:w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col gap-6">
            {serializedNews?.slice(1, 3).map((news) => (
              <ShortImageNewsCard key={news._id} news={news} />
            ))}
          </div>
        </div>
        {/* 2nd news container */}
        <div className="mt-12">
          {serializedNews?.slice(3, 12).map((news) => (
            <TransferNewsCard key={news._id} news={news} />
          ))}
        </div>
      </div>
      {/* News Container */}
    </div>
  );
};

export default TransferNewsPage;
