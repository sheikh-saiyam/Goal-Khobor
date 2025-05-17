import Image from "next/image";
import Link from "next/link";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import MainContainer from "./../../../components/container/MainContainer";
import { Button } from "../../../components/ui/button";
import AdvertisementsCard from "@/components/cards/AdvertisementsCard";
import dbConnect, { collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NewsTitle } from "@/components/cards/TitleNews";
import { Slash, Tag, Calendar, Eye } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp } from "lucide-react";
import { ThumbsDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Share2, Bookmark } from "lucide-react";

const NewsDetails = async ({ params }) => {
  const newsCollection = await dbConnect(collections.newsCollection);

  // Get latest-news from db --->
  const latest_news = await newsCollection
    .find()
    .sort({ published_date: -1 })
    .limit(6)
    .toArray();

  // Get news_details from db --->
  const { _id } = await params;
  const news_details = await newsCollection.findOne({ _id: new ObjectId(_id) });

  // Format date
  const formattedDate = new Date(
    news_details?.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format description
  const formatedDescription = news_details?.description
    .split(/\.\s+/)
    .filter((p) => p.trim().length > 0);

  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* News Details Container */}
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
                <BreadcrumbLink href="/news">News</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{news_details?._id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* News Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden mt-4 mb-6">
            <Image
              src={news_details.image || "/placeholder.svg"}
              alt={news_details.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* News Details */}
          <div className="mt-6">
            {/* Title & Date, Views, Publisher Info */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
                {news_details.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate || "N/A"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{news_details.views || 0} views</span>
                </div>
              </div>

              {/* Publisher Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={news_details.publisher_image || "/placeholder.svg"}
                    alt={news_details.publisher}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {news_details.publisher}
                  </p>
                  <p className="text-sm text-gray-500">Sports Journalist</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              {formatedDescription.map((description, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {description}.
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {news_details.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    # {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="mt-8 mb-4" />

            {/* Engagement */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{news_details?.likes || 0}</span>
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
        </div>

        {/* Ads & Latest News Container */}
        <div className="w-full md:w-4/12 lg:w-3/12 md:sticky top-24 h-fit">
          {/* Latest News */}
          <NewsTitle heading={"LATEST NEWS"} item={latest_news} />
          {/* Ads */}
          <AdvertisementsCard />
        </div>
      </div>
    </MainContainer>
  );
};

export default NewsDetails;
