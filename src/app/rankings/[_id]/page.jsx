import { RankingTitle } from "@/components/cards/TitleNews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import dbConnect, { collections } from "@/lib/dbConnect";
import { Bookmark, Calendar, Eye, Share2, Slash, ThumbsDown, ThumbsUp } from "lucide-react";
import AdvertisementsCard from "./../../../components/cards/AdvertisementsCard";
import MainContainer from "./../../../components/container/MainContainer";
import { ObjectId } from "mongodb";
import Image from "next/image";

const PowerRankingsDetails = async ({ params }) => {
  const { _id } = await params;
  const rankingsCollection = await dbConnect(collections.rankingsCollection);

  // Get power rankings from db --->
  const power_rankings = await rankingsCollection.find().toArray();

  // Get ranking_details --->
  const ranking_details = await rankingsCollection.findOne({
    _id: new ObjectId(_id),
  });

  // Format date
  const formattedDate = new Date(
    ranking_details?.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Ranking_Details Container */}
        <div className="-mt-9 w-full md:w-8/12 lg:w-9/12">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Rankings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{ranking_details?._id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Ranking Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden mt-4 mb-6">
            <Image
              src={ranking_details.image || "/placeholder.svg"}
              alt={ranking_details.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Title & Description */}
          <div className="mt-6">
            {/* Title & Date, Views, Publisher Info */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
                {ranking_details.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate || "N/A"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{ranking_details.views || 0} views</span>
                </div>
              </div>

              {/* Publisher Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={ranking_details.publisher_image || "/placeholder.svg"}
                    alt={ranking_details.publisher}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {ranking_details.publisher}
                  </p>
                  <p className="text-sm text-gray-500">Sports Journalist</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                {ranking_details.description}
              </h3>
            </div>
          </div>

          {/* Rankings */}
          <div className="mt-6">
            {ranking_details.rankings.map((ranking, idx) => (
              <div key={idx} className="pb-6">
                <h1 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
                  <span className="font-extrabold text-black">
                    {ranking.rank}.
                  </span>{" "}
                  {ranking.title}
                </h1>
                <div className="my-4 rounded-xl overflow-hidden">
                  <Image
                    src={ranking.image}
                    alt={ranking.title}
                    width={1000}
                    height={400}
                    className="max-h-[300px] object-cover w-full lg:w-2/3 rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-2/3 prose prose-lg max-w-none">

                  <h3 className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {ranking_details.description}
                  </h3>

                </div>
              </div>
            ))}
          </div>

          <Separator className="mt-8 mb-4" />

          {/* Engagement */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5" />
                <span>{ranking_details?.likes || 0}</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ThumbsDown className="h-5 w-5" />
                <span>0</span>
              </Button>
            </div>
            {/* share & bookmark */}
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm">
                      <Share2 className="w-5 h-5 mr-1" />
                      <span className="mt-0.5"> Share </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share this news</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm">
                      <Bookmark className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bookmark for later</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
        
        {/* Ads & POWER RANKINGS Container */}
        <div className="w-full md:w-4/12 lg:w-3/12 md:sticky top-24 h-fit">
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
