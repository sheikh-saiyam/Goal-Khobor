import Image from "next/image";
import Header from "../shared/Section/Header.jsx";
import Link from "next/link";

const TrendingNews = async () => {
  const trending_news = [
    {
      id: 1,
      title: "Real Madrid's Stunning Comeback in Champions League",
      image:
        "https://i.ytimg.com/vi/3OYDtUv_sno/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvTnD6jnD323dNcJ82ibJem6D7QA",
      description:
        "Real Madrid secures a historic victory with two last-minute goals against Bayern Munich.",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Champions League", "Real Madrid"],
      views: 3000,
      category: "Sports",
      likes: 450,
      published_date: "2025-02-14",
    },
    {
      id: 2,
      title: "Bellingham strikes late for Real Madrid in 3-2 win at Man City ",
      image:
        "https://www.aljazeera.com/wp-content/uploads/2025/02/2025-02-11T215636Z_942639941_UP1EL2B1OYAX4_RTRMADP_3_SOCCER-CHAMPIONS-MCI-RMA-REPORT-1739311062.jpg?resize=770%2C513&quality=80",
      description:
        "Jude Bellingham struck in stoppage time to give Real Madrid a 3-2 victory in its Champions League playoff against Manchester City on Tuesday.",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Champions League", "Real Madrid"],
      views: 3000,
      category: "Sports",
      likes: 450,
      published_date: "2025-02-14",
    },
    {
      id: 3,
      title: "Premier League Epic Title Race Heats Up",
      image:
        "https://worldinsport.com/wp-content/uploads/2024/04/Premier-League-Title-Race-2024.jpg",
      description:
        "The Premier League title race is tighter than ever as teams battle for the top spot.",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Premier League", "title race"],
      views: 3500,
      category: "Sports",
      likes: 600,
      published_date: "2025-02-16",
    },
  ];

  return (
    <div>
      {/* Section Header */}
      <Header heading={"Trending News"} />
      {/* Trending News */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trending_news?.map((news) => (
          <div
            key={news?.id}
            className="border hover:scale-105 cursor-pointer duration-300"
          >
            <Link href={`/news/${news?.id}`}>
              <div>
                <Image
                  className="w-full h-[200px]"
                  src={news?.image}
                  alt={news?.title}
                  width={1000}
                  height={150}
                />
              </div>
              <div className="p-4">
                <h1 className="text-black tracking-wider text-lg font-semibold">
                  {news?.title}
                </h1>
                <div className="flex items-center gap-4 justify-end">
                  <h1 className="text-black tracking-wider text-sm font-medium">
                    {news?.publisher}
                  </h1>
                  <Image
                    src={news?.publisher_image}
                    alt={news?.publisher}
                    width={100}
                    height={100}
                    className="rounded-full object-cover w-10 h-10 border border-black"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
