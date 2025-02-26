import Link from "next/link";
import Header from "@/components/Shared/Section/Header";
import Image from "next/image";

const PowerRankings = async () => {
  // Get All Rankings --->
  const response = await fetch(`${process.env.NEXT_API_URL}/api/rankings`);
  const rankings = await response.json();
  return (
    <div>
      <Header heading={"Power Rankings"} />
      {/* Rankings Container */}
      <div className="flex flex-col gap-y-4">
        {rankings.map((ranking) => (
          <Link href={`/rankings/${ranking._id}`} key={ranking._id}>
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
