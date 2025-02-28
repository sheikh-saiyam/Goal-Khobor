import Image from "next/image";
import Link from "next/link";

const LongImageNewsCard = ({ news }) => {
  const { _id, image, title, published_date } = news || {};
  return (
    <Link href={`/news/${_id}`} prefetch={true}>
      <div className="h-full">
        <div className="relative h-full overflow-hidden shadow-lg group">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={700}
            height={900}
            className="object-cover group-hover:scale-110 transition-transform duration-300 sm:min-h-full min-h-[100px]"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
              <span className="font-bold">{published_date.split("T")[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LongImageNewsCard;
