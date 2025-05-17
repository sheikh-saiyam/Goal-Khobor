import Header from "@/components/Shared/Section/Header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dbConnect, { collections } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

const TransferNews = async () => {
  // Get transfers news from db --->
  const transfersCollection = await dbConnect(collections.transfersCollection);
  const transfers = await transfersCollection
    .find()
    .sort({ published_date: -1 })
    .limit(3)
    .toArray();

  return (
    <div>
      <Header heading={"Transfers News"} />
      {/* Transfers News Container */}
      <div className="flex flex-col gap-4">
        {transfers.map((news) => (
          <Link
            href={`/transfers/${news?._id}`}
            key={news?._id}
            prefetch={true}
          >
            <Card className="flex flex-col lg:flex-row items-center gap-x-2 hover:border-gray-500 duration-500 overflow-hidden">
              {/* Image Container */}
              <CardHeader className="p-0 relative lg:w-6/12">
                <Image
                  src={news?.image}
                  alt={news?.title}
                  width={600}
                  height={200}
                  className="min-h-[200px] max-h-[200px] object-cover w-full"
                />
                <div className="absolute top-0 left-2">
                {news?.tags?.length ? (
  <Badge variant="secondary">
    {news?.tags[Math.floor(Math.random() * news?.tags?.length)]}
  </Badge>
) : null}

                </div>
              </CardHeader>
              {/* Text Container */}
              <CardContent className="w-full p-4">
                <div>
                  <CardDescription>
                    {news?.published_date.split("T")[0]}
                  </CardDescription>
                  <CardTitle className="mt-2 line-clamp-2 text-2xl">
                    {news?.title}
                  </CardTitle>
                </div>
                <div className="mt-3">
                  <Image
                    src={news?.source_image}
                    alt={news?.source}
                    width={600}
                    height={20}
                    className="rounded w-24 h-10"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TransferNews;
