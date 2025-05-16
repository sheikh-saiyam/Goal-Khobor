import Link from "next/link";
import Header from "@/components/Shared/Section/Header";
import Image from "next/image";
import dbConnect, { collections } from "@/lib/dbConnect";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PowerRankings = async () => {
  // Get power_rankings from db --->
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  const rankings = await rankingsCollection
    .find()
    .sort({ published_date: -1 })
    .toArray();

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
            <Card className="hover:border-gray-500 duration-500 overflow-hidden">
              {/* Image Container */}
              <CardHeader className="p-0 relative">
                <Image
                  src={ranking.image}
                  alt={ranking.title}
                  width={600}
                  height={200}
                  className="min-h-[170px] max-h-[170px] w-full object-cover"
                />
                <div className="absolute top-0 left-2">
                  {" "}
                  <Badge variant="secondary">
                    {ranking?.rankings.length} Rankings
                  </Badge>
                </div>
              </CardHeader>
              {/* Text Container */}
              <CardContent className="p-4">
                  <div className="flex gap-1 items-center flex-wrap">
  {ranking?.rankings.map((rank) => (
    <Badge key={rank.rank} variant="secondary" className={`${rank.title.length > 10 && "truncate"}`}>{rank.title}</Badge>
  ))}
</div><CardDescription>
                  {ranking.published_date.split("T")[0]}
                </CardDescription>
                <CardTitle className="text-xl">{ranking.title}</CardTitle>
             

              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PowerRankings;
