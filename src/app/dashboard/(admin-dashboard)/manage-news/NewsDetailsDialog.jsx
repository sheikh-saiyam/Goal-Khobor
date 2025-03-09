import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const NewsDetailsDialog = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1 text-gray-700 bg-gray-100 border cursor-pointer hover:bg-gray-300 duration-300 p-2 rounded">
          <FaRegEye size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[80%] max-w-4xl max-h-[80vh] overflow-y-auto p-6">
        <DialogHeader>
          <p className="text-gray-700 text-base mt-2">
            Published on: {new Date(news.published_date).toLocaleDateString()}
          </p>
          <DialogTitle className="text-lg font-bold">{news.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={news.image}
            alt={news.title}
            width={500}
            height={300}
            className="w-full rounded-lg"
            placeholder="blur"
            blurDataURL={
              "https://img.freepik.com/free-photo/white-background_23-2147730801.jpg"
            }
          />
          <p className="text-gray-700 mt-4 text-sm whitespace-pre-line">
            {expanded
              ? news.description
              : news.description.slice(0, 300) + "..."}
            {!expanded && news.description.length > 300 && (
              <button
                onClick={() => setExpanded(true)}
                className="text-gray-900 ml-1 underline"
              >
                Read More
              </button>
            )}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {news.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDetailsDialog;
