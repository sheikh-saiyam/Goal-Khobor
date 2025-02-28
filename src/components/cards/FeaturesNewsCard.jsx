import Image from "next/image";
import Link from "next/link";

const FeaturesNewsCard = ({ news }) => {
  const { _id, image, title, published_date } = news || {};
  return (
    <Link href={`/news/${_id}`} key={_id} prefetch={true}>
      <div className="flex flex-col lg:flex-row items-center gap-2 border-2 hover:border-black duration-300">
        {/* Image Container */}
        <div className="w-full lg:w-7/12">
          <Image
            src={image}
            alt={title}
            width={600}
            height={200}
            className="h-full min-h-[200px] w-full object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="w-full p-2">
          <div>
            <h3 className="text-lg font-medium text-[#444]">
              {published_date}
            </h3>
            <h1 className="mt-2 text-xl font-semibold tracking-wider">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturesNewsCard;
