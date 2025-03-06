import Image from "next/image";
import Link from "next/link";

const TransferNewsCard = ({ news }) => {
  const {
    _id,
    image,
    title,
    description,
    published_date,
    source_image,
    source,
  } = news || {};
  return (
    <Link href={`/transfers/${_id}`} key={_id} prefetch={true}>
      <div className="mb-6 flex flex-col lg:flex-row items-center gap-x-4 border-2 hover:border-black duration-300">
        {/* Image Container */}
        <div className="w-full lg:w-6/12 h-full">
          <Image
            src={image}
            alt={title}
            width={600}
            height={200}
            className="object-cover w-full h-full max-h-[300px] lg:min-h-[250px]"
          />
        </div>
        {/* Text Container */}
        <div className="w-full p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-[#444]">
              {published_date.split("T")[0]}
            </h3>
            <h1 className="mt-2 text-2xl md:text-2xl font-semibold tracking-wider">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {description.length > 200
                ? description.replace(/●/g, ".").slice(0, 200) + "..."
                : description.replace(/●/g, ".")}
            </p>{" "}
            <div className="mt-3">
              <Image
                src={source_image}
                alt={source}
                width={600}
                height={20}
                className="rounded w-24 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TransferNewsCard;
