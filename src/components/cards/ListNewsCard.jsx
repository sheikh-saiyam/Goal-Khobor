import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ListNewsCard = ({ news }) => {
  const { _id, image, title, published_date, tags } = news || {};
  return (
    <Card className="flex flex-col lg:flex-row items-center gap-x-2 hover:border-gray-500 duration-500 overflow-hidden">
      {/* Image Container */}
      <CardHeader className="p-0 relative w-full lg:w-6/12 h-full">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={200}
          className="min-h-[240px] object-cover h-full w-full"
        />
                <div className="absolute top-0 left-2">
            <Badge variant="secondary">{tags[Math.floor(Math.random() * tags.length)]}</Badge>
          </div>
      </CardHeader>
      {/* Text Container */}
      <CardContent className="w-full lg:w-6/12 p-3">
        <div>
          <CardDescription>
            {published_date}
          </CardDescription>
          <CardTitle className="mt-1 text-lg line-clamp-2">
            {title}
          </CardTitle>
          <Link href={`/news/${_id}`} prefetch={true}>
            <Button className="mt-3" size="md" variant="outline">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListNewsCard;
