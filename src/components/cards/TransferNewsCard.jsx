import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    tags,
  } = news || {};

  return (
    <Link href={`/transfers/${_id}`} key={_id} prefetch={true}>
      <Card className="mb-6 flex flex-col lg:flex-row items-center gap-x-4 hover:border-gray-500 duration-500 rounded-xl overflow-hidden">
        {/* Image Container */}
        <CardHeader className="relative p-0 w-full lg:w-6/12 h-full">
          <Image
            src={image}
            alt={title}
            width={600}
            height={200}
            className="object-cover w-full h-full max-h-[300px] lg:min-h-[250px]"
          />
          <div className="absolute top-0 left-2">
            <Badge variant="secondary">
              {tags[Math.floor(Math.random() * tags.length)]}
            </Badge>
          </div>
        </CardHeader>
        {/* Text Container */}
        <CardContent className="w-full p-4 flex flex-col justify-between">
          <div>
            <CardDescription className="text-lg">
              {published_date.split("T")[0]}
            </CardDescription>
            <CardTitle className="mt-2 text-2xl line-clamp-2 font-semibold tracking-wider">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 text-sm">
              {description.length > 200
                ? description.replace(/●/g, " ").slice(0, 200) + "..."
                : description.replace(/●/g, " ")}
            </CardDescription>{" "}
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
        </CardContent>
      </Card>
    </Link>
  );
};

export default TransferNewsCard;
