import Link from "next/link";

const TitleNews = ({ heading, item }) => {
  return (
    <div className="border rounded px-4">
      <h1 className="text-black tracking-wider text-2xl mt-3 font-bold">
        {heading}
      </h1>
      <div className="relative mt-3 w-full">
        {item?.map((news, index) => (
          <div key={index} className="pb-3 mb-4 border-b">
            <Link
              href={`/news/${news?._id}`}
              className="whitespace-pre-line hover:underline duration-300 cursor-pointer underline-offset-2"
            >
              {news?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleNews;
