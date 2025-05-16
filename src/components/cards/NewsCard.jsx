import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }) => {
  const { _id, image, title, published_date, tags, publisher, views } =
    news || {};
    
  return (
    <Card className="pt-0 rounded-lg hover:scale-105 cursor-pointer duration-300">
      <Link href={`/news/${_id}`} prefetch={true}>
        <CardHeader className="p-0 relative rounded-t-lg">
          <Image
            className="w-full h-[200px] rounded-t-lg"
            src={image}
            alt={title}
            width={1000}
            height={150}
          />
          <div className="absolute top-0 left-2">
            <Badge variant="secondary">{tags[0]}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardDescription>{published_date.split("T")[0]}</CardDescription>
          <CardTitle className={`text-lg line-clamp-2`}>{title}</CardTitle>
        </CardContent>
        <CardFooter className="flex items-center gap-4 px-4 pb-4 justify-between">
          <CardDescription>{publisher}</CardDescription>
          <CardDescription className="flex items-center gap-1 font-medium">
            <Eye size={16} />
            {views}
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default NewsCard;
