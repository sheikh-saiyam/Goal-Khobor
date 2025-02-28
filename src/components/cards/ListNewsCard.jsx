import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ListNewsCard = ({ news }) => {
  const { _id, image, title, published_date } = news || {};
  return (
    <div className="flex flex-col lg:flex-row items-center gap-x-4 border-2 hover:border-black duration-300">
      {/* Image Container */}
      <div className="w-full lg:w-7/12 h-full">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={200}
          className="min-h-[240px] object-cover h-full w-full"
        />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-5/12 p-3">
        <div>
          <h3 className="text-base font-medium text-[#444]">
            {published_date}
          </h3>
          <h1 className="mt-1 text-xl lg:text-lg font-semibold tracking-wider">
            {title}
          </h1>
          <Link href={`/news/${_id}`} prefetch={true}>
            <Button className="mt-3" variant="outline">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListNewsCard;
