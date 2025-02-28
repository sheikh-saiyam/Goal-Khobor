import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "./../../../components/container/MainContainer";
import AdvertisementsCard from "./../../../components/cards/AdvertisementsCard";
import dbConnect, { collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { RankingTitle } from "@/components/cards/TitleNews";

const PowerRankingsDetails = async ({ params }) => {
  const { _id } = await params;
  const rankingsCollection = await dbConnect(collections.rankingsCollection);
  // Get power rankings from db --->
  const power_rankings = await rankingsCollection.find().toArray();
  // Get ranking_details --->
  const ranking_details = await rankingsCollection.findOne({
    _id: new ObjectId(_id),
  });

  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Ranking_Details Container */}
        <div className="w-full md:w-8/12 lg:w-9/12">
          {/* Image */}
          <div>
            <Image
              src={ranking_details.image}
              alt={ranking_details.title}
              width={1000}
              height={400}
              className="max-h-[400px] w-full"
            />
          </div>
          {/* Title & Description */}
          <div className="mt-6">
            <h1 className="text-black tracking-wider text-2xl md:text-3xl lg:text-4xl font-semibold">
              {ranking_details.title}
            </h1>
            <h3 className="mt-4 text-[#444] tracking-wider text-xl whitespace-pre-line pr-4">
              {ranking_details.description}
            </h3>
          </div>
          {/* Rankings */}
          <div className="mt-6">
            {ranking_details.rankings.map((ranking, idx) => (
              <div key={idx} className="pb-6">
                <h1 className="text-2xl font-semibold tracking-wide text-[#3a3a3a]">
                  <span className="font-extrabold text-black">
                    {ranking.rank}.
                  </span>{" "}
                  {ranking.title}
                </h1>
                <div className="mt-4">
                  <Image
                    src={ranking.image}
                    alt={ranking.title}
                    width={1000}
                    height={400}
                    className="max-h-[300px] w-full lg:w-2/3"
                  />
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mt-4 text-[#444] tracking-wider text-xl whitespace-pre-line">
                    {ranking.description}
                  </h3>
                </div>
              </div>
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
                  238
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
                <h1 className="font-bold text-[#444] tracking-wide mt-1">28</h1>
              </div>
            </div>
            {/* Publisher Info */}
            <div className="mt-4 flex items-center gap-2">
              <div>
                <Image
                  src={ranking_details.publisher_image}
                  alt={ranking_details.publisher}
                  width={100}
                  height={100}
                  className="w-24 p-1 h-14 rounded border border-black"
                />
              </div>
              <div>
                <h1 className="font-bold text-[#444] tracking-wide">
                  {ranking_details.publisher}
                </h1>
                <h2 className="mt-[2px] text-sm font-medium tracking-wide text-[#444]">
                  {ranking_details.published_date.split("T")[0]}
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Ads & POWER RANKINGS Container */}
        <div className="w-full md:w-4/12 lg:w-3/12 h-fit">
          {/* POWER RANKINGS */}
          <RankingTitle heading={"RANKINGS"} item={power_rankings} />
          {/* Ads */}
          <AdvertisementsCard />
        </div>
      </div>
    </MainContainer>
  );
};

export default PowerRankingsDetails;
