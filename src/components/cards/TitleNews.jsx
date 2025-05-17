import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const NewsTitle = ({ heading, item }) => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="pb-1 w-full px-4">
        {item?.map((news, index) => (
          <Link
            key={index}
            prefetch={true}
            href={`/news/${news?._id}`}
            className="whitespace-pre-line hover:underline duration-500 cursor-pointer underline-offset-2"
          >
            <CardDescription className="pb-3 mb-4 border-b">
              <span className="line-clamp-2">{news?.title}</span>
            </CardDescription>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export const TransferTitle = ({ heading, item }) => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="pb-1 w-full px-4">
        {item?.map((news, index) => (
          <Link
            key={index}
            prefetch={true}
            href={`/transfers/${news?._id}`}
            className="whitespace-pre-line hover:underline duration-500 cursor-pointer underline-offset-2"
          >
            <CardDescription className="pb-3 mb-4 border-b">
              <span className="line-clamp-2">{news?.title}</span>
            </CardDescription>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export const RankingTitle = ({ heading, item }) => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="pb-1 w-full px-4">
        {item?.map((news, index) => (
          <Link
            key={index}
            prefetch={true}
            href={`/rankings/${news?._id}`}
            className="whitespace-pre-line hover:underline duration-500 cursor-pointer underline-offset-2"
          >
            <CardDescription className="pb-3 mb-4 border-b">
              <span className="line-clamp-2">{news?.title}</span>
            </CardDescription>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
