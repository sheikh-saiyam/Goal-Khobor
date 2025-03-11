import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const RankingDetailsDialog = ({ ranking }) => {
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
            Published on:{" "}
            {new Date(ranking.published_date).toLocaleDateString()}
          </p>
          <DialogTitle className="text-lg font-bold">
            {ranking.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={ranking.image}
            alt={ranking.title}
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
              ? ranking.description
              : ranking.description.slice(0, 300) + "..."}
            {!expanded && ranking.description.length > 300 && (
              <button
                onClick={() => setExpanded(true)}
                className="text-gray-900 ml-1 underline"
              >
                Read More
              </button>
            )}
          </p>
        </div>
        <div className="mt-6">
          {ranking.rankings.map((item, idx) => (
            <div key={idx} className="pb-6">
              <h1 className="text-2xl font-semibold tracking-wide text-[#3a3a3a]">
                <span className="font-extrabold text-black">{item.rank}.</span>
                {item.title}
              </h1>
              <div className="mt-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={400}
                  className="max-h-[300px] w-full lg:w-2/3"
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="mt-4 text-[#444] tracking-wider text-xl whitespace-pre-line">
                  {expanded
                    ? item.description
                    : item.description.slice(0, 100) + "..."}
                  {!expanded && item.description.length > 100 && (
                    <button
                      onClick={() => setExpanded(true)}
                      className="text-gray-900 ml-1 underline"
                    >
                      Read More
                    </button>
                  )}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RankingDetailsDialog;
