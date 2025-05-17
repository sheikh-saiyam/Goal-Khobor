import AdvertisementsCard from "@/components/cards/AdvertisementsCard";
import { TransferTitle } from "@/components/cards/TitleNews";
import MainContainer from "@/components/container/MainContainer";
import { Badge } from "@/components/ui/badge";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import dbConnect, { collections } from "@/lib/dbConnect";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { ObjectId } from "mongodb";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bookmark, Calendar, Eye, Share2, Slash, Tag } from "lucide-react";



const TransferDetails = async ({ params }) => {
  const { _id } = await params;
  const transfersCollection = await dbConnect(collections.transfersCollection);

  // Get transfers news from db --->
  const transfers = await transfersCollection
    .find()
    .sort({ published_date: -1 })
    .limit(6)
    .toArray();

  // Get transfer_details --->
  const transfer_details = await transfersCollection.findOne({
    _id: new ObjectId(_id),
  });

  // Format date
  const formattedDate = new Date(
    transfer_details?.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <MainContainer>
      <div className="mt-6 flex flex-col md:flex-row gap-6 relative">
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
                <BreadcrumbLink href="/transfers">Transfers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{transfer_details?._id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Transfer Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden mt-4 mb-6">
            <Image
              src={transfer_details.image || "/placeholder.svg"}
              alt={transfer_details.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            {/* Title & Date, Views, Publisher Info */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
                {transfer_details.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate || "N/A"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{transfer_details.views || 0} views</span>
                </div>
              </div>

              {/* Publisher Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={transfer_details.source_image || "/placeholder.svg"}
                    alt={transfer_details.source}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {transfer_details.source}
                  </p>
                  <p className="text-sm text-gray-500">Sports Journalist</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                {transfer_details.description}
              </h3>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {transfer_details.tags.map((tag, idx) => (
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

            {/* Engagement */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{transfer_details?.likes || 0}</span>
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
        {/* Ads & Transfer Container */}
        <div className="w-full md:5/12 lg:w-3/12 md:sticky top-24 h-fit">
          {/* Transfers */}
          <TransferTitle heading={"TRANSFERS NEWS"} item={transfers} />
          {/* Ads */}
          <AdvertisementsCard />
        </div>
      </div>
    </MainContainer>
  );
};

export default TransferDetails;
