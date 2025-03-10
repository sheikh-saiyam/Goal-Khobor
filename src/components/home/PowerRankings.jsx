import Link from "next/link";
import Header from "@/components/Shared/Section/Header";
import Image from "next/image";
import dbConnect, { collections } from "@/lib/dbConnect";

const PowerRankings = async () => {
  // Get power_rankings from db --->
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  const rankings = await rankingsCollection.find().sort({ published_date: -1 }).toArray();

  return (
    <div>
      <Header heading={"Power Rankings"} />
      {/* Rankings Container */}
      <div className="flex flex-col gap-y-4">
        {rankings.map((ranking) => (
          <Link
            href={`/rankings/${ranking._id}`}
            key={ranking._id}
            prefetch={true}
          >
            <div className="border-2 hover:border-black duration-300">
              {/* Image Container */}
              <div>
                <Image
                  src={ranking.image}
                  alt={ranking.title}
                  width={600}
                  height={200}
                  className="min-h-[170px] w-full"
                />
              </div>
              {/* Text Container */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#444]">
                  {ranking.published_date}
                </h3>
                <h1 className="mt-1 text-xl font-semibold tracking-wider">
                  {ranking.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PowerRankings;
