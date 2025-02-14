import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const latest_news = [
    {
      id: 1,
      title:
        "Premier League Predictions, odds and best bets: Here comes the Liverpool wobble? Can Arsenal take advantage?",
      image:
        "https://e0.365dm.com/24/08/1600x900/skysports-premier-league-pl-predictions_6663793.jpg?20240823090502",
      description:
        "As the Premier League title race heats up, Liverpool faces a potential wobble that could shake their grip at the top. With crucial matches ahead, can the Reds maintain their momentum, or will their rivals seize the opportunity? Arsenal, in red-hot form, are poised to capitalize on any slip-ups, while Manchester City remains a lurking threat. Explore the latest predictions, odds, and best bets as the drama unfolds in one of the most exciting title races in recent history. Will Liverpool hold firm, or is the door opening for the Gunners to surge ahead?",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Premier League", "Liverpool", "Arsenal"],
      views: 3000,
      category: "Sports",
      likes: 450,
      published_date: "2025-02-15",
    },
    {
      id: 2,
      title: "Transfers LIVE: Neymar eyes Barca return despite Santos reunion",
      image:
        "https://assets.goal.com/images/v3/getty-630234776/crop/MM5DGMJQGQ5DCNZUGY5G433XMU5DENRSHIYTANI=/GettyImages-630234776.jpg?auto=webp&format=pjpg&width=1200&quality=60",
      description:
        "Neymar is reportedly dreaming of a 'Last Dance' in Europe, with the Brazilian superstar eager to secure himself a return to Barcelona.According to Cadena SER, Neymar is desperate to prove his worth to Barcelona and earn a second spell at Camp Nou. His switch to Santos is intended to show top clubs in Europe that he still has what it takes to compete at the highest level – before going on to grace the World Cup finals in 2026.",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Laliga", "Neymar Jr", "Barcelona"],
      views: 3000,
      category: "Sports",
      likes: 450,
      published_date: "2025-02-15",
    },
    {
      id: 3,
      title:
        "Ancelotti dismisses concerns over Vinicius' future amid Saudi links",
      image:
        "https://assets.goal.com/images/v3/blt854450b551dd00fe/vinicius-junior.jpeg?auto=webp&format=pjpg&width=1200&quality=60",
      description:
        "Carlo Ancelotti has made it clear that he has no concerns about Vinicius Junior being tempted by a lucrative move to Saudi Arabia. The winger’s current deal runs until June 2027, but he has confirmed discussions are underway for an extension.'I am not concerned because he is happy (here),' the Real Madrid coach said. 'I see that he is extremely motivated.'",
      publisher: "Taza Khobor",
      publisher_image:
        "https://i.ibb.co.com/nsjkGYrN/Leonardo-Phoenix-10-Create-a-minimalistic-blackandwhite-logo-f-2-1-removebg-preview-Copy.png",
      tags: ["football", "Premier League", "Liverpool", "Arsenal"],
      views: 3000,
      category: "Sports",
      likes: 450,
      published_date: "2025-02-15",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-7/12 lg:w-9/12">
        {latest_news.slice(0, 1).map((news) => (
          <div key={news?.id} className="border cursor-pointer duration-300">
            <Link href={`/news/${news?.id}`}>
              <div>
                <Image
                  className="w-full h-[350px]"
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
      <div className="hidden w-full md:w-5/12 lg:w-3/12 md:flex lg:flex gap-6 flex-col">
        {latest_news.slice(1).map((news) => (
          <div key={news?.id} className="border cursor-pointer duration-300">
            <Link href={`/news/${news?.id}`}>
              <div>
                <Image
                  className="w-full h-[110px]"
                  src={news?.image}
                  alt={news?.title}
                  width={1000}
                  height={170}
                />
              </div>
              <div className="p-4">
                <h1 className="text-black tracking-wider text-lg font-semibold">
                  {news?.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
