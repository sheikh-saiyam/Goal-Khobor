import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeaturesNewsCard = ({ news }) => {
  const { _id, image, title, published_date, tags, description } = news || {};
  
  return (
    <Link href={`/news/${_id}`} prefetch={true}>
      <Card className="flex flex-col lg:flex-row items-center gap-2 hover:border-gray-500 rounded-none duration-500 overflow-hidden">
        {/* Image Container */}
        <CardHeader className="p-0 relative w-full lg:w-7/12">
          <Image
            src={image}
            alt={title}
            width={600}
            height={200}
            className="h-full min-h-[200px] w-full object-cover"
          />
                    <div className="absolute top-0 left-2">
            <Badge variant="secondary">
              {tags[Math.floor(Math.random() * tags.length)]}
            </Badge>
          </div>
        </CardHeader>
        {/* Text Container */}
        <CardContent className="w-full p-4">
          <div>
            <CardDescription>
              {published_date.split("T")[0]}
            </CardDescription>
            <CardTitle className="mt-2 text-xl line-clamp-2">
              {title}
            </CardTitle>
               <CardDescription className="mt-1 text-base">
              {description.length > 100
                ? description.replace(/●/g, " ").slice(0, 100) + "..."
                : description.replace(/●/g, " ")}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturesNewsCard;
