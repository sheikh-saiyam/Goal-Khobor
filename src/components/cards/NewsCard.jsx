import Image from "next/image";
import Link from "next/link";
import { GrView } from "react-icons/gr";

const NewsCard = ({ news }) => {
  const { _id, image, title, published_date, publisher, views } = news || {};
  return (
    <div className="border hover:scale-105 cursor-pointer duration-300">
      <Link href={`/news/${_id}`} prefetch={true}>
        <div>
          <Image
            className="w-full h-[200px]"
            src={image}
            alt={title}
            width={1000}
            height={150}
          />
        </div>
        <div className="p-4">
          <h3>{published_date.split("T")[0]}</h3>
          <h1 className="mt-1 text-black tracking-wider text-lg font-semibold">
            {title}
          </h1>
          <div className="mt-2 flex items-center gap-4 justify-end">
            <h1 className="text-black mt-[2px] tracking-wider text-sm font-medium">
              {publisher}
            </h1>
            <strong>||</strong>
            <h1 className="flex items-center gap-2 font-medium">
              <GrView size={20} />
              <span className="mt-[1px]">{views}</span>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
